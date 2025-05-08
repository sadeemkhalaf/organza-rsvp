import { GuestResponse } from '@/models/enum';
import { utils, writeFile } from 'xlsx';

const exportToExcel = (tableId: string): void => {
    const table = document.getElementById(tableId) as HTMLTableElement;
    if (!table) {
      console.error(`Table with id ${tableId} not found`);
      return;
    }
  
    const worksheet = utils.table_to_sheet(table, { raw: true });
    const range = utils.decode_range(worksheet['!ref']!);
  
    const rsvpResponseColIndex = 2; // Adjust this if RSVP response is in another column
    for (let R = range.s.r + 1; R <= range.e.r; ++R) {
      const cellRef = utils.encode_cell({ r: R, c: rsvpResponseColIndex });
      const value = worksheet[cellRef]?.v?.toLowerCase();
  
      if (value === GuestResponse.ACCEPTED) {
        worksheet[cellRef].s = { fill: { fgColor: { rgb: 'C6EFCE' } } }; // Green
      } else if (value === GuestResponse.DECLINED) {
        worksheet[cellRef].s = { fill: { fgColor: { rgb: 'FFC7CE' } } }; // Red
      }
    }
  
    // Detect & remove unwanted columns like "Actions"
    const columnsToDelete: number[] = [];
    for (let c = range.s.c; c <= range.e.c; ++c) {
      const cell = worksheet[utils.encode_cell({ r: range.s.r, c })];
      if (
        cell &&
        typeof cell.v === 'string' &&
        (cell.v.toLowerCase().includes('action') ||
          cell.v.toLowerCase().includes('delete') ||
          cell.v.toLowerCase().includes('generate'))
      ) {
        columnsToDelete.push(c);
      }
    }
  
    // Remove columns in reverse order
    columnsToDelete.sort((a, b) => b - a).forEach((colIndex) => {
      for (let r = range.s.r; r <= range.e.r; ++r) {
        for (let c = colIndex; c < range.e.c; ++c) {
          worksheet[utils.encode_cell({ r, c })] =
            worksheet[utils.encode_cell({ r, c: c + 1 })];
        }
        delete worksheet[utils.encode_cell({ r, c: range.e.c })];
      }
      range.e.c--;
    });
  
    worksheet['!ref'] = utils.encode_range(range);
  
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'guests');
    writeFile(workbook, `accepted-rsvp-list.xlsx`);
  };

export default exportToExcel;

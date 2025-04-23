import { utils, writeFile } from 'xlsx';

const exportToExcel = (tableId: string): void => {
    const table = document.getElementById(tableId) as HTMLTableElement;
    if (!table) {
        console.error(`Table with id ${tableId} not found`);
        return;
    }

    const worksheet = utils.table_to_sheet(table, { raw: true });
    const range = utils.decode_range(worksheet['!ref']!);

    const headers = worksheet[utils.encode_cell({ r: 0, c: 2 })]?.v; // Assuming headers are in row 1    

    if (!headers || !headers.includes('Response')) {
        console.error('Column "Response" not found in the table');
        return;
    }

    const rsvpResponseColIndex = 2; // Assuming 'rsvpResponse' column is at index 2
    for (let R = worksheet['!range']?.s.r; R <= worksheet['!range']?.e.r; ++R) {
        const cellRef = utils.encode_cell({ r: R, c: rsvpResponseColIndex });
        const rsvpResponseValue = worksheet[cellRef]?.v?.toLowerCase();
    
        if (rsvpResponseValue === 'yes') {
          worksheet[cellRef].s = { bgc: { rgb: 'FF00FF00' } }; // Green background for 'Yes'
        } else if (rsvpResponseValue === 'no') {
          worksheet[cellRef].s = { bgc: { rgb: 'FFFF0000' } }; // Red background for 'No'
        }
      }

    const columnsToDelete: number[] = [];

    // Identify columns to delete based on the first row
    for (let colIndex = range.s.c; colIndex <= range.e.c; ++colIndex) {
        const firstCell = worksheet[utils.encode_cell({ r: range.s.r, c: colIndex })];
        if (firstCell && (firstCell.v.toLowerCase().includes('generate') || firstCell.v.toLowerCase().includes('delete'))) {
            columnsToDelete.push(colIndex);
        }
    }

    // Sort columns to delete in descending order to avoid shifting issues
    columnsToDelete.sort((a, b) => b - a);

    columnsToDelete.forEach((colIndex) => {
        for (let rowIndex = range.s.r; rowIndex <= range.e.r; ++rowIndex) {
            delete worksheet[utils.encode_cell({ r: rowIndex, c: colIndex })];
        }

        // Shift remaining cells left to fill the gap
        for (let rowIndex = range.s.r; rowIndex <= range.e.r; ++rowIndex) {
            for (let shiftIndex = colIndex; shiftIndex < range.e.c; ++shiftIndex) {
                worksheet[utils.encode_cell({ r: rowIndex, c: shiftIndex })] = worksheet[utils.encode_cell({ r: rowIndex, c: shiftIndex + 1 })];
            }
            delete worksheet[utils.encode_cell({ r: rowIndex, c: range.e.c })];
        }

        // Adjust the range to exclude the deleted column
        range.e.c--;
    });

    worksheet['!ref'] = utils.encode_range(range);

    // TODO: uncomment when done
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'guests');
    writeFile(workbook, `${'accepted rsvp list'.toLowerCase().replace(/ /g, "-")}.xlsx`);
};

export default exportToExcel;

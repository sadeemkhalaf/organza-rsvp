import React, { useState } from 'react';
import { GuestRow } from '@/components/atoms';
import exportToExcel from '@/lib/utils/writeExcel';
import { PlusCircleIcon, PencilIcon, FileDownIcon } from 'lucide-react';
import ExcelUpload from '../excelUpload/ExcelUpload';
import { IGuest } from '@/models/User.model';

const ActionButton = ({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactElement;
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div className="flex flex-row text-center gap-1 items-center cursor-pointer" onClick={onClick}>
      {icon}
      <div>{title}</div>
    </div>
  );
};

const GuestList: React.FC<{ eventGuests: IGuest[] | undefined }> = ({ eventGuests = [] }) => {
  const tableId = "guest-list-table";
  const [, /*refresh*/ setRefresh] = useState<boolean>(false);
  const [, /*showInvitationModal*/ setShowInvitationModal] = useState(false);
  const [sheetData, setSheetData] = useState<any[]>([]);
  const [, /*showModal*/ setShowModal] = useState(false);
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-20 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Guest List</h2>
      <div className="w-full h-full flex justify-between flex-row py-4 border-b-[0.5px] border-b-black">
        <div className="flex flex-row justify-between items-center gap-4">
          <ActionButton
            icon={<PlusCircleIcon height={18} width={18} />}
            title="Add New"
            onClick={() => setShowModal(true)}
          />
          <div className="relative">
            <ActionButton
              icon={<PencilIcon height={18} width={18} />}
              title="Update Invitation text"
              onClick={() => setShowInvitationModal(true)}
            />
          </div>
          <ActionButton
            onClick={() => exportToExcel(tableId)}
            icon={<FileDownIcon height={18} width={18} />}
            title="Export to Excel"
          />
        </div>
        <ExcelUpload setSheetData={setSheetData} sheetData={sheetData} setRefresh={setRefresh} />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 min-w-[600px]" id={tableId}>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-200 text-left">Name</th>
              <th className="p-3 border border-gray-200 text-left">Email</th>
              <th className="p-3 border border-gray-200 text-left">Response</th>
              <th className="p-3 border border-gray-200 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventGuests.map((guest) => (
              <GuestRow
                key={guest.id}
                name={guest.fullName || ''}
                email={guest.mobileNumber || ''}
                status={guest.rsvpResponse!}
              />
            ))}
            {/* Example static rows for demonstration */}
            {/* <GuestRow name="Sarah Johnson" email="sarahj@example.com" status="Confirmed" />
            <GuestRow name="Michael Chen" email="m.chen@example.com" status="Pending" /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuestList;

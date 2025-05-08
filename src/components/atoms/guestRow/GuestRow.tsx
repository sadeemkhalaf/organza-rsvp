import { GuestResponse } from "@/models/enum";
import React from "react";

interface GuestRowProps {
  name: string;
  email: string;
  status: GuestResponse;
}

const GuestRow: React.FC<GuestRowProps> = ({ name, email, status }) => (
  <tr className="border border-gray-200">
    <td className="p-3 border border-gray-200">{name}</td>
    <td className="p-3 border border-gray-200">{email}</td>
    <td
      className={`p-3 border border-gray-200 ${status === GuestResponse.ACCEPTED ? "text-green-600" : "text-yellow-600"}`}
    >
      {status}
    </td>
    <td className="p-3 border border-gray-200 text-blue-600 cursor-pointer">
      Send Invite
    </td>
  </tr>
);

export default GuestRow;

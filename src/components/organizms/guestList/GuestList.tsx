import React from "react";
import { GuestRow } from "@/components/atoms";

const GuestList: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Guest List</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border border-gray-200 text-left">Name</th>
            <th className="p-3 border border-gray-200 text-left">Email</th>
            <th className="p-3 border border-gray-200 text-left">Status</th>
            <th className="p-3 border border-gray-200 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <GuestRow
            name="Sarah Johnson"
            email="sarahj@example.com"
            status="Confirmed"
          />
          <GuestRow
            name="Michael Chen"
            email="m.chen@example.com"
            status="Pending"
          />
        </tbody>
      </table>
    </div>
  );
};

export default GuestList;

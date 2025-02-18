import React from "react";

interface StatBoxProps {
  title: string;
  value: number;
}

const StatBox: React.FC<StatBoxProps> = ({ title, value }) => (
  <div className="bg-white shadow-md rounded-lg p-4 text-center flex-1">
    <p className="text-gray-600 text-sm">{title}</p>
    <p className="text-2xl font-semibold mt-1">{value}</p>
  </div>
);

export default StatBox;

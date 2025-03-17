import React from "react";

interface StatBoxProps {
  title: string;
  value: number;
  color?: string;
}

const StatBox: React.FC<StatBoxProps> = ({ title, value, color = '#292929' }) => (
  <div className={`shadow-md rounded-lg p-4 text-center flex-1 md:w-1/4 m-2 bg-white`}>
    <p className="text-gray-600 text-sm">{title}</p>
    <p className="text-2xl font-semibold mt-1" style={{ color: color }}>{value}</p>
  </div>
);

export default StatBox;

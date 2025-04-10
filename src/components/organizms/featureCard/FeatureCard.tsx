import React from "react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center">
    <div className="mb-4 text-peach">{icon}</div>
    <h3 className="font-medium mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;

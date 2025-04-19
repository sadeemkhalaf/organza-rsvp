'use client';

import Image from 'next/image';

// TemplateCard Component
export const TemplateCard = ({
  template,
  isSelected,
  onSelect,
}: {
  template: any;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <div
      className={`border rounded-xl overflow-hidden cursor-pointer transition-all ${
        isSelected ? 'border-peach ring-2 ring-peach/30' : 'border-gray-200 hover:border-peach/50'
      }`}
      onClick={onSelect}
    >
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={template.imageUrl}
          alt={template.title}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-1">{template.title}</h3>
        <p className="text-sm text-gray-600">{template.description}</p>
      </div>
    </div>
  );
};

'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Template {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

interface TemplateGridProps {
  templates: Template[];
}

export default function TemplateGrid({ templates }: TemplateGridProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map(template => (
        <div
          key={template.id}
          className={`cursor-pointer overflow-hidden border rounded-xl transition-all ${
            selectedTemplate === template.id
              ? 'border-peach ring-2 ring-peach/30'
              : 'border-gray-200 hover:border-peach/50'
          }`}
          onClick={() => setSelectedTemplate(template.id)}
        >
          <div className="relative w-full h-[260px]">
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
      ))}
    </div>
  );
}

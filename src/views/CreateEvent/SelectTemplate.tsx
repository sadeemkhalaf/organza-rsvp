'use client';
import { FC, Fragment, useState } from 'react';
import { AnimatedButton } from '@/components';
import { eventTemplates } from '@/mock/data';
import { SearchBar, TemplateCard } from './components';
import { ArrowLeft } from 'lucide-react';

// Step 1: Template selection
const StepOne: FC<{
  selectedTemplate: string | null;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ selectedTemplate, setSelectedTemplate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  // Filter templates by search
  const filteredTemplates = eventTemplates.filter(
    template =>
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Fragment>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTemplates.map(template => (
          <TemplateCard
            key={template.id}
            template={template}
            isSelected={selectedTemplate === template.id}
            onSelect={() => setSelectedTemplate(template.id)}
          />
        ))}
      </div>
    </Fragment>
  );
};

// Placeholder Step 2 and Step 3 (can replace later with real components)
const StepTwo = () => <div className="text-gray-500">Step 2 - Event Details (Coming soon...)</div>;
const StepThree = () => (
  <div className="text-gray-500">Step 3 - Final Confirmation (Coming soon...)</div>
);

const SelectTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  const steps = [
    {
      label: 'Select Template',
      content: (
        <StepOne selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
      ),
    },
    { label: 'Event Details', content: <StepTwo /> },
    { label: 'Confirmation', content: <StepThree /> },
  ];

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex flex-col p-5">
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className='flex items-baseline flex-row gap-4'>
          <ArrowLeft size={24} className="mr-2" />
          <h1 className="text-3xl font-bold mb-3">Create New Event</h1>
        </div>
        <p className="text-gray-600 mb-12">Explore and select your go to template</p>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between mb-6">
            <div>
              <div className="text-sm font-medium text-peach mb-2">
                Step {step + 1} of {steps.length}
              </div>
              <h2 className="text-xl font-medium">{steps[step].label}</h2>
              <p className="text-sm text-gray-600">Fill out this step to continue</p>
            </div>
            <div className="flex gap-2 items-center">
              {step > 0 && (
                <AnimatedButton
                  title="Back"
                  onClick={prevStep}
                  size={'sm'}
                  containerClassName="bg-gray-200 text-gray-700 hover:bg-gray-300"
                />
              )}
              {step < steps.length - 1 && (
                <AnimatedButton
                  title="Next"
                  onClick={nextStep}
                  size={'sm'}
                  disabled={step === 0 && !selectedTemplate}
                  containerClassName="bg-peach hover:bg-peach-dark text-white"
                />
              )}
              {step === steps.length - 1 && (
                <AnimatedButton
                  title="Submit"
                  size={'sm'}
                  onClick={() => alert('Submit logic here')}
                  containerClassName="bg-green-500 hover:bg-green-600 text-white"
                />
              )}
            </div>
          </div>

          {steps[step].content}
        </div>
      </main>
    </div>
  );
};

export default SelectTemplate;

import { useState } from "react";
import { Check, Share, Mail, Search } from "lucide-react";
import Link from "next/link";
import { AnimatedButton } from "@/components";
import { eventTemplates } from "@/mock/data";

const StepIndicator = ({}: { step: number; total: number }) => {
  return (
    <div className="flex items-center gap-6 mb-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-peach flex items-center justify-center">
          <Check size={16} className="text-white" />
        </div>
        <div className="w-8 h-8 rounded-full bg-peach flex items-center justify-center">
          <Share size={16} className="text-white" />
        </div>
        <div className="w-8 h-8 rounded-full bg-peach flex items-center justify-center">
          <Mail size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
};

const SelectTemplate = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const filteredTemplates = eventTemplates.filter(
    (template) =>
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-3">Create New Event</h1>
        <p className="text-gray-600 mb-12">
          Explore and select your go to template
        </p>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between mb-6">
            <div>
              <div className="text-sm font-medium text-peach mb-2">
                Step 1 of 3
              </div>
              <h2 className="text-xl font-medium">Select Template</h2>
              <p className="text-sm text-gray-600">
                choose your favorite template
              </p>
            </div>

            <StepIndicator step={1} total={3} />

            <div className="flex items-center">
              <Link href="/create-event/details">
                <AnimatedButton
                  title="Next"
                  disabled={!selectedTemplate}
                  containerClassName="bg-peach hover:bg-peach-dark text-white"
                />
              </Link>
            </div>
          </div>

          <div className="mb-8 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Find an event ..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className={`border rounded-xl overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? "border-peach ring-2 ring-peach/30"
                    : "border-gray-200 hover:border-peach/50"
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="h-[260px] overflow-hidden">
                  <img
                    src={template.imageUrl}
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{template.title}</h3>
                  <p className="text-sm text-gray-600">
                    {template.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelectTemplate;

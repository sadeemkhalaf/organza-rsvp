import { AnimatedButton } from "@/components";
import { Check, Share, Mail, Image } from "lucide-react";
import Link from "next/link";

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

const EventDetailsForm = () => {
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
                Step 2 of 3
              </div>
              <h2 className="text-xl font-medium">Add event details</h2>
              <p className="text-sm text-gray-600">
                start adding the details of your event
              </p>
            </div>

            <StepIndicator step={2} total={3} />

            <div className="flex items-center gap-4">
              <Link href="/create-event/template">
                <AnimatedButton
                  containerClassName="border-gray-200"
                  title="Previous"
                />
              </Link>
              <Link href="/create-event/guests">
                <AnimatedButton
                  containerClassName="bg-peach hover:bg-peach-dark text-white"
                  title="Next"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Event title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
                placeholder="Event title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
                placeholder="Description"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Story</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50 min-h-[120px]"
                placeholder="Tell your story here..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Form title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
                placeholder="Form title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Form description
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
                placeholder="Form description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
                placeholder="Location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Location url
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
                placeholder="Location url"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Cover Photo
              </label>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="h-32 flex flex-col items-center justify-center">
                  <Image size={32} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-400 mb-2">drop photo</p>
                  <AnimatedButton
                    size="sm"
                    containerClassName="text-xs"
                    title="BROWSE"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Main photo
              </label>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="h-32 flex flex-col items-center justify-center">
                  <Image size={32} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-400 mb-2">drop photo</p>
                  <AnimatedButton
                    size="sm"
                    containerClassName="text-xs"
                    title="BROWSE"
                  />
                  BROWSE
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetailsForm;

import { AnimatedButton } from "@/components";
import { Check, Share, Mail, UserPlus, PlusCircle } from "lucide-react";
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

const AddGuests = () => {
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
                Step 3 of 3
              </div>
              <h2 className="text-xl font-medium">Add Guests</h2>
              <p className="text-sm text-gray-600">
                invite your guests to the event
              </p>
            </div>

            <StepIndicator step={3} total={3} />

            <div className="flex items-center gap-4">
              <Link href="/create-event/details">
                <AnimatedButton
                  title="Previous"
                  containerClassName="border-gray-200"
                />
              </Link>
              <Link href="/dashboard">
                <AnimatedButton
                  title="Finish"
                  containerClassName="bg-peach hover:bg-peach-dark text-white"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Guest List</h3>

            <div className="flex gap-3">
              <AnimatedButton size="sm" title="Add new guest" />
              <UserPlus size={16} className="mr-2" />
            </div>
          </div>

          <div className="mb-6">
            <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
                />
              </div>
              <div>
                <div>
                  <AnimatedButton
                    title="Plus One"
                    size="sm"
                    containerClassName="text-gray-400 hover:text-gray-600"
                  />

                  <PlusCircle size={16} className="mr-2" />
                </div>
              </div>
            </div>

            <div className="text-center py-10">
              <p className="text-gray-400 mb-4">No guests added yet</p>
              <div className="flex flex-row">
                <UserPlus size={16} className="mr-2" />
                <AnimatedButton
                  size="sm"
                  containerClassName="text-gray-600"
                  title="Add New Guest"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Tips for inviting guests</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                • Add guests one by one or import a CSV file with your guest
                list
              </li>
              <li>
                • Make sure to include email addresses for digital invitations
              </li>
              <li>
                • Guests will be able to RSVP directly through your event
                website
              </li>
              <li>• You can add more guests later if needed</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddGuests;

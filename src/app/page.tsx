"use client";

import { AnimatedButton, Hero } from "@/components";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <div className="w-full flex justify-center">
        <HeroFeatures />
      </div> */}
      {/* <div className="w-full h-28" /> */}

      <div className="h-screen flex flex-col justify-center w-full items-center">
        <div className="justify-between w-2/3 hidden md:flex md:visible">
          <div className="w-1/3 mx-3 mt-12 transition-transform duration-500 ease-in-out transform hover:translate-y-5">
            <img src="/landing/temp1.jpg" alt="image1" />
          </div>
          <div className="w-1/3 mx-3 transition-transform duration-500 ease-in-out transform hover:translate-y-5">
            <img src="/landing/temp2.jpg" alt="image2" />
          </div>
          <div className="w-1/3 mx-3 mt-12 transition-transform duration-500 ease-in-out transform hover:translate-y-5">
            <img src="/landing/temp3.jpg" alt="image3" />
          </div>
        </div>

        <motion.div className="w-full overflow-hidden overflow-x-scroll scroll-hidden md:hidden">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
            className="flex p-4 transition-transform duration-500 ease-in-out transform hover:translate-x-1/3"
          >
            <div className="w-2/3 md:w-1/3 mx-3 md:mt-12 flex-shrink-0">
              <img src="/landing/temp1.jpg" alt="image1" />
            </div>
            <div className="w-2/3 md:w-1/3 mx-3 flex-shrink-0">
              <img src="/landing/temp2.jpg" alt="image2" />
            </div>
            <div className="w-2/3 md:w-1/3 mx-3 md:mt-12 flex-shrink-0">
              <img src="/landing/temp3.jpg" alt="image3" />
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full h-20" />
        {/* a div with all items centered in column */}
        <div className="flex flex-col justify-center items-center w-3/4 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Beautiful website templates
          </h1>
          <p className="text-lg md:text-xl text-center text-wrap">
            Find the design that fits your special event style. Share everything
            your guests need to know, such as, location, time and any
            announcements that matters.
          </p>
          {/* space between button and description text */}
          <div className="h-6" />
          <AnimatedButton
            title="Explore templates"
            backgroundColor="#FFCBBF"
            textColor="#2C2C2B"
            outlined={false}
          />
          {/* a row list of nav Links 3 links and more link, the list is [{title: 'weddings', url: ''}, ...] */}
          <div className="flex justify-between mt-6">
            <motion.a
              href="#"
              className="text-sm md:text-lg font-normal px-4"
              whileHover={{ scale: 1.1, textDecoration: "underline" }}
            >
              Weddings
            </motion.a>
            <motion.a
              href="#"
              className="text-sm md:text-lg font-normal px-4"
              whileHover={{ scale: 1.1, textDecoration: "underline" }}
            >
              Birthdays
            </motion.a>
            <motion.a
              href="#"
              className="text-sm md:text-lg font-normal px-4"
              whileHover={{ scale: 1.1, textDecoration: "underline" }}
            >
              Baby Showers
            </motion.a>
            <motion.a
              href="#"
              className="text-sm md:text-lg font-bold"
              whileHover={{ scale: 1.1, textDecoration: "underline" }}
            >
              More
            </motion.a>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-screen" /> */}

      {/* Features Section with Icons */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            All your need to organize your event invitations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img
                  src="/landing/icons/wedding-invitation.png"
                  alt="Share Invitation"
                  className="w-20 h-auto"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Share your website invitation in 1 click
              </h3>
              <p className="text-gray-600">
                Through email and social apps like WhatsApp, Instagram,
                Facebook, and QR code.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img
                  src="/landing/icons/love-letter.png"
                  alt="Share Invitation"
                  className="w-20 h-auto"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Check your guests wishes and notes
              </h3>
              <p className="text-gray-600">
                Let your guests share their thoughts, special requests, and
                congratulations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img
                  src="/landing/icons/chart.png"
                  alt="Share Invitation"
                  className="w-20 h-auto"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Track your guests responses
              </h3>
              <p className="text-gray-600">
                View all guest replies in real-time. Never wonder who's coming
                again!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                PERSONALIZE YOUR INVITATIONS
              </h2>
              <p className="text-gray-600 mb-8">
                Your beloved ones will like them even more, allowing them to
                share the moment and send you best wishes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-peach/80 flex items-center justify-center mt-1">
                    <ChevronRight size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      Track your guests status
                    </h3>
                    <p className="text-sm text-gray-600">
                      Know who's coming and who can't make it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-peach/80 flex items-center justify-center mt-1">
                    <ChevronRight size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      Allow them to send notes
                    </h3>
                    <p className="text-sm text-gray-600">
                      Receive personal messages from attendees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-peach/80 flex items-center justify-center mt-1">
                    <ChevronRight size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      Scan QR codes on arrival
                    </h3>
                    <p className="text-sm text-gray-600">
                      Simplify check-in with digital QR codes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="/landing/personalize.png"
                alt="Mobile preview"
                className="w-full lg:max-w-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photographers Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Looking for a professional photographer?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Adding your beautiful photos and artwork will always be crisp,
            clear, and colorful so your site looks stunning on every screen.
          </p>

          <p className="text-center mb-12">
            You can check some of our favourite photographers
          </p>

          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                <img
                  src="/landing/photographers/photographer-1.png"
                  alt="Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Anwam</p>
              <a href="#" className="text-sm text-gray-500">
                @anwam
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                <img
                  src="/landing/photographers/photographer-2.png"
                  alt="Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Karim Benzou</p>
              <a href="#" className="text-sm text-gray-500">
                @karimbenzou
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                <img
                  src="/landing/photographers/photographer-3.png"
                  alt="Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">haitham alshaibef</p>
              <a href="#" className="text-sm text-gray-500">
                @haithamalshaibef
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <h2 className="text-2xl font-medium mb-6">Know more!</h2>
            <p className="mb-8 text-gray-600">
              Organize a group for a Beta version of this project.
              <br />
              Get the chance to enjoy our service for free!
            </p>
            <AnimatedButton
              containerClassName="bg-peach hover:bg-peach-dark text-white rounded-full px-8"
              title="Get More"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

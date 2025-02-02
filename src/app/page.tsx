"use client";

import { AnimatedButton, Hero } from "@/components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* HELLO! */}
      <Hero />
      <div className="w-full h-28" />
      <div className="h-screen flex flex-col justify-center w-full items-center">

        <div className="flex justify-between w-2/3">
          <div className="w-1/3 mx-3 mt-12">
            <img src="/landing/temp1.jpg" alt="image1" />
          </div>
          <div className="w-1/3 mx-3">
            <img src="/landing/temp2.jpg" alt="image2" />
          </div>
          <div className="w-1/3 mx-3 mt-12">
            <img src="/landing/temp3.jpg" alt="image3" />
          </div>
        </div>

        <div className="w-full h-20" />
        {/* a div with all items centered in column */}
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className="text-5xl font-bold text-center mb-6">Beautiful website templates</h1>
          <p className="text-xl text-center text-wrap">Find the design that fits your special event style. Share everything your guests need to know, such as, location, time and any announcements that matters.</p>
          {/* space between button and description text */}
          <div className="h-6" />
          <AnimatedButton title="Explore templates" backgroundColor="#FFCBBF" textColor="#2C2C2B" outlined={false} />
          {/* a row list of nav Links 3 links and more link, the list is [{title: 'weddings', url: ''}, ...] */}
          <div className="flex justify-between mt-6">


            <motion.a
              href="#"
              className="text-lg font-normal px-4"
              whileHover={{ scale: 1.1, textDecoration: "underline" }}
            >
              Weddings
            </motion.a>
            <motion.a
              href="#"
              className="text-lg font-normal px-4"
              whileHover={{ scale: 1.1, textDecoration: "underline" }}
            >
              Birthdays
            </motion.a>
            <motion.a
              href="#"
              className="text-lg font-normal px-4"
              whileHover={{ scale: 1.1, textDecoration: "underline" }}
            >
              Baby Showers
            </motion.a>
            <motion.a
              href="#"
              className="text-lg font-bold"
              whileHover={{ scale: 1.1, textDecoration: "underline" }}
            >
              More
            </motion.a>
          </div>
        </div>

      </div>

      {/* <div className="w-full h-screen" /> */}
    </div>
  );
}

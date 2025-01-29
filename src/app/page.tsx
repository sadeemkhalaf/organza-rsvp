"use client";

import { HeroHue } from "@/components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* HELLO! */}
      <HeroHue />
      <div className="h-screen flex justify-center w-full items-center">
        <div
          className="relative opacity-100"
          style={{
            transform: "translate(40px, 0px)",
            visibility: "inherit",
          }}
        >
          <div className="relative">
            <motion.a
              className="relative inline-block px-6 py-3 text-black font-bold border-2 border-black rounded-lg overflow-hidden group transition-all"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Button Text */}
              <span className="relative z-10">View more +</span>

              {/* Ripple Effect */}
              <motion.span
                className="absolute inset-0 rounded-full bg-black"
                initial={{ y: "101%", opacity: 1 }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              ></motion.span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-screen" /> */}
    </div>
  );
}

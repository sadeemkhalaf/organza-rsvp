"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "../atoms";
import { CalendarCheck, Heart, Share, PieChart } from "lucide-react";
import { FeatureCard } from "../organizms";

const words = ["Bring Your Loved Ones", "Closer,", "Instantly."];
const window_height =
  typeof window !== "undefined" ? window.screen.height / 1.5 : 600;

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredWordIndex, setHoveredWordIndex] = useState<number | null>(null);
  const [circleSize, setCircleSize] = useState(window_height); // Initial circle size (in pixels)
  const [circleOpacity, setCircleOpacity] = useState(1); // Initial circle size (in pixels)

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Track scroll position to shrink the circle
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight; // The height of the viewport
      const scrollY = window.scrollY; // Current scroll position

      // Calculate the new circle size (min 200px, max 600px)
      const newSize = Math.max(
        200,
        window_height / 1.5 - (scrollY / maxScroll) * 400,
      ); // Shrinks from 600px to 200px
      const opacityValue = Math.max(0, 1 - scrollY / maxScroll);
      setCircleSize(newSize);
      setCircleOpacity(opacityValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hue colors for each word
  const backgroundColors = ["#FFB5A760", "#E6E6FA60", "#48D1CC60"];
  const backgroundColorsNoOpacity = ["#FFB5A7", "#E9E3D0", "#48D1CC"];

  return (
    <main>
      <div
        className={`relative w-full flex-grow h-screen overflow-x-hidden flex flex-col items-center justify-center cursor-none transition-colors duration-500 -mt-0 -z-100`}
        style={{
          backgroundColor:
            hoveredWordIndex !== null
              ? backgroundColors[hoveredWordIndex]
              : "transparent", // Default background color
        }}
      >
        {/* Custom Cursor */}
        <motion.div
          className="pointer-events-none fixed rounded-full bg-white z-50"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: "translate(-50%, -50%)",
            mixBlendMode: "difference",
          }}
          animate={{
            width: hoveredWordIndex !== null ? 120 : 16,
            height: hoveredWordIndex !== null ? 120 : 16,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        ></motion.div>

        {/* HeroHue Section */}
        <div className="relative z-10 text-center text-white md:w-2/3 flex-wrap text-wrap flex-col">
          {words.map((word, index) => (
            <span
              key={index}
              className="text-5xl md:text-6xl font-bold md:mx-2"
              onMouseEnter={() => setHoveredWordIndex(index)}
              onMouseLeave={() => setHoveredWordIndex(null)}
              style={{
                mixBlendMode: "difference",
                display: "inline-block",
              }}
            >
              {word}
            </span>
          ))}
        </div>
        <span className="z-10 mt-7 text-md md:text-xl font-normal text-wrap text-center px-6">
          Celebrate your special moments with seamless digital invitations—just
          one click away.
        </span>

        {/* Circle Element */}
        <motion.div
          style={{
            backgroundColor:
              hoveredWordIndex !== null
                ? backgroundColorsNoOpacity[hoveredWordIndex]
                : "#FFCBBF", // Default background color
          }}
          animate={{
            width: circleSize, // Dynamic width
            height: circleSize, // Dynamic height
            opacity: circleOpacity,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="rounded-full absolute top-[30%] md:top-[25%] left-1/2 transform -translate-x-1/2"
        ></motion.div>

        <div className="mt-10">
          <AnimatedButton
            title="JOIN NOW"
            outlined={false}
            backgroundColor={"#000000"}
            textColor={"white"}
          />
        </div>
      </div>
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <FeatureCard
            icon={<CalendarCheck size={32} />}
            title="Track your event details"
            description="Keep all your event information organized in one place"
          />
          <FeatureCard
            icon={<Heart size={32} />}
            title="Notify your loved ones"
            description="Easily send invitations to friends and family"
          />
          <FeatureCard
            icon={<Share size={32} />}
            title="Share your event website"
            description="Beautiful customized websites for your celebration"
          />
          <FeatureCard
            icon={<PieChart size={32} />}
            title="Track guest responses"
            description="Get real-time updates on who's coming"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;

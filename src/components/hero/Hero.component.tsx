import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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

  return (
    <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden cursor-none">
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
          width: isHovering ? 120 : 16,
          height: isHovering ? 120 : 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      ></motion.div>

      {/* Hero Text */}
      <h1
        className="text-6xl font-bold relative z-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          color: "white",
          mixBlendMode: "difference", // Inverts the text color dynamically
        }}
      >
        Design.Development.Branding
      </h1>
    </div>
  );
};

export default Hero;

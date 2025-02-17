import { motion } from 'framer-motion';
import React, { FC } from 'react';

interface AnimatedButtonProps {
  title: string;
  outlined?: boolean;
  backgroundColor?: string | null;
  textColor?: string | null;
  size?: 'sm' | 'lg'; // New size prop
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ 
  title = 'View more +', 
  outlined = true, 
  backgroundColor, 
  textColor,
  size = 'lg' // Default to large
}) => {
    // Define size styles
    const sizeClasses = size === 'sm' 
      ? 'px-4 py-2 text-xs md:text-sm'  // Small button styles
      : 'px-6 py-3 text-sm md:text-lg'; // Large button styles

    return (
        <div className="relative">
            <motion.a
                style={{ 
                    backgroundColor: backgroundColor ?? 'transparent', 
                    color: textColor ?? 'black',
                    border: outlined ? '2px solid black' : 'none' // Correct outline handling
                }}
                className={`relative inline-block font-bold rounded-lg overflow-hidden group transition-all ${sizeClasses}`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
            >
                {/* Button Text */}
                <span className="relative z-10">{title}</span>

                {/* Ripple Effect */}
                <motion.span
                    className="absolute inset-0 rounded-full bg-black"
                    initial={{ y: "101%", opacity: 1 }}
                    whileHover={{ y: "0%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                ></motion.span>
            </motion.a>
        </div>
    );
}

export default AnimatedButton;

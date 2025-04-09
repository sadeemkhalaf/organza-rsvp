import { motion } from "framer-motion";
import React, { FC } from "react";

interface AnimatedButtonProps {
  title: string;
  outlined?: boolean;
  backgroundColor?: string | null;
  textColor?: string | null;
  size?: "sm" | "lg"; // New size prop
  onClick?: (props?: any) => void;
  invalid?: boolean;
  containerClassName?: string | undefined;
  loading?: boolean;
  widthFull?: boolean;
  disabled?: boolean;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  title = "View more +",
  outlined = true,
  backgroundColor,
  textColor,
  size = "lg", // Default to large
  onClick = () => {},
  invalid = false,
  containerClassName = undefined,
  loading = false,
  widthFull = false,
  disabled = false,
}) => {
  // Define size styles
  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-xs md:text-sm" // Small button styles
      : "px-6 py-3 text-sm md:text-lg"; // Large button styles

  return (
    <div
      className={"relative cursor-pointer" + (widthFull ? " w-full" : "")}
      aria-disabled={disabled}
    >
      <motion.a
        onClick={onClick}
        style={{
          backgroundColor: backgroundColor ?? "transparent",
          color: textColor ?? "black",
          border: outlined ? "2px solid black" : "none", // Correct outline handling
        }}
        className={`text-center relative inline-block font-bold rounded-lg overflow-hidden group transition-all ${sizeClasses} ${invalid && "animate-[pulse_2s_ease-in-out]"} ${containerClassName}`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Button Text */}
        {loading ? (
          <span className="relative z-10">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </span>
        ) : (
          <span className="relative z-10 flex justify-center w-full">
            {title}
          </span>
        )}

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
};

export default AnimatedButton;

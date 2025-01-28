import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define the colors from your design
        primary: '#FFCBBF', // Main primary color (e.g., buttons, active states)
        secondary: '#F8FAFC', // Light background
        accent: '#FBCB8A', // Accent color (e.g., icons, highlight text)
        danger: '#FF6F61', // For errors or declines
        success: '#4CAF50', // For success or confirmations
        warning: '#FFCC00', // For warnings
        textPrimary: '#1F2937', // Main text color (dark gray)
        textSecondary: '#6B7280', // Secondary text color (light gray)
        muted: '#9CA3AF', // Muted gray for labels, placeholders
        footerBg: '#F9FAFB', // Footer background color
        teal: '#73EDBA' // button secondary color
      },
      fontFamily: {
        // Define the fonts used in your design
        sans: ['Inter', 'sans-serif'], // Primary font
        serif: ['Playfair Display', 'serif'], // Serif font for titles
      },
      spacing: {
        // Define custom spacing if needed
        '72': '18rem', // Example spacing value
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        // Define custom border-radius if needed
        xl: '1rem',
      },
      boxShadow: {
        // Add custom shadow styles
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Card shadow
        hover: '0 6px 12px rgba(0, 0, 0, 0.15)', // Hover shadow
      },
    },
  },
  plugins: [],
} satisfies Config;

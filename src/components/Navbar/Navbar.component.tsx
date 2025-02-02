"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedButton } from "../atoms";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 0.75, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <Image src={'/Logo.png'} className="h-16 w-auto" alt="organza" width={78} height={70} />
        </Link>
        <nav className="space-x-6 hidden md:flex">
          <Link href="/about">About us</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <AnimatedButton outlined title="Logout" size="sm" />
      </div>
    </motion.header>
  );
};

export default Navbar;

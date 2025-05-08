'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { AnimatedButton } from '../atoms';
import { useRouter } from 'next/navigation';

const Navbar: FC<{ onlyShowLogo: boolean }> = ({ onlyShowLogo = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const route = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Safely access localStorage on client only
  useEffect(() => {
    if (!onlyShowLogo && typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('user');
      setAuthToken(token);
      if (userData) {
        try {
          const parsed = JSON.parse(userData);
          setUserEmail(parsed.email);
        } catch {
          setUserEmail(null);
        }
      }
    }
  }, []);

  const handleLogout = async () => {
    if (authToken) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      setAuthToken(null);
      setUserEmail(null);
      const response = await fetch("/api/auth/logout", {
        // ✅ Correct API URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Logout failed");
      }
      route.push('/login');
    } else {
      route.push('/login');
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 0.75, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <Image src={'/Logo.png'} className="h-16 w-auto" alt="organza" width={78} height={70} />
        </Link>

        {!onlyShowLogo && authToken && (
          <nav className="space-x-6 hidden md:flex">
            <Link href="/about">About us</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/profile">Profile</Link>
          </nav>
        )}

        {!onlyShowLogo && (
          <div className="grid md:grid-cols-2 md:items-center md:space-x-4">
            {userEmail && <p className="hidden md:block text-sm font-semibold">{userEmail}</p>}
            <AnimatedButton
              outlined
              title={authToken ? 'Logout' : 'Login'}
              size="sm"
              onClick={handleLogout}
            />
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;

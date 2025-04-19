'use client';

import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchBar = React.memo(function SearchBar({
  searchQuery,
  setSearchQuery,
}: SearchBarProps) {
  return (
    <div className="mb-8 relative w-full max-w-md">
      <motion.div
        animate={{
          opacity: searchQuery === '' ? 1 : 0,
          x: searchQuery === '' ? 0 : -8,
        }}
        transition={{ duration: 0.5 }}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      >
        <Search size={20} className="m-2" />
      </motion.div>

      <input
        type="text"
        placeholder="Find an event ..."
        className="w-full pl-10 pr-4 py-2 px-8 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-peach/50"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
});

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-burnt-orange text-white top-0 left-0 w-full shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link href="/">Smart Algorithms</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={handleOpen}
          className="md:hidden block text-xl"
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center gap-6 md:static absolute bg-burnt-orange w-full md:w-auto top-[64px] left-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:opacity-100 md:visible`}
        >
          <Link
            href="/"
            className={`px-4 py-2 hover:text-emerald-green hover:underline ${
              pathname === '/' ? 'text-emerald-green font-bold' : ''
            }`}
            onClick={handleOpen}
          >
            Home
          </Link>

          <Link
            href="/blog"
            className={`px-4 py-2 hover:text-emerald-green hover:underline ${
              pathname === '/blog' ? 'text-emerald-green font-bold' : ''
            }`}
            onClick={handleOpen}
          >
            Blog
          </Link>

          <Link
            href="/About"
            className={`px-4 py-2 hover:text-emerald-green hover:underline ${
              pathname === '/About' ? 'text-emerald-green font-bold' : ''
            }`}
            onClick={handleOpen}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

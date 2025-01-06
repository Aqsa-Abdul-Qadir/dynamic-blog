import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-burnt-orange text-white py-8 mb-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            AI Insights
          </Link>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
          <Link href="/" className="hover:text-emerald-green hover:underline">
            Home
          </Link>
          <Link href="/blog" className="hover:text-emerald-green hover:underline">
            Blog
          </Link>
          <Link href="/About" className="hover:text-emerald-green hover:underline">
            About
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-charcoal-gray text-center py-4 mt-8">
        <p className="text-sm">
          &copy; 2025 Smart Algorithms. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

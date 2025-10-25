"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change threshold if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic text color based on scroll
  const textColor = scrolled ? "text-gray-800" : "text-white";

  return (
<header className=" w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center space-x-2 transition-colors duration-300 ${textColor}`}
        >
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="font-bold text-xl transition-colors duration-300">
            TravelWorld
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={`font-medium transition-colors duration-300 ${textColor}`}>
            Home
          </Link>
          <Link href="/destinations" className={`font-medium transition-colors duration-300 ${textColor}`}>
            Destinations
          </Link>
          <Link href="/tours" className={`font-medium transition-colors duration-300 ${textColor}`}>
            Tours
          </Link>
          <Link href="/about" className={`font-medium transition-colors duration-300 ${textColor}`}>
            About
          </Link>
          <Link href="/contact" className={`font-medium transition-colors duration-300 ${textColor}`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 text-2xl font-bold transition-colors duration-300 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className={`transition-colors duration-300 ${textColor}`}>
              Home
            </Link>
            <Link href="/destinations" onClick={() => setMenuOpen(false)} className={`transition-colors duration-300 ${textColor}`}>
              Destinations
    
            </Link>
            <Link href="/tours" onClick={() => setMenuOpen(false)} className={`transition-colors duration-300 ${textColor}`}>
              Tours
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className={`transition-colors duration-300 ${textColor}`}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className={`transition-colors duration-300 ${textColor}`}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

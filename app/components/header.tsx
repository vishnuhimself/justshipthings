'use client';

import { useState, useEffect } from 'react';
import { Mail, Link as LinkIcon, Menu, X, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-70 transition-opacity">
            <div className="text-lg font-semibold text-gray-900">
              just
              <span className="text-gray-900 font-bold">ship</span>
              things
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://x.com/VishHimself"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Follow me on X (Twitter)"
            >
              <Twitter className="h-4 w-4 text-gray-600" />
            </a>
            <a
              href="https://heyvish.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Visit heyvish.com"
            >
              <LinkIcon className="h-4 w-4 text-gray-600" />
            </a>
            <a
              href="mailto:hey@heyvish.com"
              className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Contact via email"
            >
              <Mail className="h-4 w-4 text-gray-600" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4 text-gray-600" />
              ) : (
                <Menu className="h-4 w-4 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-6 py-4 flex justify-end">
            <div className="flex items-center gap-2">
              <a
                href="https://x.com/VishHimself"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Follow me on X (Twitter)"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Twitter className="h-4 w-4 text-gray-600" />
              </a>
              
              <a
                href="https://heyvish.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Visit heyvish.com"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LinkIcon className="h-4 w-4 text-gray-600" />
              </a>
              
              <a
                href="mailto:hey@heyvish.com"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Contact via email"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail className="h-4 w-4 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 
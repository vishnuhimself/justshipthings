'use client';

import { ThemeSwitcher } from './theme-switcher';
import { Mail, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M7.2 4h17.6A3.2 3.2 0 0 1 28 7.2v17.6a3.2 3.2 0 0 1-3.2 3.2H7.2A3.2 3.2 0 0 1 4 24.8V7.2A3.2 3.2 0 0 1 7.2 4Zm8.41 5.724a1.333 1.333 0 1 0-1.886 1.886l4.381 4.39-4.381 4.39a1.333 1.333 0 1 0 1.886 1.886l5.333-5.333a1.333 1.333 0 0 0 0-1.886l-5.333-5.333Z" 
                fill="currentColor"
              />
            </svg>
            <div className="ml-3 text-xl font-medium">
              just
              <span className="text-teal-500 font-bold">ship</span>
              things
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://heyvish.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
              aria-label="Visit heyvish.com"
            >
              <LinkIcon className="h-[1.2rem] w-[1.2rem] text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:hey@heyvish.com"
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
              aria-label="Contact via email"
            >
              <Mail className="h-[1.2rem] w-[1.2rem] text-gray-700 dark:text-gray-300" />
            </a>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
} 
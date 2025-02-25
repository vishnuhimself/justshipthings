'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center 
               transition-colors hover:bg-teal-100 dark:hover:bg-teal-900/30 relative overflow-hidden"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 45 : 0,
            opacity: theme === 'dark' ? 0 : 1,
            y: theme === 'dark' ? -30 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : -45,
            opacity: theme === 'dark' ? 1 : 0,
            y: theme === 'dark' ? 0 : 30,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          <Moon className="h-[1.2rem] w-[1.2rem] text-indigo-400" />
        </motion.div>
      </div>
      
      {/* Background animation */}
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 150 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="absolute w-10 h-10 rounded-full bg-gray-900 opacity-5"
      />
    </motion.button>
  );
} 
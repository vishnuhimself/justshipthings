'use client';

import { AnimatedBackground } from './components/animated-background';
import { Header } from './components/header';
import { ProductCard } from './components/product-card';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from './products';
import { ArrowDown, Mail, Twitter } from 'lucide-react';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-teal-500/5 to-transparent opacity-70" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center h-full pb-16">
          <div className="text-center">
            {/* Animated Greeting */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-display mb-4"
            >
              <span>Hey! I&apos;m</span>
              <a 
                href="https://heyvish.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 font-semibold transition-colors 
                         relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                         after:bg-teal-500 after:origin-left after:scale-x-0 hover:after:scale-x-100 
                         after:transition-transform pb-0.5"
              >
                Vishnu
              </a>
              <motion.span
                animate={{ rotate: [0, 15, -5, 15, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                👋
              </motion.span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight sm:leading-tight md:leading-tight font-display max-w-4xl mx-auto"
            >
              And I believe you can{' '}
              <motion.span 
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent inline-block pb-1 bg-[length:200%_auto]"
              >
                #JustShipThings
              </motion.span>
            </motion.h1>
            
            {/* Subtitle with Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center justify-center gap-3 text-xl text-gray-600 dark:text-gray-300"
            >
              <span>Powered by</span>
              <div className="flex items-center gap-2">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                  className="relative w-8 h-8 rounded-full p-1.5 bg-gradient-to-r from-teal-500/10 to-emerald-400/10 shadow-[0_0_10px_rgba(20,184,166,0.3)] flex items-center justify-center"
                >
                  <Image 
                    src="/images/coffee.svg" 
                    alt="Coffee" 
                    width={24} 
                    height={24}
                    className="object-contain"
                  />
                </motion.div>
                <span>Coffee</span>
              </div>
              <span>and</span>
              <div className="flex items-center gap-2">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="relative w-7 h-7 rounded-full p-1 bg-gradient-to-r from-teal-500/10 to-emerald-400/10 shadow-[0_0_10px_rgba(20,184,166,0.3)] flex items-center justify-center"
                >
                  <Image 
                    src="/images/cursor.svg" 
                    alt="Cursor" 
                    width={22} 
                    height={22}
                    className="object-contain"
                  />
                </motion.div>
                <span>Cursor</span>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Down Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center"
          >
            <button 
              onClick={scrollToProducts}
              className="group flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <span className="text-sm font-medium">See what I&apos;ve shipped</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </button>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-tr from-teal-500/10 to-emerald-500/5 rounded-full blur-3xl" />
        </div>
      </section>
      
      {/* Products Section */}
      <section 
        ref={productsRef}
        className="py-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
              What I&apos;m shipping now
            </h2>
          </motion.div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-white/0 to-white/90 dark:from-gray-950/0 dark:to-gray-950/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Ready to ship your own thing?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Dream it. Build it. Yeet it into the universe. 🚀 The world ain&apos;t ready, but drop it anyway. 🔥
            </p>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <ConnectButton />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ConnectButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-full
                 bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600
                 dark:from-teal-500 dark:to-emerald-500 dark:hover:from-teal-400 dark:hover:to-emerald-400
                 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/20"
      >
        Connect with me
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 overflow-hidden"
          >
            <div className="p-1 space-y-1">
              <a 
                href="mailto:hey@heyvish.com"
                className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Mail className="h-4 w-4 text-teal-500" />
                <span>Email me</span>
              </a>
              <a 
                href="https://x.com/VishHimself"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Twitter className="h-4 w-4 text-teal-500" />
                <span>DM on X</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

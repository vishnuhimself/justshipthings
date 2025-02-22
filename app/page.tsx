'use client';

import { AnimatedBackground } from './components/animated-background';
import { Header } from './components/header';
import { ProductCard } from './components/product-card';
import { motion } from 'framer-motion';
import { products } from './products';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="min-h-screen pt-24 pb-12 bg-white/80 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-display mb-3">
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
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight sm:leading-tight md:leading-tight font-display max-w-3xl mx-auto">
              And I believe you can{' '}
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent inline-block pb-1">
                #JustShipThings
              </span>
            </h1>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-2xl font-display font-semibold text-gray-500">
              What I&apos;m shipping now 👇
            </h2>
          </div>

          <div className="space-y-6">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

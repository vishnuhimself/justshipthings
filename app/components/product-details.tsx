'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronRight, Star } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductDetailsProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetails({ product, isOpen, onClose }: ProductDetailsProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Modal Container - ensures proper centering */}
          <div className="relative w-full min-h-screen flex items-center justify-center p-4">
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-xl border border-gray-200 
                         dark:border-gray-800 shadow-2xl overflow-hidden"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                         text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 
                         transition-colors z-50"
              >
                <X size={20} />
              </button>
              
              <div className="max-h-[85vh] overflow-y-auto">
                <div className="p-6 lg:p-8">
                  <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 mb-8">
                      <div className="relative h-20 w-20 lg:h-32 lg:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={product.iconUrl}
                          alt={`${product.name} icon`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-display">
                          {product.name}
                        </h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                          {product.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Overview */}
                    <div className="prose prose-gray dark:prose-invert max-w-none mb-8 lg:mb-12">
                      <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Overview</h3>
                      <p className="text-gray-600 dark:text-gray-400">{product.details.overview}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                      {/* Features */}
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h3>
                        <ul className="grid gap-3">
                          {product.details.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Built With</h3>
                        <div className="flex flex-wrap gap-2">
                          {product.details.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Screenshots */}
                    {product.details.screenshots.length > 0 && (
                      <div className="mt-8 lg:mt-12">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Screenshots</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {product.details.screenshots.map((screenshot, index) => (
                            <div 
                              key={index} 
                              className="relative w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg"
                            >
                              <Image
                                src={screenshot}
                                alt={`${product.name} screenshot ${index + 1}`}
                                width={1440}
                                height={2880}
                                className="w-full h-auto"
                                priority={index === 0}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Testimonials */}
                    {product.details.testimonials && product.details.testimonials.length > 0 && (
                      <div className="mt-8 lg:mt-12">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">What Users Say</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {product.details.testimonials.map((testimonial, index) => (
                            <div
                              key={index}
                              className="p-4 lg:p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                            >
                              <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className="text-yellow-400 fill-yellow-400"
                                  />
                                ))}
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">
                                &ldquo;{testimonial.text}&rdquo;
                              </p>
                              <div className="text-sm">
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {testimonial.author}
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                  {' '}
                                  · {testimonial.role}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
} 
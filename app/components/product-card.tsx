'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { AppWindow, Store, ChevronRight } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const router = useRouter();
  const isInDevelopment = product.status === 'beta' && !product.link;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900/40 p-6 lg:p-8
                 backdrop-blur-sm backdrop-saturate-150
                 border border-gray-200 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-teal-500/20
                 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-teal-500/5
                 dark:hover:bg-gray-900/50`}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[auto,1fr,auto] lg:gap-8 lg:items-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800/50">
          <Image
            src={product.iconUrl}
            alt={`${product.name} icon`}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-display">
              {product.name}
            </h3>
            <div className="flex gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 dark:bg-gray-800/50 px-3 py-1 text-xs 
                           text-gray-600 dark:text-gray-300 font-medium dark:border dark:border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300 max-w-3xl">
            {product.description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{product.status === 'live' ? 'Shipped' : 'Shipping'} {product.launchDate}</span>
            <span>•</span>
            <span className={`capitalize ${
              product.status === 'live' 
                ? 'text-emerald-600 dark:text-emerald-400'
                : isInDevelopment ? 'text-yellow-600 dark:text-yellow-400' : ''
            }`}>
              {isInDevelopment ? 'Build in progress' : product.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-[200px]">
          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg 
                       bg-black dark:bg-gray-900 hover:bg-gray-900 dark:hover:bg-gray-800 
                       text-white font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {product.storeButton.icon === 'app-store' && (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
                </svg>
              )}
              {product.storeButton.icon === 'play-store' && <Store className="h-5 w-5" />}
              {product.storeButton.icon === 'web' && <AppWindow className="h-5 w-5" />}
              {product.storeButton.text}
            </a>
          )}
          {!isInDevelopment && (
            <button
              onClick={() => router.push(`/products/${product.id}`)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg 
                        border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 
                        dark:hover:border-teal-500/30 text-gray-700 dark:text-gray-300
                        font-medium transition-colors"
            >
              Know more
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800/50">
            <Image
              src={product.iconUrl}
              alt={`${product.name} icon`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-display">
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 dark:bg-gray-800/50 px-3 py-1 text-xs 
                           text-gray-600 dark:text-gray-300 font-medium dark:border dark:border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{product.status === 'live' ? 'Shipped' : 'Shipping'} {product.launchDate}</span>
              <span>•</span>
              <span className={`capitalize ${
                product.status === 'live' 
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : isInDevelopment ? 'text-yellow-600 dark:text-yellow-400' : ''
              }`}>
                {isInDevelopment ? 'Build in progress' : product.status}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg 
                       bg-black dark:bg-gray-900 hover:bg-gray-900 dark:hover:bg-gray-800 
                       text-white font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {product.storeButton.icon === 'app-store' && (
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
                </svg>
              )}
              {product.storeButton.icon === 'play-store' && <Store className="h-5 w-5" />}
              {product.storeButton.icon === 'web' && <AppWindow className="h-5 w-5" />}
              {product.storeButton.text}
            </a>
          )}
          {!isInDevelopment && (
            <button
              onClick={() => router.push(`/products/${product.id}`)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg 
                        border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 
                        dark:hover:border-teal-500/30 text-gray-700 dark:text-gray-300
                        font-medium transition-colors"
            >
              Know more
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
} 
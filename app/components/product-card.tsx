'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AppWindow, Store, ChevronRight, Calendar, Clock } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const isInDevelopment = product.status === 'beta' && !product.link;

  return (
    <div className="group">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[auto,1fr,auto] lg:gap-8 lg:items-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-xl flex items-center justify-center bg-gray-50 border border-gray-100">
          <Image
            src={product.iconUrl}
            alt={`${product.name} icon`}
            width={80}
            height={80}
            className="object-contain rounded-lg"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-2xl font-semibold text-gray-900">
              {product.name}
            </h3>
            <div className="flex gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            {product.description}
          </p>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span>{product.status === 'live' ? 'Shipped' : 'Shipping'} {product.launchDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className={`capitalize ${
                product.status === 'live' 
                  ? 'text-green-600'
                  : isInDevelopment ? 'text-yellow-600' : ''
              }`}>
                {isInDevelopment ? 'Build in progress' : product.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px]">
          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {product.storeButton.icon === 'app-store' && (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
                </svg>
              )}
              {product.storeButton.icon === 'play-store' && <Store className="h-4 w-4" />}
              {product.storeButton.icon === 'web' && <AppWindow className="h-4 w-4" />}
              {product.storeButton.icon === 'github' && (
                <Image
                  src="/images/github-white.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              )}
              {product.storeButton.text}
            </a>
          )}
          {!isInDevelopment && (
            <button
              onClick={() => router.push(`/products/${product.id}`)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium transition-colors text-sm"
            >
              <span>View details</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-lg flex items-center justify-center bg-gray-50 border border-gray-100">
            <Image
              src={product.iconUrl}
              alt={`${product.name} icon`}
              width={56}
              height={56}
              className="object-contain rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-gray-400" />
                <span>{product.launchDate}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-gray-400" />
                <span className={`capitalize ${
                  product.status === 'live' 
                    ? 'text-green-600'
                    : isInDevelopment ? 'text-yellow-600' : ''
                }`}>
                  {isInDevelopment ? 'In progress' : product.status}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {product.storeButton.icon === 'app-store' && (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/>
                </svg>
              )}
              {product.storeButton.icon === 'play-store' && <Store className="h-4 w-4" />}
              {product.storeButton.icon === 'web' && <AppWindow className="h-4 w-4" />}
              {product.storeButton.icon === 'github' && (
                <Image
                  src="/images/github-white.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              )}
              {product.storeButton.text}
            </a>
          )}
          {!isInDevelopment && (
            <button
              onClick={() => router.push(`/products/${product.id}`)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium transition-colors text-sm"
            >
              <span>View details</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="absolute top-0 right-0 flex items-center">
        <span className={`h-2 w-2 rounded-full ${
          product.status === 'live' 
            ? 'bg-green-500' 
            : 'bg-yellow-500'
        }`} />
      </div>
    </div>
  );
} 
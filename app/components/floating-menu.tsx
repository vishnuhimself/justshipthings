'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Target, ChevronUp } from 'lucide-react';
import { products } from '../products';

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-64 rounded-sm bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 overflow-hidden">
          <div className="p-2">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={product.iconUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white truncate">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {product.status === 'live' ? 'Available now' : 'Coming soon'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white shadow-lg hover:bg-emerald-500 transition-colors"
      >
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <Target className="h-5 w-5" />
        )}
        <span className="text-lg font-medium">
          {isOpen ? 'Close' : 'Explore'}
        </span>
      </button>
    </div>
  );
} 
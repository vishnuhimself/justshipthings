'use client';

import { Header } from './components/header';
import { ProductCard } from './components/product-card';
import { products } from './products';
import { Mail, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center space-y-6">
            {/* Main Content */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Ship
              </h1>
              <div className="text-lg md:text-xl text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
                I&apos;m <span className="text-gray-900 font-medium">Vishnu</span>, and I believe in building things that matter.
                <br />
                Here&apos;s what I&apos;ve been working on.
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 py-4">
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-900">4</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-900">2024</div>
                <div className="text-sm text-gray-500">Started</div>
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-900">∞</div>
                <div className="text-sm text-gray-500">Ideas</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              Products
            </h2>
            <p className="text-lg text-gray-600 font-normal">
              Things I&apos;ve shipped recently
            </p>
          </div>

          <div className="space-y-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-sm transition-all duration-200">
                <ProductCard
                  product={product}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-lg text-gray-600 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
            Have an idea? Want to collaborate? Just want to say hi?
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <a 
              href="mailto:hey@heyvish.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a 
              href="https://x.com/VishHimself"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-sm"
            >
              <Twitter className="h-4 w-4" />
              Follow on X
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

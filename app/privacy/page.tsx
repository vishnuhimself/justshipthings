import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policies',
  description: 'Privacy Policies for all our products',
};

export default function PrivacyPolicies() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policies</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We take your privacy seriously. Below are the privacy policies for all our products.
          </p>
        </div>

        <div className="space-y-6">
          <Link 
            href="/privacy/growthkit"
            className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  GrowthKit
                </h2>
                <p className="text-gray-600">
                  Privacy policy for GrowthKit iOS app - Track height, weight, and BMI
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </Link>

          <Link 
            href="/privacy/moosh"
            className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Moosh
                </h2>
                <p className="text-gray-600">
                  Privacy policy for Moosh iOS app - Mood tracking and journaling
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policies',
  description: 'Privacy Policies for all our products',
};

export default function PrivacyPolicies() {
  return (
    <>
      <h1>Privacy Policies</h1>
      
      <p className="lead">
        We take your privacy seriously. Below are the privacy policies for all our products.
      </p>

      <div className="not-prose mt-8">
        <Link 
          href="/privacy/growthkit"
          className="group block p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 
                   hover:border-teal-500 dark:hover:border-teal-500/30 transition-colors"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white m-0">
              GrowthKit
            </h2>
            <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-teal-500 transition-colors" />
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Privacy policy for GrowthKit iOS app - Track height, weight, and BMI
          </p>
        </Link>
      </div>
    </>
  );
} 
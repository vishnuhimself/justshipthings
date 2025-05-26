import type { Metadata } from 'next';
import { Mail, Clock, Smartphone, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GrowthKit Support',
  description: 'Get help and support for GrowthKit height and weight tracking app',
};

export default function GrowthKitSupport() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">GrowthKit Support</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help you with any questions or issues you might have with GrowthKit.
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact Us Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <a 
                    href="mailto:hey@heyvish.com" 
                    className="text-gray-900 hover:underline font-medium text-lg mb-3 block"
                  >
                    hey@heyvish.com
                  </a>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Available Monday to Friday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      <span>Typical response time: 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Before Contacting Support */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Before Contacting Support</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To help us serve you better, please include the following information in your message:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Smartphone className="h-5 w-5 text-gray-600" />
                  <h3 className="font-medium text-gray-900">Device Information</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Your device model (iPhone 14, iPad Pro, etc.)</li>
                  <li>• iOS version</li>
                  <li>• GrowthKit app version</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Info className="h-5 w-5 text-gray-600" />
                  <h3 className="font-medium text-gray-900">Issue Details</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Clear description of the issue</li>
                  <li>• Steps to reproduce the problem</li>
                  <li>• Screenshots (if helpful)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Questions */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">How do I backup my data?</h3>
                <p className="text-gray-600">
                  All your data is stored locally on your device. You can export your data from the app settings for backup purposes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Can I sync data between devices?</h3>
                <p className="text-gray-600">
                  Currently, GrowthKit stores all data locally for privacy. We&apos;re considering cloud sync options for future updates.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Is my data private?</h3>
                <p className="text-gray-600">
                  Yes! All your height, weight, and BMI data stays on your device. We don&apos;t collect or store any personal information on our servers.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              Thank you for using GrowthKit! We appreciate your feedback and are committed to providing the best experience possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 
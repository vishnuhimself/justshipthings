import type { Metadata } from 'next';
import { Mail, Clock, Smartphone, Info, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Moosh Support',
  description: 'Get help and support for Moosh mood tracking and journaling app',
};

export default function MooshSupport() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Moosh Support</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to help you with any questions or issues you might have with Moosh.
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
                  <li>• Moosh app version</li>
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
                <h3 className="font-semibold text-gray-900 mb-2">How do I backup my mood data and journal entries?</h3>
                <p className="text-gray-600">
                  All your mood data and journal entries are stored locally on your device. You can export your data from the app settings for backup purposes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Can I sync my mood data between devices?</h3>
                <p className="text-gray-600">
                  Currently, Moosh stores all data locally for maximum privacy. We&apos;re considering secure cloud sync options for future updates while maintaining your privacy.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Is my mood data and journal private?</h3>
                <p className="text-gray-600">
                  Absolutely! All your mood entries and journal notes stay on your device. We don&apos;t collect, read, or store any of your personal emotional data on our servers.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">How can I delete my data?</h3>
                <p className="text-gray-600">
                  You can delete individual entries or all your data directly from the app. Uninstalling the app will also remove all associated data from your device.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Can I set reminders for mood tracking?</h3>
                <p className="text-gray-600">
                  Yes! You can set up daily reminders in the app settings to help you maintain a consistent mood tracking routine.
                </p>
              </div>
            </div>
          </section>

          {/* Mental Health Resources */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Mental Health Resources</h2>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Professional Support?</h3>
                  <p className="text-gray-600 mb-4">
                    While Moosh is a great tool for tracking your mood, it&apos;s not a substitute for professional mental health care. If you&apos;re experiencing persistent low mood or mental health concerns, please consider reaching out to:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Your healthcare provider</li>
                    <li>• A licensed mental health professional</li>
                    <li>• Crisis helplines in your area</li>
                    <li>• National Suicide Prevention Lifeline: 988 (US)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              Thank you for using Moosh! We&apos;re honored to be part of your mental wellness journey and are committed to providing the best experience possible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 
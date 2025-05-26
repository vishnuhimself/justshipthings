import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GrowthKit Privacy Policy',
  description: 'Privacy Policy for GrowthKit iOS app',
};

export default function GrowthKitPrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">GrowthKit Privacy Policy</h1>
          
          <p className="text-sm text-gray-500 mb-12">Last updated: February 8, 2025</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At GrowthKit, we take your privacy seriously. This Privacy Policy explains how we handle your data in our height, weight, and BMI tracking application. We believe in complete transparency and user control over personal data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Data Collection and Storage</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            GrowthKit is designed with privacy at its core. All data is stored locally on your device:
          </p>
          <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Height measurements</li>
            <li>Weight measurements</li>
            <li>Profile information</li>
            <li>BMI calculations</li>
            <li>App preferences</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            We do not collect, transmit, or store any of your data on external servers. All information remains exclusively on your device and under your control.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">No Account Required</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            GrowthKit operates without user accounts or registration. You can start using the app immediately without providing any personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Data Security</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Your data is secured by your device&apos;s built-in security features. Since all data is stored locally, it benefits from your device&apos;s encryption and security measures.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            While GrowthKit can be used to track children&apos;s growth, all data management must be done by parents or legal guardians. We do not knowingly collect any personal information from children.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Data Backup and Deletion</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You have complete control over your data:
          </p>
          <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>All data can be exported for backup</li>
            <li>Data can be completely deleted from the app at any time</li>
            <li>Uninstalling the app removes all associated data</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            GrowthKit does not integrate with any third-party services or analytics platforms. We do not share any data with external parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">App Permissions</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            GrowthKit requires minimal device permissions:
          </p>
          <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
            <li>Storage access (for local data storage only)</li>
            <li>No access to contacts, location, or other sensitive information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Changes to Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Any updates to this privacy policy will be reflected in the app and on our website. Users will be notified of significant changes through app updates.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you have any questions about our privacy policy or data handling practices, please contact us at:{' '}
            <a href="mailto:hey@heyvish.com" className="text-gray-900 hover:underline font-medium">
              hey@heyvish.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Compliance</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            This privacy policy complies with the requirements of the Apple App Store and Google Play Store. We are committed to protecting your privacy and maintaining the security of your personal information.
          </p>
        </div>
      </div>
    </div>
  );
} 
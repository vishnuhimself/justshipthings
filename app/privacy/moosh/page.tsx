import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moosh Privacy Policy',
  description: 'Privacy Policy for Moosh mood tracking app',
};

export default function MooshPrivacyPolicy() {
  return (
    <>
      <h1>Moosh Privacy Policy</h1>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: May 24, 2025</p>

      <h2>Introduction</h2>
      <p>
        At Moosh, we take your privacy seriously. This Privacy Policy explains how we handle your data in our mood tracking and journaling application. We believe in complete transparency and user control over personal data.
      </p>

      <h2>Data Collection and Storage</h2>
      <p>
        Moosh is designed with privacy at its core. All data is stored locally on your device:
      </p>
      <ul>
        <li>Daily mood entries</li>
        <li>Journal notes and reflections</li>
        <li>Mood patterns and history</li>
        <li>Profile information</li>
        <li>App preferences and settings</li>
      </ul>
      <p>
        We do not collect, transmit, or store any of your data on external servers. All information remains exclusively on your device and under your control.
      </p>

      <h2>No Account Required</h2>
      <p>
        Moosh operates without user accounts or registration. You can start tracking your mood and journaling immediately without providing any personal information.
      </p>

      <h2>Data Security</h2>
      <p>
        Your mood data and journal entries are secured by your device&apos;s built-in security features. Since all data is stored locally, it benefits from your device&apos;s encryption and security measures.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        While Moosh can be used by teenagers to track their mood and emotional well-being, all data management for users under 13 must be done by parents or legal guardians. We do not knowingly collect any personal information from children.
      </p>

      <h2>Data Backup and Deletion</h2>
      <p>
        You have complete control over your mood data and journal entries:
      </p>
      <ul>
        <li>All data can be exported for backup purposes</li>
        <li>Individual entries or all data can be deleted from the app at any time</li>
        <li>Uninstalling the app removes all associated data</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        Moosh does not integrate with any third-party services or analytics platforms. We do not share any of your mood data or journal entries with external parties.
      </p>

      <h2>App Permissions</h2>
      <p>
        Moosh requires minimal device permissions:
      </p>
      <ul>
        <li>Storage access (for local data storage only)</li>
        <li>No access to contacts, location, or other sensitive information</li>
      </ul>

      <h2>Sensitive Information</h2>
      <p>
        We understand that mood data and journal entries are highly personal and sensitive. Moosh is designed to keep this information completely private and accessible only to you. We never analyze, process, or access your personal reflections and mood entries.
      </p>

      <h2>Changes to Privacy Policy</h2>
      <p>
        Any updates to this privacy policy will be reflected in the app and on our website. Users will be notified of significant changes through app updates.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our privacy policy or data handling practices, please contact us at:{' '}
        <a href="mailto:hey@heyvish.com" className="text-teal-600 dark:text-teal-400 hover:underline">
          hey@heyvish.com
        </a>
      </p>

      <h2>Compliance</h2>
      <p>
        This privacy policy complies with the requirements of the Apple App Store and Google Play Store. We are committed to protecting your privacy and maintaining the security of your personal and emotional information.
      </p>
    </>
  );
} 
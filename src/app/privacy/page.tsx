/** @jsxImportSource react */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="relative bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/gridsite-logo-dark-removebg-preview.png"
                alt="GridSite Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <span className="bg-gradient-to-r from-blue-700 to-black bg-clip-text text-xl font-bold text-transparent">
                  GridSite
                </span>
                <div className="-mt-1 text-xs text-black">
                  Power. Transformed.
                </div>
              </div>
            </Link>
            <Link 
              href="/"
              className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/70 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-4 py-2 rounded-lg"
            >
              ← Back to Vendor Portal
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 pt-20">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/80 p-8 backdrop-blur-sm shadow-xl border border-white/30 md:p-12">
            <h1 className="mb-8 text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent pb-2">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-gray-700">
              <div>
                <p className="mb-4 text-sm text-gray-500">
                  <strong>Effective Date:</strong> July 21, 2025
                </p>
                <p className="text-lg leading-relaxed">
                  GridSite Technology (&quot;GridSite,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
                  committed to protecting your personal information. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you visit our vendor portal
                  and apply to join our digital infrastructure marketplace platform.
                </p>
              </div>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  1. Information We Collect
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Personal Information
                </h3>
                <p className="mb-4 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6">
                  <li>Name, email address, and phone number</li>
                  <li>Company name and business information</li>
                  <li>Vendor capabilities and project experience</li>
                  <li>Regional coverage and availability</li>
                  <li>Technical specifications and certifications</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Automatically Collected Information
                </h3>
                <p className="mb-4 leading-relaxed">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6">
                  <li>IP address and geographic location</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6">
                  <li>To evaluate and process vendor applications</li>
                  <li>To facilitate connections between vendors and data center operators</li>
                  <li>To match vendors with appropriate project opportunities</li>
                  <li>To communicate with you about our services and market opportunities</li>
                  <li>To improve our website and platform functionality</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To provide market intelligence and analytics powered by ComputeComplete</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="mb-4 leading-relaxed">
                  We may share your information in the following circumstances:
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Within Our Marketplace
                </h3>
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  <li>
                    Vendor information may be shared with qualified data center operators and
                    project managers
                  </li>
                  <li>
                    Contact information may be shared to facilitate legitimate business
                    connections
                  </li>
                  <li>
                    We maintain strict confidentiality agreements with all platform
                    participants
                  </li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Service Providers
                </h3>
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  <li>
                    Third-party service providers who assist in operating our platform
                  </li>
                  <li>
                    ComputeComplete for market intelligence and technical analysis
                  </li>
                  <li>
                    Cloud hosting and data storage providers
                  </li>
                  <li>
                    Analytics and marketing service providers
                  </li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Legal Requirements
                </h3>
                <p className="mb-6 leading-relaxed">
                  We may disclose your information if required by law, court order, or government
                  regulation, or to protect our rights, property, or safety.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  4. Data Security
                </h2>
                <p className="mb-6 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect
                  your personal information against unauthorized access, alteration, disclosure,
                  or destruction. These measures include encryption, secure data transmission, access
                  controls, and regular security assessments. However, no method of transmission over the
                  internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="mb-4 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on
                  our website. You can control cookie settings through your browser preferences. Our use of
                  tracking technologies includes:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Marketing cookies for targeted advertising (with consent)</li>
                  <li>Google Analytics for website performance analysis</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  6. Your Rights and Choices
                </h2>
                <p className="mb-4 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal information we hold
                    about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information
                    (subject to legal requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service
                    provider
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing communications at any
                    time
                  </li>
                  <li>
                    <strong>Restrict Processing:</strong> Request limitation of how we process
                    your information
                  </li>
                </ul>
                <p className="mb-6 leading-relaxed">
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@gridsiteinc.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    privacy@gridsiteinc.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  7. Third-Party Links
                </h2>
                <p className="mb-6 leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not responsible
                  for the privacy practices or content of these external sites. We encourage you to
                  review the privacy policies of any third-party services you access through our
                  platform.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  8. International Data Transfers
                </h2>
                <p className="mb-6 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your
                  country of residence. We ensure that such transfers comply with applicable data
                  protection laws and implement appropriate safeguards to protect your information.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  9. Data Retention
                </h2>
                <p className="mb-6 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes
                  outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and
                  enforce our agreements. When information is no longer needed, we securely delete or
                  anonymize it.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  10. Children&apos;s Privacy
                </h2>
                <p className="mb-6 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not
                  knowingly collect personal information from children under 18. If we become aware that
                  we have collected personal information from a child under 18, we will take steps to
                  delete such information.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="mb-6 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices
                  or applicable laws. We will notify you of any material changes by posting the updated
                  policy on our website and updating the &quot;Effective Date&quot; at the top of this policy.
                  Your continued use of our services after such changes constitutes acceptance of the
                  updated Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  12. Contact Us
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or
                  our data practices, please contact us:
                </p>
                <div className="rounded-lg bg-gray-100 p-6">
                  <p className="mb-2">
                    <strong>GridSite Technology</strong>
                  </p>
                  <p className="mb-2">3801 East Plano Pkwy Suite 100</p>
                  <p className="mb-2">Plano, TX 75074</p>
                  <p className="mb-2">
                    Email:{" "}
                    <a
                      href="mailto:privacy@gridsiteinc.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      privacy@gridsiteinc.com
                    </a>
                  </p>
                  <p className="mb-2">
                    Phone:{" "}
                    <a
                      href="tel:+14699204821"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +1 (469) 920-4821
                    </a>
                  </p>
                  <p>
                    General Contact:{" "}
                    <a
                      href="mailto:sales@gridsiteinc.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      sales@gridsiteinc.com
                    </a>
                  </p>
                </div>
              </section>

              <div className="mt-12 border-t border-gray-300 pt-8 text-center">
                <p className="text-gray-500">
                  This Privacy Policy was last updated on July 21, 2025.
                </p>
                <p className="mt-4">
                  <Link
                    href="/"
                    className="text-blue-600 transition-colors hover:text-blue-800"
                  >
                    ← Back to Vendor Portal
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 
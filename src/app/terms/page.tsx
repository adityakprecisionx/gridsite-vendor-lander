/** @jsxImportSource react */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>

            <div className="space-y-8 text-gray-700">
              <div>
                <p className="mb-4 text-sm text-gray-500">
                  <strong>Effective Date:</strong> July 21, 2025
                </p>
                <p className="text-lg leading-relaxed">
                  Welcome to GridSite Technology ("GridSite," "we," "our," or "us"). These Terms of
                  Service ("Terms") govern your use of our vendor portal and digital infrastructure
                  marketplace platform. By accessing or using our platform, you agree to be bound by these
                  Terms.
                </p>
              </div>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-4 leading-relaxed">
                  By accessing, browsing, or using the GridSite vendor portal, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms and our Privacy Policy. If
                  you do not agree to these Terms, you may not use our services.
                </p>
                <p className="mb-6 leading-relaxed">
                  These Terms apply to all users of the platform, including vendors, data center operators,
                  and visitors to our website.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  2. Description of Services
                </h2>
                <p className="mb-4 leading-relaxed">
                  GridSite operates a digital infrastructure marketplace that connects:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Vendors:</strong> Companies providing services for data center development,
                    including engineering, construction, and operations
                  </li>
                  <li>
                    <strong>Data Center Operators:</strong> Companies looking for qualified vendors for
                    their infrastructure projects
                  </li>
                  <li>
                    <strong>Property Owners:</strong> Individuals or entities seeking to monetize
                    power-rich industrial sites
                  </li>
                </ul>
                <p className="mb-6 leading-relaxed">
                  Our platform provides market intelligence, technical analysis powered by
                  ComputeComplete, and facilitates connections between these stakeholders to transform
                  industrial sites into next-generation data centers.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  3. User Accounts and Eligibility
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Eligibility
                </h3>
                <p className="mb-4 leading-relaxed">
                  You must be at least 18 years old and have the legal authority to enter into contracts
                  to use our services. By using our platform, you represent and warrant that you meet
                  these requirements.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Account Registration
                </h3>
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  <li>
                    You must provide accurate, current, and complete information during registration
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of your account
                    credentials
                  </li>
                  <li>
                    You must promptly notify us of any unauthorized use of your account
                  </li>
                  <li>
                    You may not create multiple accounts or share your account with others
                  </li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Account Verification
                </h3>
                <p className="mb-6 leading-relaxed">
                  We reserve the right to verify user information and may require additional
                  documentation to confirm identity, business credentials, or service capabilities.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  4. Platform Usage Rules
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Permitted Uses
                </h3>
                <p className="mb-4 leading-relaxed">
                  You may use our platform to:
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  <li>Submit vendor applications and qualifications</li>
                  <li>Search for suitable project opportunities</li>
                  <li>Connect with verified stakeholders in the digital infrastructure market</li>
                  <li>Access market intelligence and technical analysis</li>
                  <li>Participate in legitimate business transactions</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Prohibited Uses
                </h3>
                <p className="mb-4 leading-relaxed">
                  You may not:
                </p>
                <ul className="mb-6 list-disc space-y-2 pl-6">
                  <li>Provide false, misleading, or fraudulent information</li>
                  <li>Use the platform for any illegal or unauthorized purposes</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Interfere with or disrupt the platform's functionality</li>
                  <li>Use automated tools to scrape or harvest data from the platform</li>
                  <li>Bypass any measures we may use to prevent or restrict access</li>
                  <li>Use the platform to compete directly with GridSite's services</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  5. Vendor Information and Qualifications
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Vendor Responsibilities
                </h3>
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  <li>You must provide accurate and current information about your capabilities</li>
                  <li>All qualifications and certifications must be valid and current</li>
                  <li>You must disclose any material limitations or restrictions</li>
                  <li>You are responsible for maintaining necessary licenses and insurance</li>
                  <li>You must comply with all applicable regulations and standards</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Information Accuracy
                </h3>
                <p className="mb-6 leading-relaxed">
                  While we strive to provide accurate information, GridSite makes no warranties
                  about the completeness, reliability, or accuracy of vendor listings or market
                  data. Users are responsible for conducting their own due diligence.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  6. Transactions and Business Relationships
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Marketplace Facilitation
                </h3>
                <p className="mb-4 leading-relaxed">
                  GridSite facilitates connections between parties but is not a party to any
                  transactions or agreements between users. All negotiations, contracts, and
                  transactions occur directly between users.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  No Guarantees
                </h3>
                <ul className="mb-4 list-disc space-y-2 pl-6">
                  <li>We do not guarantee the completion of any transactions</li>
                  <li>We do not warrant the performance or reliability of any user</li>
                  <li>We are not responsible for disputes between users</li>
                  <li>Users assume all risks associated with their business relationships</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Due Diligence
                </h3>
                <p className="mb-6 leading-relaxed">
                  Users are solely responsible for conducting appropriate due diligence, including but not
                  limited to technical assessments, financial verification, legal review, and regulatory
                  compliance checks.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  7. Intellectual Property
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  GridSite Property
                </h3>
                <p className="mb-4 leading-relaxed">
                  The GridSite platform, including its software, design, content, trademarks, and
                  ComputeComplete-powered analytics, are owned by GridSite Technology and are protected by
                  intellectual property laws.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  User Content
                </h3>
                <p className="mb-4 leading-relaxed">
                  By submitting content to our platform, you grant GridSite a non-exclusive, royalty-free
                  license to use, display, and distribute your content solely for the purpose of operating
                  our marketplace services.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Respect for Third-Party Rights
                </h3>
                <p className="mb-6 leading-relaxed">
                  You agree not to infringe upon the intellectual property rights of others and
                  to respect all applicable patents, trademarks, copyrights, and trade secrets.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  8. Privacy and Data Protection
                </h2>
                <p className="mb-4 leading-relaxed">
                  Your privacy is important to us. Our collection, use, and protection of your
                  personal information is governed by our Privacy Policy, which is incorporated into
                  these Terms by reference.
                </p>
                <p className="mb-6 leading-relaxed">
                  By using our platform, you consent to our data practices as described in our Privacy
                  Policy and acknowledge that information may be shared within our marketplace ecosystem
                  to facilitate legitimate business connections.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  9. Fees and Payment Terms
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Platform Access
                </h3>
                <p className="mb-4 leading-relaxed">
                  Basic access to our vendor portal may be provided at no charge. Premium services,
                  detailed market intelligence, and advanced features may require payment of fees as
                  specified in our service agreements.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Transaction Fees
                </h3>
                <p className="mb-4 leading-relaxed">
                  We may charge fees for successful connections or transactions facilitated
                  through our platform. All applicable fees will be clearly disclosed before you incur
                  any charges.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Payment Terms
                </h3>
                <p className="mb-6 leading-relaxed">
                  All fees are due and payable in accordance with the payment terms specified at the time
                  of service. Overdue payments may result in suspension of access to premium services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  10. Disclaimers and Limitations of Liability
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Service Disclaimers
                </h3>
                <p className="mb-4 leading-relaxed">
                  OUR PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Limitation of Liability
                </h3>
                <p className="mb-4 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, GRIDSITE SHALL NOT BE LIABLE FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                  INCLUDING BUT NOT LIMITED TO LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Maximum Liability
                </h3>
                <p className="mb-6 leading-relaxed">
                  Our total liability to you for all claims arising from your use of our platform shall
                  not exceed the amount you have paid to GridSite in the twelve (12) months preceding
                  the claim, or $1,000, whichever is greater.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  11. Indemnification
                </h2>
                <p className="mb-6 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless GridSite, its officers, directors,
                  employees, and agents from and against any claims, liabilities, damages, losses, and
                  expenses arising from your use of the platform, violation of these Terms, or
                  infringement of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  12. Termination
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Termination by You
                </h3>
                <p className="mb-4 leading-relaxed">
                  You may terminate your account at any time by contacting us or using the account
                  deletion features in your account settings.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Termination by GridSite
                </h3>
                <p className="mb-4 leading-relaxed">
                  We may suspend or terminate your access immediately if you violate these Terms,
                  engage in fraudulent activity, or for any other reason in our sole discretion.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Effect of Termination
                </h3>
                <p className="mb-6 leading-relaxed">
                  Upon termination, your right to use the platform ceases immediately. Provisions
                  regarding intellectual property, indemnification, disclaimers, and
                  limitations of liability shall survive termination.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  13. Governing Law and Dispute Resolution
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Governing Law
                </h3>
                <p className="mb-4 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the
                  State of Texas, without regard to its conflict of law principles.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Jurisdiction
                </h3>
                <p className="mb-4 leading-relaxed">
                  Any legal action or proceeding arising under these Terms shall be brought exclusively in
                  the federal or state courts located in Plano, Texas, and you hereby consent to the
                  jurisdiction of such courts.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Alternative Dispute Resolution
                </h3>
                <p className="mb-6 leading-relaxed">
                  Before filing any lawsuit, you agree to first attempt to resolve disputes through
                  good-faith negotiations. If negotiations fail, disputes may be resolved through
                  binding arbitration in accordance with the rules of the American Arbitration
                  Association.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  14. Changes to Terms
                </h2>
                <p className="mb-6 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of
                  material changes by posting updated Terms on our website and updating the "Effective
                  Date." Your continued use of the platform after such changes constitutes acceptance of
                  the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  15. General Provisions
                </h2>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Entire Agreement
                </h3>
                <p className="mb-4 leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement
                  between you and GridSite regarding your use of our platform.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Severability
                </h3>
                <p className="mb-4 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions
                  shall remain in full force and effect.
                </p>

                <h3 className="mb-3 text-xl font-medium text-blue-700">
                  Force Majeure
                </h3>
                <p className="mb-6 leading-relaxed">
                  GridSite shall not be liable for any failure to perform due to causes beyond our
                  reasonable control, including but not limited to acts of God, natural disasters,
                  government actions, or internet service interruptions.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-blue-800 pb-2">
                  16. Contact Information
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
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
                      href="mailto:legal@gridsiteinc.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      legal@gridsiteinc.com
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
                  These Terms of Service were last updated on July 21, 2025.
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
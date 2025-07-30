/** @jsxImportSource react */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function VendorLandingPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    vendorTypes: [] as string[],
    regions: [] as string[],
    capabilities: [] as string[],
    availability: "",
    projectsLastYear: "",
    completedProjects: "",
    platformIntegrations: "",
    openToCentralizing: false,
    requirements: "",
    agreeToTerms: false,
    // New Legal/Compliance fields
    licensingStatus: "",
    certifications: "",
    // New Project Size & Capacity fields
    averageProjectSize: "",
    maxProjectCapacity: "",
    // New Integration Readiness fields
    digitalDelivery: "",
    centralizedTools: "",
    centralizedToolsList: ""
  });

  const handleInputChange = (field: string, value: string | number | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Contact Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white/10 backdrop-blur-sm rounded-full shadow-lg border border-white/20 p-2">
          <div className="flex flex-col space-y-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/gridsite"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-transparent border border-gray-400/50 hover:border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              title="Connect on LinkedIn"
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* Phone */}
            <a
              href="tel:+14699204821"
              className="w-10 h-10 bg-transparent border border-gray-400/50 hover:border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              title="Call GridSite"
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              {/* Logo */}
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
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://gridsiteinc.com', '_blank')}
              className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/70 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Visit Main Site
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
              <div className="bg-white rounded-full p-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
              Join the Infrastructure Platform Powering the AI Era
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you want recurring projects or national visibility, GridSite connects leading vendors to vetted deals - fast.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('survey-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/70 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is ComputeComplete */}
      <section id="learn-more" className="relative py-20 bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4 pb-2">
              What is GridSite&apos;s ComputeComplete?
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="text-blue-600 font-semibold">GridSite</span> is building the development and investment platform for AI-era infrastructure — combining marketplace, fund, and tools.
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                <span className="text-blue-600 font-semibold">ComputeComplete</span> is our internal project delivery engine — a vendor ops platform powering due diligence, buildout, and ongoing operations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 min-h-[280px] flex flex-col">
                              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center pb-2">
                  Data Center Workstreams Are Broken
              </h3>
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold text-red-600 mb-2">Fragmented</div>
                  <p className="text-gray-700 text-base leading-relaxed">30+ vendor touchpoints per project create coordination chaos</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-red-600 mb-2">Opaque</div>
                  <p className="text-gray-700 text-base leading-relaxed">scattered project details lead to costly miscommunication and delays</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-red-600 mb-2">Costly</div>
                  <p className="text-gray-700 text-base leading-relaxed">manual RFP creation and coordination waste 12-24 months per project</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 min-h-[280px] flex flex-col">
                              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center pb-2">
                  ComputeComplete is the Solution
              </h3>
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 mb-2">Unified</div>
                  <p className="text-gray-600 text-base leading-relaxed">single platform connects all vendors with streamlined communication</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 mb-2">Clear</div>
                  <p className="text-gray-600 text-base leading-relaxed">centralized project hub with real-time documentation and messaging</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 mb-2">Simplified</div>
                  <p className="text-gray-600 text-base leading-relaxed">standardized playbooks reduce build time from 3+ years to 6-12 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Two Ways to Work With GridSite & Benefits */}
      <section className="relative py-20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4 pb-2">
              Two Ways to Work With GridSite
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Choose the partnership path that fits your business — or pursue both to maximize your reach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Vendor Network */}
            <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/60 backdrop-blur-sm p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-blue-800 mb-3">Vendor Network</h3>
                <p className="text-lg text-gray-600 mb-6">White-label partnership for recurring work</p>
              </div>
              
                              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 mb-8">
                  <h4 className="text-2xl font-semibold text-blue-800 mb-6 text-center">What You&apos;ll Do:</h4>
                  <div className="space-y-5 text-center">
                    <div className="text-gray-700 text-lg"><span className="font-semibold text-blue-600">Recurring GridSite-managed</span> projects covering due diligence, buildout, and operations</div>
                    <div className="text-gray-700 text-lg">Work inside <span className="font-semibold text-blue-600">ComputeComplete</span> to collaborate with other vendors and streamline your workflow</div>
                    <div className="text-gray-700 text-lg"><span className="font-semibold text-blue-600">Paid by GridSite</span> for your services - avoiding client chasing</div>
                    <div className="text-gray-700 text-lg"><span className="font-semibold text-blue-600">Receive certified vendor status</span> for ROFR over new projects in your region</div>
                  </div>
                </div>

              <h4 className="text-2xl font-bold text-blue-800 mb-6 text-center pb-2">Vendor Network Benefits</h4>
              <div className="grid gap-6 max-w-4xl mx-auto">
                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-l from-gray-900 to-blue-800 bg-clip-text text-transparent pb-1 text-lg">
                        Scalability & Duplicability
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Access <span className="font-semibold text-blue-600">repeat customers</span> ordering similar services <span className="font-semibold text-blue-600">across multiple projects</span>. Our marketplace and standardized playbook let you <span className="font-semibold text-blue-600">scale efficiently</span> across regions and project types.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent pb-1 text-lg">
                        Faster Project Completion
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-semibold text-green-600">Eliminate delays</span> with <span className="font-semibold text-green-600">pre-vetted sites</span>, defined scopes, and real-time updates. Get <span className="font-semibold text-green-600">paid faster</span> with more <span className="font-semibold text-green-600">accurate resource planning</span> and shortened deployment timelines.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent pb-1 text-lg">
                        Streamlined Communication
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-purple-600"> RFPs arrive 80% complete</span> — thanks to GridSite&apos;s in-house site validation. <span className="font-semibold text-purple-600">Centralized project management</span> and <span className="font-semibold text-purple-600">shared vendor communication channels</span> keep all parties aligned.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-orange-800 bg-clip-text text-transparent pb-1 text-lg">
                        Referral Revenue
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Earn <span className="font-semibold text-orange-600">bonuses by referring new clients, operators, or project leads </span>. Our referral program rewards you on top of your standard project fees.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent pb-1 text-lg">
                        Preferred Vendor Status
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Become a <span className="font-semibold text-indigo-600">GridSite Certified Vendor</span> and unlock <span className="font-semibold text-indigo-600">early access</span> to projects, <span className="font-semibold text-indigo-600">featured listings</span>, and <span className="font-semibold text-indigo-600">co-marketing visibility</span> with top operators and investors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-teal-800 bg-clip-text text-transparent pb-1 text-lg">
                        Growth Opportunities
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Join a <span className="font-semibold text-teal-600">growing network</span> of data center operators, AI tenants, and infrastructure investors looking for <span className="font-semibold text-teal-600">reliable execution partners</span>. Tap into new verticals and deal flow beyond your traditional pipeline.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Partner Listed Ecosystem */}
            <div className="bg-gradient-to-br from-indigo-50/80 to-indigo-100/60 backdrop-blur-sm p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-indigo-800 mb-3">Partner Listed Ecosystem</h3>
                <p className="text-lg text-gray-600 mb-6">Public visibility for direct client relationships</p>
              </div>
              
                              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 mb-8">
                  <h4 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">What You&apos;ll Do:</h4>
                  <div className="space-y-5 text-center">
                    <div className="text-gray-700 text-lg"><span className="font-semibold text-indigo-600">Public vendor listing</span> to maintain visibility to data center operators and developers</div>
                    <div className="text-gray-700 text-lg"><span className="font-semibold text-indigo-600">Standalone marketing</span> to clients through your GridSite listing</div>
                    <div className="text-gray-700 text-lg"><span className="font-semibold text-indigo-600">Paid by client</span> directly with option to integrate with ComputeComplete</div>
                    <div className="text-gray-700 text-lg"><span className="font-semibold text-indigo-600">Choose from listing tiers</span> that offer co-marketing, SEO boosts, and featured placement</div>
                  </div>
                </div>

              <h4 className="text-2xl font-bold text-indigo-800 mb-6 text-center pb-2">Partner Listing Benefits</h4>
              <div className="grid gap-8 max-w-4xl mx-auto">
                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent pb-1 text-lg">
                        Get Discovered
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Get discovered by <span className="font-semibold text-emerald-600">top DCOs and developers</span> actively seeking reliable vendors for all their infrastructure project needs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-amber-800 bg-clip-text text-transparent pb-1 text-lg">
                        Vetted Partner Badge
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Upgrade visibility with <span className="font-semibold text-amber-600">GridSite-vetted partner badge</span> that builds trust and credibility with potential clients browsing our listings.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-rose-800 bg-clip-text text-transparent pb-1 text-lg">
                        Amplify Your Brand
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Unlock <span className="font-semibold text-rose-600">co-marketing & SEO boosts</span> to amplify your brand visibility and reach new audiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-cyan-800 bg-clip-text text-transparent pb-1 text-lg">
                        ComputeComplete Ready
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-semibold text-cyan-600">ComputeComplete compatibility</span> builds trust and shows you&apos;re ready for <span className="font-semibold text-cyan-600">integration-ready workflows, compatible scopes, and a reputation for efficient delivery.</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-white/30 hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <span className="bg-gradient-to-r from-gray-900 to-violet-800 bg-clip-text text-transparent pb-1 text-lg">
                        Grow With GridSite
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-semibold text-violet-600">Low-friction way</span> to join early and grow with us as we expand our ecosystem and market reach.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect After Applying */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4 pb-2">
              What to Expect After Applying
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Once you apply, our partnerships team will:
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Review & Assessment</h3>
                    <p className="text-gray-600 text-sm">Review your experience and project focus to determine the best partnership fit</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Partnership Assignment</h3>
                    <p className="text-gray-600 text-sm">Assign you to the Vendor Network and/or Partner Directory based on your goals</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Platform Onboarding</h3>
                    <p className="text-gray-600 text-sm">Onboard you to ComputeComplete if selected for the Vendor Network</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Opportunity Matching</h3>
                    <p className="text-gray-600 text-sm">Follow up when relevant opportunities or listings arise for your capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Qualification Survey */}
      <section id="survey-form" className="relative py-20 bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4 pb-2">
              Vendor Qualification Survey
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We review all applicants to ensure fit. Only takes 3 minutes.
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-md border-white/30 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
              <CardTitle className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Vendor Application Form
              </CardTitle>
              <CardDescription className="text-gray-600">
                Complete this form to be considered for GridSite&apos;s vendor network. 
                All information will be kept confidential.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name 
                  </label>
                  <Input
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Your company name"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="First name"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Last name"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="contact@company.com"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <Input
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                  />
                </div>

                {/* Vendor Capabilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vendor Type (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'Energy/Utility Provider',
                      'Architecture and Design',
                      'Structural Engineering',
                      'MEP Engineering',
                      'Fire Suppression',
                      'Power Infrastructure',
                      'Plumbing Infrastructure',
                      'Cooling Infrastructure',
                      'IT Infrastructure',
                      'Security',
                      'Fiber/Network',
                      'Corporate',
                      'GC',
                      'Remote Management',
                      'Other'
                    ].map((vendorType) => (
                      <div key={vendorType} className="flex items-center space-x-2">
                        <Checkbox
                          id={vendorType}
                          checked={formData.vendorTypes.includes(vendorType)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleInputChange('vendorTypes', [...formData.vendorTypes, vendorType]);
                            } else {
                              handleInputChange('vendorTypes', formData.vendorTypes.filter(v => v !== vendorType));
                            }
                          }}
                          className="text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor={vendorType} className="text-sm text-gray-700">
                          {vendorType}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capabilities (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'Edge Data Center Buildout',
                      'Greenfield Development',
                      'Retrofit Projects',
                      'Modular Construction'
                    ].map((capability) => (
                      <div key={capability} className="flex items-center space-x-2">
                        <Checkbox
                          id={capability}
                          checked={formData.capabilities.includes(capability)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleInputChange('capabilities', [...formData.capabilities, capability]);
                            } else {
                              handleInputChange('capabilities', formData.capabilities.filter(c => c !== capability));
                            }
                          }}
                          className="text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor={capability} className="text-sm text-gray-700">
                          {capability}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Regional Coverage (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'National',
                      'International',
                      'West Texas',
                      'Southwest',
                      'Pacific Northwest',
                      'North',
                      'Midwest',
                      'Northeast',
                      'Mid-Atlantic',
                      'Southeast'
                    ].map((region) => (
                      <div key={region} className="flex items-center space-x-2">
                        <Checkbox
                          id={region}
                          checked={formData.regions.includes(region)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleInputChange('regions', [...formData.regions, region]);
                            } else {
                              handleInputChange('regions', formData.regions.filter(r => r !== region));
                            }
                          }}
                          className="text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor={region} className="text-sm text-gray-700">
                          {region}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>



                <Separator className="bg-gradient-to-r from-blue-200 to-indigo-200" />

                {/* Legal / Compliance Basics */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    Legal & Compliance Basics
                  </h3>                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Licensing Status
                      </label>
                      <Select value={formData.licensingStatus} onValueChange={(value) => handleInputChange('licensingStatus', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm">
                          <SelectValue placeholder="Are you licensed and insured to perform the services you've selected in your covered regions?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fully-licensed">Yes, fully licensed and insured</SelectItem>
                          <SelectItem value="in-progress">No, but in progress</SelectItem>
                          <SelectItem value="not-applicable">Not applicable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Certifications
                      </label>
                      <Textarea
                        value={formData.certifications}
                        onChange={(e) => handleInputChange('certifications', e.target.value)}
                        placeholder="Any notable industry certifications (e.g., Tier III Design, UL, OSHA, ISO, etc.)?"
                        rows={2}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                <Separator className="bg-gradient-to-r from-blue-200 to-indigo-200" />

                {/* Project Size & Capacity */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    Project Size & Capacity
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Project Size (MW or sqft)
                      </label>
                      <Select value={formData.averageProjectSize} onValueChange={(value) => handleInputChange('averageProjectSize', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm">
                          <SelectValue placeholder="What is the typical size of your data center projects?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1mw">&lt;1 MW</SelectItem>
                          <SelectItem value="1-5mw">1–5 MW</SelectItem>
                          <SelectItem value="5-20mw">5–20 MW</SelectItem>
                          <SelectItem value="20-plus-mw">20+ MW</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maximum Project Capacity (Simultaneous)
                      </label>
                      <Input
                        type="number"
                        value={formData.maxProjectCapacity}
                        onChange={(e) => handleInputChange('maxProjectCapacity', e.target.value)}
                        placeholder="How many active projects can you support at once?"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability
                      </label>
                      <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm">
                          <SelectValue placeholder="Select your current availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate availability</SelectItem>
                          <SelectItem value="within-30-days">Within 30 days</SelectItem>
                          <SelectItem value="within-90-days">Within 90 days</SelectItem>
                          <SelectItem value="project-specific">Project-specific availability</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of projects worked on last year
                      </label>
                      <Input
                        type="number"
                        value={formData.projectsLastYear}
                        onChange={(e) => handleInputChange('projectsLastYear', parseInt(e.target.value) || '')}
                        placeholder="How many projects did you work on last year?"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Completed Projects Description
                    </label>
                    <Textarea
                      value={formData.completedProjects}
                      onChange={(e) => handleInputChange('completedProjects', e.target.value)}
                      placeholder="Describe your most relevant completed projects, including size, scope, and outcomes..."
                      rows={4}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <Separator className="bg-gradient-to-r from-blue-200 to-indigo-200" />

                {/* Integration Readiness */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    Integration Readiness
                  </h3>                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Are you able to submit deliverables digitally (drawings, permits, scopes, etc.)?
                      </label>
                      <Select value={formData.digitalDelivery} onValueChange={(value) => handleInputChange('digitalDelivery', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm">
                          <SelectValue placeholder="Select your digital delivery capability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regularly">Yes, we regularly use digital delivery systems</SelectItem>
                          <SelectItem value="sometimes">Sometimes, depends on client</SelectItem>
                          <SelectItem value="no">No, we typically work manually</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Have you worked on projects with centralized collaboration tools before?
                      </label>
                      <Select value={formData.centralizedTools} onValueChange={(value) => handleInputChange('centralizedTools', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm">
                          <SelectValue placeholder="Select your experience with centralized tools" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="not-sure">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.centralizedTools === 'yes' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Which centralized collaboration tools have you used?
                        </label>
                        <Textarea
                          value={formData.centralizedToolsList}
                          onChange={(e) => handleInputChange('centralizedToolsList', e.target.value)}
                          placeholder="List the tools you've used (e.g., Procore, PlanGrid, Autodesk Construction Cloud, etc.)"
                          rows={2}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Platform Integration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Platform Integrations & Tools
                  </label>
                  <Textarea
                    value={formData.platformIntegrations}
                    onChange={(e) => handleInputChange('platformIntegrations', e.target.value)}
                    placeholder="What systems/tools do you currently use for communications, project management, and execution?"
                    rows={3}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="centralizing"
                    checked={formData.openToCentralizing}
                    onCheckedChange={(checked) => handleInputChange('openToCentralizing', checked)}
                    className="text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="centralizing" className="text-sm text-gray-700 font-semibold">
                    Are you open to centralizing through ComputeComplete and using our modular playbooks and standardized project types?
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Requirements from GridSite
                  </label>
                  <Textarea
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    placeholder="What do you need from GridSite to be successful? Any specific support, resources, or terms?"
                    rows={3}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                  />
                </div>

                <Separator className="bg-gradient-to-r from-blue-200 to-indigo-200" />

                {/* Terms Agreement */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                    className="text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to be contacted by GridSite regarding potential partnership opportunities and 
                    understand that my information will be used for vendor qualification purposes.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                  disabled={!formData.agreeToTerms}
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center space-x-3">
          <Image
                  src="/images/gridsite-light.png"
                  alt="GridSite Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    GridSite
                  </h3>
                  <div className="text-sm text-blue-200">
                    Power. Transformed.
                  </div>
                </div>
              </div>
              <p className="mb-6 max-w-md text-gray-400">
                The digital infrastructure marketplace connecting
                property owners, data center operators, and
                investors to transform power-rich industrial sites
                into next-generation data centers.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:sales@gridsiteinc.com"
                    className="transition-colors hover:text-white"
                  >
                    sales@gridsiteinc.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:+14699204821"
                    className="transition-colors hover:text-white"
                  >
                    +1 (469) 920-4821
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    3801 East Plano Pkwy Suite 100, Plano, TX 75074
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
              <div className="text-center text-gray-400 sm:text-left">
                <p>
                  &copy; 2025 GridSite Technology. All rights
                  reserved.
                </p>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={() => {
                    console.log('Terms button clicked');
                    window.open('/terms', '_self');
                  }}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer z-10 relative"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => {
                    console.log('Privacy button clicked');
                    window.open('/privacy', '_self');
                  }}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer z-10 relative"
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

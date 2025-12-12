"use client";

import React from 'react';
import { ArrowRight, MapPin, Building2, Users, TrendingUp, DollarSign, Calendar, CheckCircle, Briefcase, Target, Award, BarChart3, Home, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    { 
      name: "Melbourne Modular Village", 
      location: "Melbourne, VIC", 
      type: "Residential", 
      units: "48 Homes",
      status: "Completed",
      year: "2024",
      value: "$12.5M",
      roi: "18% IRR",
      desc: "Sustainable modular housing community featuring energy-efficient homes and community spaces with strong rental yields.",
      highlights: ["Government Partnership", "100% Occupied", "ESG Compliant"]
    },
    { 
      name: "Sunrise Care Centre", 
      location: "Sydney, NSW", 
      type: "Aged Care", 
      units: "80 Beds",
      status: "Completed",
      year: "2024",
      value: "$28M",
      roi: "22% IRR",
      desc: "State-of-the-art aged care facility with modern amenities generating stable long-term returns.",
      highlights: ["Federal Funding", "95% Occupancy", "20-Year Lease"]
    },
    { 
      name: "Community Hub Brisbane", 
      location: "Brisbane, QLD", 
      type: "Mixed Use", 
      units: "35 Units",
      status: "In Progress",
      year: "2025",
      value: "$15.8M",
      roi: "Est. 20% IRR",
      desc: "Mixed-use development combining affordable housing with community facilities and retail generating multiple revenue streams.",
      highlights: ["Multi-Income", "Council Support", "Q2 2025 Completion"]
    },
    { 
      name: "Adelaide Childcare Centre", 
      location: "Adelaide, SA", 
      type: "Childcare", 
      units: "120 Places",
      status: "Completed",
      year: "2023",
      value: "$8.2M",
      roi: "19% IRR",
      desc: "Purpose-built childcare facility with strong demand and stable government-backed income.",
      highlights: ["CCS Approved", "Waitlist Full", "Triple Net Lease"]
    },
    { 
      name: "Perth Rooming House Complex", 
      location: "Perth, WA", 
      type: "Rooming House", 
      units: "24 Rooms",
      status: "Completed",
      year: "2023",
      value: "$4.8M",
      roi: "16% IRR",
      desc: "Affordable rooming house providing safe accommodation with consistent cash flow and low vacancy.",
      highlights: ["NRAS Eligible", "Social Impact", "Stable Tenancy"]
    },
    { 
      name: "Canberra Social Housing Project", 
      location: "Canberra, ACT", 
      type: "Social Housing", 
      units: "60 Units",
      status: "In Progress",
      year: "2025",
      value: "$22M",
      roi: "Est. 17% IRR",
      desc: "Government partnership delivering affordable social housing with guaranteed rental income.",
      highlights: ["Gov't Backed", "NRAS Income", "Long-term Lease"]
    }
  ];

  const stats = [
    { number: "$95M+", label: "Total Development Value", icon: DollarSign, color: "text-emerald-500" },
    { number: "19.2%", label: "Avg. Project IRR", icon: TrendingUp, color: "text-amber-500" },
    { number: "200+", label: "Homes Delivered", icon: Home, color: "text-cyan-500" },
    { number: "100%", label: "On-Time Delivery", icon: CheckCircle, color: "text-green-500" }
  ];

  const investmentHighlights = [
    {
      icon: Shield,
      title: "Risk-Mitigated",
      desc: "Government partnerships and pre-approved funding reduce development risk"
    },
    {
      icon: TrendingUp,
      title: "Strong Returns",
      desc: "Average IRR of 19.2% across completed projects"
    },
    {
      icon: Target,
      title: "Social Impact",
      desc: "ESG-aligned investments with measurable community outcomes"
    },
    {
      icon: BarChart3,
      title: "Stable Income",
      desc: "Long-term leases and government-backed rental guarantees"
    }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Animated Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  PROVEN TRACK RECORD
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Projects That</span>
                <span className="block mt-2">
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-white to-cyan-500">
                    Deliver Value
                  </span>
                </span>
              </h1>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-amber-400 mb-1">$95M+</div>
                  <div className="text-sm text-gray-300">Total Portfolio Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">19.2%</div>
                  <div className="text-sm text-gray-300">Average IRR</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#portfolio"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Partner With Us
                  <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Main Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900">
                   <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
                  
                                  {/* Main Image */}
                                  <Image
                                    src="/project-images/Hero.jpg"
                                    alt="HavenBridge Development Projects"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 0px, 50vw"
                                    priority
                                  />
                </div>
                {/* Replace above div with actual image:
                <Image
                  src="/projects/hero-project.jpg"
                  alt="HavenBridge Development Projects"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 50vw"
                  priority
                />
                */}

                {/* Floating Stats */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-emerald-400">95%</div>
                    <div className="text-xs text-gray-300">Avg Occupancy</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-amber-400">6</div>
                    <div className="text-xs text-gray-300">Active Projects</div>
                  </div>
                </div>

                {/* Corner Icons */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-16 bg-linear-to-br from-slate-50 to-cyan-50 -mt-8 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${stat.color.replace('text', 'bg')}/10`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-gray-100 overflow-hidden rounded-full">
                      <div className={`h-full ${stat.color.replace('text', 'bg')} rounded-full group-hover:animate-progress`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">INVESTMENT STRENGTHS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Invest in Our Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentHighlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-linear-to-br from-slate-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl w-fit mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section id="portfolio" className="py-20 bg-linear-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
              <Building2 className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-600">PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Recent Developments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each project combines financial performance with meaningful community impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              >
                {/* Project Image */}
                <div className="aspect-4/3 bg-linear-to-br from-slate-800 to-slate-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Building2 className="w-12 h-12 mx-auto mb-2 opacity-30" />
                      <p className="text-sm opacity-50">[Project Image]</p>
                    </div>
                  </div>
                  {/* Replace with: <Image src={`/projects/${project.name}.jpg`} ... /> */}
                  
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                      project.status === "Completed" 
                        ? "bg-green-500/90 text-white" 
                        : "bg-amber-500/90 text-slate-900"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Financial Metrics Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex gap-2">
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 flex-1">
                        <div className="text-xs text-gray-200 mb-0.5">Value</div>
                        <div className="text-sm font-bold text-white">{project.value}</div>
                      </div>
                      <div className="bg-emerald-500/20 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-emerald-400/30 flex-1">
                        <div className="text-xs text-emerald-200 mb-0.5">IRR</div>
                        <div className="text-sm font-bold text-emerald-300">{project.roi}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-cyan-600 font-semibold mb-3 text-sm">
                    {project.units} • {project.year}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, j) => (
                      <span key={j} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="/contact"
                    className="inline-flex items-center text-cyan-500 font-semibold hover:gap-2 transition-all group"
                  >
                    View Case Study 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Investment Focused */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">PARTNERSHIP OPPORTUNITIES</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Invest in
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-emerald-400">
                Impact-Driven Development?
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Join our portfolio of investors creating financial returns and positive social outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Request Project Info</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-12 py-5 text-xl font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all"
              >
                <span className="relative z-10">Schedule Call</span>
                <Calendar className="relative z-10 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

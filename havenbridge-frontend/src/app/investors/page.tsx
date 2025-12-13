"use client";

import React from "react";
import Image from "next/image";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  Handshake,
  Building2,
  Target,
  Award,
  Sparkles,
  ChevronRight,
  Zap,
  Clock,
  Download,
  Phone,
  Mail,
  MapPin,
  Home,
  PieChart,
  Globe,
  Star,
  Calendar,
  Briefcase,
  Heart,
  Calculator,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InvestorsPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Strong Returns",
      desc: "Average 19.2% IRR across completed projects",
      color: "from-emerald-400 to-emerald-500",
      bgColor: "bg-emerald-400/10",
    },
    {
      icon: Shield,
      title: "Risk Management",
      desc: "Government partnerships and pre-approved funding",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: BarChart3,
      title: "Market Growth",
      desc: "Positioned in high-demand affordable housing sector",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-400/10",
    },
    {
      icon: Globe,
      title: "ESG Impact",
      desc: "Measurable social outcomes alongside financial returns",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
    },
  ];

  const investmentTiers = [
    {
      title: "Project Investment",
      desc: "Direct investment in specific property development projects",
      features: [
        "Project-specific ROI",
        "18-24 month horizon",
        "Active management",
        "Regular updates",
      ],
      roi: "15-22%",
      minInvestment: "$250K+",
      timeline: "18-24 months",
      color: "from-amber-400 to-orange-500",
      icon: Building2,
    },
    {
      title: "Portfolio Investment",
      desc: "Diversified investment across multiple HavenBridge projects",
      features: [
        "Risk diversification",
        "Multiple revenue streams",
        "Long-term growth",
        "Professional management",
      ],
      roi: "12-18%",
      minInvestment: "$500K+",
      timeline: "3-5 years",
      color: "from-cyan-400 to-blue-500",
      icon: PieChart,
    },
    {
      title: "Government Co-Investment",
      desc: "Government-backed social housing and infrastructure projects",
      features: [
        "Guaranteed income",
        "Long-term leases",
        "Social impact focus",
        "Regulatory security",
      ],
      roi: "10-15%",
      minInvestment: "$1M+",
      timeline: "2-4 years",
      color: "from-emerald-400 to-green-500",
      icon: Shield,
    },
  ];

  const partnerBenefits = [
    {
      title: "Strategic Alliance",
      desc: "Join forces with a leading community-focused developer",
      icon: Handshake,
      color: "from-amber-400 to-amber-500",
    },
    {
      title: "Co-Development",
      desc: "Collaborate on joint ventures and shared projects",
      icon: Briefcase,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Network Access",
      desc: "Connect with government and community stakeholders",
      icon: Users,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Brand Association",
      desc: "Align with our values-led development approach",
      icon: Award,
      color: "from-violet-500 to-purple-500",
    },
  ];

  const stats = [
    {
      label: "Portfolio Value",
      value: "$95M+",
      icon: DollarSign,
      color: "text-emerald-500",
    },
    {
      label: "Average IRR",
      value: "19.2%",
      icon: TrendingUp,
      color: "text-amber-500",
    },
    {
      label: "Projects Delivered",
      value: "15+",
      icon: Building2,
      color: "text-cyan-500",
    },
    {
      label: "Active Investors",
      value: "50+",
      icon: Users,
      color: "text-violet-500",
    },
  ];

  const investmentProcess = [
    {
      step: "1",
      title: "Consultation",
      desc: "Discuss goals & opportunities",
      icon: Phone,
      color: "from-amber-400 to-amber-500",
    },
    {
      step: "2",
      title: "Due Diligence",
      desc: "Review projections & terms",
      icon: FileText,
      color: "from-cyan-500 to-blue-500",
    },
    {
      step: "3",
      title: "Agreement",
      desc: "Finalize documentation",
      icon: Handshake,
      color: "from-emerald-500 to-green-500",
    },
    {
      step: "4",
      title: "Management",
      desc: "Ongoing updates & support",
      icon: BarChart3,
      color: "from-violet-500 to-purple-500",
    },
  ];

  const keyPartners = [
    { name: "Housing Australia", type: "Government", logo: "🏛️" },
    { name: "Impact Capital", type: "Investment", logo: "💼" },
    { name: "Community Housing Ltd", type: "Non-Profit", logo: "🏘️" },
    { name: "Australian Unity", type: "Corporate", logo: "🤝" },
    { name: "Bendigo Bank", type: "Financial", logo: "🏦" },
    { name: "UNSW Research", type: "Academic", logo: "🎓" },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />
      {/* Hero Section with Image on Right */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Animated Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  INVESTORS & PARTNERS
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Build with</span>
                <span className="block mt-2">
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-white to-cyan-500">
                    Purpose & Profit
                  </span>
                </span>
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-5">
                <a
                  href="#investment-opportunities"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
                >
                  <span className="relative z-10">Explore Opportunities</span>
                  <ArrowRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#become-partner"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <span>Become a Partner</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Placeholder for Hero Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
                  <Image
                    src="/investor-images/Hero.png"
                    alt="HavenBridge Investment Portfolio"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Metrics */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-emerald-500/20 backdrop-blur-sm p-4 rounded-xl border border-emerald-400/30">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-emerald-300" />
                      <span className="text-emerald-200 font-semibold text-sm">
                        Strong Growth
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-white">+24%</div>
                    <div className="text-xs text-emerald-200">
                      YoY Portfolio Growth
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-cyan-300" />
                      <span className="text-gray-200 font-semibold text-sm">
                        Risk-Mitigated
                      </span>
                    </div>
                    <div className="text-xs text-gray-300">
                      Government-backed projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest - Fixed Icons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left - Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-semibold text-emerald-600">
                    INVESTMENT ADVANTAGES
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Why Invest with HavenBridge
                </h2>

                <p className="text-xl text-gray-600 mb-8">
                  Unique investment opportunities in Australia's high-growth
                  affordable housing sector with strong government support.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 bg-linear-to-r from-slate-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all"
                      >
                        <div
                          className={`p-3 rounded-xl bg-linear-to-r ${benefit.color}`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Image Placeholder */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-blue-900 to-cyan-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-blue-900">
                      <Image
                        src="/investor-images/why.png"
                        alt="Story Image 1"
                        fill
                        className="object-cover opacity-50"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={85}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-emerald-400">
                      100%
                    </div>
                    <div className="text-xs text-gray-300">
                      On-Time Delivery
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-amber-400">50+</div>
                    <div className="text-xs text-gray-300">
                      Active Investors
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities - Enhanced */}
      <section
        id="investment-opportunities"
        className="py-24 bg-linear-to-br from-slate-50 to-white"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
              <Target className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-600">
                INVESTMENT PATHWAYS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the investment structure that aligns with your goals and
              risk profile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {investmentTiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <div key={i} className="group relative">
                  <div
                    className={`absolute -inset-4 bg-linear-to-r ${tier.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                    {/* Top Accent */}
                    <div className={`h-2 bg-linear-to-r ${tier.color}`}></div>

                    <div className="p-8 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`p-4 rounded-xl bg-linear-to-br ${tier.color} bg-opacity-10`}
                        >
                          <Icon className="w-8 h-8 text-slate-900" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-emerald-600">
                            {tier.roi}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            Target IRR
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                        {tier.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{tier.desc}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-6 flex-1">
                        {tier.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Minimum Investment & Timeline */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 rounded-xl p-4">
                          <div className="text-xs text-gray-500 mb-1">
                            Minimum
                          </div>
                          <div className="text-2xl font-bold text-slate-900">
                            {tier.minInvestment}
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4">
                          <div className="text-xs text-gray-500 mb-1">
                            Timeline
                          </div>
                          <div className="text-lg font-bold text-slate-900">
                            {tier.timeline}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href="/contact"
                        className="w-full py-3 bg-linear-to-r from-slate-900 to-slate-800 text-white font-bold rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all group-hover:shadow-lg text-center"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Partner Section - Enhanced */}
      <section id="become-partner" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 rounded-full border border-amber-500/20 mb-6">
              <Handshake className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-600">
                STRATEGIC ALLIANCES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our network of strategic partners and create lasting impact
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="group text-center">
                  <div
                    className={`relative inline-flex p-5 rounded-xl bg-linear-to-br ${benefit.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-10 h-10 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Current Partners */}
          <div className="bg-linear-to-r from-slate-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Our Strategic Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {keyPartners.map((partner, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-slate-900 text-sm">
                      {partner.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {partner.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-10 py-4 rounded-xl font-bold hover:from-amber-500 hover:to-amber-400 transition-all shadow-xl"
            >
              <span className="relative z-10">Discuss Partnership</span>
              <ChevronRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Investment Process - Enhanced */}
      <section className="py-24 bg-linear-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600">
                  STREAMLINED PROCESS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                How to Invest
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A transparent, structured approach to successful partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {investmentProcess.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="group relative text-center">
                    {/* Connecting Line */}
                    {i < 3 && (
                      <div className="hidden md:block absolute top-12 left-3/4 w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0"></div>
                    )}

                    <div className="relative z-10">
                      {/* Step Circle */}
                      <div
                        className={`relative w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <span className="text-white font-bold text-2xl">
                          {step.step}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-white">
                GET STARTED
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Build Your
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-white to-cyan-400">
                Investment Legacy?
              </span>
            </h2>

            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Contact our investor relations team to explore opportunities and
              receive our detailed investor pack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <Phone className="relative z-10 w-5 h-5" />
                <span className="relative z-10">Schedule Meeting</span>
              </a>
              <a
                href="/calculators"
                className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-12 py-5 text-xl font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Calculator className="w-5 h-5" />
                <span>Use the calculator</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

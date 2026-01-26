"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  Building2,
  FileText,
  MapPin,
  Blocks,
  Handshake,
  TrendingUp,
  Users,
  Shield,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  Lock,
} from "lucide-react";

export default function WhatWeDoPage() {
  const services = [
    {
      icon: Building2,
      title: "Development Management",
      description: "End-to-end project delivery from concept through completion, including design coordination, contractor management, quality assurance, and delivery oversight.",
      color: "from-amber-400 to-amber-600",
      gradient: "from-amber-50 to-orange-50",
      features: [
        "Design coordination and value engineering",
        "Contractor procurement and management",
        "Quality assurance and delivery oversight",
        "Program management and milestone tracking",
      ],
    },
    {
      icon: FileText,
      title: "Feasibility & Advisory",
      description: "Bank-grade feasibility modelling and development advisory services that support investment decisions, project structuring, and risk assessment.",
      color: "from-sky-400 to-blue-600",
      gradient: "from-sky-50 to-blue-50",
      features: [
        "Investment-grade feasibility analysis",
        "Project structuring and risk assessment",
        "Development strategy and planning",
        "Capital requirements and funding pathways",
      ],
    },
    {
      icon: MapPin,
      title: "Land Acquisition",
      description: "Strategic land sourcing including off-market opportunities, site due diligence, planning assessment, and acquisition support.",
      color: "from-emerald-400 to-green-600",
      gradient: "from-emerald-50 to-green-50",
      features: [
        "Off-market site sourcing and networks",
        "Site due diligence and feasibility",
        "Planning assessment and risk review",
        "Acquisition structuring and negotiation",
      ],
    },
    {
      icon: Blocks,
      title: "Diversified Delivery Models",
      description: "We specialise in both traditional, modular, and prefabricated capability that accelerates timelines, controls costs, and delivers quality housing outcomes.",
      color: "from-violet-400 to-purple-600",
      gradient: "from-violet-50 to-purple-50",
      features: [
        "Traditional construction delivery",
        "Modular and prefabricated systems",
        "Cost optimization and time efficiency",
        "Quality control across delivery methods",
      ],
    },
    {
      icon: Handshake,
      title: "Partnership Housing",
      description: "Collaborative delivery models with CHPs, councils, and governments that align funding, planning, and delivery.",
      color: "from-cyan-400 to-teal-600",
      gradient: "from-cyan-50 to-teal-50",
      features: [
        "CHP partnership structures",
        "Government alignment and reporting",
        "Funding coordination and optimization",
        "Stakeholder engagement and communication",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investment Syndication Pathway",
      description: "AFSL-enabled pathway to mobilise wholesale and diaspora capital participation in housing development through compliant investment structures.",
      color: "from-orange-400 to-red-600",
      gradient: "from-orange-50 to-red-50",
      features: [
        "Wholesale investor access pathways",
        "Compliant investment structures",
        "Diaspora capital mobilization",
        "Transparent reporting and governance",
      ],
    },
    {
      icon: Users,
      title: "Joint Ventures",
      description: "We are open to forming disciplined joint ventures to deliver housing projects that withstand public scrutiny and institutional diligence—covering feasibility, approvals coordination, structuring, delivery management, and CHP interface.",
      color: "from-pink-400 to-rose-600",
      gradient: "from-pink-50 to-rose-50",
      features: [
        "Disciplined JV structuring",
        "Public accountability standards",
        "Institutional-grade diligence",
        "Full project lifecycle management",
      ],
    },
  ];

  const governancePoints = [
    {
      icon: Shield,
      title: "Institutional Trust",
      description: "Governance frameworks designed for public accountability and stakeholder confidence.",
    },
    {
      icon: Lock,
      title: "Risk Management",
      description: "Comprehensive risk identification, mitigation, and monitoring across all project phases.",
    },
    {
      icon: BarChart3,
      title: "Capital Readiness",
      description: "Investment-grade documentation, reporting, and controls that meet institutional requirements.",
    },
    {
      icon: Award,
      title: "Long-Term Value",
      description: "Sustainable delivery models that protect asset quality and operational performance.",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 shadow-2xl">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Our Capabilities
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              End-to-End Development
              <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                Capability
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Built for <span className="text-white font-medium">public accountability</span> and{" "}
              <span className="text-white font-medium">institutional capital</span>.
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-sky-400/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Premium */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white via-sky-50/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-50 rounded-full border-2 border-amber-200/50 mb-6">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
                  What We Deliver
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Seven Core Services
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                <div className="h-1.5 w-3 bg-amber-600 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                Comprehensive capabilities designed to deliver housing projects from{" "}
                <span className="font-bold text-blue-700">concept to completion</span>.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Animated Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100`}></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                        {service.title}
                      </h3>

                      <p className="text-base text-gray-700 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Governance Matters - Premium */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6 shadow-lg">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black text-white uppercase tracking-widest">
                  Why Governance Matters
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Built for Institutional Standards
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-sky-400 rounded-full"></div>
                <div className="h-1.5 w-3 bg-sky-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Our governance framework ensures every project meets the standards expected by{" "}
                <span className="text-white font-medium">government, institutional investors, and communities</span>.
              </p>
            </div>

            {/* Governance Points Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {governancePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-500 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-4">
                      {point.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage Section */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white to-amber-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-sky-50 rounded-full border-2 border-sky-200/50 mb-6">
                <Users className="w-5 h-5 text-sky-600" />
                <span className="text-xs font-black text-sky-700 uppercase tracking-widest">
                  How We Engage
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Tailored to Your Needs
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-1.5 w-20 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></div>
                <div className="h-1.5 w-3 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                We work with three primary cohorts, each with unique requirements and priorities.
              </p>
            </div>

            {/* Cohort Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Government",
                  icon: Building2,
                  description: "Align delivery to government priorities with compliance-first documentation, transparent procurement, and audit-ready reporting.",
                  color: "from-amber-400 to-amber-600",
                  gradient: "from-amber-50 to-orange-50",
                },
                {
                  title: "Community Housing Providers",
                  icon: Users,
                  description: "Co-design delivery models that support social licence and operational outcomes—role clarity, delivery readiness checks, and reporting rhythms.",
                  color: "from-sky-400 to-blue-600",
                  gradient: "from-sky-50 to-blue-50",
                },
                {
                  title: "Financial Sponsors",
                  icon: TrendingUp,
                  description: "Provide institutional controls, project assurance, and disciplined reporting to support return and risk requirements.",
                  color: "from-emerald-400 to-green-600",
                  gradient: "from-emerald-50 to-green-50",
                },
              ].map((cohort, index) => {
                const Icon = cohort.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-sky-300 hover:shadow-2xl transition-all duration-500"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cohort.gradient} rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100`}></div>

                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-br ${cohort.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-4">
                        {cohort.title}
                      </h3>

                      <p className="text-base text-gray-700 leading-relaxed">
                        {cohort.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Start
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                a Conversation?
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Discuss a partnership, submit a site, or book a consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-900 px-12 py-6 text-xl font-black rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
              >
                Discuss a Partnership
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-4 bg-transparent border-2 border-white text-white px-12 py-6 text-xl font-black rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-500"
              >
                Submit a Site
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
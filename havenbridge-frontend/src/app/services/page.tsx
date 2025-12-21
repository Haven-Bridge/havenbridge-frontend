"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";

import {
  Home,
  Building,
  Baby,
  Heart,
  Users,
  Trees,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building2,
  HomeIcon,
  BedDouble,
  ShieldCheck,
  ClipboardCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Affordable & Social Housing",
      desc: "We partner with NGOs, housing associations, councils, and government programs including HAFF and the Big Housing Build. We deliver turnkey developments aligned to planning frameworks.",
      features: [
        "Partnerships with NGOs & housing associations",
        "Alignment with HAFF and Big Housing Build",
        "Council and government program collaboration",
        "Turnkey development delivery",
        "Planning framework compliance",
      ],
      link: "/contact",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Building,
      title: "Rooming House Development",
      desc: "We deliver compliant, high-yield rooming house projects in Wyndham, Brimbank, Casey, and Dandenong. Includes feasibility, building design, permits, and construction management.",
      features: [
        "Compliant rooming house projects",
        "Focus on Wyndham, Brimbank, Casey, Dandenong",
        "High-yield investment returns",
        "End-to-end project delivery",
        "Full permit management",
      ],
      link: "/contact",
      color: "from-amber-600 to-orange-500",
    },
    {
      icon: Heart,
      title: "Aged Care & NDIS Developments",
      desc: "Faith- and culturally-aligned aged care homes and supported-living solutions. Includes SIL and SDA-compliant housing development.",
      features: [
        "Faith- and culturally-aligned designs",
        "Aged care home development",
        "Supported-living solutions",
        "SIL and SDA compliance",
        "Specialized disability housing",
      ],
      link: "/contact",
      color: "from-emerald-600 to-teal-500",
    },
    {
      icon: Baby,
      title: "Childcare Centre Development",
      desc: "We identify sites, secure planning permits, manage design, and deliver fully compliant childcare centres aligned to Victorian Education & Care regulations.",
      features: [
        "Site identification & feasibility",
        "Planning permit acquisition",
        "Design management",
        "Victorian Education & Care compliance",
        "Full project delivery",
      ],
      link: "/contact",
      color: "from-pink-600 to-rose-500",
    },
    {
      icon: Trees,
      title: "Cabin Parks & Modular Housing",
      desc: "We specialise in modular cabin parks for transitional housing, crisis accommodation, workers villages, and faith-based community housing.",
      features: [
        "Modular cabin park development",
        "Transitional & crisis accommodation",
        "Workers village solutions",
        "Faith-based community housing",
        "Rapid deployment projects",
      ],
      link: "/contact",
      color: "from-green-600 to-lime-500",
    },
    {
      icon: Building2,
      title: "Development & Project Management",
      desc: "Full project lifecycle management: Feasibility, Council approvals, Builder procurement, Project oversight, Budgets & reporting, Risk management.",
      features: [
        "Feasibility & planning",
        "Council approvals management",
        "Builder procurement",
        "Project oversight",
        "Budget & financial reporting",
        "Risk management",
      ],
      link: "/contact",
      color: "from-purple-600 to-violet-500",
    },
  ];

  const projectManagementSteps = [
    { title: "Feasibility", icon: ClipboardCheck },
    { title: "Council Approvals", icon: ShieldCheck },
    { title: "Builder Procurement", icon: Building2 },
    { title: "Project Oversight", icon: HomeIcon },
    { title: "Budgets & Reporting", icon: ClipboardCheck },
    { title: "Risk Management", icon: ShieldCheck },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section - Professional Design with Image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
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
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  Our Services
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="block">
                  Building Communities
                  
                </span>
                <p className="block bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-white to-cyan-500">
                    Together
                  </p>
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Get in Touch
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image (Hidden on Mobile) */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Main Image */}
                <Image
                  src="/hero-images/service-hero.jpeg"
                  alt="HavenBridge Development Services - Comprehensive property development solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on desktop with image */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end development solutions across key sectors,
              ensuring quality, compliance, and community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-linear-to-br ${service.color} mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center font-semibold text-slate-900 hover:text-amber-600 group-hover:gap-2 transition-all border-t border-gray-100 pt-6 w-full justify-between"
                >
                  <span>Discuss this service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development & Project Management Focus */}
      <section className="py-20 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Development & Project Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full project lifecycle management from early feasibility through
                to delivery and handover.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left Column - Content */}
                <div className="p-8 md:p-12">
                  <div className="inline-flex p-4 rounded-xl bg-linear-to-br from-purple-600 to-violet-500 mb-6">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Comprehensive Project Lifecycle Management
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    We manage every aspect of your development project, ensuring
                    seamless execution from concept to completion.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {projectManagementSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <step.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Expert management and oversight
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">
                      Our Approach:
                    </h4>
                    <p className="text-gray-700">
                      We combine strategic planning with hands-on project
                      management to deliver your development on time, within
                      budget, and to the highest quality standards.
                    </p>
                  </div>
                </div>

                {/* Right Column - Visual/Stats */}
                <div className="bg-linear-to-br from-slate-900 to-slate-800 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Why Choose Our Management?
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Proven track record across all project types",
                        "Deep understanding of council & regulatory requirements",
                        "Strong builder & supplier networks",
                        "Transparent reporting & communication",
                        "Risk-mitigation focused approach",
                        "Community & stakeholder engagement expertise",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-6 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all mt-8 w-full"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Sector Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge across key development sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Affordable Housing",
                desc: "HAFF & Big Housing Build aligned",
                icon: Home,
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Community Housing",
                desc: "NGO & council partnerships",
                icon: Users,
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                title: "Specialist Disability",
                desc: "SDA & SIL compliant housing",
                icon: Heart,
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "Early Childhood",
                desc: "Victorian Education & Care compliant",
                icon: Baby,
                color: "bg-pink-100 text-pink-600",
              },
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all"
              >
                <div
                  className={`inline-flex p-3 rounded-lg ${sector.color} mb-4`}
                >
                  <sector.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {sector.title}
                </h3>
                <p className="text-gray-600">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your <span className="text-amber-400">Project?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Get in touch with our team to discuss how we can help bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-amber-500 text-slate-900 px-8 py-4 text-lg font-bold rounded-lg hover:bg-amber-400 transition-all shadow-xl"
            >
              Contact Us Today
            </a>
            <a
              href="/contact#consultation"
              className="inline-block bg-transparent border-2 border-amber-500 text-amber-500 px-8 py-4 text-lg font-bold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

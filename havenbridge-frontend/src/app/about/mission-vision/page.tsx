"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  ArrowLeft,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Building,
  TrendingUp,
  Shield,
  Handshake,
  Sparkles,
  CheckCircle,
  Star,
  Zap,
  Award,
  Globe,
} from "lucide-react";

export default function MissionVisionPage() {
  const missionPillars = [
    {
      icon: Heart,
      title: "Dignity in Housing",
      description: "Every development must restore dignity and create a genuine sense of belonging for residents.",
      color: "from-rose-500 to-pink-500",
      gradient: "from-rose-50 to-pink-50",
    },
    {
      icon: Users,
      title: "Multicultural Focus",
      description: "Reflect the lived experiences of modern Australia's diverse communities in every design decision.",
      color: "from-amber-500 to-orange-500",
      gradient: "from-amber-50 to-orange-50",
    },
    {
      icon: Building,
      title: "Community-Centered",
      description: "Build with communities, not just for them—through genuine consultation and co-design.",
      color: "from-sky-500 to-blue-500",
      gradient: "from-sky-50 to-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Economic Mobility",
      description: "Support pathways out of housing insecurity and into economic opportunity.",
      color: "from-emerald-500 to-green-500",
      gradient: "from-emerald-50 to-green-50",
    },
  ];

  const visionElements = [
    {
      icon: Globe,
      title: "National Recognition",
      description: "Recognized across Australia as the developer that gets community-focused housing right.",
      stat: "Leading",
    },
    {
      icon: Handshake,
      title: "Trusted Partner",
      description: "First-choice partner for governments addressing housing inequity and social cohesion.",
      stat: "Preferred",
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "Setting the benchmark where commercial success and social impact are inseparable.",
      stat: "Gold Standard",
    },
    {
      icon: Heart,
      title: "Cultural Voice",
      description: "Amplifying multicultural perspectives in shaping Australia's housing future.",
      stat: "Influential",
    },
  ];

  const howWeDeliver = [
    {
      title: "Government Partnership",
      description: "Deep networks within state and local government enable us to align our projects with policy priorities and unlock funding opportunities.",
      icon: Building,
      color: "amber",
    },
    {
      title: "Community Engagement",
      description: "We consult with residents, settlement services, and community leaders throughout the development lifecycle—not as a box-ticking exercise, but as genuine co-design.",
      icon: Users,
      color: "cyan",
    },
    {
      title: "Institutional Discipline",
      description: "Our team brings experience from banking, government, and regulated industries—we know how to deliver complex projects with rigorous governance.",
      icon: Shield,
      color: "emerald",
    },
    {
      title: "Innovation & Agility",
      description: "We move quickly on opportunities while maintaining professional standards—combining startup thinking with institutional execution.",
      icon: Zap,
      color: "violet",
    },
    {
      title: "Impact Measurement",
      description: "We track social outcomes alongside financial returns: housing stability, school continuity, employment access, community belonging.",
      icon: Target,
      color: "orange",
    },
    {
      title: "Values-Led",
      description: "Every project, partnership, and decision is filtered through our six core values—we turn down opportunities that don't align.",
      icon: Star,
      color: "pink",
    },
  ];

  const impactMetrics = [
    {
      number: "500+",
      label: "Lives Impacted",
      description: "Through dignified housing solutions",
    },
    {
      number: "100%",
      label: "Mission Alignment",
      description: "Every project serves our purpose",
    },
    {
      number: "15+",
      label: "Government Partners",
      description: "State and local collaborations",
    },
    {
      number: "95%",
      label: "Resident Satisfaction",
      description: "In completed developments",
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
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/70 hover:text-amber-300 mb-12 group transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium tracking-wide">Back to About</span>
          </Link>

          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 shadow-2xl">
              <Target className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Our Purpose
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Mission &
              <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                Vision
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Our mission drives what we do today. Our vision defines where we're heading tomorrow.{" "}
              <span className="text-white font-medium">Together, they shape every decision we make.</span>
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

      {/* Mission Statement Section */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white to-sky-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-50 rounded-full border-2 border-amber-200/50 mb-6">
                <Heart className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                What Drives Us
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                <div className="h-1.5 w-3 bg-amber-600 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                To deliver <span className="font-bold text-blue-700">community-focused housing</span> that restores dignity, 
                enables government priorities, and reflects the <span className="font-bold text-amber-600">multicultural reality</span> of modern Australia.
              </p>
            </div>

            {/* Mission Pillars Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {missionPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Animated Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.gradient} rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-100`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-sky-50 rounded-full border-2 border-blue-200/50 mb-6">
                <Eye className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-black text-blue-700 uppercase tracking-widest">
                  Our Vision
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Where We're Heading
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-1.5 w-20 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></div>
                <div className="h-1.5 w-3 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                To become Australia's most trusted partner for housing that combines{" "}
                <span className="font-bold text-blue-700">social impact</span> with{" "}
                <span className="font-bold text-amber-600">commercial excellence</span>.
              </p>
            </div>

            {/* Vision Elements Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {visionElements.map((element, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 text-center"
                >
                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs font-black uppercase tracking-wider rounded-full shadow-lg">
                    {element.stat}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                    <element.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-black text-slate-900 mb-4">
                    {element.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {element.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white to-amber-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-50 rounded-full border-2 border-amber-200/50 mb-6">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
                  How We Deliver
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Our Approach
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                <div className="h-1.5 w-3 bg-amber-600 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                Six principles that guide every project, partnership, and decision.
              </p>
            </div>

            {/* Delivery Methods Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {howWeDeliver.map((method, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br from-${method.color}-100 to-${method.color}-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <method.icon className={`w-7 h-7 text-${method.color}-600`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-black text-slate-900 mb-4">
                    {method.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black text-white uppercase tracking-widest">
                  Our Impact
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Making a Difference
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-sky-400 rounded-full"></div>
                <div className="h-1.5 w-3 bg-sky-400 rounded-full"></div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-500 text-center"
                >
                  <div className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-sky-400 mb-4">
                    {metric.number}
                  </div>
                  <div className="text-xl font-bold text-white mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-300">
                    {metric.description}
                  </div>
                </div>
              ))}
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
              Join Us in
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                Building Better Futures
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Partner with a developer that's driven by purpose, not just profit.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://forms.gle/hHLnMLZ8Arnc1dcB9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-900 px-12 py-6 text-xl font-black rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <Link
                href="/about/values"
                className="inline-flex items-center justify-center gap-4 bg-transparent border-2 border-white text-white px-12 py-6 text-xl font-black rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-500"
              >
                Explore Our Values
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
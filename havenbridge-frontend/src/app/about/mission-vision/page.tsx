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
      color: "from-cyan-500 to-blue-500",
      gradient: "from-cyan-50 to-blue-50",
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to About
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Target className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                OUR PURPOSE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mission &
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                Vision
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl">
              Our mission drives what we do today. Our vision defines where we're heading tomorrow. Together, they shape every decision we make.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                Building Better Futures
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Partner with a developer that's driven by purpose, not just profit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
             <a
             href="https://forms.gle/hHLnMLZ8Arnc1dcB9"
             target="_blank"
             rel="noopener noreferrer"
             className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 sm:px-12 py-4 text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
             >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/about/values"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 sm:px-12 py-4 text-lg font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all"
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
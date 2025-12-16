"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Shield,
  TrendingUp,
  Award,
  Users,
  Building2,
  HeartHandshake,
  Sparkles,
  Zap,
  ChevronRight,
  Globe,
  Star,
  Home,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Heart,
  BookOpen,
  Handshake,
  Target as Bullseye,
  Building,
  Home as HomeIcon,
  Award as Trophy,
  FileText,
  CheckCircle,
  Book,
  Building as BuildingIcon,
  Users as UsersIcon,
  Heart as HeartIcon,
  Target as TargetIcon,
  Eye,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Home as Home2,
  Users as Users2,
  GraduationCap,
  Briefcase,
  Landmark,
  Globe as Earth,
  Users as Community,
  Building as Structure,
  Award as Achievement,
  Target as Goal,
  Linkedin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const values = [
    {
      icon: Community,
      title: "Community First",
      desc: "We build for the people who will live in our projects—not for abstract market profiles.",
      color: "bg-linear-to-br from-amber-400 to-amber-500",
      accent: "border-amber-400/20",
    },
    {
      icon: Shield,
      title: "Integrity in Delivery",
      desc: "Strong governance practices and deep institutional experience guide our work.",
      color: "bg-linear-to-br from-cyan-500 to-blue-500",
      accent: "border-cyan-500/20",
    },
    {
      icon: Handshake,
      title: "Partnership at the Core",
      desc: "We collaborate with governments, local councils, NGOs, financiers, and community leaders.",
      color: "bg-linear-to-br from-emerald-500 to-green-500",
      accent: "border-emerald-500/20",
    },
    {
      icon: TrendingUp,
      title: "Agility with Purpose",
      desc: "We blend entrepreneurial innovation with the discipline of major institutions.",
      color: "bg-linear-to-br from-violet-500 to-purple-500",
      accent: "border-violet-500/20",
    },
    {
      icon: Target,
      title: "Social Impact Focus",
      desc: "Every development creates belonging and supports economic mobility.",
      color: "bg-linear-to-br from-orange-500 to-red-500",
      accent: "border-orange-500/20",
    },
    {
      icon: Heart,
      title: "Culturally Connected",
      desc: "Our lived experiences shape developments that respect Australia's diversity.",
      color: "bg-linear-to-br from-pink-500 to-rose-500",
      accent: "border-pink-500/20",
    },
  ];

  const leadership = [
    {
      name: "John Kuot",
      title: "Chief Executive Officer",
      bio: "Former banker and Ministerial Advisor with direct experience in homelessness and public housing responses.",
      expertise: ["Government Policy", "Strategic Planning", "Social Outcomes"],
      color: "from-amber-400 to-amber-500",
      image: "/team/John-Kuot.png",
      linkedin: "https://linkedin.com/in/johnkuot",
    },
    {
      name: "Angok Lueth",
      title: "Director of Development",
      bio: "12+ years of development experience across townhouses, rooming houses, SDA accommodation, and NDIS housing.",
      expertise: ["Project Delivery", "Development Planning", "NDIS/SDA"],
      color: "from-cyan-500 to-blue-500",
      image: "/team/Angok-Lueth.png",
      linkedin: "https://linkedin.com/in/angoklueth",
    },
    {
      name: "Him Malhotra",
      title: "Director of Acquisitions",
      bio: "Land acquisition specialist with extensive networks across Melbourne's key growth corridors.",
      expertise: ["Land Acquisition", "Deal Structuring", "Market Analysis"],
      color: "from-emerald-500 to-green-500",
      image: "/team/Him.jpg",
      linkedin: "https://linkedin.com/in/himmalhotra",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      icon: Trophy,
      color: "text-amber-500",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: Heart,
      color: "text-cyan-500",
    },
    {
      number: "$150M+",
      label: "Development Value",
      icon: TrendingUp,
      color: "text-emerald-500",
    },
    {
      number: "100%",
      label: "Compliance Rate",
      icon: Shield,
      color: "text-violet-500",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  VALUES-LED DEVELOPMENT
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                <span className="block">
                  Building
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-white to-cyan-500 ml-2 sm:ml-4">
                    Futures,
                  </span>
                </span>
                <span className="block mt-2 sm:mt-4">Not Just Buildings</span>
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#our-story"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Story</span>
                  <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="#leadership"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Meet Our Leadership
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image (Hidden on Mobile) */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px]  rounded-2xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Main Image */}
                <Image
                  src="/hero-images/about.jpg"
                  alt="HavenBridge Development - Community-focused housing solutions"
                  fill
                  className="object-fill"
                  sizes="(max-width: 1024px) 0px, 50vw"
                  priority
                />

                {/* Floating Elements */}
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                    <Community className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on desktop */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-linear-to-br from-slate-50 to-cyan-50 -mt-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-100">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${stat.color.replace(
                          "text",
                          "bg"
                        )}/10`}
                      >
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-gray-100 overflow-hidden rounded-full">
                      <div
                        className={`h-full ${stat.color.replace(
                          "text",
                          "bg"
                        )} rounded-full group-hover:animate-progress`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story - Mobile Optimized */}
      <section id="our-story" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-400/10 rounded-full border border-amber-400/20 mb-4 sm:mb-6">
                <Book className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-semibold text-amber-600">
                  OUR JOURNEY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
                Built by the Community,
                <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-cyan-500">
                  for the Community
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Property development has long been dominated by the "big
                guys"; but it's the "little guys" who live in these homes.
                HavenBridge was born to change that.
              </p>
            </div>

            {/* Story Blocks - Mobile Optimized */}
            <div className="space-y-16 sm:space-y-20 md:space-y-24">
              {/* Story 1: Who We Are */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-amber-50 rounded-full border border-amber-200">
                    <BuildingIcon className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                    <span className="text-[10px] sm:text-xs font-bold text-amber-600 uppercase tracking-wide">
                      Chapter 01
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                    Who We Are
                  </h3>
                  <div className="h-1 w-12 sm:w-16 bg-linear-to-r from-amber-400 to-amber-500 rounded-full"></div>
                  <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                    <p>
                      HavenBridge is a values-led property development firm
                      founded by leaders who represent modern Australia's
                      diversity. As part of the 50% of Australians with roots
                      beyond these borders, we understand what it means to be
                      overlooked or excluded.
                    </p>
                    <p>
                      We specialize in community-focused housing that uplifts
                      migrant communities, enables government priorities, and
                      delivers lasting value. Our projects blend social impact,
                      commercial excellence, and cultural insight.
                    </p>
                    <p className="text-amber-600 font-semibold text-sm sm:text-base md:text-lg">
                      We operate with institutional discipline and
                      entrepreneurial agility, bridging the worlds of capital and
                      community.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-cyan-500/20"></div>
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900">
                    <Image
                      src="/about-images/Chapter-1.jpg"
                      alt="Story Image 1"
                      fill
                      className="object-cover opacity-50"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <p className="text-white font-semibold text-sm">
                        Values-Led Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 2: The Problem */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group order-2 lg:order-1">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-500/20"></div>
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-blue-900">
                    <Image
                      src="/about-images/Chapter-2.jpg"
                      alt="Story Image 2"
                      fill
                      className="object-cover opacity-50"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-6 right-6 z-20">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <p className="text-white font-semibold text-sm">
                        Community Voice Matters
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-cyan-50 rounded-full border border-cyan-200">
                    <Community className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600" />
                    <span className="text-[10px] sm:text-xs font-bold text-cyan-600 uppercase tracking-wide">
                      Chapter 02
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                    The Gap We Saw
                  </h3>
                  <div className="h-1 w-12 sm:w-16 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                    <p>
                      For decades, large corporations have shaped Australia's
                      housing landscape. Yet it's everyday families; migrants,
                      workers, young people, who live in these homes.
                    </p>
                    <p className="text-cyan-700 font-semibold text-sm sm:text-base md:text-lg">
                      Too often, these residents have no voice in how their
                      homes are designed or delivered.
                    </p>
                    <p>
                      HavenBridge exists because we saw housing being built{" "}
                      <span className="italic font-semibold">for</span> communities, but never{" "}
                      <span className="italic font-semibold">with</span> them. We
                      stepped into that gap.
                    </p>
                  </div>
                </div>
              </div>

              {/* Story 3: Our Background */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-600 uppercase tracking-wide">
                      Chapter 03
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                    From Both Worlds
                  </h3>
                  <div className="h-1 w-12 sm:w-16 bg-linear-to-r from-emerald-400 to-green-500 rounded-full"></div>
                  <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                    <p>
                      We're children of migrants; the first in our families to
                      navigate corporate Australia. We've been shaped by
                      world-class institutions, mentored by industry leaders,
                      and trained in governance and finance at the highest
                      levels.
                    </p>
                    <p>
                      But we were raised by communities who know housing
                      insecurity, language barriers, and the hope that comes
                      with finally finding home.
                    </p>
                    <p className="text-emerald-600 font-semibold text-sm sm:text-base md:text-lg">
                      This dual perspective lets us bridge institutions and the
                      people they serve, understanding both strategy and
                      belonging.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-green-500/20"></div>
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-blue-900">
                    <Image
                      src="/about-images/Chapter3.png"
                      alt="Story Image 3"
                      fill
                      className="object-cover opacity-50"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <p className="text-white font-semibold text-sm">
                        Institutional + Community
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Cards - Mobile Optimized */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
                <div className="bg-linear-to-br from-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cyan-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-cyan-500 rounded-lg sm:rounded-xl">
                      <Bullseye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-cyan-600 uppercase tracking-wide">
                      Our Mission
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                    Creating Dignified, Community-Focused Housing
                  </h4>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    To create housing that reflects the lived experiences of
                    multicultural Australians and strengthens their sense of
                    belonging.
                  </p>
                  <div className="mt-4 sm:mt-6 h-1 w-12 sm:w-16 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </div>

                <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-amber-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-amber-500 rounded-lg sm:rounded-xl">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-wide">
                      Our Vision
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                    Australia's Leading Inclusive Developer
                  </h4>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Where commercial excellence, multicultural insight, and
                    government partnership shape a more inclusive housing
                    future.
                  </p>
                  <div className="mt-4 sm:mt-6 h-1 w-12 sm:w-16 bg-linear-to-r from-amber-400 to-orange-500 rounded-full"></div>
                </div>
              </div>

              {/* Final Statement - Mobile Optimized */}
              <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[400px]">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent to-slate-900/60 z-10"></div>
                    {/* Replace with actual image */}
                    <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-blue-900">
                      <Image
                        src="/about-images/commitment.jpg"
                        alt="Story Image 4"
                        fill
                        className="object-cover opacity-50"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={85}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-white space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 rounded-full border border-white/20 w-fit">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">
                        Our Commitment
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      Building Futures, Not Just Buildings
                    </h3>
                    <div className="h-1 w-12 sm:w-16 bg-linear-to-r from-amber-400 to-cyan-500 rounded-full"></div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                      We bring together policy, development, and community to
                      design housing that restores dignity and strengthens
                      social cohesion.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-cyan-500">
                      The homes we build must reflect the people who will live
                      in them.
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 italic">
                      This is HavenBridge. Building differently—because we know
                      who we build for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Mobile Optimized */}
      <section className="py-16 sm:py-20 md:py-24 bg-linear-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4 sm:mb-6">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500" />
                <span className="text-xs sm:text-sm font-semibold text-cyan-600">
                  GUIDING PRINCIPLES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                The principles that define our approach and differentiate our
                work in the industry.
              </p>
            </div>

            {/* Values Grid - Mobile Optimized */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="group relative">
                    {/* Card */}
                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Top Accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-slate-900 via-slate-700 to-slate-900"></div>

                      {/* Icon with Number */}
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${value.color}`}>
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="text-3xl sm:text-4xl font-bold text-gray-800">
                            0{i + 1}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-cyan-500 transition-colors transform group-hover:translate-x-1" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-cyan-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1">{value.desc}</p>

                      {/* Bottom Line */}
                      <div
                        className={`h-1 w-12 bg-linear-to-r ${value.color.replace(
                          "bg-linear-to-br",
                          "bg-linear-to-r"
                        )} rounded-full transform group-hover:w-full transition-all duration-300`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Mobile Optimized */}
      <section id="leadership" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-400/10 rounded-full border border-amber-400/20 mb-4 sm:mb-6">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-semibold text-amber-600">
                  LEADERSHIP TEAM
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
                Our Leadership
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                A faith-grounded, multicultural-focused team purpose-built to
                address housing inequity.
              </p>
            </div>

            {/* Leadership Grid - Mobile Optimized */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {leadership.map((person, i) => {
                const expertise = person.expertise;
                return (
                  <div key={i} className="group relative">
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-4 bg-linear-to-br ${person.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                      {/* Top accent */}
                      <div
                        className={`h-1.5 sm:h-2 bg-linear-to-br ${person.color}`}
                      ></div>

                      {/* Image Section */}
                      <div className="relative h-56 sm:h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/20 z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
                          {/* Gradient background for image placeholder */}
                          <div
                            className={`absolute inset-0 bg-linear-to-br ${person.color} opacity-30`}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div
                                className={`inline-flex p-3 sm:p-4 rounded-lg sm:rounded-xl bg-linear-to-br ${person.color} mb-3 sm:mb-4`}
                              >
                                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                              </div>
                              <div className="text-white font-bold text-base sm:text-lg">
                                {person.name}
                              </div>
                              <div className="text-gray-300 text-xs sm:text-sm">
                                {person.title}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={i === 0}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      </div>

                      <div className="p-6 sm:p-8 flex-1 flex flex-col">
                        <div className="mb-4 sm:mb-6">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                              {person.name}
                            </h3>
                            {/* LinkedIn Icon - Added on far right of name */}
                            <a
                              href={person.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-blue-600 transition-colors p-1 hover:bg-blue-50 rounded-md"
                              aria-label={`Connect with ${person.name} on LinkedIn`}
                            >
                              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-amber-600 mb-2 sm:mb-3">
                            {person.title}
                          </p>

                          {/* Expertise tags */}
                          <div className="flex flex-wrap gap-1">
                            {expertise.map((skill, j) => (
                              <span
                                key={j}
                                className="px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs font-medium rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                          {person.bio}
                        </p>

                        <button className="w-full py-2 sm:py-2.5 bg-linear-to-br from-slate-900 to-slate-800 text-white text-sm sm:text-base font-bold rounded-lg hover:from-slate-800 hover:to-slate-700 transition-all mt-auto">
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Content */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 sm:mb-6">
                <Handshake className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-semibold text-white">
                  PARTNERSHIP OPPORTUNITIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
                Build with{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-cyan-500">
                  Purpose
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
                Join us in creating housing that transforms lives and
                strengthens communities across Australia.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-10 px-4">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="/contact#consultation"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <Calendar className="relative z-10 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  ArrowRight,
  Building2,
  Target,
  Users,
  Award,
  Sparkles,
  ChevronRight,
  Heart,
  Trophy,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function AboutPage() {
  const aboutSections = [
    {
      title: "Who We Are",
      description: "Our story, background, and what makes us different in the industry",
      icon: Building2,
      href: "/about/who-we-are",
      color: "from-amber-400 to-amber-500",
      gradient: "from-amber-50 to-orange-50",
      image: "/about-images/values-led.jpeg",
    },
    {
      title: "Mission & Vision",
      description: "Our purpose, goals, and the future we're building towards",
      icon: Target,
      href: "/about/mission-vision",
      color: "from-cyan-500 to-blue-500",
      gradient: "from-cyan-50 to-blue-50",
      image: "/about-images/commitment.jpg",
    },
    {
      title: "Leadership & Board",
      description: "Meet the team driving HavenBridge's vision and strategy",
      icon: Users,
      href: "/about/leadership",
      color: "from-emerald-500 to-green-500",
      gradient: "from-emerald-50 to-green-50",
      image: "/team/John-Kuot.png",
    },
    {
      title: "Our Values",
      description: "The principles that guide every decision and development we make",
      icon: Award,
      href: "/about/values",
      color: "from-violet-500 to-purple-500",
      gradient: "from-violet-50 to-purple-50",
      image: "/about-images/community.jpeg",
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                VALUES-LED DEVELOPMENT
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-white to-cyan-500">
                Futures, Not Just Buildings
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              HavenBridge is a values-led property development firm creating community-focused housing that uplifts migrant communities and strengthens social cohesion.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-cyan-50 -mt-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-100">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${stat.color.replace("text", "bg")}/10`}>
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
                      <div className={`h-full ${stat.color.replace("text", "bg")} rounded-full group-hover:animate-progress`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-images/about-us.jpeg"
                  alt="HavenBridge Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                    Who We Are
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Built by the Community, for the Community
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We're a values-led property development firm founded by leaders who represent modern Australia's diversity. As children of migrants, we understand what it means to be overlooked or excluded.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We bridge institutional discipline with entrepreneurial agility, creating housing that reflects the lived experiences of multicultural Australians.
                </p>
                <Link
                  href="/about/who-we-are"
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all group"
                >
                  Read Our Full Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Sections - Navigation Cards */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-semibold text-cyan-600">
                  EXPLORE HAVENBRIDGE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Learn More About Us
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what drives us, who leads us, and the values that guide every project we build.
              </p>
            </div>

            {/* Navigation Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {aboutSections.map((section, i) => {
                const Icon = section.icon;
                return (
                  <Link
                    key={i}
                    href={section.href}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60 z-10"></div>
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4 z-20">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className={`p-6 sm:p-8 bg-gradient-to-br ${section.gradient}`}>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${section.color} transition-all">
                          {section.title}
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {section.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Accent Line */}
                      <div className={`h-1.5 bg-gradient-to-r ${section.color}`}></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Build
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                Something Meaningful?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Partner with us to create housing that transforms lives and strengthens communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/hHLnMLZ8Arnc1dcB9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Start a Conversation</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
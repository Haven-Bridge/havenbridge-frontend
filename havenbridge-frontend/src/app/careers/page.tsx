"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";

import {
  Briefcase,
  Users,
  Award,
  Heart,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Target,
  Shield,
  Clock,
  Globe,
  Lightbulb,
  Zap,
  ChevronRight,
  Star,
  Rocket,
  Building2,
  GraduationCap,
  HeartHandshake,
  CircleDollarSign,
  Calendar,
  Coffee,
  Mail,
  Phone,
  Target as Bullseye,
  Building,
} from "lucide-react";

export default function CareersPage() {
  const benefits = [
    {
      icon: CircleDollarSign,
      title: "Competitive Salary",
      desc: "Market-leading compensation packages with performance bonuses and equity options",
      color: "from-amber-400 to-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      desc: "Clear advancement pathways with mentorship programs and leadership training",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      desc: "Flexible hours, remote work options, and generous paid time off",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      desc: "Comprehensive health insurance, gym memberships, and mental health support",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Team Culture",
      desc: "Inclusive, diverse environment with regular team building and social events",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Meaningful Impact",
      desc: "Work on projects that create lasting positive change in communities",
      color: "from-orange-500 to-red-500",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We embrace new ideas and technologies to solve complex challenges",
      color: "text-amber-500",
    },
    {
      icon: Shield,
      title: "Integrity",
      desc: "We act with honesty, transparency, and ethical principles always",
      color: "text-cyan-500",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "We strive for the highest standards in everything we deliver",
      color: "text-emerald-500",
    },
    {
      icon: HeartHandshake,
      title: "Community",
      desc: "We care deeply about the people and communities we serve",
      color: "text-pink-500",
    },
  ];

  const perks = [
    "Professional development budget",
    "Annual team retreats",
    "Parental leave (18 weeks)",
    "Latest technology & equipment",
    "Birthday day off",
    "Volunteer days",
    "Employee assistance program",
    "Friday afternoon drinks",
    "Study leave & support",
    "Quarterly bonus scheme",
    "Referral bonuses",
    "Parking or transport allowance",
  ];

  const stats = [
    {
      number: "4.8/5",
      label: "Employee Satisfaction",
      icon: Star,
      color: "text-amber-500",
    },
    {
      number: "92%",
      label: "Retention Rate",
      icon: TrendingUp,
      color: "text-cyan-500",
    },
    {
      number: "35+",
      label: "Team Members",
      icon: Users,
      color: "text-emerald-500",
    },
    {
      number: "15+",
      label: "Years Combined Experience",
      icon: Briefcase,
      color: "text-violet-500",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section - Professional with Image */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
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
                  WE'RE HIRING
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                <span className="block">
                  Build Your
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-white to-cyan-500 ml-2 sm:ml-4">
                    Career
                  </span>
                </span>
                <span className="block mt-2 sm:mt-4">With Purpose</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
                Join a team that's building more than properties—we're creating inclusive, community-focused housing solutions that shape Australia's future.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://forms.gle/J5m9v9o466tT8mbD9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Apply Now</span>
                  <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="#culture"
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Our Culture
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image (Hidden on Mobile) */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Main Image */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
                  <Image
                    src="/hero-images/career.jpg"
                    alt="HavenBridge Careers - Join our team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    priority
                    quality={85}
                  />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-white">35+</div>
                        <div className="text-xs text-gray-300">
                          Team Members
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          4.8/5
                        </div>
                        <div className="text-xs text-gray-300">
                          Employee Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Alternative Image */}
        <div className="lg:hidden container mx-auto px-4 sm:px-6 relative z-10 mt-8">
          <div className="relative h-[250px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
              <Image
                src="/careers-images/hero-mobile.jpg"
                alt="HavenBridge Careers"
                fill
                className="object-cover"
                sizes="100vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

     {/* Why Work With Us - Enhanced Design */}
      <section id="culture" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-400/10 rounded-full border border-amber-400/20 mb-4 sm:mb-6">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-semibold text-amber-600">
                  EMPLOYEE BENEFITS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
                Why Work at{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                  HavenBridge?
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We're not just building properties—we're building careers,
                communities, and a better future for Australia.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="group relative">
                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Top Accent */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`}
                      ></div>

                      {/* Icon */}
                      <div className="mb-4 sm:mb-6">
                        <div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color}`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 flex-1 leading-relaxed">
                        {benefit.desc}
                      </p>

                      {/* Bottom Line */}
                      <div
                        className={`mt-6 h-1 w-12 bg-gradient-to-r ${benefit.color} rounded-full transform group-hover:w-full transition-all duration-300`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Team Culture Image Section */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent z-10"></div>
              <div className="relative h-[400px] sm:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
                  <Image
                    src="/car-images/team.jpg"
                    alt="HavenBridge Team Culture - Collaborative work environment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    quality={85}
                  />
                </div>
                <div className="relative z-20 h-full flex items-center p-8 sm:p-12 lg:p-16">
                  <div className="max-w-lg">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-semibold text-white">
                        OUR TEAM CULTURE
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                      Where Great Minds Build Together
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      Join a diverse, collaborative team that values innovation,
                      celebrates success, and supports each other's growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Perks Section */}
            <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-100">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Plus Many More Perks
                </h3>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  We believe in taking care of our team with comprehensive
                  benefits and unique perks
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {perks.map((perk, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process with Image */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 px-4">
                Our Hiring Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Simple, transparent, and designed to help you succeed
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Process Steps */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    step: "01",
                    title: "Application",
                    desc: "Submit your resume and cover letter",
                    icon: Rocket,
                    color: "from-amber-400 to-amber-500",
                  },
                  {
                    step: "02",
                    title: "Review",
                    desc: "Our team reviews your qualifications",
                    icon: CheckCircle2,
                    color: "from-cyan-500 to-blue-500",
                  },
                  {
                    step: "03",
                    title: "Interview",
                    desc: "Meet the team and discuss the role",
                    icon: Users,
                    color: "from-emerald-500 to-green-500",
                  },
                  {
                    step: "04",
                    title: "Offer",
                    desc: "Receive your offer and join us",
                    icon: Award,
                    color: "from-violet-500 to-purple-500",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="relative">
                      <div className="bg-white rounded-xl sm:rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color}`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-3xl font-bold text-slate-900">
                            {item.step}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Process Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
                  <Image
                    src="/car-images/hire.png"
                    alt="HavenBridge Hiring Process - Interview and onboarding"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-white font-semibold text-sm">
                      Transparent & Efficient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                JOIN OUR TEAM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Ready to Build{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                Your Future
              </span>{" "}
              With Us?
            </h2>

            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Join a team that's passionate about creating inclusive, community-focused housing solutions across Australia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://forms.gle/J5m9v9o466tT8mbD9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span>Submit Your Application</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:careers@havenbridge.com.au"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-slate-900 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Careers Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
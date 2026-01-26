"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  Users,
  Linkedin,
  Mail,
  Award,
  Building,
  Shield,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp,
  Heart,
} from "lucide-react";

export default function LeadershipPage() {
  const leadership = [
    {
      name: "John Kuot",
      title: "Chief Executive Officer",
      bio: "Former banker and Ministerial Advisor with direct experience in homelessness and public housing responses. John brings strategic vision and deep government networks to HavenBridge.",
      expertise: ["Government Policy", "Strategic Planning", "Social Outcomes"],
      color: "from-amber-400 to-amber-500",
      image: "/team/John-Kuot.png",
      linkedin: "https://www.linkedin.com/in/john-kuot-a1925279/",
      email: "john@havenbridge.com.au",
    },
    {
      name: "Angok Lueth",
      title: "Director of Development",
      bio: "12+ years of development experience across townhouses, rooming houses, SDA accommodation, and NDIS housing. Angok ensures flawless project delivery and stakeholder management.",
      expertise: ["Project Delivery", "Development Planning", "NDIS/SDA"],
      color: "from-sky-500 to-blue-500",
      image: "/team/Angok-Lueth.png",
      linkedin: "https://www.linkedin.com/in/angok-lueth/",
      email: "angok@havenbridge.com.au",
    },
    {
      name: "Him Malhotra",
      title: "Director of Acquisitions",
      bio: "Land acquisition specialist with extensive networks across Melbourne's key growth corridors. Him identifies and secures strategic opportunities that align with our mission.",
      expertise: ["Land Acquisition", "Deal Structuring", "Market Analysis"],
      color: "from-emerald-500 to-green-500",
      image: "/team/Him.jpg",
      linkedin: "https://www.linkedin.com/in/him-malhotra-407a88245/",
      email: "him@havenbridge.com.au",
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
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-amber-300 mb-12 group transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium tracking-wide">Back to About</span>
          </Link>

          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 shadow-2xl">
              <Users className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Leadership & Governance
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Meet Our
              <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                Leadership Team
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              A faith-grounded, multicultural-focused team{" "}
              <span className="text-white font-medium">purpose-built</span> to address housing inequity with{" "}
              <span className="text-white font-medium">institutional discipline</span> and entrepreneurial agility.
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

      {/* Executive Leadership Team - Premium */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white via-sky-50/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-50 rounded-full border-2 border-amber-200/50 mb-6">
                <Building className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
                  Executive Team
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Our Executive Leadership
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                <div className="h-1.5 w-3 bg-amber-600 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
                The operational leaders driving day-to-day excellence and long-term strategy.
              </p>
            </div>

            {/* Leadership Grid - Premium */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {leadership.map((person, i) => {
                const expertise = person.expertise;
                return (
                  <div key={i} className="group relative">
                    {/* Glow effect */}
                    <div className={`absolute -inset-6 bg-gradient-to-br ${person.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>

                    <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-gray-200 hover:border-amber-300 h-full flex flex-col group-hover:-translate-y-2">
                      {/* Top accent - Enhanced */}
                      <div className={`h-3 bg-gradient-to-br ${person.color}`}></div>

                      {/* Image Section - Enhanced */}
                      <div className="relative h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40 z-10"></div>
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                      </div>

                      <div className="p-8 lg:p-10 flex-1 flex flex-col">
                        <div className="mb-6">
                          <div className="mb-3">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                              {person.name}
                            </h3>
                            <p className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-700">
                              {person.title}
                            </p>
                          </div>

                          {/* Expertise tags - Enhanced */}
                          <div className="flex flex-wrap gap-2 mt-5">
                            {expertise.map((skill, j) => (
                              <span
                                key={j}
                                className="px-4 py-2 bg-gradient-to-br from-sky-50 to-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-700 text-base leading-relaxed mb-8 flex-1">
                          {person.bio}
                        </p>

                        {/* Contact Links - Enhanced */}
                        <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-blue-600 text-white text-sm font-black rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                          <a
                            href={`mailto:${person.email}`}
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900 text-sm font-black rounded-xl hover:from-slate-200 hover:to-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <Mail className="w-4 h-4" />
                            Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
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
      linkedin: "https://linkedin.com/in/johnkuot",
      email: "john@havenbridge.com.au",
    },
    {
      name: "Angok Lueth",
      title: "Director of Development",
      bio: "12+ years of development experience across townhouses, rooming houses, SDA accommodation, and NDIS housing. Angok ensures flawless project delivery and stakeholder management.",
      expertise: ["Project Delivery", "Development Planning", "NDIS/SDA"],
      color: "from-cyan-500 to-blue-500",
      image: "/team/Angok-Lueth.png",
      linkedin: "https://linkedin.com/in/angoklueth",
      email: "angok@havenbridge.com.au",
    },
    {
      name: "Him Malhotra",
      title: "Director of Acquisitions",
      bio: "Land acquisition specialist with extensive networks across Melbourne's key growth corridors. Him identifies and secures strategic opportunities that align with our mission.",
      expertise: ["Land Acquisition", "Deal Structuring", "Market Analysis"],
      color: "from-emerald-500 to-green-500",
      image: "/team/Him.jpg",
      linkedin: "https://linkedin.com/in/himmalhotra",
      email: "him@havenbridge.com.au",
    },
  ];

  const boardMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Independent Chair",
      bio: "30+ years in urban planning and social housing policy. Former Director at Victorian Department of Families. PhD in Urban Development.",
      expertise: ["Urban Planning", "Social Policy", "Governance"],
      color: "from-violet-500 to-purple-500",
      image: "/board/placeholder-1.jpg", // You'll add actual images
      linkedin: "https://linkedin.com/in/sarahchen",
    },
    {
      name: "Michael Torres",
      title: "Non-Executive Director",
      bio: "Former CFO of major construction firm. Brings 25 years of financial expertise in property development and infrastructure projects.",
      expertise: ["Finance", "Risk Management", "Construction"],
      color: "from-orange-500 to-red-500",
      image: "/board/placeholder-2.jpg",
      linkedin: "https://linkedin.com/in/michaeltorres",
    },
    {
      name: "Amina Hassan",
      title: "Non-Executive Director",
      bio: "Community development specialist with focus on multicultural housing. Former CEO of Settlement Services International.",
      expertise: ["Community Development", "Migration Services", "Social Impact"],
      color: "from-pink-500 to-rose-500",
      image: "/board/placeholder-3.jpg",
      linkedin: "https://linkedin.com/in/aminahassan",
    },
    {
      name: "David Park",
      title: "Non-Executive Director",
      bio: "Legal expert in property law and development approvals. Partner at major Melbourne law firm. 20+ years experience.",
      expertise: ["Property Law", "Planning Approvals", "Compliance"],
      color: "from-blue-500 to-indigo-500",
      image: "/board/placeholder-4.jpg",
      linkedin: "https://linkedin.com/in/davidpark",
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
          {/* Back Link */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to About
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                LEADERSHIP & GOVERNANCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Our
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                Leadership Team
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl">
              A faith-grounded, multicultural-focused team purpose-built to address housing inequity with institutional discipline and entrepreneurial agility.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 rounded-full border border-amber-400/20 mb-4">
                <Building className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-600">
                  EXECUTIVE TEAM
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Executive Leadership
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                The operational leaders driving day-to-day excellence and long-term strategy.
              </p>
            </div>

            {/* Leadership Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((person, i) => {
                const expertise = person.expertise;
                return (
                  <div key={i} className="group relative">
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${person.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                      {/* Top accent */}
                      <div className={`h-2 bg-gradient-to-br ${person.color}`}></div>

                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20 z-10"></div>
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      <div className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-1">
                                {person.name}
                              </h3>
                              <p className="text-sm font-semibold text-amber-600">
                                {person.title}
                              </p>
                            </div>
                          </div>

                          {/* Expertise tags */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {expertise.map((skill, j) => (
                              <span
                                key={j}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                          {person.bio}
                        </p>

                        {/* Contact Links */}
                        <div className="flex gap-3 pt-4 border-t border-gray-100">
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all"
                          >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                          <a
                            href={`mailto:${person.email}`}
                            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-all"
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

      {/* Board of Directors */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
                <Shield className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-semibold text-cyan-600">
                  BOARD OF DIRECTORS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Board of Directors
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Independent advisors providing governance, oversight, and strategic guidance to ensure we deliver on our mission with integrity and excellence.
              </p>
            </div>

            {/* Board Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {boardMembers.map((member, i) => {
                const expertise = member.expertise;
                return (
                  <div key={i} className="group">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                      {/* Top accent */}
                      <div className={`h-1.5 bg-gradient-to-r ${member.color}`}></div>

                      <div className="p-8">
                        <div className="flex gap-6 mb-6">
                          {/* Image */}
                          <div className="relative h-24 w-24 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-slate-200 to-slate-300">
                            {/* Placeholder - replace with actual images */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Users className="w-10 h-10 text-slate-400" />
                            </div>
                          </div>

                          {/* Info */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">
                                  {member.name}
                                </h3>
                                <p className="text-sm font-semibold text-cyan-600">
                                  {member.title}
                                </p>
                              </div>
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-600 transition-colors"
                              >
                                <Linkedin className="w-5 h-5" />
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Expertise tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {expertise.map((skill, j) => (
                            <span
                              key={j}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory & Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 sm:p-12 border border-amber-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-amber-500 rounded-xl flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    Governance & Advisory
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our board brings decades of combined experience in urban planning, finance, law, and community development. They provide independent oversight and strategic counsel to ensure we maintain the highest standards of governance while staying true to our mission.
                  </p>
                  <p className="text-amber-600 font-semibold">
                    Together with our executive team, they form the leadership foundation that drives HavenBridge's vision of inclusive, community-focused development.
                  </p>
                </div>
              </div>
            </div>
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
              Want to Work With Us?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Reach out to discuss partnership opportunities, projects, or career openings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/hHLnMLZ8Arnc1dcB9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 sm:px-12 py-4 text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                Get In Touch
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
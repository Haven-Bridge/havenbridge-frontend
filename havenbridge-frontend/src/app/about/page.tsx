"use client";

import React from 'react';
import Image from 'next/image';
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
  CheckCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      desc: "We build for the people who will live in our projects—not for abstract market profiles. Our developments reflect the needs, aspirations, and cultural realities of Australia's multicultural population.",
      color: "from-amber-400 to-amber-500",
      bgColor: "bg-amber-400/10"
    },
    {
      icon: Shield,
      title: "Integrity in Delivery",
      desc: "We honour our commitments. With strong governance practices and deep institutional experience, we hold ourselves to the highest standards of transparency, quality, and accountability.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: Handshake,
      title: "Partnership at the Core",
      desc: "We collaborate with governments, local councils, NGOs, financiers, and community leaders. Our strength lies in building strong, trusting partnerships that unlock shared value.",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: TrendingUp,
      title: "Agility with Purpose",
      desc: "We operate differently—lean, responsive, and adaptive. Our team blends entrepreneurial innovation with the discipline of major institutions to move projects from concept to completion efficiently.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10"
    },
    {
      icon: Target,
      title: "Social Impact, Not Just Structures",
      desc: "Every development is an opportunity to uplift a community, create belonging, and support economic mobility. We measure success beyond returns—we measure dignity, outcomes, and opportunity.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Heart,
      title: "Culturally Connected",
      desc: "Our lived experiences shape our approach. We understand cultural nuances and build developments that respect and celebrate Australia's diverse communities.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10"
    }
  ];

  const leadership = [
    {
      name: "John Kuot",
      title: "Chief Executive Officer",
      bio: "Former banker and Ministerial Advisor in the environment portfolio with direct experience in homelessness and public housing responses, including the Flemington public housing tower lockdown. Brings deep understanding of Victorian government policy, planning overlays, and social outcome frameworks.",
      expertise: ["Government Policy", "Strategic Planning", "Social Outcomes"],
      color: "from-amber-400 to-amber-500",
      image: "/team/John-Kuot.png" 
    },
    {
      name: "Angok Lueth",
      title: "Director of Development",
      bio: "Former banker with 12 years of development experience across townhouses, rooming houses, shopping centres, mixed-use projects, SDA accommodation, NDIS housing, and community accommodation. Highly experienced in planning approvals and on-time, on-budget project delivery.",
      expertise: ["Project Delivery", "Development Planning", "NDIS/SDA"],
      color: "from-cyan-500 to-blue-500",
      image: "/leadership/angok-lueth.jpg" // Replace with actual image path
    },
    {
      name: "Him Malhotra",
      title: "Director of Acquisitions",
      bio: "Land acquisition specialist with extensive networks across Melbourne's key growth corridors. Proven ability to source off-market sites and structure complex development deals that unlock value for community benefit.",
      expertise: ["Land Acquisition", "Deal Structuring", "Market Analysis"],
      color: "from-emerald-500 to-green-500",
      image: "/leadership/him-malhotra.jpg" // Replace with actual image path
    }
  ];

  const milestones = [
    { year: "2022", event: "HavenBridge Founded", desc: "Established with a vision for community-led development", icon: HomeIcon },
    { year: "2023", event: "First Project Launch", desc: "Melbourne Modular Village development commenced", icon: Building },
    { year: "2024", event: "Government Partnership", desc: "Secured major government housing contract", icon: Handshake },
    { year: "2025", event: "National Expansion", desc: "Expanding operations to multiple states", icon: Globe }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">OUR STORY</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Futures,
              <span className="block">
                <span className="text-transparent bg-clip-text bg-linear-to-br from-amber-400 via-white to-cyan-500">
                  Not Just Buildings
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              HavenBridge is a values-led property development and project management firm grounded in the diversity,
              resilience, and ambition of modern Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#our-story"
                className="group relative inline-flex items-center justify-center bg-linear-to-br from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-xl"
              >
                <span className="relative z-10">Our Journey</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#leadership"
                className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Meet Our Team
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-linear-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Homes Delivered", icon: HomeIcon, color: "text-amber-400" },
              { value: "15+", label: "Completed Projects", icon: Building2, color: "text-cyan-500" },
              { value: "50+", label: "Community Partners", icon: Users, color: "text-emerald-500" },
              { value: "95%", label: "Client Satisfaction", icon: Trophy, color: "text-violet-500" }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group text-center">
                  <div className="relative inline-block mb-4">
                    <Icon className={`w-12 h-12 ${stat.color} transform group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story - Enhanced */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Story: Built by the Community, for the Community
              </h2>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-400/10 rounded-full">
                <Heart className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-600">VALUES-LED DEVELOPMENT</span>
              </div>
            </div>
            
            {/* Story with decorative elements */}
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-amber-400 to-cyan-500 hidden lg:block"></div>
              
              <div className="pl-0 lg:pl-12 space-y-8">
                {[
                  {
                    title: "A Vision Born from Experience",
                    content: "HavenBridge Development is a values-led property development and project management firm founded by leaders who represent the diversity, resilience, and ambition of modern Australia. As part of the 50% of Australians who trace their roots beyond the country's borders, we understand what it means to be misunderstood, overlooked, or excluded. That lived experience shapes how we build, how we partner, and how we deliver.",
                    icon: Heart
                  },
                  {
                    title: "Bridging Communities and Capital",
                    content: "We specialise in community-focused housing solutions that uplift migrant communities, enable government priorities, and deliver long-term value for partners and investors. Our projects sit at the intersection of social impact, commercial excellence, and cultural insight—bringing forward developments that are financially sound, socially responsible, and deeply connected to the people who will ultimately call them home.",
                    icon: Users
                  },
                  {
                    title: "Dual Perspective, Singular Purpose",
                    content: "At HavenBridge, we operate with the discipline of major institutions and the agility of an entrepreneurial team. We have been shaped by world-class global organisations—but raised, grounded, and inspired by the communities who depend on better housing solutions. This dual perspective enables us to bridge worlds: the world of capital, policy, and development; and the world of lived experience, community, and belonging.",
                    icon: Shield
                  },
                  {
                    title: "Building More Than Structures",
                    content: "We exist to build places that feel like home—projects that speak to the aspirations of the people they serve, and that stand as long-term assets for governments, partners, and investors. HavenBridge is not simply developing property. We are developing futures.",
                    icon: HomeIcon
                  }
                ].map((section, i) => (
                  <div key={i} className="group relative pl-8 lg:pl-0">
                    {/* Decorative dot */}
                    <div className="absolute left-0 top-3 w-4 h-4 bg-linear-to-br from-amber-400 to-cyan-500 rounded-full transform group-hover:scale-125 transition-transform hidden lg:block"></div>
                    
                    <div className="bg-white rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <section.icon className="w-6 h-6 text-amber-400" />
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Enhanced */}
      <section className="py-20 bg-linear-to-br from-slate-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-linear-to-br from-amber-400/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-amber-400/10 rounded-full">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-semibold text-amber-600">VISION</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Australia's leading inclusive housing developer
                </h2>
                <p className="text-gray-600">
                  To be Australia's leading developer—where commercial excellence, multicultural insight, and government partnership
                  come together to shape a more inclusive housing future.
                </p>
                
                {/* Decorative element */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
              </div>
            </div>
            
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-cyan-500/10 rounded-full">
                  <Bullseye className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm font-semibold text-cyan-600">MISSION</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Creating Dignified, Community-Focused Housing
                </h2>
                <p className="text-gray-600">
                  Our mission is to create dignified, community-focused housing that reflects the lived experiences of multicultural
                  Australians and strengthens their sense of belonging.
                </p>
                
                {/* Decorative element */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-6 h-6 text-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-500/10 rounded-full">
              <Star className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-600">OUR CORE PRINCIPLES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-2 bg-linear-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col">
                    {/* Icon container */}
                    <div className={`inline-flex p-4 rounded-xl ${value.bgColor} mb-6 mx-auto`}>
                      <Icon className={`w-10 h-10 bg-linear-to-br ${value.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 flex-1">
                      {value.desc}
                    </p>
                    
                    {/* Hover indicator */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-full h-0.5 bg-linear-to-br from-amber-400 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-linear-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones in building better communities across Australia.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-amber-400 to-cyan-500 hidden md:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, i) => {
                  const Icon = milestone.icon;
                  return (
                    <div key={i} className={`group relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'} mb-4 md:mb-0`}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="w-6 h-6 text-amber-400" />
                            <div className="text-amber-400 font-bold text-2xl">{milestone.year}</div>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.event}</h3>
                          <p className="text-gray-600">{milestone.desc}</p>
                        </div>
                      </div>
                      
                      {/* Center dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-linear-to-br from-amber-400 to-cyan-500 rounded-full z-10 group-hover:scale-150 transition-transform"></div>
                      
                      {/* Empty spacer for opposite side */}
                      <div className="w-full md:w-1/2 hidden md:block"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Enhanced with Images */}
      <section id="leadership" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-400/10 rounded-full">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-600">MEET THE TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HavenBridge Developments is a faith-grounded, multicultural-focused property development and advisory firm purpose-built
              to address housing inequity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, i) => {
              const expertise = person.expertise;
              return (
                <div key={i} className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-4 bg-linear-to-br ${person.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                    {/* Top accent */}
                    <div className={`h-2 bg-linear-to-br ${person.color}`}></div>
                    
                    {/* Image Section */}
                    <div className="relative h-95 overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/20 z-10"></div>
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
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h3>
                        <p className="text-sm font-semibold text-amber-600 mb-3">{person.title}</p>
                        
                        {/* Expertise tags */}
                        <div className="flex flex-wrap gap-1">
                          {expertise.map((skill, j) => (
                            <span key={j} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                        {person.bio}
                      </p>
                      
                      <button className="w-full py-2.5 bg-linear-to-br from-slate-900 to-slate-800 text-white font-bold rounded-lg hover:from-slate-800 hover:to-slate-700 transition-all mt-auto">
                        View Full Profile
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Want to Work <span className="text-transparent bg-clip-text bg-linear-to-br from-amber-400 via-white to-cyan-500">Together?</span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
              Join us in building better communities across Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-linear-to-br from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:from-amber-500 hover:to-amber-400 transition-all shadow-2xl"
              >
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/careers"
                className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-12 py-5 text-xl font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Users className="w-5 h-5 mr-2" />
                <span>View Careers</span>
              </a>
            </div>
            
            {/* Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              {[
                { icon: Mail, label: "General Inquiries", value: "hello@havenbridge.com.au", color: "text-amber-400" },
                { icon: Phone, label: "Phone", value: "+61 (0) 3 XXXX XXXX", color: "text-cyan-500" },
                { icon: MapPin, label: "Head Office", value: "Level 8, 90 Collins St, Melbourne", color: "text-emerald-500" }
              ].map((contact, i) => (
                <div key={i} className="flex items-center gap-3 text-white group cursor-pointer">
                  <div className={`p-3 rounded-lg ${contact.color.replace('text', 'bg')}/10`}>
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">{contact.label}</div>
                    <div className="font-medium">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

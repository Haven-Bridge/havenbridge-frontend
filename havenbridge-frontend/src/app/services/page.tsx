"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { servicesData } from "@/data/services";

import { 
  ArrowRight, 
  Briefcase, 
  Building2,
  CheckCircle,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Home,
  Building,
  Heart,
  Baby,
  HeartHandshake,
  Handshake
} from "lucide-react";

export default function ServicesPage() {
  const services = servicesData;

  const stats = [
    { number: "6", label: "Core Services", icon: Briefcase, color: "text-amber-500" },
    { number: "$95M+", label: "Portfolio Value", icon: TrendingUp, color: "text-emerald-500" },
    { number: "500+", label: "Homes Delivered", icon: Home, color: "text-cyan-500" },
    { number: "100%", label: "Client Satisfaction", icon: CheckCircle, color: "text-green-500" }
  ];

  const whyWorkWithUs = [
    {
      icon: Target,
      title: "Comprehensive Expertise",
      desc: "From affordable housing to aged care, we deliver across multiple asset classes"
    },
    {
      icon: TrendingUp,
      title: "Strong Track Record",
      desc: "Proven delivery with average IRRs of 17-20% across our portfolio"
    },
    {
      icon: Users,
      title: "Community-Centered",
      desc: "Every project prioritizes social impact alongside financial returns"
    },
    {
      icon: CheckCircle,
      title: "Full-Service Support",
      desc: "End-to-end management from feasibility through to handover"
    }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Elements */}
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
                <Building2 className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  COMPREHENSIVE SOLUTIONS
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="block">Our</span>
                <span className="block text-amber-400">Services</span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                From affordable housing to childcare centres, we deliver developments that create lasting value for communities and investors alike.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services-list"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
                >
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Get in Touch
                  <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative h-full">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
                <Image
                  src="/hero-images/service-hero.jpeg"
                  alt="HavenBridge Services"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-br from-slate-50 to-cyan-50 -mt-8 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${stat.color.replace('text', 'bg')}/10`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">WHY CHOOSE US</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Work With HavenBridge
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyWorkWithUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-linear-to-br from-slate-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl w-fit mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* Services List */}
      <section id="services-list" className="py-20 bg-linear-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
              <Building2 className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-600">OUR SERVICES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click any service to learn more about our approach and track record
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              // Map icon string to actual icon component
              const iconMap: any = { Home, Building, Heart, Baby, HeartHandshake, Handshake };
              const IconComponent = iconMap[service.icon];
              
              return (
                <a
                  key={i}
                  href={`/services/${service.id}`}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
                >
                  {/* Service Image */}
                  <div className="aspect-4/3 bg-gradient-to-br from-slate-800 to-slate-600 relative overflow-hidden">
                    <Image 
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    
                    {/* Service Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {service.shortTitle}
                      </h3>
                      <p className="text-gray-200 text-sm line-clamp-2">
                        {service.desc}
                      </p>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full z-10">
                      <span className="text-sm font-bold text-slate-900">{service.stats}</span>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full">
                        <ArrowRight className="w-8 h-8 text-slate-900" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-emerald-400">
                Your Next Project?
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Partner with us to create developments that deliver both financial returns and meaningful community impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-12 py-5 text-xl font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
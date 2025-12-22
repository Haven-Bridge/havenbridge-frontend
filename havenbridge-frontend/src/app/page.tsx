"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";

import {
  Building2,
  HeartHandshake,
  Home,
  Building,
  Baby,
  Heart,
  Handshake,
  Target,
  Award,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  ChevronRight,
  Users,
  Globe,
  Clock,
  Star,
  MapPin,
  Calendar,
  Award as Trophy,
  Target as Bullseye,
  TrendingUp as Growth,
  Shield as Protection,
} from "lucide-react";

// Main Landing Page
export default function HavenBridgeLanding() {
  const services = [
    {
      icon: Home,
      title: "Affordable & Social Housing Development",
      desc: "Community-focused housing solutions aligned with government programs like HAFF and the Big Housing Build.",
      link: "/services",
      imageUrl: "/services/affordable-housing.jpg",
      color: "from-amber-400 to-amber-500",
      stats: "500+ Homes",
    },
    {
      icon: Building,
      title: "Rooming Houses & Community Accommodation",
      desc: "High-yield, fully compliant rooming house and community accommodation developments across key growth corridors.",
      link: "/services",
      imageUrl: "/services/rooming-houses.jpg",
      color: "from-cyan-500 to-blue-500",
      stats: "High Yield",
    },
    {
      icon: Heart,
      title: "Aged Care & NDIS Housing",
      desc: "Faith- and culturally-aligned aged care, SIL, and SDA housing designed for dignity, safety, and inclusion.",
      link: "/services",
      imageUrl: "/services/aged-care.jpg",
      color: "from-emerald-500 to-green-500",
      stats: "Specialist Care",
    },
    {
      icon: Baby,
      title: "Childcare Centre Development",
      desc: "End-to-end delivery of compliant childcare centres aligned with Victorian Education & Care regulations.",
      link: "/services",
      imageUrl: "/services/childcare-centre.jpg",
      color: "from-violet-500 to-purple-500",
      stats: "Family Focused",
    },
    {
      icon: HeartHandshake,
      title: "Cabin Parks & Modular Housing",
      desc: "Modular cabin parks for transitional housing, crisis accommodation, workers villages, and faith-based housing.",
      link: "/services",
      imageUrl: "/services/cabin-parks.jpg",
      color: "from-orange-500 to-red-500",
      stats: "Flexible Solutions",
    },
    {
      icon: Handshake,
      title: "End-to-End Development Management",
      desc: "Full lifecycle development and project management from feasibility through delivery and risk management.",
      link: "/services",
      imageUrl: "/services/development-management.jpg",
      color: "from-indigo-500 to-purple-500",
      stats: "Full Service",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assured",
      desc: "Every project meets the highest standards of construction and compliance with Australian regulations.",
      color: "bg-cyan-500/10",
      iconColor: "text-cyan-500",
    },
    {
      icon: Target,
      title: "Community Focused",
      desc: "We prioritize social impact and community wellbeing in every development we undertake.",
      color: "bg-amber-400/10",
      iconColor: "text-amber-400",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      desc: "Building with environmental responsibility and long-term sustainability at the forefront.",
      color: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      desc: "Recognized by government partners and industry leaders for outstanding project delivery.",
      color: "bg-violet-500/10",
      iconColor: "text-violet-500",
    },
  ];

  const projects = [
    {
      name: "Melbourne Modular Village",
      location: "Melbourne, VIC",
      type: "Residential",
      units: "48 Homes",
      progress: "85%",
      completion: "June 2025",
      imageUrl:
        "https://media.istockphoto.com/id/503943499/photo/arial-view-of-melbourne-australia.webp?a=1&b=1&s=612x612&w=0&k=20&c=9jkv3OfDvvclRiZdGbr8fdpUb_sipPifO-_u-k0bYv4=",
      featured: true,
    },
    {
      name: "Sunrise Care Centre",
      location: "Sydney, NSW",
      type: "Aged Care",
      units: "80 Beds",
      progress: "Completed",
      completion: "Dec 2024",
      imageUrl:
        "https://media.istockphoto.com/id/2247111233/photo/aerial-panorama-drone-view-of-a-inner-western-sydney-suburb-of-ashbury-urban-sprawl-and-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=GZ2qqbC8uTN2T6NHxGkqavy82q_G3Psa3Rm9GfBhVZQ=",
      featured: false,
    },
    {
      name: "Community Hub Brisbane",
      location: "Brisbane, QLD",
      type: "Mixed Use",
      units: "35 Units",
      progress: "60%",
      completion: "Sep 2025",
      imageUrl:
        "https://media.istockphoto.com/id/1425748659/photo/aerial-view-of-brisbane-river-at-west-end.webp?a=1&b=1&s=612x612&w=0&k=20&c=1bcTRVw2tsSKiDBnTnbMkAYh0V-xkmkne7tdUZly9CY=",
      featured: false,
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Homes Delivered",
      icon: Home,
      color: "text-amber-400",
    },
    {
      value: "$150M+",
      label: "Project Value",
      icon: TrendingUp,
      color: "text-cyan-500",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: Heart,
      color: "text-emerald-500",
    },
    {
      value: "25+",
      label: "Industry Awards",
      icon: Trophy,
      color: "text-violet-500",
    },
  ];

  const whyChooseUs = [
    {
      title: "A Developer with Dual Advantage",
      desc: "Our team has been trained by major global institutions, bringing world-class standards in finance, governance, planning, and project delivery. At the same time, our lived experience keeps us deeply connected to the communities we serve.",
      icon: Globe,
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "We Understand the Communities",
      desc: "We come from migrant backgrounds, multicultural communities, and real lived experiences of housing insecurity. That authenticity ensures our developments are grounded, relevant, and human-centred.",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Value Aligned With Government Priorities",
      desc: "From affordable housing to multicultural engagement, social impact investment, and community infrastructure, our projects directly support federal, state, and local government objectives.",
      icon: Shield,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Agile Delivery with High-Standard Governance",
      desc: "We operate like an agile startup but carry the governance discipline of a major property institution. This makes us fast, reliable, and accountable—ideal partners for government and impact investors.",
      icon: Zap,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "We Build Trust Through Transparency",
      desc: "Clear financial models, realistic timelines, community consultations, and honest conversations. We are building a reputation as a developer that puts clarity before complexity.",
      icon: CheckCircle2,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Developments Strengthen Social Cohesion",
      desc: "Housing is not just infrastructure—it is nation-building. Our work ensures multicultural communities are not left behind but are uplifted through access to safe, affordable, and dignified homes.",
      icon: HeartHandshake,
      color: "from-pink-500 to-rose-500",
    },
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
          <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-3 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-5">
              {/* Animated header */}
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Building
                  <span className="block">
                    Communities.
                    <span className="relative ml-3">
                      <p className="text-amber-400">Delivering Impact.</p>
                      {/* <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-cyan-500 animate-pulse" /> */}
                    </span>
                  </span>
                </h1>
              </div>
{/* 
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                HavenBridge develops community-focused housing that uplifts
                migrant communities, enables government priorities, and delivers
                long-term value for partners and investors.
              </p> */}

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                HavenBridge develops community-focused housing that uplifts
                migrant communities, enables government priorities, and delivers
                long-term value for partners and investors.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold text-base hover:from-amber-500 hover:to-amber-400 transition-all shadow-xl overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-linear-to-r from-amber-400 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <span className="relative z-10">Book a Consultation</span>
                  <ArrowRight className="relative z-10 w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/projects"
                  className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold text-base border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Projects
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image (Hidden on Mobile) - Takes up 7 columns for more prominence */}
            <div className="hidden lg:block lg:col-span-7 relative">
              <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Main Image */}
                <Image
                  src="/hero-images/hero.jpeg"
                  alt="HavenBridge Development - Community-focused housing solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 60vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-linear-to-r from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group text-center">
                  <div className="relative">
                    <Icon
                      className={`w-12 h-12 mx-auto mb-4 ${stat.color} transform group-hover:scale-110 transition-transform`}
                    />
                    <div className="text-4xl font-bold text-slate-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Core Services - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-500/10 rounded-full">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-600">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From affordable and social housing to childcare, aged care, and
              modular cabin parks, we deliver developments that are financially
              sound, socially responsible, and culturally informed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-linear-to-r from-amber-400/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <a
                  href={service.link}
                  className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                >
                  {/* Image with gradient overlay */}
                  <div className="aspect-video mb-6 rounded-xl overflow-hidden relative">
                    {service.imageUrl ? (
                      <>
                        <img
                          src={service.imageUrl}
                          alt={service.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      </>
                    ) : (
                      <div
                        className={`w-full h-full bg-linear-to-br ${service.color} flex items-center justify-center`}
                      >
                        <service.icon className="w-16 h-16 text-white/80" />
                      </div>
                    )}

                    {/* Stats badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-bold text-slate-900">
                        {service.stats}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* Learn More */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-cyan-600 font-semibold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                    <div className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-700">
                      Explore →
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Not sure which pathway is right for you?
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-linear-to-r from-slate-900 to-slate-800 text-white px-8 py-3 rounded-lg font-bold hover:from-slate-800 hover:to-slate-700 transition-all shadow-lg"
            >
              <span className="relative z-10">Contact Our Experts</span>
              <ArrowRight className="relative z-10 w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Why HavenBridge - Enhanced */}
      <section className="py-20 bg-linear-to-br from-slate-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-400/10 rounded-full">
              {/* <Star className="w-4 h-4 text-amber-400" /> */}
              <span className="text-sm font-semibold text-amber-600">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why HavenBridge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A developer with institutional capability, community insight, and
              a deep commitment to social impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group relative">
                  {/* Background glow */}
                  <div
                    className={`absolute -inset-2 bg-linear-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                    {/* Icon */}
                    <div
                      className={`p-4 rounded-xl bg-linear-to-br ${item.color} w-fit mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                    {/* Hover indicator */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 bg-linear-to-r from-amber-400 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects - Enhanced */}
      <section className="py-20 bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 px-4 py-2 bg-cyan-500/10 rounded-full">
                <Zap className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-semibold text-cyan-600">
                  FEATURED WORK
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 mt-2">
                Real impact through real developments
              </p>
            </div>
            <a
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group"
            >
              View All Projects{" "}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 text-xs font-bold rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> FEATURED
                    </span>
                  </div>
                )}

                {/* Glow effect */}
                <div className="absolute -inset-2 bg-linear-to-r from-amber-400/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  {/* Image with overlay */}
                  <div className="aspect-4/3 relative overflow-hidden rounded-2xl">
                    {project.imageUrl ? (
                      <>
                        <img
                          src={project.imageUrl}
                          alt={project.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-600" />
                    )}
                  </div>

                  {/* Project info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold">
                        {project.type}
                      </span>
                      <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                        {project.progress}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-300" />
                        <span className="text-gray-300">
                          {project.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Home className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400 font-semibold">
                          {project.units}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-xs">
                      <Calendar className="w-4 h-4" />
                      <span>Completion: {project.completion}</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="w-full bg-linear-to-r from-amber-400 to-cyan-500 text-white py-3 rounded-lg font-bold hover:from-amber-500 hover:to-cyan-600 transition-all">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/projects"
              className="group relative inline-flex items-center justify-center bg-linear-to-r from-slate-900 to-slate-800 text-white px-10 py-4 rounded-xl font-bold hover:from-slate-800 hover:to-slate-700 transition-all shadow-xl gap-3"
            >
              <span className="relative z-10">View Full Portfolio</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute -inset-1 bg-linear-to-r from-amber-400 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-white to-cyan-500">
                That Lasts.
              </span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
              Book your consultation today and partner with a developer that
              understands both community and capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:from-amber-500 hover:to-amber-400 transition-all shadow-2xl"
              >
                <span className="relative z-10">Book a Consultation</span>
                <div className="absolute -inset-1 bg-linear-to-r from-amber-400 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </a>
              <a
                href="/about"
                className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-5 text-lg font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Learn About Us
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
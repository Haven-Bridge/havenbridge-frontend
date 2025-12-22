"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { projectsData } from "@/data/projects";

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
  Award as Trophy,
} from "lucide-react";

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

  const featuredProjects = projectsData.slice(0, 3);

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

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Building
                  <span className="block">Communities.</span>
                  <span className="block text-amber-400">Delivering Impact.</span>
                </h1>
              </div>

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

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
                <Image
                  src="/hero-images/hero.jpeg"
                  alt="HavenBridge Development - Community-focused housing solutions"
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
                <div className="absolute -inset-2 bg-linear-to-r from-amber-400/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <a
                  href={service.link}
                  className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                >
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

                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-bold text-slate-900">
                        {service.stats}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

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

      <section className="py-20 bg-linear-to-br from-slate-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-400/10 rounded-full">
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
                  <div
                    className={`absolute -inset-2 bg-linear-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                    <div
                      className={`p-4 rounded-xl bg-linear-to-br ${item.color} w-fit mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>

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
            {featuredProjects.map((project, i) => (
              <a
                key={i}
                href={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute -inset-2 bg-linear-to-r from-amber-400/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden rounded-2xl">
                  <div className="aspect-4/3 relative overflow-hidden">
                    {project.heroImage ? (
                      <img
                        src={project.heroImage}
                        alt={project.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-600" />
                    )}
                    
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {project.location}
                    </p>
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full">
                      <ArrowRight className="w-8 h-8 text-slate-900" />
                    </div>
                  </div>
                </div>
              </a>
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

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" /> */}
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
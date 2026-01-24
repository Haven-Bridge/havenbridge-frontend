"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";

import {
  Building2,
  Handshake,
  FileText,
  Download,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function HavenBridgeLanding() {
  // Data arrays for cleaner code
  const stats = [
    { value: "45", label: "Years of Experience", sub: "across real estate, development & government" },
    { value: "500+", label: "Dwellings Delivered", sub: "completed + under management" },
    { value: "$300M+", label: "Project Value", sub: "delivered + pipeline" },
    { value: "98%", label: "On Time", sub: "project delivery performance" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Develop & Deliver",
      desc: "End-to-end development management, design coordination, procurement support, and delivery oversight.",
    },
    {
      icon: Handshake,
      title: "Partner & Enable",
      desc: "Clear partnering model with CHPs, government agencies, and delivery partners.",
    },
    {
      icon: FileText,
      title: "Report & Improve",
      desc: "Outcomes tracking, compliance controls, and continuous improvement.",
    },
  ];

  const valuePoints = [
    "Governance designed for public accountability",
    "Transparent reporting and documentation",
    "Delivery partners selected with probity controls",
    "Risk-managed development pipeline",
    "Community outcomes embedded in delivery",
  ];

  const projects = [
    { 
      name: "Cobblebank Rise", 
      location: "Cobblebank, VIC", 
      status: "Delivery", 
      image: "/projects/cobblebank-rise.jpg" 
    },
    { 
      name: "Broadmeadows Renewal", 
      location: "Broadmeadows, VIC", 
      status: "Planning", 
      image: "/projects/broadmeadows-renewal.jpg" 
    },
    { 
      name: "Dandenong South Homes", 
      location: "Dandenong South, VIC", 
      status: "Feasibility", 
      image: "/projects/dandenong-south-homes.jpg" 
    },
  ];

  const partners = ["chp", "gov", "delivery", "finance"];

  return (
    <div className="bg-white font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            <Image
              src="/hero-fallback.jpg"
              alt="HavenBridge housing development"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center text-white">
          <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug md:leading-tight">
              Delivering social and affordable housing{" "}
              <span className="text-amber-400">with governance that institutions can trust</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100/90 max-w-3xl mx-auto leading-relaxed font-light">
              We partner with community housing providers, government, and delivery teams to bring projects from feasibility to completion—with transparent reporting and strong controls.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 md:pt-6">
              <a
                href="/contact?type=partner"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold bg-blue-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Partner with Us</span>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="/submit-project"
                className="group inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-white/10 border-2 border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                Submit a Project / Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm md:text-base uppercase tracking-widest text-slate-600 mb-8 md:mb-10 font-medium">
            Trusted by leading partners
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center">
            {partners.map((logo) => (
              <div key={logo} className="text-center">
                <div className="h-12 md:h-16 w-32 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-200">
                  <span className="text-slate-700 font-semibold uppercase text-sm">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white border-t border-blue-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold text-slate-800">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl font-semibold text-slate-600">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <p className="text-xl md:text-3xl text-slate-800 leading-relaxed font-medium">
            Our projects sit at the intersection of social impact, commercial excellence, and cultural insight.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-800">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div
                key={i}
                className="group bg-slate-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-50 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Points Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-slate-800">
            Why stakeholders work with us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {valuePoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-all"
              >
                <CheckCircle2 className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-slate-600 font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-800">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-slate-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-800">
                    {project.name}
                  </h3>
                  <p className="text-slate-500 mb-4">
                    {project.location} — {project.status}
                  </p>
                  <a
                    href="#"
                    className="text-amber-600 font-medium hover:text-amber-500 flex items-center gap-2 transition-colors"
                  >
                    View summary <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-8">
            Have a site or a project?
          </h2>
          <p className="text-xl md:text-3xl mb-12 opacity-95 max-w-3xl mx-auto font-light">
            Submit details in 3 minutes
          </p>
          <a
            href="/submit-project"
            className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold bg-white text-slate-800 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">
              Project Intake Form <ArrowRight className="w-6 h-6" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";
import { ArrowRight, BarChart3, Building2, CheckCircle, ClipboardCheck, Download, FileText, Home, MapPin, Shield, TrendingUp, Users } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function CaseStudiesPage() {
  const caseStudies = projectsData;

  const governanceMetrics = [
    { 
      value: "98%", 
      label: "Stage Gate Compliance", 
      footnote: "on-time approvals across portfolio",
      icon: ClipboardCheck, 
      color: "text-cyan-600" 
    },
    { 
      value: "$210M", 
      label: "Portfolio Value", 
      footnote: "delivered + pipeline (Dec 2025)",
      icon: TrendingUp, 
      color: "text-emerald-600" 
    },
    { 
      value: "375", 
      label: "Homes Delivered", 
      footnote: "completed + under contract",
      icon: Home, 
      color: "text-amber-600" 
    },
    { 
      value: "100%", 
      label: "Probity Compliance", 
      footnote: "audit-ready governance",
      icon: Shield, 
      color: "text-violet-600" 
    }
  ];

  const deliveryFramework = [
    {
      icon: ClipboardCheck,
      title: "Stage-Gated Delivery",
      desc: "Documented decision gates from feasibility to handover"
    },
    {
      icon: Shield,
      title: "Risk Management",
      desc: "Probity controls and compliance frameworks"
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      desc: "Monthly updates and audit-ready documentation"
    },
    {
      icon: Users,
      title: "Community Outcomes",
      desc: "Measurable social impact and engagement"
    }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300">
                  EVIDENCE-BASED DELIVERY
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Case Studies
                <span className="block text-cyan-400 mt-2">Governance in Action</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                Documented evidence of institutional-grade housing delivery with 
                auditable governance, measurable outcomes, and transparent reporting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  View Case Studies
                </a>
                <a
                  href="/documents/capability-statement.pdf"
                  className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors gap-2"
                  download
                >
                  <Download className="w-4 h-4" />
                  Capability Statement
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
                <Image
                  src="/hero-images/hero.jpeg"
                  alt="HavenBridge - Governance in Action Case Studies"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
                
                {/* Overlay with institutional messaging */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-white text-sm">
                      <span className="font-semibold text-cyan-400">Evidence-Based:</span> 
                      {" "}Stage-gated delivery • Risk registers • Monthly reporting • Social outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Metrics - FIXED TEXT COLORS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceMetrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${metric.color.replace('text', 'bg')}/10`}>
                      <Icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900">
                      {metric.value}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-600"> {/* Changed from text-gray-500 */}
                    {metric.footnote}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Framework - FIXED TEXT COLORS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Institutional Delivery Framework
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto"> {/* Changed from text-gray-600 */}
              Proven processes that ensure governance, compliance, and outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {deliveryFramework.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-slate-50 rounded-xl p-6">
                  <div className="p-3 bg-slate-900 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm"> {/* Changed from text-gray-600 */}
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid - FIXED TEXT COLORS */}
      <section id="case-studies" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Documented Outcomes
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto"> {/* Changed from text-gray-600 */}
              Real projects demonstrating governance-first delivery and measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, i) => (
              <a 
                key={i} 
                href={`/case-studies/${caseStudy.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Case Study Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={`/projects/${caseStudy.image}`}
                    alt={caseStudy.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      {caseStudy.clientType || "Government Partnership"}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {caseStudy.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4"> {/* Changed from text-gray-600 */}
                    {caseStudy.location}
                  </p>

                  {/* Case Study Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-700">Delivery Model</div> {/* Changed from text-gray-500 */}
                      <div className="font-semibold text-slate-900">{caseStudy.deliveryModel || "Stage-Gated"}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-700">Outcomes</div> {/* Changed from text-gray-500 */}
                      <div className="font-semibold text-slate-900">{caseStudy.outcomes || "Social Housing"}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-cyan-600 font-semibold text-sm">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Evidence-Based Partnership
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Request detailed case studies and governance documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?type=government"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Request Case Studies
            </a>
            <a
              href="/documents/governance-framework.pdf"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              download
            >
              <Download className="w-5 h-5" />
              Governance Framework
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
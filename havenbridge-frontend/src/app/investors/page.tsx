"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";

import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  CheckCircle2,
  ArrowRight,
  FileText,
  Handshake,
  Target,
  Sparkles,
  ChevronRight,
  Download,
  Phone,
  Mail,
  Users,
  PieChart,
  Building2,
  Calculator,
} from "lucide-react";

export default function InvestorsPage() {
  const governancePillars = [
    {
      icon: Shield,
      title: "Audit-Ready Governance",
      desc: "Stage-gated approvals, monthly reporting, transparent controls",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Verified Performance",
      desc: "Auditable metrics, documented returns, track record transparency",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: BarChart3,
      title: "Risk Management",
      desc: "Probity compliance, contingency reserves, structured exits",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Handshake,
      title: "Partner Alignment",
      desc: "Government co-investment, CHP partnerships, impact capital",
      color: "from-violet-500 to-purple-600",
    },
  ];

  const investmentPathways = [
    {
      title: "Project Equity",
      desc: "Direct investment in specific affordable housing developments",
      features: [
        "Stage-gated approvals",
        "Monthly reporting",
        "HAFF-aligned delivery",
        "Social outcomes measurement",
      ],
      roi: "15-20%",
      minInvestment: "$2M+",
      timeline: "24-36 months",
      icon: Building2,
      color: "border-l-4 border-cyan-500",
    },
    {
      title: "Portfolio Co-investment",
      desc: "Diversified investment across multiple housing projects",
      features: [
        "Risk diversification",
        "Quarterly distributions",
        "Governance oversight",
        "Impact reporting",
      ],
      roi: "12-16%",
      minInvestment: "$5M+",
      timeline: "36-48 months",
      icon: PieChart,
      color: "border-l-4 border-emerald-500",
    },
    {
      title: "Government-Aligned Structures",
      desc: "Senior secured debt for government-backed housing initiatives",
      features: [
        "Guaranteed income",
        "First ranking security",
        "Monthly interest",
        "Policy alignment",
      ],
      roi: "8-10%",
      minInvestment: "$10M+",
      timeline: "18-24 months",
      icon: Shield,
      color: "border-l-4 border-amber-500",
    },
  ];

  const investmentProcess = [
    {
      step: "1",
      title: "Initial Discussion",
      desc: "Review investor mandate and opportunity alignment",
      icon: Phone,
    },
    {
      step: "2",
      title: "NDA & Due Diligence",
      desc: "Access detailed investment package under confidentiality",
      icon: FileText,
    },
    {
      step: "3",
      title: "Term Sheet",
      desc: "Negotiate investment structure and governance terms",
      icon: Handshake,
    },
    {
      step: "4",
      title: "Documentation & Funding",
      desc: "Legal documentation and capital deployment",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - Text Content */}
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-semibold text-cyan-300">
            INSTITUTIONAL INVESTORS
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Governance-First
          <span className="block text-cyan-400 mt-2">Housing Investment</span>
        </h1>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Partner with a specialist housing developer combining institutional-grade 
          governance with measurable social impact and auditable financial returns.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/documents/investor-brief.pdf"
            className="inline-flex items-center justify-center bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors gap-2"
            download
          >
            <Download className="w-4 h-4" />
            Download Investor Brief
          </a>
          <a
            href="/contact?type=investor"
            className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors"
          >
            Speak to Investor Relations
          </a>
        </div>
      </div>

      {/* Right Column - Hero Image */}
      <div className="hidden lg:block relative">
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
          <Image
            src="/investor-images/Hero.png"
            alt="HavenBridge Governance-First Housing Investment"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          
          {/* Overlay with institutional messaging */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-white text-sm">
                <span className="font-semibold text-cyan-400">Audit-Ready Investment:</span> 
                {" "}Stage-gated governance • Monthly reporting • Probity compliance • Social impact measurement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Governance Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investment Advantages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Institutional controls with community impact focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governancePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${pillar.color} bg-opacity-10 mb-4`}>
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Pathways */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investment Pathways
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured opportunities aligned with risk appetite and impact goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentPathways.map((pathway, i) => {
              const Icon = pathway.icon;
              return (
                <div key={i} className={`bg-white rounded-xl shadow-lg overflow-hidden ${pathway.color}`}>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <Icon className="w-8 h-8 text-slate-900" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-slate-900">
                          {pathway.roi}
                        </div>
                        <div className="text-sm text-gray-500">Target IRR</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {pathway.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{pathway.desc}</p>

                    <ul className="space-y-3 mb-6">
                      {pathway.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500">Minimum</div>
                        <div className="text-lg font-bold text-slate-900">
                          {pathway.minInvestment}
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="text-lg font-bold text-slate-900">
                          {pathway.timeline}
                        </div>
                      </div>
                    </div>

                    <a
                      href="/contact?type=investor"
                      className="block w-full py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors text-center"
                    >
                      Request Details
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent, structured approach for institutional partners
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {investmentProcess.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <Icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-20" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Invest?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Access our comprehensive investor package and speak with our investor relations team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/documents/investor-brief.pdf"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center gap-2"
              download
            >
              <Download className="w-5 h-5" />
              Investor Brief (PDF)
            </a>
            <a
              href="/contact?type=investor"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold border border-white/20 hover:bg-white/20 transition-colors"
            >
              Contact Investor Relations
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
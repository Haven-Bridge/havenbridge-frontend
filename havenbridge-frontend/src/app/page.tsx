"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { projectsData } from "@/data/projects";

import {
  Home,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight,
  Zap,
  ChevronRight,
  Download,
  FileText,
  ClipboardCheck,
  BarChart3,
  Building2,
  Handshake,
} from "lucide-react";

export default function HavenBridgeLanding() {
  const featuredProjects = projectsData.slice(0, 3);

  // Simplified stats with auditable metrics
  const stats = [
    {
      value: "375",
      label: "Homes Delivered",
      footnote: "completed + under contract (Dec 2025)",
      icon: Home,
    },
    {
      value: "$210M",
      label: "Project Value",
      footnote: "delivered + pipeline (Dec 2025)",
      icon: TrendingUp,
    },
    {
      value: "98%",
      label: "Stage Gate Compliance",
      footnote: "on-time approvals",
      icon: ClipboardCheck,
    },
    {
      value: "100%",
      label: "Probity Compliance",
      footnote: "audit-ready governance",
      icon: Shield,
    },
  ];

  // Simplified governance framework
  const governanceFramework = [
    {
      title: "Stage-Gate Approvals",
      desc: "Documented decision gates for each project phase",
      icon: ClipboardCheck,
    },
    {
      title: "Risk & Assurance",
      desc: "Risk registers and probity controls",
      icon: Shield,
    },
    {
      title: "Monthly Reporting",
      desc: "Budget and program dashboards",
      icon: BarChart3,
    },
    {
      title: "Full Compliance",
      desc: "Planning, building, and safety standards",
      icon: FileText,
    },
  ];

  // Simplified partner pathways
  const partnerPathways = [
    {
      title: "Government",
      desc: "HAFF and Big Housing Build delivery",
      cta: "Download Statement",
      link: "/government",
      color: "bg-blue-50",
    },
    {
      title: "Investors",
      desc: "Governance-first investment pipeline",
      cta: "Request Brief",
      link: "/investors",
      color: "bg-emerald-50",
    },
    {
      title: "Landowners",
      desc: "Site partnering and joint ventures",
      cta: "Submit Site",
      link: "/landowners",
      color: "bg-amber-50",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section with Image */}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Institutional-Grade
                <span className="block text-amber-400">Housing Delivery</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8">
                Partnering with government and CHPs to deliver affordable and specialist housing through disciplined governance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#capability-statement"
                  className="inline-flex items-center justify-center bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors gap-2"
                >
                  <Download className="w-4 h-4" />
                  Capability Statement
                </a>
                <a
                  href="/contact?type=government"
                  className="inline-flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Speak to Partnerships
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

      {/* Simplified Stats */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center p-4">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-cyan-500" />
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.footnote}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance Differentiator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Governance Framework
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Clear controls for government, CHP, and institutional partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {governanceFramework.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-slate-50 rounded-xl p-6 text-center">
                  <Icon className="w-10 h-10 mx-auto mb-4 text-cyan-500" />
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Evidence-Based Delivery
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <a
                key={i}
                href={`/case-studies/${project.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  {project.heroImage ? (
                    <Image
                      src={project.heroImage}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200"></div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.location}</p>
                  <div className="text-cyan-600 text-sm font-semibold">
                    View Case Study →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Pathways */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Partner With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partnerPathways.map((pathway, i) => (
              <div key={i} className={`rounded-xl p-8 ${pathway.color} text-center`}>
                <h3 className="text-xl font-bold mb-4">{pathway.title}</h3>
                <p className="text-gray-600 mb-6">{pathway.desc}</p>
                <a
                  href={pathway.link}
                  className="text-cyan-600 font-semibold hover:text-cyan-700"
                >
                  {pathway.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Download our capability statement or speak with our partnerships team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#capability-statement"
              className="bg-amber-400 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-500 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Capability Statement
            </a>
            <a
              href="/contact?type=government"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold border border-white/20 hover:bg-white/20 transition-colors"
            >
              Book Partner Call
            </a>
          </div>
        </div>
      </section>

      {/* Capability Statement PDF Section */}
      <section id="capability-statement" className="py-12 bg-cyan-50">
        <div className="container mx-auto px-6 text-center">
          <FileText className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Download Capability Statement
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Complete overview of our governance framework, delivery models, and institutional capabilities
          </p>
          <a
  href="/documents/capability-statement.pdf"  // Update this path
  download
  className="inline-flex items-center justify-center bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors gap-2"
>
  <Download className="w-5 h-5" />
  Download PDF (2.4 MB)
</a>

        </div>
      </section>

      <Footer />
    </div>
  );
}
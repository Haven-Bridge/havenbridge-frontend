"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import { projectsData } from "@/data/projects";

import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  Calendar, 
  CheckCircle, 
  DollarSign, 
  Home, 
  MapPin, 
  TrendingUp,
  Users,
  FileText,
  Download,
  ClipboardCheck,
  BarChart3,
  Shield
} from "lucide-react";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const caseStudyId = params.id as string;
  
  // Find the case study by ID
  const caseStudy = projectsData.find(p => p.id === caseStudyId);
  
  // If case study not found, show 404
  if (!caseStudy) {
    return (
      <div className="bg-white font-sans min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-700 mb-8">The case study you're looking for doesn't exist.</p>
          <a href="/case-studies" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section - Dark background with white text is correct here */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <a 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </a>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Case Study Info */}
            <div>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300">
                  CASE STUDY
                </span>
              </div>

              {/* Case Study Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {caseStudy.name}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-300 mb-8">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-lg">{caseStudy.location}</span>
              </div>

              {/* Governance Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <ClipboardCheck className="w-6 h-6 text-emerald-400 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{caseStudy.stageGates || "5"}</div>
                  <div className="text-xs text-gray-300">Stage Gates</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Shield className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-gray-300">Probity Compliance</div>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-semibold">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    caseStudy.status === "Completed" 
                      ? "bg-emerald-500/20 text-emerald-300" 
                      : "bg-amber-500/20 text-amber-300"
                  }`}>
                    {caseStudy.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{caseStudy.completion}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
              <a
  href="/documents/capability-statement.pdf"  // Update this path
  className="inline-flex items-center justify-center bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors gap-2"
  download
>
  <Download className="w-4 h-4" />
  Download Case Study
</a>

                <a
                  href="/contact?type=government"
                  className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Request Governance Details
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                {(caseStudy.heroImage || caseStudy.image) ? (
                  <Image
                    src={caseStudy.heroImage || `/projects/${caseStudy.image}`} // FIXED PATH
                    alt={caseStudy.name}
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <Building2 className="w-32 h-32 text-white/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Overview - FIXED TEXT COLORS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8"> {/* Changed from text-gray-600 */}
              {caseStudy.desc || "This case study demonstrates institutional-grade housing delivery through disciplined governance and community-informed design."}
            </p>

            {/* Governance Highlights */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Governance Framework</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <ClipboardCheck className="w-5 h-5 text-cyan-600" /> {/* Darker icon */}
                    <span className="font-semibold text-slate-900">Stage-Gate Approvals</span> {/* Added text-slate-900 */}
                  </div>
                  <p className="text-gray-700 text-sm"> {/* Changed from text-gray-600 */}
                    Documented decision gates from feasibility to handover with approval registers
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-emerald-600" /> {/* Darker icon */}
                    <span className="font-semibold text-slate-900">Monthly Reporting</span> {/* Added text-slate-900 */}
                  </div>
                  <p className="text-gray-700 text-sm"> {/* Changed from text-gray-600 */}
                    Budget/program baselines, risk registers, and stakeholder dashboards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details - FIXED TEXT COLORS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Project Details
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Building2 className="w-8 h-8 text-cyan-600 mb-4" /> {/* Darker icon */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">Project Type</h3>
                <p className="text-gray-700">{caseStudy.type}</p> {/* Changed from text-gray-600 */}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <MapPin className="w-8 h-8 text-emerald-600 mb-4" /> {/* Darker icon */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
                <p className="text-gray-700">{caseStudy.location}</p> {/* Changed from text-gray-600 */}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Home className="w-8 h-8 text-amber-600 mb-4" /> {/* Darker icon */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">Capacity</h3>
                <p className="text-gray-700">{caseStudy.units} units</p> {/* Changed from text-gray-600 */}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Calendar className="w-8 h-8 text-violet-600 mb-4" /> {/* Darker icon */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">Completion</h3>
                <p className="text-gray-700">{caseStudy.completion}</p> {/* Changed from text-gray-600 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Metrics - FIXED TEXT COLORS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Measurable Outcomes
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-700">Project Value</div> {/* Changed from text-gray-500 */}
                    <div className="text-3xl font-bold text-slate-900">{caseStudy.value}</div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Governance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-700">Stage Gate Compliance</div> {/* Changed from text-gray-500 */}
                    <div className="text-3xl font-bold text-slate-900">100%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700">Probity Compliance</div> {/* Changed from text-gray-500 */}
                    <div className="text-3xl font-bold text-slate-900">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Dark background with white text is correct here */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request Detailed Case Study
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Access comprehensive governance documentation and project analysis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?type=government"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Request Full Case Study
            </a>
            <a
              href="/case-studies"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold border border-white/20 hover:bg-white/20 transition-colors"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
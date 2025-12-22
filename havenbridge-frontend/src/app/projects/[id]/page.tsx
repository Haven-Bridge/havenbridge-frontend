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
  Award,
  Target,
  BarChart3
} from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  
  // Find the project by ID
  const project = projectsData.find(p => p.id === projectId);
  
  // If project not found, show 404
  if (!project) {
    return (
      <div className="bg-white font-sans min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <a href="/projects" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </a>
        </div>
      </div>
    );
  }

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
          {/* Back Button */}
          <a 
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </a>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Project Info */}
            <div>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">{project.type}</span>
              </div>

              {/* Project Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.name}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-300 mb-8">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-lg">{project.location}</span>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <DollarSign className="w-6 h-6 text-emerald-400 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{project.value}</div>
                  <div className="text-xs text-gray-300">Project Value</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <TrendingUp className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{project.roi}</div>
                  <div className="text-xs text-gray-300">Return</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Home className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{project.units}</div>
                  <div className="text-xs text-gray-300">Units</div>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-semibold">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    project.status === "Completed" 
                      ? "bg-emerald-500/20 text-emerald-300" 
                      : "bg-amber-500/20 text-amber-300"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{project.completion}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
                >
                  <span className="relative z-10">Request Information</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Schedule Call
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.heroImage || `/projects/${project.image}`}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Project Overview
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {project.desc}
            </p>

            {/* Project Highlights */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Highlights</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gradient-to-br from-slate-50 to-white p-4 rounded-xl border border-gray-100">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="font-medium text-slate-900">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-20 bg-linear-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Project Details
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Type */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Building2 className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Type</h3>
                <p className="text-gray-600">{project.type}</p>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <MapPin className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>

              {/* Year */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Calendar className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Year</h3>
                <p className="text-gray-600">{project.year}</p>
              </div>

              {/* Units */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Home className="w-8 h-8 text-violet-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Capacity</h3>
                <p className="text-gray-600">{project.units}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Investment Performance
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <DollarSign className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-4xl font-bold text-slate-900 mb-2">{project.value}</h3>
                <p className="text-gray-600">Total Project Value</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-100">
                <TrendingUp className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-4xl font-bold text-slate-900 mb-2">{project.roi}</h3>
                <p className="text-gray-600">Internal Rate of Return</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border border-cyan-100">
                <CheckCircle className="w-10 h-10 text-cyan-500 mb-4" />
                <h3 className="text-4xl font-bold text-slate-900 mb-2">{project.status}</h3>
                <p className="text-gray-600">Current Status</p>
              </div>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interested in This Project?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Get in touch with our team to learn more about investment opportunities and project details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span className="relative z-10">Request Information</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-12 py-5 text-xl font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
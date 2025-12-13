"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Shield, 
  FileText, 
  Download, 
  Search,
  Filter,
  Calendar,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Building2,
  Home,
  Users,
  ArrowRight,
  ChevronRight,
  Eye,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function CompliancePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 50 },
    { id: 'building-codes', name: 'Building Codes', count: 15 },
    { id: 'safety', name: 'Safety Regulations', count: 12 },
    { id: 'environmental', name: 'Environmental Compliance', count: 10 },
    { id: 'quality-standards', name: 'Quality Standards', count: 8 },
    { id: 'planning', name: 'Planning Regulations', count: 5 }
  ];

  const complianceDocuments = [
    {
      id: 1,
      title: 'National Construction Code (NCC) 2025 Updates',
      description: 'Complete guide to the latest NCC amendments including energy efficiency requirements, accessibility standards, and fire safety provisions.',
      category: 'Building Codes',
      type: 'PDF Guide',
      pages: 68,
      version: '2025.1',
      effective: 'Jan 1, 2025',
      downloads: '2.1k',
      color: 'from-blue-500 to-cyan-500',
      tags: ['NCC', 'Building Standards', 'Compliance'],
      downloadLink: '/downloads/ncc-2025-updates.pdf',
      previewLink: '/preview/ncc-2025-updates'
    },
    {
      id: 2,
      title: 'Work Health & Safety Construction Regulations',
      description: 'Comprehensive safety regulations for construction sites including risk management, PPE requirements, and emergency procedures.',
      category: 'Safety Regulations',
      type: 'Regulatory Guide',
      pages: 45,
      version: '2024.3',
      effective: 'Oct 15, 2024',
      downloads: '1.8k',
      color: 'from-amber-500 to-orange-500',
      tags: ['WHS', 'Safety', 'Construction'],
      downloadLink: '/downloads/whs-construction-regulations.pdf',
      previewLink: '/preview/whs-construction-regulations'
    },
    {
      id: 3,
      title: 'Environmental Protection Regulations Guide',
      description: 'Environmental compliance requirements for construction projects including waste management, erosion control, and biodiversity protection.',
      category: 'Environmental Compliance',
      type: 'Compliance Manual',
      pages: 52,
      version: '2024.2',
      effective: 'Sep 1, 2024',
      downloads: '1.5k',
      color: 'from-emerald-500 to-green-500',
      tags: ['Environment', 'Sustainability', 'EPA'],
      downloadLink: '/downloads/environmental-compliance-guide.pdf',
      previewLink: '/preview/environmental-compliance-guide'
    },
    {
      id: 4,
      title: 'Quality Assurance Standards for Construction',
      description: 'ISO 9001 aligned quality management system requirements for construction projects and development companies.',
      category: 'Quality Standards',
      type: 'Standards Document',
      pages: 38,
      version: '2024.1',
      effective: 'Aug 1, 2024',
      downloads: '1.2k',
      color: 'from-violet-500 to-purple-500',
      tags: ['Quality', 'ISO 9001', 'Standards'],
      downloadLink: '/downloads/quality-standards-construction.pdf',
      previewLink: '/preview/quality-standards-construction'
    },
    {
      id: 5,
      title: 'Planning Scheme Amendment Procedures',
      description: 'Step-by-step guide to planning scheme amendments, zoning changes, and permit applications across Victorian councils.',
      category: 'Planning Regulations',
      type: 'Procedural Guide',
      pages: 42,
      version: '2024.4',
      effective: 'Nov 1, 2024',
      downloads: '980',
      color: 'from-pink-500 to-rose-500',
      tags: ['Planning', 'Zoning', 'Permits'],
      downloadLink: '/downloads/planning-amendment-procedures.pdf',
      previewLink: '/preview/planning-amendment-procedures'
    },
    {
      id: 6,
      title: 'NDIS SDA Design Standards 2024',
      description: 'Specialist Disability Accommodation design standards including physical accessibility, safety features, and support infrastructure requirements.',
      category: 'Building Codes',
      type: 'Specialist Standards',
      pages: 36,
      version: '2024.2',
      effective: 'Jul 1, 2024',
      downloads: '850',
      color: 'from-cyan-500 to-blue-500',
      tags: ['NDIS', 'SDA', 'Accessibility'],
      downloadLink: '/downloads/ndis-sda-standards-2024.pdf',
      previewLink: '/preview/ndis-sda-standards-2024'
    }
  ];

  const filteredDocuments = selectedCategory === 'all' 
    ? complianceDocuments 
    : complianceDocuments.filter(doc => doc.category.toLowerCase().replace(' ', '-') === selectedCategory);
  
  const filteredBySearch = searchQuery 
    ? filteredDocuments.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredDocuments;

  const quickLinks = [
    {
      title: 'Compliance Checklist',
      description: 'Download our comprehensive compliance checklist for new projects',
      icon: CheckCircle2,
      color: 'bg-emerald-100 text-emerald-600',
      href: '/downloads/compliance-checklist.pdf'
    },
    {
      title: 'Regulatory Updates',
      description: 'Subscribe to receive regulatory change notifications',
      icon: AlertCircle,
      color: 'bg-amber-100 text-amber-600',
      href: '/compliance/updates'
    },
    {
      title: 'Compliance Training',
      description: 'Access our online compliance training modules',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
      href: '/training/compliance'
    },
    {
      title: 'Expert Consultation',
      description: 'Book a compliance consultation with our experts',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
      href: '/contact?service=compliance'
    }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  COMPLIANCE CENTER
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Compliance <span className="text-amber-400">Resources</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access essential compliance documents, regulatory guides, and standards 
                to ensure your projects meet all legal and quality requirements.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search compliance documents, regulations, or standards..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#documents"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Browse Resources</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#quick-links"
                  className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <span className="relative z-10">Quick Links</span>
                  <Zap className="relative z-10 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
                
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <CheckCircle2 className="w-6 h-6 text-amber-400" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900">
                  <div className="absolute inset-0 bg-[url('/resources/compliance-hero.jpg')] bg-cover bg-center opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section id="quick-links" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Quick Access
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Essential compliance tools and resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                  >
                    <div className={`inline-flex p-3 rounded-lg ${link.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {link.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-4">
                      {link.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-cyan-600 text-sm font-medium">
                      Access Resource
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Documents */}
      <section id="documents" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Compliance Documents
                  </h2>
                  <p className="text-xl text-slate-600">
                    Browse by category or search for specific requirements
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Filter className="w-4 h-4" />
                  <span>Filter by Category</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name}
                    <span className={`ml-2 text-sm ${
                      selectedCategory === category.id ? 'text-white/80' : 'text-slate-500'
                    }`}>
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBySearch.map((doc) => (
                <div 
                  key={doc.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                >
                  {/* Document Header */}
                  <div className={`h-3 bg-gradient-to-r ${doc.color}`}></div>
                  
                  <div className="p-6">
                    {/* Category & Version */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                        {doc.category}
                      </span>
                      <span className="text-sm text-slate-500">v{doc.version}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors leading-tight">
                      {doc.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {doc.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {doc.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Document Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600 mb-1">Pages</div>
                        <div className="font-bold text-slate-900">{doc.pages}</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600 mb-1">Downloads</div>
                        <div className="font-bold text-slate-900">{doc.downloads}</div>
                      </div>
                    </div>
                    
                    {/* Effective Date */}
                    <div className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Effective: {doc.effective}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={doc.downloadLink}
                        className="group flex-1 flex items-center justify-center gap-2 bg-cyan-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                      <a 
                        href={doc.previewLink}
                        className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                        title="Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredBySearch.length === 0 && (
              <div className="text-center py-16">
                <Shield className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No documents found</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}

            {/* Load More */}
            {filteredBySearch.length > 0 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Load More Documents
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Compliance Assurance */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
              <div className="grid lg:grid-cols-2">
                {/* Left Column - Content */}
                <div className="p-8 md:p-12">
                  <div className="inline-flex p-4 rounded-xl bg-linear-to-br from-emerald-500 to-green-500 mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Compliance Assurance Services
                  </h2>
                  <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                    Beyond documents, we offer comprehensive compliance services to ensure 
                    your projects meet all regulatory requirements from planning to completion.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'Compliance Audits & Gap Analysis',
                      'Regulatory Change Management',
                      'Documentation System Development',
                      'Staff Training & Certification',
                      'Ongoing Compliance Monitoring'
                    ].map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - CTA */}
                <div className="bg-linear-to-br from-slate-900 to-blue-900 p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-amber-400" />
                    Need Expert Compliance Support?
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Compliance Consultation</h4>
                      <p className="text-sm text-gray-300">
                        One-on-one consultation with our compliance experts
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Project Compliance Review</h4>
                      <p className="text-sm text-gray-300">
                        Comprehensive review of your project's compliance status
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Custom Compliance Solutions</h4>
                      <p className="text-sm text-gray-300">
                        Tailored compliance systems for your specific needs
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact?service=compliance"
                    className="group relative inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all w-full overflow-hidden"
                  >
                    <span className="relative z-10">Request Compliance Support</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

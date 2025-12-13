"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Download, 
  FileText, 
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Search,
  Filter,
  Building2,
  Home,
  Shield,
  Zap,
  Sparkles,
  ChevronDown,
  Target,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function GuidesPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [expandedGuide, setExpandedGuide] = useState<number | null>(null);

  const guideTypes = [
    { id: 'all', name: 'All Guides', count: 12 },
    { id: 'feasibility', name: 'Feasibility Studies', count: 3 },
    { id: 'permitting', name: 'Permitting Process', count: 2 },
    { id: 'budget', name: 'Budget Planning', count: 3 },
    { id: 'timeline', name: 'Timeline Management', count: 2 },
    { id: 'risk', name: 'Risk Management', count: 2 }
  ];

  const guides = [
    {
      id: 1,
      title: 'Comprehensive Feasibility Study Guide',
      description: 'Step-by-step process for conducting thorough project feasibility analysis including market research, financial modeling, and risk assessment.',
      type: 'Feasibility Studies',
      pages: 45,
      downloadTime: '15 min',
      updated: 'Jan 2025',
      downloads: '1.2k',
      color: 'from-blue-500 to-cyan-500',
      steps: [
        'Market Analysis & Demand Assessment',
        'Site Evaluation & Zoning Review',
        'Financial Modeling & ROI Calculation',
        'Risk Assessment & Mitigation Planning',
        'Stakeholder Analysis & Community Impact'
      ],
      downloadLink: '/downloads/feasibility-study-guide.pdf'
    },
    {
      id: 2,
      title: 'Planning Permit Application Master Guide',
      description: 'Complete walkthrough of the planning permit application process including documentation requirements, timelines, and council engagement strategies.',
      type: 'Permitting Process',
      pages: 32,
      downloadTime: '12 min',
      updated: 'Dec 2024',
      downloads: '980',
      color: 'from-amber-500 to-orange-500',
      steps: [
        'Document Preparation Checklist',
        'Council Submission Requirements',
        'Public Notification Procedures',
        'Objection Handling Strategies',
        'Appeal Process Overview'
      ],
      downloadLink: '/downloads/planning-permit-guide.pdf'
    },
    {
      id: 3,
      title: 'Project Budget Planning Template & Guide',
      description: 'Professional budget planning framework with Excel templates and best practices for cost estimation, tracking, and financial control.',
      type: 'Budget Planning',
      pages: 28,
      downloadTime: '10 min',
      updated: 'Nov 2024',
      downloads: '1.5k',
      color: 'from-emerald-500 to-green-500',
      steps: [
        'Cost Estimation Methodology',
        'Budget Allocation Strategies',
        'Contingency Planning',
        'Cost Tracking & Reporting',
        'Financial Control Systems'
      ],
      downloadLink: '/downloads/budget-planning-guide.zip'
    },
    {
      id: 4,
      title: 'Construction Timeline Management Guide',
      description: 'Advanced timeline management techniques for construction projects including Gantt chart templates, critical path analysis, and delay prevention.',
      type: 'Timeline Management',
      pages: 36,
      downloadTime: '14 min',
      updated: 'Oct 2024',
      downloads: '850',
      color: 'from-violet-500 to-purple-500',
      steps: [
        'Project Phasing & Milestones',
        'Critical Path Analysis',
        'Resource Scheduling',
        'Delay Prevention Strategies',
        'Progress Monitoring Systems'
      ],
      downloadLink: '/downloads/timeline-management-guide.pdf'
    },
    {
      id: 5,
      title: 'Risk Management Framework for Developments',
      description: 'Comprehensive risk management framework identifying common project risks and implementing effective mitigation strategies.',
      type: 'Risk Management',
      pages: 40,
      downloadTime: '16 min',
      updated: 'Sep 2024',
      downloads: '720',
      color: 'from-pink-500 to-rose-500',
      steps: [
        'Risk Identification & Categorization',
        'Probability & Impact Assessment',
        'Mitigation Strategy Development',
        'Contingency Planning',
        'Risk Monitoring & Reporting'
      ],
      downloadLink: '/downloads/risk-management-guide.pdf'
    },
    {
      id: 6,
      title: 'Stakeholder Engagement & Community Consultation Guide',
      description: 'Best practices for effective stakeholder engagement and community consultation throughout the development process.',
      type: 'Feasibility Studies',
      pages: 31,
      downloadTime: '11 min',
      updated: 'Aug 2024',
      downloads: '650',
      color: 'from-cyan-500 to-blue-500',
      steps: [
        'Stakeholder Mapping & Analysis',
        'Communication Planning',
        'Community Consultation Methods',
        'Feedback Integration Strategies',
        'Relationship Management'
      ],
      downloadLink: '/downloads/stakeholder-engagement-guide.pdf'
    }
  ];

  const filteredGuides = selectedType === 'all' 
    ? guides 
    : guides.filter(guide => guide.type.toLowerCase().replace(' ', '-') === selectedType);

  const toggleExpand = (id: number) => {
    setExpandedGuide(expandedGuide === id ? null : id);
  };

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
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  PROJECT PLANNING
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Project Planning <span className="text-amber-400">Guides</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional guides and templates to help you plan, execute, and manage 
                successful development projects from concept to completion.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#guides"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Browse Guides</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/resources/templates"
                  className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <span className="relative z-10">Download Templates</span>
                  <Download className="relative z-10 w-5 h-5" />
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
                  <div className="absolute inset-0 bg-[url('/resources/guides-hero.jpg')] bg-cover bg-center opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-50 -mt-8 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '12+', label: 'Comprehensive Guides', icon: BookOpen },
              { number: '45+', label: 'Average Pages', icon: FileText },
              { number: '5,000+', label: 'Total Downloads', icon: Download },
              { number: 'Monthly', label: 'Updates', icon: Calendar }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 bg-white rounded-xl shadow-sm mb-3">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section id="guides" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Planning Guides
                  </h2>
                  <p className="text-xl text-slate-600">
                    Select a category to filter guides
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Filter className="w-4 h-4" />
                  <span>Filter by Type</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {guideTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedType === type.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {type.name}
                    <span className={`ml-2 text-sm ${
                      selectedType === type.id ? 'text-white/80' : 'text-slate-500'
                    }`}>
                      ({type.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guides Grid */}
            <div className="space-y-8">
              {filteredGuides.map((guide) => (
                <div 
                  key={guide.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Guide Preview */}
                      <div className="lg:w-1/3">
                        <div className={`bg-gradient-to-br ${guide.color} h-48 rounded-xl flex items-center justify-center relative overflow-hidden mb-4`}>
                          <div className="absolute inset-0 bg-[url('/resources/guides/guide-preview.jpg')] bg-cover bg-center opacity-20"></div>
                          <BookOpen className="w-16 h-16 text-white relative z-10" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                              {guide.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="bg-slate-50 rounded-lg p-3">
                            <div className="text-sm text-slate-600 mb-1">Pages</div>
                            <div className="font-bold text-slate-900">{guide.pages}</div>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-3">
                            <div className="text-sm text-slate-600 mb-1">Downloads</div>
                            <div className="font-bold text-slate-900">{guide.downloads}</div>
                          </div>
                        </div>
                      </div>

                      {/* Guide Content */}
                      <div className="lg:w-2/3">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                              {guide.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Updated: {guide.updated}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Read: {guide.downloadTime}
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleExpand(guide.id)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          >
                            <ChevronDown className={`w-5 h-5 text-slate-600 transform transition-transform ${
                              expandedGuide === guide.id ? 'rotate-180' : ''
                            }`} />
                          </button>
                        </div>

                        <p className="text-slate-700 mb-6 leading-relaxed">
                          {guide.description}
                        </p>

                        {expandedGuide === guide.id && (
                          <div className="mb-6">
                            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                              What's Included:
                            </h4>
                            <ul className="space-y-2">
                              {guide.steps.map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                                  <span className="text-slate-700">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                          <a 
                            href={guide.downloadLink}
                            className="group flex items-center justify-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Download Guide (PDF)
                          </a>
                          <button className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                            <FileText className="w-4 h-4" />
                            Preview Online
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredGuides.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No guides found</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Try selecting a different category or check back soon for new guides.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                NEED MORE HELP?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Professional Planning Support
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Our guides are just the beginning. Get personalized project planning 
              assistance from our experienced development consultants.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 text-lg font-bold rounded-xl hover:shadow-2xl transition-all shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services"
                className="group relative inline-flex items-center justify-center gap-2 bg-transparent border-2 border-cyan-500 text-cyan-600 px-8 py-4 text-lg font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all"
              >
                <span className="relative z-10">View Our Services</span>
                <Building2 className="relative z-10 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

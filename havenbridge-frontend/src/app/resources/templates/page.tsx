"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Download, 
  FileText, 
  Search,
  Filter,
  Calendar,
  FileSpreadsheet,
  FileCheck,
  ClipboardList,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Eye,
  Sparkles,
  CheckCircle2,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export default function TemplatesPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const templateTypes = [
    { id: 'all', name: 'All Templates', count: 30 },
    { id: 'project-plans', name: 'Project Plans', count: 8 },
    { id: 'budget', name: 'Budget Sheets', count: 6 },
    { id: 'checklists', name: 'Checklists', count: 10 },
    { id: 'reports', name: 'Reports', count: 6 }
  ];

  const templates = [
    {
      id: 1,
      title: 'Comprehensive Project Plan Template',
      description: 'Complete project planning template including scope, timeline, resources, and risk management sections.',
      type: 'Project Plans',
      format: 'Excel/Word',
      size: '2.4 MB',
      downloads: '3.2k',
      updated: 'Jan 2025',
      color: 'from-blue-500 to-cyan-500',
      previewImage: '/templates/project-plan-preview.jpg',
      downloadLink: '/downloads/project-plan-template.zip'
    },
    {
      id: 2,
      title: 'Detailed Construction Budget Template',
      description: 'Professional budget spreadsheet with formulas for cost estimation, tracking, and variance analysis.',
      type: 'Budget Sheets',
      format: 'Excel',
      size: '1.8 MB',
      downloads: '2.8k',
      updated: 'Dec 2024',
      color: 'from-emerald-500 to-green-500',
      previewImage: '/templates/budget-template-preview.jpg',
      downloadLink: '/downloads/construction-budget-template.xlsx'
    },
    {
      id: 3,
      title: 'Project Checklist Bundle',
      description: 'Complete set of checklists for project phases including planning, construction, and handover.',
      type: 'Checklists',
      format: 'PDF/Word',
      size: '3.1 MB',
      downloads: '2.5k',
      updated: 'Nov 2024',
      color: 'from-amber-500 to-orange-500',
      previewImage: '/templates/checklist-bundle-preview.jpg',
      downloadLink: '/downloads/project-checklist-bundle.zip'
    },
    {
      id: 4,
      title: 'Monthly Project Report Template',
      description: 'Professional report template for monthly project updates including progress, issues, and financials.',
      type: 'Reports',
      format: 'PowerPoint/Word',
      size: '2.1 MB',
      downloads: '1.9k',
      updated: 'Oct 2024',
      color: 'from-violet-500 to-purple-500',
      previewImage: '/templates/report-template-preview.jpg',
      downloadLink: '/downloads/monthly-report-template.zip'
    },
    {
      id: 5,
      title: 'Risk Register Template',
      description: 'Comprehensive risk register for identifying, assessing, and tracking project risks.',
      type: 'Project Plans',
      format: 'Excel',
      size: '1.5 MB',
      downloads: '1.7k',
      updated: 'Sep 2024',
      color: 'from-pink-500 to-rose-500',
      previewImage: '/templates/risk-register-preview.jpg',
      downloadLink: '/downloads/risk-register-template.xlsx'
    },
    {
      id: 6,
      title: 'Stakeholder Communication Plan',
      description: 'Template for planning and tracking stakeholder communications throughout the project lifecycle.',
      type: 'Project Plans',
      format: 'Word/Excel',
      size: '2.2 MB',
      downloads: '1.4k',
      updated: 'Aug 2024',
      color: 'from-cyan-500 to-blue-500',
      previewImage: '/templates/communication-plan-preview.jpg',
      downloadLink: '/downloads/stakeholder-communication-plan.zip'
    }
  ];

  const filteredTemplates = selectedType === 'all' 
    ? templates 
    : templates.filter(template => template.type.toLowerCase().replace(' ', '-') === selectedType);
  
  const filteredBySearch = searchQuery 
    ? filteredTemplates.filter(template => 
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredTemplates;

  const popularTemplates = [
    { name: 'Feasibility Study Template', downloads: '4.1k', icon: FileCheck },
    { name: 'Site Inspection Checklist', downloads: '3.8k', icon: ClipboardList },
    { name: 'Cash Flow Forecast', downloads: '3.5k', icon: TrendingUp },
    { name: 'Meeting Minutes Template', downloads: '3.2k', icon: FileText }
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
                <Download className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  TEMPLATE LIBRARY
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Professional <span className="text-amber-400">Templates</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Download ready-to-use templates for project planning, budgeting, reporting, 
                and compliance to streamline your development workflow.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search templates by name or type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#templates"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Browse Templates</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#popular"
                  className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <span className="relative z-10">Popular Downloads</span>
                  <TrendingUp className="relative z-10 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
                
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <FileSpreadsheet className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <ClipboardList className="w-6 h-6 text-amber-400" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900">
                  <div className="absolute inset-0 bg-[url('/resources/templates-hero.jpg')] bg-cover bg-center opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Downloads */}
      <section id="popular" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Most Popular Templates
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our most downloaded templates by development professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularTemplates.map((template, index) => {
                const Icon = template.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                  >
                    <div className="inline-flex p-3 bg-cyan-100 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {template.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Download className="w-4 h-4" />
                      {template.downloads} downloads
                    </div>
                    
                    <div className="mt-4">
                      <button className="text-sm text-cyan-600 hover:text-cyan-700 font-medium">
                        Download Template →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section id="templates" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Template Library
                  </h2>
                  <p className="text-xl text-slate-600">
                    Browse professional templates by category
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Filter className="w-4 h-4" />
                  <span>Filter by Type</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {templateTypes.map((type) => (
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

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBySearch.map((template) => (
                <div 
                  key={template.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                >
                  {/* Template Preview */}
                  <div className={`h-48 bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[url('/templates/template-preview-bg.jpg')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                        {template.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-medium rounded-full">
                        {template.format}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-white/80" />
                    </div>
                  </div>
                  
                  {/* Template Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors leading-tight">
                      {template.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {template.description}
                    </p>
                    
                    {/* Template Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600 mb-1">Size</div>
                        <div className="font-bold text-slate-900">{template.size}</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-sm text-slate-600 mb-1">Downloads</div>
                        <div className="font-bold text-slate-900">{template.downloads}</div>
                      </div>
                    </div>
                    
                    {/* Updated Date */}
                    <div className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Updated: {template.updated}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={template.downloadLink}
                        className="group flex-1 flex items-center justify-center gap-2 bg-cyan-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                      <button className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                        <Eye className="w-4 h-4" />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredBySearch.length === 0 && (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No templates found</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}

            {/* Load More */}
            {filteredBySearch.length > 0 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Load More Templates
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Template Bundle CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-slate-900 to-blue-900 rounded-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-500/20 rounded-xl">
                    <Sparkles className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Premium Template Bundle</h3>
                    <p className="text-gray-300">Get all templates in one package</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { number: '30+', label: 'Professional Templates' },
                    { number: 'All Formats', label: 'Excel, Word, PDF' },
                    { number: 'Lifetime Updates', label: 'Free future updates' }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-2xl font-bold mb-1">{item.number}</div>
                      <div className="text-sm text-gray-300">{item.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Complete Project Planning Suite',
                    'Financial & Budget Templates',
                    'Compliance & Reporting Pack',
                    'Communication & Stakeholder Templates',
                    'Risk Management Toolkit'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-4 rounded-xl font-bold hover:shadow-2xl transition-all">
                    <Download className="w-5 h-5" />
                    Download Complete Bundle
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                    <Zap className="w-5 h-5" />
                    View Pricing
                  </button>
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

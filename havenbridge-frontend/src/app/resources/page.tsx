"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Newspaper, 
  FileText, 
  ClipboardCheck, 
  Download, 
  Calculator,
  ArrowRight,
  BookOpen,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Sparkles,
  ChevronRight,
  Target,
  Zap,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      id: 'news',
      title: 'News & Insights',
      description: 'Stay updated with industry trends, market analysis, and development insights.',
      icon: Newspaper,
      color: 'from-blue-500 to-cyan-500',
      href: '/resources/news',
      count: '24+',
      label: 'Articles',
      quickLinks: [
        { name: 'Market Analysis', href: '/resources/news?category=market-analysis' },
        { name: 'Industry Trends', href: '/resources/news?category=trends' },
        { name: 'Case Studies', href: '/resources/news?category=case-studies' },
        { name: 'Policy Updates', href: '/resources/news?category=policy' }
      ]
    },
    {
      id: 'guides',
      title: 'Project Planning Guides',
      description: 'Step-by-step guides for successful project planning and execution.',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500',
      href: '/resources/guides',
      count: '12+',
      label: 'Guides',
      quickLinks: [
        { name: 'Feasibility Studies', href: '/resources/guides?type=feasibility' },
        { name: 'Permitting Process', href: '/resources/guides?type=permitting' },
        { name: 'Budget Planning', href: '/resources/guides?type=budget' },
        { name: 'Timeline Management', href: '/resources/guides?type=timeline' }
      ]
    },
    {
      id: 'compliance',
      title: 'Compliance Resources',
      description: 'Essential compliance documentation and regulatory guidelines.',
      icon: Shield,
      color: 'from-emerald-500 to-green-500',
      href: '/resources/compliance',
      count: '50+',
      label: 'Documents',
      quickLinks: [
        { name: 'Building Codes', href: '/resources/compliance?type=building-codes' },
        { name: 'Safety Regulations', href: '/resources/compliance?type=safety' },
        { name: 'Environmental Compliance', href: '/resources/compliance?type=environmental' },
        { name: 'Quality Standards', href: '/resources/compliance?type=standards' }
      ]
    },
    {
      id: 'templates',
      title: 'Downloadable Templates',
      description: 'Professional templates for project documentation and planning.',
      icon: Download,
      color: 'from-violet-500 to-purple-500',
      href: '/resources/templates',
      count: '30+',
      label: 'Templates',
      quickLinks: [
        { name: 'Project Plans', href: '/resources/templates?type=project-plans' },
        { name: 'Budget Sheets', href: '/resources/templates?type=budget' },
        { name: 'Checklists', href: '/resources/templates?type=checklists' },
        { name: 'Reports', href: '/resources/templates?type=reports' }
      ]
    },
    {
      id: 'calculators',
      title: 'Development Calculators',
      description: 'Professional tools for project analysis and financial planning.',
      icon: Calculator,
      color: 'from-pink-500 to-rose-500',
      href: '/calculators',
      count: '6',
      label: 'Calculators',
      quickLinks: [
        { name: 'Feasibility Calculator', href: '/calculators#feasibility' },
        { name: 'Cost Estimator', href: '/calculators#construction-cost' },
        { name: 'Yield Calculator', href: '/calculators#rooming-house' },
        { name: 'Stamp Duty Calculator', href: '/calculators#stamp-duty' }
      ]
    }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: '2025 Housing Market Outlook',
      excerpt: 'Analysis of emerging trends in Australian residential development.',
      category: 'Market Analysis',
      readTime: '5 min',
      date: 'Mar 15, 2025',
      image: '/resources/articles/market-outlook.jpg',
      href: '/resources/news/2025-housing-market-outlook'
    },
    {
      id: 2,
      title: 'Sustainable Building Practices',
      excerpt: 'Implementing eco-friendly construction methods in modern developments.',
      category: 'Sustainability',
      readTime: '7 min',
      date: 'Mar 10, 2025',
      image: '/resources/articles/sustainable-building.jpg',
      href: '/resources/news/sustainable-building-practices'
    },
    {
      id: 3,
      title: 'NDIS Housing Compliance Update',
      excerpt: 'Latest regulatory changes for specialist disability accommodation.',
      category: 'Compliance',
      readTime: '4 min',
      date: 'Mar 5, 2025',
      image: '/resources/articles/ndis-compliance.jpg',
      href: '/resources/news/ndis-housing-compliance-update'
    }
  ];

  const quickStats = [
    { number: '150+', label: 'Resources Available', icon: FileText },
    { number: 'Monthly', label: 'Updates', icon: TrendingUp },
    { number: 'Free', label: 'Access', icon: Users },
    { number: 'Expert', label: 'Content', icon: Target }
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
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  KNOWLEDGE CENTER
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Professional <span className="text-amber-400">Resources</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access our comprehensive library of development guides, compliance documents, 
                industry insights, and practical tools to support your projects.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#categories"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Browse Resources</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#featured"
                  className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <span className="relative z-10">Latest Insights</span>
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
                    <FileText className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900">
                  <div className="absolute inset-0 bg-[url('/resources/hero-library.jpg')] bg-cover bg-center opacity-70" />
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
            {quickStats.map((stat, index) => {
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

      {/* Resource Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Resource Categories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore our comprehensive collection organized by category
              </p>
            </div>

            <div className="space-y-8">
              {resourceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.id}
                    className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Category Icon & Title */}
                      <div className="lg:w-1/4">
                        <div className={`bg-gradient-to-br ${category.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {category.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="text-3xl font-bold text-slate-900">{category.count}</div>
                          <div className="text-slate-600">{category.label}</div>
                        </div>
                      </div>

                      {/* Description & Quick Links */}
                      <div className="lg:w-3/4">
                        <p className="text-lg text-slate-700 mb-6">
                          {category.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-amber-500" />
                            Quick Links
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {category.quickLinks.map((link, index) => (
                              <Link
                                key={index}
                                href={link.href}
                                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-cyan-100 hover:text-cyan-700 transition-colors text-sm font-medium"
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <Link 
                          href={category.href}
                          className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-bold group-hover:gap-3 transition-all"
                        >
                          Explore {category.title}
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-4">
                  <Newspaper className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm font-medium text-cyan-700">Latest Updates</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Featured Insights
                </h2>
                <p className="text-xl text-slate-600">
                  Latest industry analysis and development insights
                </p>
              </div>
              <Link 
                href="/resources/news"
                className="hidden md:flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link 
                  key={article.id}
                  href={article.href}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 opacity-60"></div>
                    <div className="absolute inset-0 bg-[url('/resources/articles/featured.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="p-6">
                    <div className="text-sm text-slate-500 mb-3">
                      {article.date}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-cyan-600 font-medium text-sm">
                      Read Article
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12 md:hidden">
              <Link 
                href="/resources/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold">
                STAY INFORMED
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Professional Guidance?
            </h2>
            
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Our resources are just the beginning. Contact our experts for personalized advice on your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 text-lg font-bold rounded-xl hover:shadow-2xl transition-all shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Contact Our Team</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/calculators"
                className="group relative inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                <span className="relative z-10">Try Our Calculators</span>
                <Calculator className="relative z-10 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

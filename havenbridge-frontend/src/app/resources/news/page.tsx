"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  Clock,
  ArrowRight,
  ChevronRight,
  Search,
  Filter,
  TrendingUp,
  Building2,
  Home,
  Shield,
  BookOpen,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'market-analysis', name: 'Market Analysis', count: 8 },
    { id: 'industry-trends', name: 'Industry Trends', count: 6 },
    { id: 'case-studies', name: 'Case Studies', count: 5 },
    { id: 'policy-updates', name: 'Policy Updates', count: 3 },
    { id: 'sustainability', name: 'Sustainability', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: '2025 Australian Housing Market Outlook: Key Trends & Opportunities',
      excerpt: 'Comprehensive analysis of emerging trends in residential development across major Australian markets.',
      category: 'Market Analysis',
      author: 'Sarah Johnson',
      date: 'Mar 15, 2025',
      readTime: '8 min',
      image: '/resources/articles/market-outlook.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Sustainable Building Practices: Implementing Green Construction Methods',
      excerpt: 'How modern developments are incorporating eco-friendly materials and energy-efficient designs.',
      category: 'Sustainability',
      author: 'Michael Chen',
      date: 'Mar 10, 2025',
      readTime: '7 min',
      image: '/resources/articles/sustainable-building.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'NDIS Housing: Latest Compliance Updates & Funding Opportunities',
      excerpt: 'Essential regulatory changes and funding options for specialist disability accommodation projects.',
      category: 'Policy Updates',
      author: 'David Wilson',
      date: 'Mar 5, 2025',
      readTime: '6 min',
      image: '/resources/articles/ndis-compliance.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Affordable Housing Projects: Successful Community Partnership Models',
      excerpt: 'Case study on effective collaboration between developers, NGOs, and government agencies.',
      category: 'Case Studies',
      author: 'Lisa Thompson',
      date: 'Feb 28, 2025',
      readTime: '9 min',
      image: '/resources/articles/affordable-housing.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Modular Construction: Accelerating Project Timelines by 40%',
      excerpt: 'How modular building techniques are revolutionizing delivery times and cost efficiency.',
      category: 'Industry Trends',
      author: 'Robert Kim',
      date: 'Feb 22, 2025',
      readTime: '5 min',
      image: '/resources/articles/modular-construction.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Regional Development Boom: Opportunities Outside Major Cities',
      excerpt: 'Analysis of growing investment opportunities in regional Australia\'s property market.',
      category: 'Market Analysis',
      author: 'Emma Davis',
      date: 'Feb 18, 2025',
      readTime: '7 min',
      image: '/resources/articles/regional-development.jpg',
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);
  
  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category.toLowerCase().replace(' ', '-') === selectedCategory);

  const filteredBySearch = searchQuery 
    ? filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredArticles;

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
                <Newspaper className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  INDUSTRY INSIGHTS
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                News & <span className="text-amber-400">Insights</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Stay ahead with expert analysis, market trends, and practical insights 
                for the Australian property development industry.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>
                
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <Building2 className="w-6 h-6 text-amber-400" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900">
                  <div className="absolute inset-0 bg-[url('/resources/news-hero.jpg')] bg-cover bg-center opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium text-amber-700">Featured</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Featured Insights
                  </h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Link 
                    key={article.id}
                    href={`/resources/news/${article.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                  >
                    {/* Article Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 opacity-40"></div>
                      <div className="absolute inset-0 bg-[url('/resources/articles/featured-large.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                      <div className="absolute top-6 left-6 z-20">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-900 text-sm font-bold rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Article Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime} read
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-cyan-600" />
                          </div>
                          <span className="text-sm text-slate-700">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-600 font-medium">
                          Read Article
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories & Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Browse by Category</h3>
                <div className="flex items-center gap-2 text-slate-600">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
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

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBySearch.map((article) => (
                <Link 
                  key={article.id}
                  href={`/resources/news/${article.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 opacity-40"></div>
                    <div className="absolute inset-0 bg-[url('/resources/articles/grid-article.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="p-6">
                    <div className="text-sm text-slate-500 mb-3">
                      {article.date}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-2 text-cyan-600 text-sm font-medium">
                        Read
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredBySearch.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No articles found</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}

            {/* Load More */}
            {filteredBySearch.length > 0 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <Newspaper className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-700">
                STAY UPDATED
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Never Miss an Update
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest industry insights, market analysis, 
              and development trends delivered directly to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-600 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

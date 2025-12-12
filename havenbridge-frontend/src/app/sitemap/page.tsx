"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Home, 
  Building2, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  ChevronDown,
  Search,
  Grid3x3,
  Layers,
  Compass,
  FolderTree,
  ExternalLink,
  Globe,
  Shield,
  Download,
  Newspaper,
  Briefcase,
  Landmark,
  HeartHandshake,
  Target,
  Award,
  Calendar,
  HelpCircle,
  Lock,
  Eye
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['main', 'projects', 'services']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Main navigation structure
  const siteStructure = {
    main: {
      title: "Main Pages",
      icon: <Compass className="w-5 h-5 text-amber-500" />,
      color: "from-amber-400 to-amber-500",
      pages: [
        { name: "Home", href: "/", description: "Welcome to HavenBridge" },
        { name: "About Us", href: "/about", description: "Our story, values & team" },
        { name: "Services", href: "/services", description: "What we offer" },
        { name: "Projects", href: "/projects", description: "Our portfolio" },
        { name: "Contact", href: "/contact", description: "Get in touch" },
      ]
    },
    projects: {
      title: "Projects",
      icon: <Building2 className="w-5 h-5 text-cyan-500" />,
      color: "from-cyan-500 to-blue-500",
      categories: [
        {
          name: "Residential",
          pages: [
            { name: "Affordable Housing", href: "/projects/affordable-housing" },
            { name: "Social Housing", href: "/projects/social-housing" },
            { name: "Townhouse Developments", href: "/projects/townhouses" },
            { name: "Multi-Unit Complexes", href: "/projects/multi-unit" },
          ]
        },
        {
          name: "Community",
          pages: [
            { name: "Rooming Houses", href: "/projects/rooming-houses" },
            { name: "NDIS Housing", href: "/projects/ndis-housing" },
            { name: "Aged Care Facilities", href: "/projects/aged-care" },
            { name: "Community Centers", href: "/projects/community-centers" },
          ]
        },
        {
          name: "Commercial",
          pages: [
            { name: "Childcare Centers", href: "/projects/childcare" },
            { name: "Commercial Buildings", href: "/projects/commercial" },
            { name: "Industrial Facilities", href: "/projects/industrial" },
            { name: "Mixed-Use Developments", href: "/projects/mixed-use" },
          ]
        }
      ]
    },
    services: {
      title: "Services",
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      color: "from-emerald-500 to-green-500",
      pages: [
        { name: "Development Management", href: "/services/development", description: "End-to-end project delivery" },
        { name: "Project Management", href: "/services/project-management", description: "Oversight & coordination" },
        { name: "Construction Management", href: "/services/construction", description: "On-site execution" },
        { name: "Consultation Services", href: "/services/consultation", description: "Expert advice & planning" },
        { name: "Investor Relations", href: "/services/investors", description: "Partnership opportunities" },
      ]
    },
    resources: {
      title: "Resources",
      icon: <FileText className="w-5 h-5 text-violet-500" />,
      color: "from-violet-500 to-purple-500",
      sections: [
        {
          name: "Insights",
          pages: [
            { name: "Blog & Articles", href: "/resources/blog", icon: <Newspaper className="w-4 h-4" /> },
            { name: "Industry Reports", href: "/resources/reports", icon: <FileText className="w-4 h-4" /> },
            { name: "Case Studies", href: "/resources/case-studies", icon: <Briefcase className="w-4 h-4" /> },
          ]
        },
        {
          name: "Downloads",
          pages: [
            { name: "Planning Templates", href: "/resources/templates", icon: <Download className="w-4 h-4" /> },
            { name: "Compliance Guides", href: "/resources/compliance", icon: <Shield className="w-4 h-4" /> },
            { name: "Technical Specifications", href: "/resources/technical", icon: <Grid3x3 className="w-4 h-4" /> },
          ]
        }
      ]
    },
    about: {
      title: "About HavenBridge",
      icon: <Users className="w-5 h-5 text-orange-500" />,
      color: "from-orange-500 to-red-500",
      pages: [
        { name: "Our Story", href: "/about/story", description: "How we began" },
        { name: "Our Values", href: "/about/values", description: "What drives us" },
        { name: "Leadership Team", href: "/about/team", description: "Meet our experts" },
        { name: "Partners & Collaborations", href: "/about/partners", description: "Who we work with" },
        { name: "Careers", href: "/about/careers", description: "Join our team" },
      ]
    },
    legal: {
      title: "Legal & Policies",
      icon: <Shield className="w-5 h-5 text-slate-500" />,
      color: "from-slate-500 to-gray-500",
      pages: [
        { name: "Privacy Policy", href: "/privacy", description: "How we protect your data" },
        { name: "Terms of Service", href: "/terms", description: "Terms & conditions" },
        { name: "Accessibility Statement", href: "/accessibility", description: "Our commitment to accessibility" },
        { name: "Cookie Policy", href: "/cookies", description: "Cookie usage information" },
      ]
    }
  };

  // All pages for search functionality
  const allPages = Object.entries(siteStructure).flatMap(([key, section]) => {
    const pages: Array<{name: string, href: string, section: string}> = [];
    
    if ('pages' in section) {
      section.pages.forEach(page => {
        pages.push({ ...page, section: section.title });
      });
    }
    
    if ('categories' in section) {
      section.categories.forEach(category => {
        category.pages.forEach(page => {
          pages.push({ ...page, section: `${section.title} - ${category.name}` });
        });
      });
    }
    
    if ('sections' in section) {
      section.sections.forEach(subSection => {
        subSection.pages.forEach(page => {
          pages.push({ ...page, section: `${section.title} - ${subSection.name}` });
        });
      });
    }
    
    return pages;
  });

  const filteredPages = searchTerm 
    ? allPages.filter(page => 
        page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.href.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.section.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Globe className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                WEBSITE NAVIGATION
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Site <span className="text-amber-400">Map</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore our complete website structure and find exactly what you're looking for
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for pages, services, or information..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>
              {searchTerm && filteredPages.length > 0 && (
                <div className="mt-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
                  <p className="text-sm text-gray-300 mb-2">
                    Found {filteredPages.length} result{filteredPages.length !== 1 ? 's' : ''} for "{searchTerm}"
                  </p>
                  <div className="space-y-2">
                    {filteredPages.slice(0, 5).map((page, index) => (
                      <a 
                        key={index}
                        href={page.href}
                        className="block p-3 rounded-lg hover:bg-white/10 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-white group-hover:text-amber-400 transition-colors">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {page.section}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transform group-hover:translate-x-1 transition-all" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Quick Access
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Most frequently visited pages
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Start a Project", href: "/contact#consultation", icon: <Target className="w-6 h-6" />, color: "bg-amber-500" },
                { name: "View Projects", href: "/projects", icon: <Building2 className="w-6 h-6" />, color: "bg-cyan-500" },
                { name: "Our Services", href: "/services", icon: <Layers className="w-6 h-6" />, color: "bg-emerald-500" },
                { name: "Contact Us", href: "/contact", icon: <Phone className="w-6 h-6" />, color: "bg-violet-500" },
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                >
                  <div className={`${link.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(link.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {link.name}
                  </h3>
                  <div className="flex items-center text-slate-600 text-sm">
                    <span>Go to page</span>
                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Sitemap */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
                <FolderTree className="w-8 h-8 text-cyan-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Complete Site Structure
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Browse through all pages organized by category
              </p>
            </div>

            {/* Sitemap Structure */}
            <div className="space-y-8">
              {Object.entries(siteStructure).map(([key, section]) => {
                const isExpanded = expandedSections.includes(key);
                
                return (
                  <div 
                    key={key} 
                    className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200"
                  >
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(key)}
                      className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`bg-gradient-to-br ${section.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                          {section.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                            <span className="text-sm text-slate-600">
                              {(() => {
                                if ('pages' in section) return `${section.pages.length} pages`;
                                if ('categories' in section) {
                                  const total = section.categories.reduce((sum, cat) => sum + cat.pages.length, 0);
                                  return `${total} pages in ${section.categories.length} categories`;
                                }
                                if ('sections' in section) {
                                  const total = section.sections.reduce((sum, sub) => sum + sub.pages.length, 0);
                                  return `${total} pages in ${section.sections.length} sections`;
                                }
                                return '';
                              })()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-6 h-6 text-slate-400" />
                      </div>
                    </button>

                    {/* Section Content */}
                    {isExpanded && (
                      <div className="p-6 md:p-8 pt-0">
                        {/* Regular Pages */}
                        {'pages' in section && (
                          <div className="space-y-4">
                            {section.pages.map((page, index) => (
                              <a
                                key={index}
                                href={page.href}
                                className="group block bg-white p-4 rounded-xl border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="font-medium text-slate-900 group-hover:text-cyan-600 transition-colors">
                                      {page.name}
                                    </div>
                                    {page.description && (
                                      <div className="text-sm text-slate-600 mt-1">
                                        {page.description}
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm text-slate-400 group-hover:text-cyan-500">
                                      {page.href}
                                    </span>
                                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-cyan-500 transform group-hover:translate-x-0.5" />
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}

                        {/* Categories with Pages */}
                        {'categories' in section && (
                          <div className="space-y-8">
                            {section.categories.map((category, catIndex) => (
                              <div key={catIndex} className="bg-white rounded-xl p-6 border border-slate-100">
                                <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                  {category.name}
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                  {category.pages.map((page, pageIndex) => (
                                    <a
                                      key={pageIndex}
                                      href={page.href}
                                      className="group p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                          <span className="text-slate-700 group-hover:text-cyan-600">
                                            {page.name}
                                          </span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-500 transform group-hover:translate-x-1" />
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Sections with Pages */}
                        {'sections' in section && (
                          <div className="grid md:grid-cols-2 gap-6">
                            {section.sections.map((subSection, subIndex) => (
                              <div key={subIndex} className="bg-white rounded-xl p-6 border border-slate-100">
                                <h4 className="font-bold text-lg text-slate-900 mb-4">
                                  {subSection.name}
                                </h4>
                                <div className="space-y-3">
                                  {subSection.pages.map((page, pageIndex) => (
                                    <a
                                      key={pageIndex}
                                      href={page.href}
                                      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                                    >
                                      <div className="text-slate-400 group-hover:text-cyan-500">
                                        {page.icon}
                                      </div>
                                      <div className="flex-1">
                                        <div className="text-slate-700 group-hover:text-cyan-600 font-medium">
                                          {page.name}
                                        </div>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-500" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-cyan-600" />
                  <h4 className="font-bold text-lg text-slate-900">Can't find what you need?</h4>
                </div>
                <p className="text-slate-600 mb-4">
                  If you can't find the information you're looking for, our team is here to help.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700"
                >
                  Contact Support
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-amber-600" />
                  <h4 className="font-bold text-lg text-slate-900">Accessibility</h4>
                </div>
                <p className="text-slate-600 mb-4">
                  We're committed to making our website accessible to all users.
                </p>
                <a 
                  href="/accessibility" 
                  className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700"
                >
                  View Accessibility Statement
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-slate-600" />
                  <h4 className="font-bold text-lg text-slate-900">Privacy & Terms</h4>
                </div>
                <p className="text-slate-600 mb-4">
                  Learn about how we protect your information and our terms of service.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="/privacy" 
                    className="text-sm text-slate-600 hover:text-slate-900 font-medium"
                  >
                    Privacy Policy
                  </a>
                  <a 
                    href="/terms" 
                    className="text-sm text-slate-600 hover:text-slate-900 font-medium"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              If you couldn't find what you were looking for in our sitemap, don't hesitate to reach out directly.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="/contact"
                className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
              <a 
                href="mailto:info@havenbridge.com.au"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

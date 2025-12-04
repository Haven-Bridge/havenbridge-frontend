"use client";

import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Shield,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  Handshake,
  Building2,
  Target,
  Award,
  Sparkles,
  ChevronRight,
  Zap,
  Star,
  Globe,
  Heart,
  Clock,
  Calendar,
  Users as Partner,
  Briefcase,
  Download,
  Phone,
  Mail,
  MapPin,
  Home
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InvestorsPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Strong Returns",
      desc: "Consistent returns through diversified property development portfolio.",
      color: "from-amber-400 to-amber-500",
      bgColor: "bg-amber-400/10"
    },
    {
      icon: Shield,
      title: "Risk Management",
      desc: "Proven track record with government partnerships and stable projects.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: BarChart3,
      title: "Market Growth",
      desc: "Positioned in growing sectors: affordable housing, aged care, and social infrastructure.",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: Users,
      title: "Social Impact",
      desc: "Invest in projects that create positive social and community outcomes.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10"
    }
  ];

  const investmentOpportunities = [
    {
      title: "Development Projects",
      desc: "Direct investment in specific property development projects with defined timelines and returns.",
      features: [
        "Project-specific investment opportunities",
        "Clear ROI projections",
        "Active project management",
        "Regular progress updates"
      ],
      roi: "15-20%",
      timeline: "18-24 months",
      color: "from-amber-400 to-orange-500",
      icon: Building2
    },
    {
      title: "Portfolio Investment",
      desc: "Diversified investment across multiple HavenBridge projects and developments.",
      features: [
        "Diversified risk profile",
        "Multiple revenue streams",
        "Long-term growth potential",
        "Professional portfolio management"
      ],
      roi: "12-18%",
      timeline: "3-5 years",
      color: "from-cyan-500 to-blue-500",
      icon: Target
    },
    {
      title: "Government Partnerships",
      desc: "Invest in government-backed social housing and infrastructure projects.",
      features: [
        "Government-backed security",
        "Stable, long-term returns",
        "Social impact focus",
        "Regulatory compliance"
      ],
      roi: "10-15%",
      timeline: "2-4 years",
      color: "from-emerald-500 to-green-500",
      icon: Shield
    }
  ];

  const partnerBenefits = [
    {
      title: "Strategic Alliance",
      desc: "Join forces with a leading community-focused developer.",
      icon: Handshake,
      color: "from-amber-400 to-amber-500"
    },
    {
      title: "Co-Development",
      desc: "Collaborate on joint ventures and shared projects.",
      icon: Briefcase,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Network Access",
      desc: "Connect with government and community stakeholders.",
      icon: Users,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Brand Association",
      desc: "Align with our values-led development approach.",
      icon: Award,
      color: "from-violet-500 to-purple-500"
    }
  ];

  const stats = [
    { label: "Total Projects", value: "15+", icon: Building2, color: "text-amber-400" },
    { label: "Homes Delivered", value: "500+", icon: Home, color: "text-cyan-500" },
    { label: "Investment Partners", value: "50+", icon: Partner, color: "text-emerald-500" },
    { label: "Average ROI", value: "15-18%", icon: TrendingUp, color: "text-violet-500" }
  ];

  const investmentProcess = [
    { 
      step: "1", 
      title: "Initial Consultation", 
      desc: "Discuss your investment goals and opportunities",
      icon: Phone,
      color: "from-amber-400 to-amber-500"
    },
    { 
      step: "2", 
      title: "Due Diligence", 
      desc: "Review project details and financial projections",
      icon: FileText,
      color: "from-cyan-500 to-blue-500"
    },
    { 
      step: "3", 
      title: "Agreement", 
      desc: "Finalize investment terms and documentation",
      icon: Handshake,
      color: "from-emerald-500 to-green-500"
    },
    { 
      step: "4", 
      title: "Ongoing Support", 
      desc: "Regular updates and portfolio management",
      icon: Users,
      color: "from-violet-500 to-purple-500"
    }
  ];

  const currentPartners = [
    { name: "Housing Australia", logo: "🏛️", type: "Government" },
    { name: "Impact Investment Group", logo: "💼", type: "Investment" },
    { name: "Community Housing Ltd", logo: "🏘️", type: "Non-Profit" },
    { name: "Australian Unity", logo: "🤝", type: "Corporate" },
    { name: "Bendigo Bank", logo: "🏦", type: "Financial" },
    { name: "UNSW City Futures", logo: "🎓", type: "Academic" },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">INVESTORS & PARTNERS</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build with
              <span className="block">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-white to-cyan-500">
                  Purpose & Profit
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Partner with HavenBridge to invest in Australia's future through sustainable, community-focused property development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#investment-opportunities"
                className="group relative inline-flex items-center justify-center bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-xl"
              >
                <span className="relative z-10">Explore Opportunities</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#become-partner"
                className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Become a Partner
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-16 bg-linear-to-r from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group text-center">
                  <div className="relative inline-block mb-4">
                    <Icon className={`w-12 h-12 ${stat.color} transform group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Invest - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Invest with HavenBridge?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer unique investment opportunities in Australia's growing property development sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-2 bg-linear-to-r ${benefit.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                    {/* Icon container */}
                    <div className={`inline-flex p-4 rounded-xl ${benefit.bgColor} mb-6`}>
                      <Icon className={`w-10 h-10 bg-linear-to-r ${benefit.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Opportunities - Updated */}
      <section id="investment-opportunities" className="py-20 bg-linear-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-500/10 rounded-full">
              <Zap className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-semibold text-cyan-600">INVESTMENT PATHWAYS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the investment structure that best fits your goals and risk profile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentOpportunities.map((option, i) => {
              const Icon = option.icon;
              return (
                <div key={i} className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-4 bg-linear-to-r ${option.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                    {/* Top accent */}
                    <div className={`h-2 bg-linear-to-r ${option.color}`}></div>
                    
                    <div className="p-8">
                      {/* Icon and ROI badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 rounded-xl bg-linear-to-br ${option.color} bg-opacity-10`}>
                          <Icon className="w-8 h-8 text-slate-900" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-900">{option.roi}</div>
                          <div className="text-xs text-gray-500">Projected ROI</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{option.desc}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {option.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Timeline */}
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Timeline: {option.timeline}</span>
                      </div>
                      
                      {/* CTA */}
                      <button className="mt-6 w-full py-3 bg-linear-to-r from-slate-900 to-slate-800 text-white font-bold rounded-lg hover:from-slate-800 hover:to-slate-700 transition-all group-hover:shadow-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Partner - New Section */}
      <section id="become-partner" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-amber-400/10 rounded-full">
              <Handshake className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-600">STRATEGIC ALLIANCES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our network of strategic partners and create lasting impact together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="group text-center">
                  <div className={`relative inline-flex p-5 rounded-xl bg-linear-to-br ${benefit.color} bg-opacity-10 mb-6`}>
                    <Icon className="w-10 h-10 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Current Partners */}
          <div className="bg-linear-to-r from-slate-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Our Strategic Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {currentPartners.map((partner, i) => (
                <div key={i} className="group bg-white rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-slate-900 text-sm">{partner.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{partner.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-10 py-4 rounded-xl font-bold hover:from-amber-500 hover:to-amber-400 transition-all shadow-xl"
            >
              <span className="relative z-10">Discuss Partnership</span>
              <ChevronRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Investment Process - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent, structured approach to building successful partnerships.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {investmentProcess.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group relative">
                    {/* Connecting line (except last) */}
                    {i < 3 && (
                      <div className="hidden md:block absolute top-16 left-3/4 w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent"></div>
                    )}
                    
                    <div className="relative text-center">
                      {/* Step number with gradient */}
                      <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-slate-900 font-bold text-2xl">{item.step}</span>
                        {/* Icon overlay on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Build Your
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-cyan-500">
                  Investment Legacy?
                </span>
              </span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
              Contact our investor relations team to learn more about our investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:from-amber-500 hover:to-amber-400 transition-all shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="relative z-10">Schedule a Meeting</span>
              </a>
              <a 
                href="#"
                className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-12 py-5 text-xl font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Download Investor Pack</span>
              </a>
            </div>
            
            {/* Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              {[
                { icon: Mail, label: "Email", value: "investors@havenbridge.com.au", color: "text-amber-400" },
                { icon: Phone, label: "Phone", value: "+61 (0) 3 XXXX XXXX", color: "text-cyan-500" },
                { icon: MapPin, label: "Office", value: "Level 8, 90 Collins St, Melbourne", color: "text-emerald-500" }
              ].map((contact, i) => (
                <div key={i} className="flex items-center gap-3 text-white group cursor-pointer">
                  <div className={`p-3 rounded-lg ${contact.color.replace('text', 'bg')}/10`}>
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">{contact.label}</div>
                    <div className="font-medium">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

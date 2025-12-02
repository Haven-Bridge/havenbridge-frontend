"use client";

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Users, 
  HeartHandshake, 
  Home,
  Building,
  Baby,
  Heart,
  Handshake,
  Target,
  Award,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Investors', href: '/investors' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-4' : 'bg-slate-900/95 backdrop-blur-sm py-5'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
              scrolled 
                ? 'bg-linear-to-br from-amber-500 to-yellow-500' 
                : 'bg-amber-500'
            }`}>
              <Building2 className="w-7 h-7 text-slate-900" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                HavenBridge
              </h1>
              <p className="text-xs font-medium text-amber-500">
                Development
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  scrolled 
                    ? 'text-slate-700 hover:text-amber-600' 
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/contact"
              className={`px-6 py-2.5 rounded-lg font-bold transition-all ${
                scrolled
                  ? 'bg-linear-to-r from-amber-500 to-yellow-500 text-slate-900 hover:from-amber-400 hover:to-yellow-400'
                  : 'bg-amber-500 text-slate-900 hover:bg-amber-400'
              }`}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/20 pt-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`block py-2 font-medium ${
                  scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/contact"
              className="block mt-4 px-6 py-2.5 rounded-lg font-bold text-center bg-amber-500 text-slate-900"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  const services = [
    'Modular Home Construction',
    'Rooming Houses Development',
    'Childcare Centre Development',
    'Aged Care Facilities',
    'Community Housing Solutions',
    'Government Partnership Programs'
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HavenBridge</h3>
                <p className="text-xs text-amber-400">Development</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building communities and creating homes across Australia with premium property development solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service, i) => (
                <li key={i}>
                  <a href="/services" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Projects', 'Investor Relations', 'Careers', 'Blog', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <strong className="text-white">Email:</strong><br />
                info@havenbridge.com.au
              </li>
              <li>
                <strong className="text-white">Phone:</strong><br />
                +61 (0) 3 XXXX XXXX
              </li>
              <li>
                <strong className="text-white">Address:</strong><br />
                Melbourne, Victoria<br />
                Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 HavenBridge Development. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-amber-400">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-amber-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page
export default function HavenBridgeLanding() {
  const services = [
    { 
      icon: Home, 
      title: "Modular Home Construction", 
      desc: "Fast, sustainable, and high-quality modular housing solutions tailored for modern living.",
      link: "/services/modular-homes"
    },
    { 
      icon: Building, 
      title: "Rooming Houses Development", 
      desc: "Affordable rooming house solutions designed for community living and accessibility.",
      link: "/services/rooming-houses"
    },
    { 
      icon: Baby, 
      title: "Childcare Centre Development", 
      desc: "Purpose-built childcare facilities designed for safety, learning, and community engagement.",
      link: "/services/childcare"
    },
    { 
      icon: Heart, 
      title: "Aged Care Facilities", 
      desc: "Compassionate aged care environments built with dignity, comfort, and wellbeing in mind.",
      link: "/services/aged-care"
    },
    { 
      icon: HeartHandshake, 
      title: "Community Housing Solutions", 
      desc: "Inclusive and affordable housing for migrant and diverse communities across Australia.",
      link: "/services/community-housing"
    },
    { 
      icon: Handshake, 
      title: "Government Partnership Programs", 
      desc: "Collaborative development programs with government agencies for social housing initiatives.",
      link: "/services/government-partnerships"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assured",
      desc: "Every project meets the highest standards of construction and compliance with Australian regulations."
    },
    {
      icon: Target,
      title: "Community Focused",
      desc: "We prioritize social impact and community wellbeing in every development we undertake."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      desc: "Building with environmental responsibility and long-term sustainability at the forefront."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      desc: "Recognized by government partners and industry leaders for outstanding project delivery."
    }
  ];

  const projects = [
    { name: "Melbourne Modular Village", location: "Melbourne, VIC", type: "Residential", units: "48 Homes" },
    { name: "Sunrise Care Centre", location: "Sydney, NSW", type: "Aged Care", units: "80 Beds" },
    { name: "Community Hub Brisbane", location: "Brisbane, QLD", type: "Mixed Use", units: "35 Units" }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section - LongView Style */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-slate-900"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                New Solutions To<br />
                Australia's Housing<br />
                <span className="text-amber-400">Problems</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Wherever you are in your property journey, HavenBridge helps you go further with modern, community-focused development solutions.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-xl"
              >
                Get in Touch
              </a>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-linear-to-br from-slate-700 to-slate-600">
                {/* Placeholder for hero image */}
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  <Building2 className="w-32 h-32" />
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help - Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand and service every aspect of property development, from modular homes to government partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <a 
                key={i}
                href={service.link}
                className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 p-8 hover:shadow-2xl transition-all duration-300"
              >
                {/* Service image placeholder */}
                <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-slate-700">
                  <div className="w-full h-full flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white/20" />
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="relative">
                  <div className="bg-cyan-500 inline-block p-3 rounded-lg mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.desc}</p>
                  <span className="inline-flex items-center text-amber-400 font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Not sure? Contact us for guidance</p>
            <a 
              href="/contact"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Our Values and Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Values and Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="w-10 h-10 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">Real impact through real developments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-4/3 bg-linear-to-br from-slate-800 to-slate-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-1">{project.location}</p>
                  <p className="text-amber-400 text-sm font-semibold">{project.units}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/projects"
              className="inline-flex items-center bg-slate-900 text-white px-10 py-4 rounded-lg hover:bg-slate-800 transition-all shadow-xl font-bold gap-2"
            >
              View Full Portfolio <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build Something<br />
            <span className="text-amber-400">Great Together?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Partner with us for your next community development project and create lasting impact.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
          >
            Start Your Project Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
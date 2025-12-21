"use client";
import Image from "next/image";
import { Building2, Calculator, ClipboardCheck, Download, FileText, Heart, Home, Mail, MapPin, Newspaper, Phone, Shield } from "lucide-react";

export default function Footer() {
  const services = [
    'Affordable & Social Housing Development',
    'Rooming Houses & Community Accommodation',
    'Aged Care & NDIS Housing',
    'Childcare Centre Development',
    'Cabin Parks & Modular Housing',
    'Development & Project Management'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Investor Relations', href: '/investors' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Calculators', href: '/calculators', icon: Calculator },
    { name: 'News & Insights', href: '/resources/news', icon: Newspaper },
    { name: 'Project Planning Guides', href: '/resources/guides', icon: FileText },
    { name: 'Compliance Resources', href: '/resources/compliance', icon: ClipboardCheck },
    { name: 'Downloadable Templates', href: '/resources/templates', icon: Download },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section - Creative Design */}
          <div className="md:col-span-1">
            <div className="relative mb-6">
              {/* Decorative background elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-amber-400/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-cyan-500/20 rounded-full"></div>
              
              {/* Main Logo Container */}
              <div className="relative w-32 h-32 mx-auto mb-4 group">
                <div className="absolute inset-0 bg-linear-to-br from-amber-400/10 to-cyan-500/10 rounded-2xl transform group-hover:rotate-3 transition-transform duration-300"></div>
                <div className="relative w-full h-full flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-4">
                <Image
                  src="/logo2.png"
                  alt="HavenBridge logo"
                  fill
                  className="object-contain p-2 transform group-hover:scale-110 transition-transform duration-500"
                  sizes="100px"
                  quality={100}
                  priority
                  unoptimized
                />
                </div>
                
                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber-400/40 rounded-tl"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-cyan-500/40 rounded-tr"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-cyan-500/40 rounded-bl"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber-400/40 rounded-br"></div>
              </div>
              
              {/* Tagline with icons */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Home className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-amber-400 tracking-wider">BUILDING COMMUNITIES</span>
                  <Heart className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-500" />
                  <span className="text-xs font-semibold text-cyan-500 tracking-wider">SHAPING FUTURES</span>
                  <Building2 className="w-4 h-4 text-cyan-500" />
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <p className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-amber-400/30 pl-4 py-2">
              Creating dignified, community-focused housing across Australia through values-led development.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-400/20 rounded flex items-center justify-center">
                <Building2 className="w-4 h-4 text-amber-400" />
              </div>
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service, i) => (
                <li key={i} className="group">
                  <a 
                    href="/services" 
                    className="text-gray-400 hover:text-amber-400 text-sm transition-all duration-300 flex items-start gap-2 group-hover:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
              <li className="group">
                <a 
                  href="/services" 
                  className="text-amber-400 hover:text-amber-300 text-sm font-semibold transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1 mt-4"
                >
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
                  <span>View All Services →</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Quick Links
            </h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link, i) => (
                <li key={i} className="group">
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-500 text-sm transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"
                  >
                    <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-amber-400' : 'bg-cyan-500'}`}></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Resources Section */}
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2 mt-8 pt-8 border-t border-gray-800/50">
              <div className="w-6 h-6 bg-amber-400/20 rounded flex items-center justify-center">
                <FileText className="w-4 h-4 text-amber-400" />
              </div>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, i) => {
                const Icon = resource.icon;
                return (
                  <li key={i} className="group">
                    <a 
                      href={resource.href} 
                      className="text-gray-400 hover:text-amber-400 text-sm transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"
                    >
                      <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-cyan-500' : 'bg-amber-400'}`}></div>
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{resource.name}</span>
                    </a>
                  </li>
                );
              })}
              <li className="group">
                <a 
                  href="/resources" 
                  className="text-cyan-500 hover:text-cyan-400 text-sm font-semibold transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1 mt-4"
                >
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></div>
                  <span>Browse All Resources →</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-400/20 rounded flex items-center justify-center">
                <Phone className="w-4 h-4 text-amber-400" />
              </div>
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 group hover:text-amber-400 transition-colors duration-300">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Email</strong>
                  info@havenbridge.com.au
                </div>
              </li>
              <li className="flex items-start gap-3 group hover:text-cyan-500 transition-colors duration-300">
                <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Phone</strong>
                  +61 (0) 3 XXXX XXXX
                </div>
              </li>
              <li className="flex items-start gap-3 group hover:text-amber-400 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Address</strong>
                  Level 8, 90 Collins Street<br />
                  Melbourne, Victoria, Australia
                </div>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8 pt-8 border-t border-gray-800/50">
              <h5 className="font-bold text-sm mb-3 flex items-center gap-2">
                <div className="w-5 h-5 bg-cyan-500/20 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Stay Updated
              </h5>
              <p className="text-gray-400 text-xs mb-3">
                Subscribe to our newsletter for industry insights and updates.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-transparent text-white"
                />
                <button className="px-3 py-2 bg-cyan-600 text-white text-sm font-medium rounded hover:bg-cyan-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <p className="text-sm text-gray-400">
                © 2025 HavenBridge Development. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a 
                href="/sitemap" 
                className="text-sm text-gray-400 hover:text-cyan-500 transition-colors duration-300 hover:underline decoration-cyan-500"
              >
                Sitemap
              </a>
              <a 
                href="/privacy" 
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:underline decoration-amber-400"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-sm text-gray-400 hover:text-cyan-500 transition-colors duration-300 hover:underline decoration-cyan-500"
              >
                Terms of Service
              </a>
              <a 
                href="/accessibility" 
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:underline decoration-amber-400"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

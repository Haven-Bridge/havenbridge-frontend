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
    // { name: 'News & Insights', href: '/resources/news', icon: Newspaper },
    // { name: 'Project Planning Guides', href: '/resources/guides', icon: FileText },
    // { name: 'Compliance Resources', href: '/resources/compliance', icon: ClipboardCheck },
    // { name: 'Downloadable Templates', href: '/resources/templates', icon: Download },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section - Simplified to match Navbar */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center mb-6">
              {/* Logo Container - Matching Navbar Style */}
              <div className="relative group mb-4">
                <div className="absolute -inset-2 rounded-lg bg-linear-to-br from-amber-400/20 to-cyan-500/10 blur-sm group-hover:blur-md transition-all duration-500"></div>
                
                <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-amber-400/30 group-hover:border-amber-400/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/90"></div>
                  <Image
                    src="/logo2.png"
                    alt="HavenBridge logo"
                    fill
                    className="object-contain p-3 transform group-hover:scale-110 transition-transform duration-500"
                    sizes="80px"
                    quality={100}
                    priority
                    unoptimized
                  />
                </div>
              </div>
              
              {/* Company Name */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  <span className="bg-clip-text bg-linear-to-r from-amber-400 to-cyan-500 text-transparent">
                    HavenBridge
                  </span>
                </h2>
                <div className="flex items-center justify-center gap-2 mt-1">
                  {/* <div className="h-[2px] w-4 bg-amber-400"></div> */}
                  <p className="text-xs font-semibold tracking-wider text-amber-400">
                    DEVELOPMENTS
                  </p>
                  {/* <div className="h-[2px] w-4 bg-cyan-500"></div> */}
                </div>
              </div>
              
              {/* Tagline with icons */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  {/* <Home className="w-4 h-4 text-amber-400" /> */}
                  <span className="text-sm font-semibold text-amber-400 tracking-wider">BUILDING COMMUNITIES</span>
                  {/* <Heart className="w-4 h-4 text-amber-400" /> */}
                </div>
                <div className="flex items-center justify-center gap-2">
                  {/* <Shield className="w-4 h-4 text-cyan-500" /> */}
                  <span className="text-sm font-semibold text-cyan-500 tracking-wider">SHAPING FUTURES</span>
                  {/* <Building2 className="w-4 h-4 text-cyan-500" /> */}
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <p className="text-gray-400 text-base leading-relaxed italic border-l-2 border-amber-400/30 pl-4 py-2">
              Creating dignified, community-focused housing across Australia through values-led development.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
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
                    className="text-gray-400 hover:text-amber-400 text-base transition-all duration-300 block group-hover:translate-x-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
              <li className="group">
                <a 
                  href="/services" 
                  className="text-amber-400 hover:text-amber-300 text-base font-semibold transition-all duration-300 block group-hover:translate-x-1 mt-4"
                >
                  View All Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Resources */}
          <div>
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
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
                    className="text-gray-400 hover:text-cyan-500 text-base transition-all duration-300 block group-hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Resources Section */}
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2 mt-8 pt-8 border-t border-gray-800/50">
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
                      className="text-gray-400 hover:text-amber-400 text-base transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{resource.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-400/20 rounded flex items-center justify-center">
                <Phone className="w-4 h-4 text-amber-400" />
              </div>
              Contact Us
            </h4>
            <ul className="space-y-4 text-base text-gray-400">
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
                  +61 (0) 399999999
                </div>
              </li>
              <li className="flex items-start gap-3 group hover:text-amber-400 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Address</strong>
                  Level 31, 120 Collins Street<br />
                  Melbourne, VIC, 3000, Australia
                </div>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8 pt-8 border-t border-gray-800/50">
              <h5 className="font-bold text-base mb-3 flex items-center gap-2">
                <div className="w-5 h-5 bg-cyan-500/20 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Stay Updated
              </h5>
              <p className="text-gray-400 text-sm mb-3">
                Subscribe to our newsletter for industry insights and updates.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-transparent text-white"
                />
                <button className="px-4 py-2 bg-cyan-600 text-white text-sm font-medium rounded hover:bg-cyan-700 transition-colors">
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
          
          <div className="flex justify-center items-center">
            <p className="text-base text-gray-400">
              © 2025 HavenBridge Development. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Briefcase, Building2, Home, Menu, Phone, TrendingUp, Users, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', icon: Building2 },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Projects', href: '/projects', icon: Building2 },
    { name: 'Investors', href: '/investors', icon: TrendingUp },
    { name: 'Careers', href: '/careers', icon: Users },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-xl py-2' : 'bg-slate-900/95 backdrop-blur-sm py-3'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Enhanced */}
          <a href="/" className="flex items-center gap-3 group">
            {/* Logo container with effects */}
            <div className="relative">
              <div className={`absolute -inset-2 rounded-lg ${
                scrolled 
                  ? 'bg-linear-to-br from-amber-400/20 to-cyan-500/10' 
                  : 'bg-linear-to-br from-blue-400/10 to-cyan-500/10'
              } blur-sm group-hover:blur-md transition-all duration-500`}></div>
              
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-transparent group-hover:border-amber-400/30 transition-all duration-300">
                <div className={`absolute inset-0 ${
                  scrolled ? 'bg-slate-900/5' : 'bg-white/80'
                }`}></div>
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
            </div>

            {/* Company Name - Enhanced */}
            <div className="relative">
              <h1 className={`text-xl font-bold tracking-tight ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                <span className="bg-clip-text bg-linear-to-r from-amber-400 to-cyan-500 text-transparent">
                  HavenBridge
                </span>
              </h1>
              <div className="flex items-center gap-1 mt-0.5">
                {/* <div className={`h-[2px] w-4 ${scrolled ? 'bg-amber-400' : 'bg-amber-400'}`}></div> */}
                <p className={`text-xs font-semibold tracking-wider ${
                  scrolled ? 'text-slate-600' : 'text-amber-400'
                }`}>
                  DEVELOPMENTS
                </p>
                {/* <div className={`h-[2px] w-4 ${scrolled ? 'bg-cyan-500' : 'bg-cyan-500'}`}></div> */}
              </div>
            </div>
          </a>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 group/nav"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 ${
                    hoveredLink === link.name ? 'w-full' : 'group-hover/nav:w-1/2'
                  } bg-gradient-to-r from-amber-400 to-cyan-500 transition-all duration-300`}></div>
                  
                  <div className="flex items-center gap-2">
                    {/* <Icon className={`w-4 h-4 transition-colors duration-300 ${
                      scrolled 
                        ? hoveredLink === link.name ? 'text-amber-400' : 'text-slate-600'
                        : hoveredLink === link.name ? 'text-amber-400' : 'text-white'
                    }`} /> */}
                    <span className={`font-medium transition-colors duration-300 ${
                      scrolled 
                        ? hoveredLink === link.name ? 'text-amber-400' : 'text-slate-700'
                        : hoveredLink === link.name ? 'text-amber-400' : 'text-white'
                    }`}>
                      {link.name}
                    </span>
                  </div>
                </a>
              );
            })}
            
            {/* CTA Button - Enhanced */}
            <a 
              href="/contact"
              className="relative px-6 py-2.5 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 group/cta ml-2"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-cyan-500 rounded-lg blur opacity-0 group-hover/cta:opacity-50 transition-opacity duration-500"></div>
              
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg group-hover/cta:from-amber-500 group-hover/cta:to-amber-400 transition-all duration-500"></div>
              
              {/* <Phone className="w-4 h-4 relative z-10 text-slate-900" /> */}
              <span className="relative z-10 text-slate-900">Get in Touch</span>
              
              {/* Animated arrow */}
              <svg 
                className="w-4 h-4 relative z-10 text-slate-900 opacity-0 group-hover/cta:opacity-100 group-hover/cta:translate-x-1 transition-all duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative group/menu p-2"
          >
            {/* Background effect */}
            <div className={`absolute inset-0 rounded-lg ${
              scrolled 
                ? 'bg-gradient-to-r from-amber-400/10 to-cyan-500/10' 
                : 'bg-gradient-to-r from-amber-400/5 to-cyan-500/5'
            } opacity-0 group-hover/menu:opacity-100 transition-opacity duration-300`}></div>
            
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 relative z-10 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 relative z-10 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-6 ${
            scrolled ? 'border-t border-slate-200/30' : 'border-t border-white/20'
          }`}>
            <div className="pt-4 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg group/mobile transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-400/10 hover:to-cyan-500/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      scrolled 
                        ? 'bg-gradient-to-br from-amber-400/20 to-cyan-500/20' 
                        : 'bg-gradient-to-br from-amber-400/10 to-cyan-500/10'
                    }`}>
                      {/* <Icon className={`w-5 h-5 ${
                        scrolled ? 'text-amber-400' : 'text-amber-400'
                      }`} /> */}
                    </div>
                    <span className={`font-medium text-lg ${
                      scrolled ? 'text-slate-900' : 'text-white'
                    }`}>
                      {link.name}
                    </span>
                    <div className="ml-auto opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300">
                      <svg className={`w-5 h-5 ${
                        scrolled ? 'text-cyan-500' : 'text-cyan-500'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                );
              })}
              
              <a 
                href="/contact"
                className="flex items-center justify-center gap-2 mt-6 px-6 py-3.5 rounded-lg font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

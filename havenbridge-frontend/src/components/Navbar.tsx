"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Briefcase, Building, ChevronDown, Download, FileText, FolderKanban, Handshake, Menu, Phone, UserCircle, Users, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UPDATED navigation structure with About Us dropdown
  const navLinks = [
    { name: 'Home', href: '/', icon: Building },
    { 
      name: 'About Us', 
      href: '/about',
      dropdown: [
        { 
          name: 'Who We Are', 
          href: '/who-we-are',
          description: 'Our mission, vision & values',
          icon: Users
        },
        { 
          name: 'What We Do', 
          href: '/what-we-do',
          description: 'Services & capabilities',
          icon: Briefcase
        },
        { 
          name: 'Our Team', 
          href: '/team',
          description: 'Leadership & expertise',
          icon: UserCircle
        },
      ]
    },
    { name: 'Our Partners', href: '/our-partners', icon: Handshake },
    { name: 'Projects', href: '/projects', icon: FolderKanban },
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { 
          name: 'News & Insights', 
          href: '/resources/insights',
          description: 'Latest updates & analysis',
          icon: FileText
        },
        { 
          name: 'Project Guides', 
          href: '/resources/guides',
          description: 'Planning & compliance',
          icon: FileText
        },
        { 
          name: 'Templates', 
          href: '/resources/templates',
          description: 'Downloadable resources',
          icon: Download
        },
      ]
    },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-2xl py-2' : 'bg-gradient-to-b from-white/98 via-white/95 to-white/90 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14">
              <Image
                src="/logo2.png"
                alt="HavenBridge logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="100px"
                priority
              />
            </div>
            <div className="relative">
              <div className="text-xl font-bold text-slate-900 tracking-tight">HavenBridge</div>
              <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mt-0.5">DEVELOPMENTS</div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredLink(link.name);
                    if (link.dropdown) setDropdownOpen(link.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    if (link.dropdown) setDropdownOpen(null);
                  }}
                >
                  {link.dropdown ? (
                    <div className="flex items-center gap-1.5 cursor-pointer">
                      <div className="flex items-center gap-2 px-2 py-2.5">
                        <Icon className="w-4 h-4 text-cyan-600" />
                        <a 
                          href={link.href}
                          className="text-slate-800 hover:text-cyan-700 font-semibold text-sm tracking-wide uppercase"
                        >
                          {link.name}
                        </a>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${dropdownOpen === link.name ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {/* Enhanced Dropdown */}
                      {dropdownOpen === link.name && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-5 duration-200">
                          <div className="p-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                            <div className="flex items-center gap-2">
                              <Icon className="w-5 h-5 text-cyan-600" />
                              <span className="font-bold text-slate-900 text-sm uppercase tracking-wider">{link.name}</span>
                            </div>
                          </div>
                          <div className="p-2">
                            {link.dropdown.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-start gap-3 px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-white hover:text-cyan-700 rounded-lg transition-all duration-200 group/item"
                                >
                                  <div className="mt-0.5">
                                    <ItemIcon className="w-4 h-4 text-cyan-600 group-hover/item:text-cyan-700" />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-slate-900 group-hover/item:text-cyan-800">{item.name}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 group-hover/item:text-slate-600">{item.description}</div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 px-2 py-2.5 group/link"
                    >
                      <Icon className="w-4 h-4 text-cyan-600 transition-colors duration-200" />
                      <span className="text-slate-800 hover:text-cyan-700 font-semibold text-sm tracking-wide uppercase relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-500 group-hover/link:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  )}
                </div>
              );
            })}
            
            {/* Enhanced CTA Buttons */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200">
              <a 
                href="/capability-statement.pdf"
                className="flex items-center gap-2 text-slate-700 hover:text-cyan-700 font-semibold text-sm px-4 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all duration-200 group"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Capability Statement
              </a>
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2.5 rounded-lg font-bold hover:from-cyan-600 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-slate-200 pt-6 bg-gradient-to-b from-white to-slate-50/50">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center justify-between py-3.5 px-4 text-slate-900 font-semibold hover:text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-white rounded-xl transition-all duration-200 group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-cyan-600" />
                        <span>{link.name}</span>
                      </div>
                      {link.dropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </a>
                    {link.dropdown && (
                      <div className="ml-12 space-y-1">
                        {link.dropdown.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 py-2.5 px-4 text-slate-600 hover:text-cyan-700 text-sm hover:bg-slate-50/50 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <ItemIcon className="w-4 h-4 text-cyan-500" />
                              <div className="flex-1">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              
              <div className="pt-4 mt-4 border-t border-slate-200 space-y-3 px-4">
                <a 
                  href="/documents/capability-statement.pdf"
                  className="flex items-center justify-center gap-3 py-3.5 text-cyan-700 font-semibold border-2 border-cyan-200 bg-cyan-50/50 rounded-xl hover:bg-cyan-100 hover:border-cyan-300 transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                  Download Statement
                </a>
                <a 
                  href="/contact"
                  className="block text-center py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-cyan-600 hover:to-cyan-700"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
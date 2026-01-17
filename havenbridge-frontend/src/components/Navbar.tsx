"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronDown, Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Institutional navigation structure
  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Capabilities', 
      href: '/capabilities',
      dropdown: [
        { name: 'Delivery Model', href: '/capabilities/delivery' },
        { name: 'Governance', href: '/capabilities/governance' },
        { name: 'Compliance', href: '/capabilities/compliance' },
      ]
    },
    { name: 'Government', href: '/government' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Governance & ESG', href: '/governance' },
    { name: 'Investors', href: '/investors' },
    { name: 'Insights', href: '/insights' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo2.png"
                alt="HavenBridge logo"
                fill
                className="object-contain"
                sizes="100px"
                priority
              />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">HavenBridge</div>
              <div className="text-xs text-slate-600 font-medium">DEVELOPMENTS</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div 
                    className="flex items-center gap-1 cursor-pointer"
                    onMouseEnter={() => setCapabilitiesOpen(true)}
                    onMouseLeave={() => setCapabilitiesOpen(false)}
                  >
                    <a 
                      href={link.href}
                      className="text-slate-700 hover:text-cyan-600 font-medium py-2"
                    >
                      {link.name}
                    </a>
                    <ChevronDown className="w-4 h-4" />
                    
                    {/* Dropdown */}
                    {capabilitiesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-cyan-600 border-b last:border-b-0"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={link.href}
                    className="text-slate-700 hover:text-cyan-600 font-medium py-2"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                    {hoveredLink === link.name && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-500"></div>
                    )}
                  </a>
                )}
              </div>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3 ml-4">
              <a 
                href="/capability-statement.pdf"
                className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
              >
                <Download className="w-4 h-4" />
                Statement
              </a>
              <a 
                href="/contact"
                className="bg-cyan-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-slate-200 pt-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a 
                    href={link.href}
                    className="block py-3 text-slate-900 font-medium hover:text-cyan-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="ml-4 space-y-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-slate-600 hover:text-cyan-600 text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-3">
                <a 
                  href="/capability-statement.pdf"
                  className="flex items-center justify-center gap-2 py-3 text-cyan-600 font-medium border border-cyan-200 rounded-lg"
                >
                  <Download className="w-4 h-4" />
                  Download Statement
                </a>
                <a 
                  href="/contact"
                  className="block text-center py-3 bg-cyan-500 text-white rounded-lg font-semibold"
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
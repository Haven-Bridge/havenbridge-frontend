"use client";

import React, { useState, useEffect } from 'react';
import { Building2, Menu, X } from 'lucide-react';

export default function Navbar() {
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
    { name: 'Home', href: '/' },
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


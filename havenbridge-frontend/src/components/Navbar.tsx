"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

import {
  Briefcase,
  Building,
  ChevronDown,
  Download,
  FileText,
  FolderKanban,
  Handshake,
  Menu,
  Phone,
  UserCircle,
  Users,
  X,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Desktop hover delay
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop dropdown helpers
  const openDropdown = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(name);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 180);
  };

  const cancelClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Mobile accordion toggle
  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  interface NavLink {
    name: string;
    href: string;
    icon?: LucideIcon;
    dropdown?: Array<{
      name: string;
      href: string;
      description: string;
      icon?: LucideIcon;
    }>;
  }

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", icon: Building },
    {
      name: "About Us",
      href: "/about",
      icon: Users,
      dropdown: [
        { name: "Who We Are", href: "/who-we-are", description: "Our mission, vision & values", icon: Users },
        { name: "What We Do", href: "/what-we-do", description: "Services & capabilities", icon: Briefcase },
        { name: "Our Team", href: "/team", description: "Leadership & expertise", icon: UserCircle },
      ],
    },
    { name: "Our Partners", href: "/our-partners", icon: Handshake },
    { name: "Projects", href: "/projects", icon: FolderKanban },
    {
      name: "Resources",
      href: "/resources",
      icon: FileText,
      dropdown: [
        { name: "News & Insights", href: "/resources/insights", description: "Latest updates & analysis", icon: FileText },
        { name: "Project Guides", href: "/resources/guides", description: "Planning & compliance", icon: FileText },
        { name: "Templates", href: "/resources/templates", description: "Downloadable resources", icon: Download },
      ],
    },
    { name: "Careers", href: "/careers", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl py-2"
          : "bg-gradient-to-b from-white/98 via-white/95 to-white/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/logo2.png"
                alt="HavenBridge logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 48px, 56px"
                priority
              />
            </div>
            <div className="relative hidden sm:block">
              <div className="text-xl font-bold text-slate-900 tracking-tight">HavenBridge</div>
              <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mt-0.5">
                DEVELOPMENTS
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => openDropdown(link.name)}
                onMouseLeave={closeDropdown}
              >
                {link.dropdown ? (
                  <button
                    type="button"
                    className="group flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-slate-50/70 transition-colors whitespace-nowrap"
                    onMouseEnter={cancelClose}
                  >
                    {link.icon && <link.icon className="w-4 h-4 text-cyan-600 flex-shrink-0" />}
                    <span className="font-semibold text-sm tracking-wide uppercase text-slate-800 group-hover:text-cyan-700 whitespace-nowrap">
                      {link.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                        dropdownOpen === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-slate-50/70 transition-colors whitespace-nowrap"
                  >
                    {link.icon && (
                      <link.icon className="w-4 h-4 text-cyan-600 group-hover:text-cyan-700 transition-colors flex-shrink-0" />
                    )}
                    <span className="font-semibold text-sm tracking-wide uppercase text-slate-800 group-hover:text-cyan-700 relative whitespace-nowrap">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-cyan-500 group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                )}

                {/* Desktop Dropdown */}
                {link.dropdown && dropdownOpen === link.name && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-slate-100/80 overflow-hidden z-50"
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        {link.icon && <link.icon className="w-5 h-5 text-cyan-600" />}
                        <span className="font-bold text-slate-900 text-sm uppercase tracking-wider">{link.name}</span>
                      </div>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-start gap-3.5 px-5 py-3.5 hover:bg-cyan-50/40 transition-colors group/item"
                          onClick={() => {
                            setDropdownOpen(null);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {item.icon && (
                            <item.icon className="w-5 h-5 text-cyan-600 mt-0.5 group-hover/item:text-cyan-700 flex-shrink-0" />
                          )}
                          <div>
                            <div className="font-semibold text-slate-900 group-hover/item:text-cyan-800">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 group-hover/item:text-slate-600">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-slate-200">
              <a
                href="/capability-statement.pdf"
                className="group flex items-center gap-2 text-slate-700 hover:text-cyan-700 font-semibold text-sm px-5 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all whitespace-nowrap"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce flex-shrink-0" />
                Capability Statement
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-7 py-2.5 rounded-lg font-bold hover:from-cyan-600 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>

        {/* ====================== MOBILE MENU ====================== */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-6 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/70">
            <div className="px-3 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="rounded-lg overflow-hidden">
                  <div
                    className={`flex items-center justify-between py-3.5 px-4 text-slate-900 font-medium hover:bg-cyan-50/50 transition-colors cursor-pointer ${
                      link.dropdown && activeMobileDropdown === link.name ? "bg-cyan-50/40" : ""
                    }`}
                    onClick={() => {
                      if (link.dropdown) {
                        toggleMobileDropdown(link.name);
                      } else {
                        window.location.href = link.href;
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    <div className="flex items-center gap-3.5">
                      {link.icon && <link.icon className="w-5 h-5 text-cyan-600 flex-shrink-0" />}
                      <span className="text-base">{link.name}</span>
                    </div>

                    {link.dropdown && (
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                          activeMobileDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Mobile Dropdown Items */}
                  {link.dropdown && activeMobileDropdown === link.name && (
                    <div className="bg-slate-50/70 px-4 pb-2 pt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 py-3 px-5 text-slate-700 hover:text-cyan-700 hover:bg-cyan-50/50 rounded-lg transition-colors text-sm"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveMobileDropdown(null);
                          }}
                        >
                          {item.icon && <item.icon className="w-4.5 h-4.5 text-cyan-600 flex-shrink-0" />}
                          <div className="flex-1">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-5 mt-4 border-t border-slate-200 px-4 space-y-4">
                <a
                  href="/capability-statement.pdf"
                  className="flex items-center justify-center gap-3 py-3.5 px-5 text-cyan-700 font-semibold border-2 border-cyan-200 bg-cyan-50/60 rounded-xl hover:bg-cyan-100 hover:border-cyan-300 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download className="w-5 h-5" />
                  Capability Statement
                </a>

                <a
                  href="/contact"
                  className="block text-center py-3.5 px-5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-cyan-700 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

import {
  Briefcase,
  Building2,
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
  Target,
  HeartHandshake,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(name);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(null), 180);
  };

  const cancelClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  interface NavLink {
    name: string;
    href?: string;
    icon?: LucideIcon;
    dropdown?: Array<{
      name: string;
      href: string;
      description?: string;
      icon?: LucideIcon;
    }>;
  }

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", icon: Building2 },
    {
      name: "About Us",
      icon: Users,
      dropdown: [
        { name: "Who We Are", href: "/about/who-we-are", description: "Our story & purpose", icon: Users },
        { name: "Mission & Vision", href: "/about/mission-vision", description: "What drives us", icon: Target },
        { name: "Our Values", href: "/about/values", description: "Guiding principles", icon: HeartHandshake },
        { name: "Leadership", href: "/about/leadership", description: "Our team", icon: UserCircle },
      ],
    },
    { name: "What We Do", href: "/what-we-do", icon: Briefcase },
    { name: "Our Partners", href: "/our-partners", icon: Handshake },
    { name: "Projects", href: "/projects", icon: FolderKanban },
    {
      name: "Resources",
      href: "/resources",
      icon: FileText,
      dropdown: [
        { name: "News & Insights", href: "/resources/insights", description: "Latest updates", icon: FileText },
        { name: "Project Guides", href: "/resources/guides", description: "Planning resources", icon: FileText },
        { name: "Templates", href: "/resources/templates", description: "Downloadable tools", icon: Download },
      ],
    },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/95 backdrop-blur-md py-5 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12">
              <Image
                src="/logo2.png"
                alt="HavenBridge logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 44px, 48px"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-slate-900 tracking-tight leading-none">
                HavenBridge
              </div>
              <div className="text-xs font-semibold text-teal-700 uppercase tracking-widest mt-0.5">
                DEVELOPMENTS
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
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
                    className="group flex items-center gap-1.5 py-2.5 px-3 rounded-lg hover:bg-teal-50/40 transition-colors"
                    onMouseEnter={cancelClose}
                  >
                    {link.icon && <link.icon className="w-4.5 h-4.5 text-teal-600 flex-shrink-0" />}
                    <span className="font-semibold text-sm uppercase tracking-wide text-slate-800 group-hover:text-teal-700">
                      {link.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        dropdownOpen === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 py-2.5 px-3 rounded-lg hover:bg-teal-50/40 transition-colors"
                  >
                    {link.icon && (
                      <link.icon className="w-4.5 h-4.5 text-teal-600 group-hover:text-teal-700 transition-colors flex-shrink-0" />
                    )}
                    <span className="font-semibold text-sm uppercase tracking-wide text-slate-800 group-hover:text-teal-700">
                      {link.name}
                    </span>
                  </a>
                )}

                {/* Desktop Dropdown */}
                {link.dropdown && dropdownOpen === link.name && (
                  <div
                    className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-teal-100/60 overflow-hidden z-50"
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-5 bg-gradient-to-r from-teal-50/70 to-white border-b border-teal-100">
                      <div className="flex items-center gap-3">
                        {link.icon && <link.icon className="w-6 h-6 text-teal-700" />}
                        <span className="font-bold text-teal-900 text-base uppercase tracking-wide">
                          {link.name}
                        </span>
                      </div>
                    </div>
                    <div className="divide-y divide-teal-50/70">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-4 px-6 py-4 hover:bg-teal-50/50 transition-colors group/item"
                        >
                          {item.icon && (
                            <item.icon className="w-5 h-5 text-teal-600 group-hover/item:text-teal-700 flex-shrink-0" />
                          )}
                          <div>
                            <div className="font-semibold text-slate-900 group-hover/item:text-teal-800">
                              {item.name}
                            </div>
                            {item.description && (
                              <div className="text-sm text-slate-500 group-hover/item:text-slate-600 mt-0.5">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA area */}
            <div className="flex items-center gap-5 ml-8 pl-8 border-l border-teal-100">
              <a
                href="/capability-statement.pdf"
                className="group flex items-center gap-2.5 text-teal-700 hover:text-teal-800 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-teal-50/40 transition-all"
              >
                <Download className="w-4.5 h-4.5 group-hover:animate-bounce" />
                Capability Statement
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-7 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-teal-700 hover:to-teal-800 transition-all hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-teal-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-teal-800" /> : <Menu className="w-7 h-7 text-teal-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-8 border-t border-teal-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="rounded-2xl overflow-hidden">
                  {link.href ? (
                    <a
                      href={link.href}
                      className="flex items-center gap-4 py-4 px-5 text-teal-900 hover:bg-teal-50 rounded-xl transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.icon && <link.icon className="w-6 h-6 text-teal-600 flex-shrink-0" />}
                      <span className="text-lg">{link.name}</span>
                    </a>
                  ) : (
                    <>
                      <div
                        className={`flex items-center justify-between py-4 px-5 text-teal-900 font-medium hover:bg-teal-50 rounded-xl transition-colors cursor-pointer ${
                          activeMobileDropdown === link.name ? "bg-teal-50" : ""
                        }`}
                        onClick={() => toggleMobileDropdown(link.name)}
                      >
                        <div className="flex items-center gap-4">
                          {link.icon && <link.icon className="w-6 h-6 text-teal-600 flex-shrink-0" />}
                          <span className="text-lg">{link.name}</span>
                        </div>
                        {link.dropdown && (
                          <ChevronDown
                            className={`w-6 h-6 text-teal-600 transition-transform ${
                              activeMobileDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>

                      {link.dropdown && activeMobileDropdown === link.name && (
                        <div className="bg-teal-50/50 px-5 py-3 space-y-2">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-4 py-3 px-5 text-teal-800 hover:text-teal-900 hover:bg-teal-100/50 rounded-xl transition-colors text-base"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveMobileDropdown(null);
                              }}
                            >
                              {item.icon && <item.icon className="w-5 h-5 text-teal-600 flex-shrink-0" />}
                              <div>
                                <div className="font-medium">{item.name}</div>
                                {item.description && (
                                  <div className="text-sm text-teal-700 mt-0.5">{item.description}</div>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-8 mt-4 border-t border-teal-100 px-4 space-y-5">
                <a
                  href="/capability-statement.pdf"
                  className="flex items-center justify-center gap-3 py-4 px-6 bg-teal-50 text-teal-800 font-semibold rounded-2xl hover:bg-teal-100 transition-colors border border-teal-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download className="w-5 h-5" />
                  Capability Statement
                </a>

                <a
                  href="/contact"
                  className="block text-center py-4 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all"
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
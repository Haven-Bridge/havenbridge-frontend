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
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-sky-50 to-blue-50 shadow-md py-3"
          : "bg-gradient-to-r from-sky-50/95 to-blue-50/95 backdrop-blur-md py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8 xl:px-12 max-w-7xl">
        <div className="flex items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 md:w-11 md:h-11">
              <Image
                src="/logo2.png"
                alt="HavenBridge logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 40px, 44px"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-slate-900 tracking-tight leading-none">
                HavenBridge
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-amber-600 uppercase tracking-widest mt-0.5">
                DEVELOPMENTS
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
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
                    className="group flex items-center gap-1.5 py-2.5 px-4 rounded-lg hover:bg-amber-50/70 transition-colors whitespace-nowrap"
                    onMouseEnter={cancelClose}
                  >
                    {link.icon && <link.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />}
                    <span className="font-semibold text-[13px] uppercase tracking-wide text-slate-800 group-hover:text-amber-700">
                      {link.name}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                        dropdownOpen === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 py-2.5 px-4 rounded-lg hover:bg-amber-50/70 transition-colors whitespace-nowrap"
                  >
                    {link.icon && (
                      <link.icon className="w-4 h-4 text-blue-600 group-hover:text-amber-600 transition-colors flex-shrink-0" />
                    )}
                    <span className="font-semibold text-[13px] uppercase tracking-wide text-slate-800 group-hover:text-amber-700">
                      {link.name}
                    </span>
                  </a>
                )}

                {/* Desktop Dropdown */}
                {link.dropdown && dropdownOpen === link.name && (
                  <div
                    className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-blue-100/60 overflow-hidden z-50"
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-5 bg-gradient-to-r from-sky-50/70 to-blue-50/70 border-b border-blue-100">
                      <div className="flex items-center gap-3">
                        {link.icon && <link.icon className="w-6 h-6 text-blue-700" />}
                        <span className="font-bold text-slate-900 text-base uppercase tracking-wide">
                          {link.name}
                        </span>
                      </div>
                    </div>
                    <div className="divide-y divide-blue-50/70">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-4 px-6 py-4 hover:bg-amber-50/60 transition-colors group/item"
                        >
                          {item.icon && (
                            <item.icon className="w-5 h-5 text-blue-600 group-hover/item:text-amber-600 flex-shrink-0" />
                          )}
                          <div>
                            <div className="font-semibold text-slate-900 group-hover/item:text-amber-800">
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
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-amber-50/70 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-blue-800" /> : <Menu className="w-7 h-7 text-blue-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-8 border-t border-blue-100 bg-gradient-to-r from-sky-50/95 to-blue-50/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="rounded-2xl overflow-hidden">
                  {link.href ? (
                    <a
                      href={link.href}
                      className="flex items-center gap-4 py-4 px-5 text-slate-900 hover:bg-amber-50/70 rounded-xl transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.icon && <link.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />}
                      <span className="text-lg">{link.name}</span>
                    </a>
                  ) : (
                    <>
                      <div
                        className={`flex items-center justify-between py-4 px-5 text-slate-900 font-medium hover:bg-amber-50/70 rounded-xl transition-colors cursor-pointer ${
                          activeMobileDropdown === link.name ? "bg-amber-50/70" : ""
                        }`}
                        onClick={() => toggleMobileDropdown(link.name)}
                      >
                        <div className="flex items-center gap-4">
                          {link.icon && <link.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />}
                          <span className="text-lg">{link.name}</span>
                        </div>
                        {link.dropdown && (
                          <ChevronDown
                            className={`w-6 h-6 text-blue-600 transition-transform ${
                              activeMobileDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>

                      {link.dropdown && activeMobileDropdown === link.name && (
                        <div className="bg-sky-50/50 px-5 py-3 space-y-2">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-4 py-3 px-5 text-slate-800 hover:text-amber-900 hover:bg-amber-100/50 rounded-xl transition-colors text-base"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveMobileDropdown(null);
                              }}
                            >
                              {item.icon && <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />}
                              <div>
                                <div className="font-medium">{item.name}</div>
                                {item.description && (
                                  <div className="text-sm text-blue-700 mt-0.5">{item.description}</div>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
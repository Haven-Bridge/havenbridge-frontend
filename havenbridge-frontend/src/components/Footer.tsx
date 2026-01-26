"use client";
import Image from "next/image";
import { Calculator, Download, Facebook, FileText, Linkedin, Mail, MapPin, Phone, Shield, Twitter } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our Partners", href: "/our-partners" },
    { name: "Projects", href: "/projects" },
    { name: "Resources", href: "/resources" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Calculators", href: "/calculators", icon: Calculator },
    { name: "News & Insights", href: "/resources/insights", icon: FileText },
    { name: "Project Planning Guides", href: "/resources/guides", icon: FileText },
    { name: "Compliance Resources", href: "/resources/compliance", icon: Shield },
    { name: "Capability Statement", href: "/capability-statement.pdf", icon: Download },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white pt-12 pb-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo + Tagline + Address */}
          <div className="space-y-6">
            <div>
              <Image
                src="/logo2.png"
                alt="HavenBridge Developments"
                width={64}
                height={64}
                className="mb-4"
              />
              <div className="mb-2">
                <div className="text-xl font-bold tracking-tight">HavenBridge</div>
                <div className="text-sm text-amber-400 font-medium uppercase tracking-wider">
                  Developments Pty Ltd
                </div>
              </div>
              <div className="text-xs text-gray-400 space-y-0.5">
                <div>ABN 39 693 455 122</div>
                <div>ACN 693 455 122</div>
              </div>
            </div>

            <div className="text-sm text-sky-200 leading-relaxed">
              Proudly serving multicultural communities across Australia
            </div>

            <div className="text-sm text-gray-400 leading-relaxed">
              Level 31, 120 Collins Street<br />
              Melbourne VIC 3000
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-sky-400">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources (Calculator kept here) */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-amber-400">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {resources.map((res) => {
                const Icon = res.icon;
                return (
                  <li key={res.name}>
                    <a
                      href={res.href}
                      className="flex items-center gap-2.5 text-gray-300 hover:text-sky-400 transition-colors"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0 text-blue-400" />
                      {res.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Contact + Social */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg mb-5 text-sky-400">Contact</h4>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Level 31, 120 Collins Street<br />Melbourne VIC 3000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <a href="mailto:info@havenbridge.com.au" className="hover:text-sky-400 transition-colors">
                    info@havenbridge.com.au
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-sky-400">Follow Us</h4>
              <div className="flex gap-5">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Acknowledgement of Country + Bottom Bar */}
        <div className="border-t border-blue-900/50 pt-8 pb-6 text-sm text-gray-400 leading-relaxed">
          <p className="mb-6 text-sky-100/80">
            HavenBridge Developments Pty Ltd acknowledges the Traditional Owners of the lands on which we live and work, and we pay our respects to Elders past and present. We recognise the enduring connection of Aboriginal and Torres Strait Islander peoples to land, waters, and community, and we honour their continuing culture and contributions to Australia. As a Melbourne-based organisation, we acknowledge the Wurundjeri Woi Wurrung and Bunurong peoples of the Kulin Nation as the Traditional Custodians of the lands on which our head office is located. We extend our respect to all First Nations peoples we work with across Victoria and Australia.
          </p>

          {/* Bottom legal & links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div>
              © {new Date().getFullYear()} HavenBridge Developments Pty Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="/privacy-policy" className="hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-sky-400 transition-colors">
                Terms
              </a>
              <a href="/careers" className="hover:text-amber-400 transition-colors">
                Careers
              </a>
            </div>
            <div>ABN 39 693 455 122 · ACN 693 455 122</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
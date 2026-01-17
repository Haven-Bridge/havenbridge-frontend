"use client";
import Image from "next/image";
import { Calculator, Download, FileText, Mail, MapPin, Phone, Shield } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Government', href: '/government' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Governance & ESG', href: '/governance' },
    { name: 'Investors', href: '/investors' },
    { name: 'Insights', href: '/insights' },
  ];

  const resources = [
    { name: 'Calculators', href: '/calculators', icon: Calculator },
    { name: 'Capability Statement', href: '/capability-statement.pdf', icon: Download },
    { name: 'Governance Framework', href: '/governance-framework.pdf', icon: FileText },
    { name: 'Compliance Guide', href: '/compliance-guide.pdf', icon: Shield },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Modern Slavery Statement', href: '/modern-slavery' },
    { name: 'Supplier Code', href: '/supplier-code' },
    { name: 'Complaints Handling', href: '/complaints' },
    { name: 'WHS Statement', href: '/whs' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Legal Information */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo2.png"
                alt="HavenBridge Developments"
                width={60}
                height={60}
                className="mb-4"
              />
              <div className="mb-3">
                <div className="text-lg font-bold">HavenBridge</div>
                <div className="text-xs text-amber-400 font-medium">DEVELOPMENTS PTY LTD</div>
              </div>
              
              {/* Legal Entity Information */}
              <div className="text-xs text-gray-400 space-y-1 mb-4">
                <div>ABN 39 693 455 122</div>
                <div>ACN 693 455 122</div>
                <div>GST Registered</div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4">
                Institutional housing delivery with community insight.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources (Calculator kept here) */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource, i) => {
                const Icon = resource.icon;
                return (
                  <li key={i}>
                    <a 
                      href={resource.href} 
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {resource.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact & Policies */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-400">
              Contact & Compliance
            </h4>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Level 31, 120 Collins Street<br />
                  Melbourne VIC 3000
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:partnerships@havenbridge.com.au" className="text-sm text-gray-300 hover:text-white">
                  partnerships@havenbridge.com.au
                </a>
              </div>
              
              {/* Add real phone number when available */}
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                +61 (0) 3 9999 9999
                </span>
              </div>
            </div>

            {/* Policies */}
            <div>
              <h5 className="font-semibold text-sm mb-2 text-gray-300">Policies</h5>
              <div className="flex flex-wrap gap-2">
                {policies.slice(0, 3).map((policy, i) => (
                  <a 
                    key={i}
                    href={policy.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {policy.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Institutional */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-sm text-gray-400">
                HavenBridge is operated by Havenbridge Developments Pty Ltd (ABN 39 693 455 122)
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} HavenBridge Developments Pty Ltd. All rights reserved.
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-xs text-gray-500">
                Procurement-ready • Governance-first • Community-informed
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
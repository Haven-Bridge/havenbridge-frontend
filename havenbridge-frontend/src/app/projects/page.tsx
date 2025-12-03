"use client";

import React from 'react';
import { ArrowRight, MapPin, Building2, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    { 
      name: "Melbourne Modular Village", 
      location: "Melbourne, VIC", 
      type: "Residential", 
      units: "48 Homes",
      status: "Completed",
      year: "2024",
      desc: "A sustainable modular housing community featuring energy-efficient homes and community spaces."
    },
    { 
      name: "Sunrise Care Centre", 
      location: "Sydney, NSW", 
      type: "Aged Care", 
      units: "80 Beds",
      status: "Completed",
      year: "2024",
      desc: "State-of-the-art aged care facility with modern amenities and compassionate care environments."
    },
    { 
      name: "Community Hub Brisbane", 
      location: "Brisbane, QLD", 
      type: "Mixed Use", 
      units: "35 Units",
      status: "In Progress",
      year: "2025",
      desc: "Mixed-use development combining affordable housing with community facilities and retail spaces."
    },
    { 
      name: "Adelaide Childcare Centre", 
      location: "Adelaide, SA", 
      type: "Childcare", 
      units: "120 Places",
      status: "Completed",
      year: "2023",
      desc: "Purpose-built childcare facility with outdoor play areas and educational spaces."
    },
    { 
      name: "Perth Rooming House Complex", 
      location: "Perth, WA", 
      type: "Rooming House", 
      units: "24 Rooms",
      status: "Completed",
      year: "2023",
      desc: "Affordable rooming house development providing safe and accessible accommodation."
    },
    { 
      name: "Canberra Social Housing Project", 
      location: "Canberra, ACT", 
      type: "Social Housing", 
      units: "60 Units",
      status: "In Progress",
      year: "2025",
      desc: "Government partnership project delivering affordable social housing solutions."
    }
  ];

  const stats = [
    { number: "200+", label: "Homes Built" },
    { number: "15+", label: "Projects Completed" },
    { number: "5", label: "States & Territories" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-slate-900"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-amber-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Real impact through real developments. Explore our portfolio of community-focused projects across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-4/3 bg-linear-to-br from-slate-800 to-slate-600 relative overflow-hidden">
                
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === "Completed" 
                        ? "bg-green-500 text-white" 
                        : "bg-amber-500 text-slate-900"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="mb-3">
                    <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-amber-500 font-semibold mb-3">{project.units} • {project.year}</p>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <a 
                    href="/contact"
                    className="inline-flex items-center text-cyan-500 font-semibold hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Have a Project in <span className="text-amber-400">Mind?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Let's work together to create something impactful for your community.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}


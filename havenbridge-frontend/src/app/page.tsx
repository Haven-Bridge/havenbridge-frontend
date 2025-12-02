"use client";
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Users, 
  HeartHandshake, 
  ChevronRight,
  ArrowRight,
  Award,
  TrendingUp,
  Shield,
  CheckCircle2
} from 'lucide-react';

export default function HavenBridgeLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      icon: Building2, 
      title: "Modular Home Construction", 
      desc: "Fast, sustainable, high-quality modular housing solutions tailored for modern living",
      features: ["3-6 month build time", "Eco-friendly materials", "Cost-effective"]
    },
    { 
      icon: Users, 
      title: "Childcare & Aged Care", 
      desc: "Purpose-built centres designed for care, safety, and community wellbeing",
      features: ["Regulatory compliant", "Community-focused design", "Future-ready facilities"]
    },
    { 
      icon: HeartHandshake, 
      title: "Community Housing", 
      desc: "Affordable and inclusive housing solutions for migrant and diverse communities",
      features: ["Government partnerships", "Sustainable development", "Social impact focus"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "15", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "200+", label: "Families Housed" }
  ];

  const trustFactors = [
    { icon: Award, text: "Government Approved Partner" },
    { icon: Shield, text: "Quality Assured Projects" },
    { icon: TrendingUp, text: "Proven Track Record" }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 py-32">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Parallax overlay */}
        <div 
          className="absolute inset-0 bg-black/30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className={`relative container mx-auto px-6 lg:px-12 text-center z-10 transition-all duration-1000 max-w-7xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-16 md:mb-20">
            {trustFactors.map((factor, i) => (
              <div key={i} className="flex items-center gap-2 text-amber-400 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all">
                <factor.icon className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium text-white">{factor.text}</span>
              </div>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-10 md:mb-14 leading-tight text-white px-4">
            Building Communities,<br />
            <span className="bg-linear-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
              Creating Homes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-16 md:mb-20 max-w-4xl mx-auto text-gray-200 leading-relaxed px-4">
            Premium property development for modular homes, childcare centres, aged care facilities, 
            and community housing across Australia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-24 md:mb-32">
            <button className="group bg-linear-to-r from-amber-500 to-yellow-500 text-slate-900 px-10 py-5 text-lg md:text-xl font-bold rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2">
              Explore Our Services 
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
            </button>
            <button className="border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-10 py-5 text-lg md:text-xl font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all inline-flex items-center justify-center gap-2">
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-10 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-3">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-10 h-10 rotate-90 text-white/70" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering excellence in community-focused property development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200 hover:-translate-y-2"
              >
                <div className="bg-linear-to-br from-amber-400 to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-amber-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center text-amber-600 font-bold text-lg hover:text-amber-700 group">
              View All Services 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Our Work
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">Real impact through real developments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Modular Living Melbourne", location: "Melbourne, VIC", type: "Residential" },
              { name: "Sunrise Care Centre", location: "Sydney, NSW", type: "Aged Care" },
              { name: "Community Hub Brisbane", location: "Brisbane, QLD", type: "Mixed Use" }
            ].map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="aspect-4/3 bg-linear-to-br from-slate-800 to-slate-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="mb-2">
                    <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                  <p className="text-gray-300 flex items-center gap-1">
                    <span className="text-amber-400">📍</span> {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2 font-bold">
              View Full Portfolio <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.4) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Build Something<br />
            <span className="bg-linear-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
              Great Together?
            </span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Partner with us for your next community development project and create lasting impact.
          </p>
          <button className="bg-linear-to-r from-amber-500 to-yellow-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:from-amber-400 hover:to-yellow-400 transition-all shadow-2xl hover:shadow-amber-500/50 hover:scale-105 inline-block">
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
}
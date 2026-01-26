"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";

import {
  Building2,
  Handshake,
  FileText,
  ArrowRight,
  CheckCircle2,
  Home,
  Users,
  Shield,
} from "lucide-react";

// Your projects data (unchanged)
const projectsData = [
  {
    id: "melbourne-modular-village",
    name: "Melbourne Modular Village",
    location: "Melbourne, VIC",
    type: "Affordable Housing",
    units: "48 Homes",
    status: "Completed",
    year: "2024",
    value: "$12.5M",
    image: "/projects/melbourne-modular-village.jpeg",
    heroImage: "/projects/melbourne-modular-village.jpeg",
    deliveryModel: "Stage-Gated Delivery",
    clientType: "Government Partnership",
    outcomes: "Social & Affordable Housing",
    desc: "Sustainable modular housing community featuring energy-efficient homes and community spaces, delivered through institutional governance.",
    highlights: ["Government Partnership", "100% Occupied", "ESG Compliant"],
    progress: "Completed",
    completion: "June 2024",
    featured: true,
    stageGates: "5"
  },
  {
    id: "sunrise-care-centre",
    name: "Sunrise Specialist Accommodation",
    location: "Sydney, NSW",
    type: "Specialist Housing",
    units: "80 Beds",
    status: "Completed",
    year: "2024",
    value: "$28M",
    image: "/projects/sunrise-care-centre.jpeg",
    heroImage: "/projects/sunrise-care-centre.jpeg",
    deliveryModel: "Design & Construct",
    clientType: "Government & CHP",
    outcomes: "NDIS/SDA & Aged Care",
    desc: "Specialist accommodation facility delivered with full compliance to regulatory standards and design guidelines.",
    highlights: ["Federal Funding", "95% Occupancy", "20-Year Lease"],
    progress: "Completed",
    completion: "December 2024",
    featured: true,
    stageGates: "6"
  },
  {
    id: "community-hub-brisbane",
    name: "Brisbane Community Hub",
    location: "Brisbane, QLD",
    type: "Mixed-Use Development",
    units: "35 Units",
    status: "In Progress",
    year: "2025",
    value: "$15.8M",
    image: "/projects/community-hub-brisbane.jpeg",
    heroImage: "/projects/community-hub-brisbane.jpeg",
    deliveryModel: "Joint Venture",
    clientType: "Council & Community",
    outcomes: "Affordable Housing + Community Space",
    desc: "Mixed-use development combining affordable housing with community facilities through structured governance.",
    highlights: ["Council Support", "Multi-Income Streams", "Q3 2025 Completion"],
    progress: "Stage 3 of 5",
    completion: "September 2025",
    featured: true,
    stageGates: "5"
  },
];

export default function HavenBridgeLanding() {
  const stats = [
    { value: "45", label: "Years of Combined Experience", sub: "across real estate, development, investment & government" },
    { value: "500+", label: "Dwellings Delivered", sub: "completed and under management" },
    { value: "$300M+", label: "Project Value", sub: "delivered and current pipeline" },
    { value: "98%", label: "On Time Delivery", sub: "proven project performance" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Develop & Deliver",
      desc: "End-to-end development management, design coordination, procurement support, and delivery oversight.",
    },
    {
      icon: Handshake,
      title: "Partner & Enable",
      desc: "Clear partnering model with CHPs, government agencies, and delivery partners.",
    },
    {
      icon: FileText,
      title: "Report & Improve",
      desc: "Outcomes tracking, compliance controls, and continuous improvement.",
    },
  ];

  const valuePoints = [
    {
      icon: Shield,
      title: "Governance designed for public accountability",
      desc: "Institutional-grade controls and transparent reporting"
    },
    {
      icon: FileText,
      title: "Transparent reporting and documentation",
      desc: "Audit-ready documentation for all stakeholders"
    },
    {
      icon: Users,
      title: "Delivery partners selected with probity controls",
      desc: "Rigorous selection process ensuring quality and compliance"
    },
    {
      icon: Shield,
      title: "Risk-managed development pipeline",
      desc: "Proactive risk management throughout project lifecycle"
    },
    {
      icon: Home,
      title: "Community outcomes embedded in delivery",
      desc: "Social impact measured and reported transparently"
    },
    {
      icon: CheckCircle2,
      title: "98% on-time delivery record",
      desc: "Proven track record of meeting project deadlines"
    }
  ];

  const trustPartners = [
    { name: "Victorian Government", placeholder: "VIC Gov" },
    { name: "Housing Australia", placeholder: "Housing Aus" },
    { name: "Community Housing Ltd", placeholder: "CHL" },
    { name: "AustralianSuper", placeholder: "AustralianSuper" },
    { name: "Tier 1 CHP Partners", placeholder: "Registered CHPs" },
    { name: "Institutional Capital", placeholder: "Industry Funds" },
  ];

  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className="bg-gradient-to-b from-sky-50 to-blue-50/50 font-sans antialiased min-h-screen">

      <Navbar />

      {/* Hero Section – slightly deeper overlay for better contrast */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            <Image
              src="/hero-fallback.jpg"
              alt="HavenBridge housing development"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 xl:px-12 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight md:leading-tight drop-shadow-lg">
              Delivering social and affordable housing with{" "}
              <span className="text-amber-300 block md:inline-block mt-2 md:mt-0">governance institutions trust</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-100/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              We partner with community housing providers, government, and delivery teams to bring projects from feasibility to completion—with transparent reporting and strong controls.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6 md:pt-8">
              <a
                href="/contact?type=partner"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Partner with Us</span>
              </a>

              <a
                href="/submit-project"
                className="group inline-flex items-center justify-center px-8 md:px-10 py-4 text-base md:text-lg font-semibold text-white bg-white/15 border-2 border-white/40 rounded-xl backdrop-blur-md hover:bg-white/25 hover:border-white/60 transition-all duration-300 hover:scale-105"
              >
                Submit a Project / Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar – warmer, lifted cards */}
      <section className="py-16 md:py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-amber-100/50 p-10 md:p-12">
            <p className="text-center text-base uppercase tracking-wider text-blue-800 font-semibold mb-10">
              Trusted by Leading Institutions & Partners
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-14 lg:gap-20">
              {trustPartners.map((p, i) => (
                <div key={i} className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
                  <div className="h-16 w-40 md:w-48 bg-gradient-to-br from-white to-sky-50/30 rounded-xl shadow-md border border-blue-100 group-hover:border-amber-300 group-hover:shadow-xl flex items-center justify-center mb-4 transition-all">
                    <span className="text-blue-800 font-bold text-base md:text-lg tracking-tight">
                      {p.placeholder}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-blue-900">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-slate-600 mt-12 max-w-3xl mx-auto">
              Government departments · Registered community housing providers · Institutional investors · Major delivery consortia
            </p>
          </div>
        </div>
      </section>

      {/* Stats – prominent, warm cards */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-8 shadow-lg border border-blue-50 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-700 mb-3">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-800 leading-relaxed">
            Our projects sit at the intersection of{" "}
            <span className="text-blue-700 font-bold">social impact</span>,{" "}
            <span className="text-blue-700 font-bold">commercial excellence</span>, and{" "}
            <span className="text-amber-600 font-bold">cultural insight</span>.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {services.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 md:p-10 border border-blue-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900 text-center">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed text-center text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why stakeholders */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900">
            Why Stakeholders Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePoints.map((point, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 shadow-md border border-blue-50 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-50 transition-colors">
                    <point.icon className="w-7 h-7 text-blue-700 group-hover:text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-slate-700">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-amber-400 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/50 transition-all" />
                  <div className="absolute top-6 right-6">
                    <span className={`px-4 py-2 text-sm font-semibold rounded-full shadow-md ${
                      project.status === 'Completed' ? 'bg-green-600 text-white' :
                      project.status === 'In Progress' ? 'bg-blue-600 text-white' :
                      'bg-amber-600 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xl font-bold drop-shadow-md">{project.name}</p>
                    <p className="text-base opacity-90">{project.location}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-700 mb-6 line-clamp-2">{project.desc}</p>
                  <div className="grid grid-cols-2 gap-5 mb-6">
                    <div className="text-center p-4 bg-sky-50/70 rounded-2xl">
                      <div className="font-bold text-blue-900 text-lg">{project.units}</div>
                      <div className="text-sm text-slate-600">Units</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50/70 rounded-2xl">
                      <div className="font-bold text-amber-800 text-lg">{project.value}</div>
                      <div className="text-sm text-slate-600">Value</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base text-slate-600 font-medium">{project.type}</span>
                    <a 
                      href={`/projects/${project.id}`} 
                      className="text-blue-700 font-semibold flex items-center gap-2 hover:text-amber-600 transition-colors"
                    >
                      View details <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a 
              href="/projects" 
              className="inline-flex items-center gap-3 text-xl font-bold text-blue-700 hover:text-amber-600 transition-colors"
            >
              View All Projects <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-blue-700 via-blue-800 to-amber-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Have a site or a project?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto">
              Submit details in 3 minutes — start the conversation today.
            </p>
            <a
              href="/submit-project"
              className="group relative inline-flex items-center justify-center px-10 md:px-14 py-5 md:py-6 text-xl md:text-2xl font-bold bg-white text-blue-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:bg-amber-50"
            >
              <span className="relative z-10 flex items-center gap-4">
                Project Intake Form <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
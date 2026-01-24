"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";

import {
  Building2,
  Handshake,
  FileText,
  Download,
  ArrowRight,
  CheckCircle2,
  Home,
  Users,
  Shield,
} from "lucide-react";

// Import or define projects data
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
  // Data arrays
  const stats = [
    { value: "45", label: "Years of Experience", sub: "across real estate, development & government" },
    { value: "500+", label: "Dwellings Delivered", sub: "completed + under management" },
    { value: "$300M+", label: "Project Value", sub: "delivered + pipeline" },
    { value: "98%", label: "On Time", sub: "project delivery performance" },
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

  const partners = [
    { name: "Community Housing Providers", icon: Home },
    { name: "Government Agencies", icon: Building2 },
    { name: "Delivery Partners", icon: Users },
    { name: "Finance Partners", icon: Shield },
  ];

  // Get only featured projects for homepage
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className="bg-white font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 xl:px-12 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight md:leading-tight">
              Delivering social and affordable housing with{" "}
              <span className="text-amber-400 block md:inline-block mt-2 md:mt-0">governance institutions trust</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-100/90 max-w-3xl mx-auto leading-relaxed font-light">
              We partner with community housing providers, government, and delivery teams to bring projects from feasibility to completion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6 md:pt-8">
              <a
                href="/contact?type=partner"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold bg-blue-500 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Partner with Us</span>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="/submit-project"
                className="group inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-white/10 border-2 border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                Submit a Project / Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm md:text-base uppercase tracking-widest text-slate-600 mb-6 md:mb-8 font-medium">
            Trusted by leading partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, i) => {
              const Icon = partner.icon;
              return (
                <div key={i} className="text-center">
                  <div className="h-24 md:h-28 bg-white rounded-xl flex flex-col items-center justify-center p-4 shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-semibold text-sm md:text-base">
                      {partner.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-t border-blue-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg font-semibold text-slate-600">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-slate-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-medium">
            Our projects sit at the intersection of{" "}
            <span className="text-amber-600 font-semibold">social impact</span>,{" "}
            <span className="text-amber-600 font-semibold">commercial excellence</span>, and{" "}
            <span className="text-amber-600 font-semibold">cultural insight</span>.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 md:mb-16 text-slate-800">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((item, i) => (
              <div
                key={i}
                className="group bg-slate-50 rounded-2xl p-6 md:p-8 border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:bg-blue-50 transition-colors">
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Points Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8 xl:px-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12 text-slate-800">
            Why stakeholders work with us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-5 md:p-6 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Using real projects data */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering quality housing with community-focused outcomes across Australia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} - ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{project.location}</p>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="text-sm font-semibold text-slate-800">{project.units}</div>
                      <div className="text-xs text-slate-500">Units</div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <div className="text-sm font-semibold text-slate-800">{project.value}</div>
                      <div className="text-xs text-slate-500">Value</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      {project.type}
                    </span>
                    <a
                      href={`/projects/${project.id}`}
                      className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 transition-colors text-sm"
                    >
                      View details <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-lg"
            >
              View all projects <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              Have a site or a project?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-95 max-w-2xl mx-auto">
              Submit details in 3 minutes — start the conversation today.
            </p>
            <a
              href="/submit-project"
              className="group relative inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold bg-white text-slate-800 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Project Intake Form <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
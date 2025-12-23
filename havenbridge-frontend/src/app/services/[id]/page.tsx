"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import { servicesData } from "@/data/services";

import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Briefcase,
  Home,
  Building,
  Heart,
  Baby,
  HeartHandshake,
  Handshake,
  Clock,
  Award,
  BarChart3
} from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  
  // Find the service by ID
  const service = servicesData.find(s => s.id === serviceId);
  
  // Map icon string to actual icon component
  const iconMap: any = { Home, Building, Heart, Baby, HeartHandshake, Handshake };
  const IconComponent = service ? iconMap[service.icon] : Building2;
  
  // If service not found, show 404
  if (!service) {
    return (
      <div className="bg-white font-sans min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <a href="/services" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Back Button */}
          <a 
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </a>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Service Info */}
            <div>
              {/* Icon Badge */}
              {/* <div className={`inline-flex items-center gap-3 px-6 py-3 bg-linear-to-br ${service.color} rounded-2xl mb-6`}>
                <IconComponent className="w-8 h-8 text-white" />
                <span className="text-lg font-bold text-white">{service.stats}</span>
              </div> */}

              {/* Service Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>

              {/* Short Description */}
              {/* <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {service.desc}
              </p> */}

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Clock className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-sm text-gray-300 mb-1">Delivery Time</div>
                  <div className="text-lg font-bold text-white">{service.metrics.avgDeliveryTime}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <TrendingUp className="w-6 h-6 text-emerald-400 mb-2" />
                  <div className="text-sm text-gray-300 mb-1">Avg Return</div>
                  <div className="text-lg font-bold text-white">{service.metrics.avgReturn}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <BarChart3 className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="text-sm text-gray-300 mb-1">Occupancy</div>
                  <div className="text-lg font-bold text-white">{service.metrics.occupancyRate}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Award className="w-6 h-6 text-violet-400 mb-2" />
                  <div className="text-sm text-gray-300 mb-1">Social Impact</div>
                  <div className="text-lg font-bold text-white">{service.metrics.socialImpact}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Schedule Call
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {service.heroImage ? (
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority
                  />
                ) : service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority
                  />
                ) : (
                  <div className={`w-full h-full bg-linear-to-br ${service.color} flex items-center justify-center`}>
                    <IconComponent className="w-32 h-32 text-white/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Service Overview
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {service.longDesc}
            </p>

            {/* Key Benefits */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
                Key Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gradient-to-br from-emerald-50 to-white p-4 rounded-xl border border-emerald-100">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market & Delivery Approach */}
      <section className="py-20 bg-linear-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Target Market */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Target Market</h3>
                </div>
                <div className="space-y-3">
                  {service.targetMarket.map((market, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{market}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Approach */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Delivery Approach</h3>
                </div>
                <div className="space-y-3">
                  {service.deliveryApproach.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex-shrink-0 w-8 h-8 bg-linear-to-br from-amber-400 to-amber-500 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Case Studies & Results
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {service.caseStudies.map((study, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                  <Briefcase className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{study.name}</h3>
                  <p className="text-gray-600">{study.result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interested in {service.shortTitle}?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Get in touch to discuss how we can help bring your project to life with our expertise in {service.shortTitle.toLowerCase()}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/services"
                className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-12 py-5 text-xl font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  ArrowLeft,
  ArrowRight,
  Star,
  Heart,
  Shield,
  Handshake,
  TrendingUp,
  Target,
  Users,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Award,
} from "lucide-react";

export default function ValuesPage() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      desc: "We build for the people who will live in our projects—not for abstract market profiles.",
      longDesc: "Every development decision starts with one question: How does this serve the community? We engage directly with residents, understand their lived experiences, and design solutions that reflect their needs. Housing isn't just about buildings—it's about belonging, dignity, and creating spaces where people can thrive.",
      color: "from-amber-400 to-amber-500",
      gradient: "from-amber-50 to-orange-50",
      accent: "border-amber-400/20",
      examples: [
        "Consultation with local communities before design",
        "Culturally appropriate amenities and spaces",
        "Affordable pricing for target demographics",
      ],
    },
    {
      icon: Shield,
      title: "Integrity in Delivery",
      desc: "Strong governance practices and deep institutional experience guide our work.",
      longDesc: "We hold ourselves to the highest standards of transparency, compliance, and ethical conduct. Our team brings experience from major banks, government departments, and regulated industries—we know what excellence looks like and we deliver it consistently.",
      color: "from-cyan-500 to-blue-500",
      gradient: "from-cyan-50 to-blue-50",
      accent: "border-cyan-500/20",
      examples: [
        "100% compliance record across all projects",
        "Regular independent audits and reviews",
        "Transparent reporting to all stakeholders",
      ],
    },
    {
      icon: Handshake,
      title: "Partnership at the Core",
      desc: "We collaborate with governments, local councils, NGOs, financiers, and community leaders.",
      longDesc: "No single organization can solve housing inequity alone. We build coalitions of government agencies, community organizations, financial partners, and local leaders—each bringing unique expertise and resources. Together, we create solutions that are greater than the sum of their parts.",
      color: "from-emerald-500 to-green-500",
      gradient: "from-emerald-50 to-green-50",
      accent: "border-emerald-500/20",
      examples: [
        "Partnerships with state and local government",
        "Collaboration with settlement services",
        "Joint ventures with community housing providers",
      ],
    },
    {
      icon: TrendingUp,
      title: "Agility with Purpose",
      desc: "We blend entrepreneurial innovation with the discipline of major institutions.",
      longDesc: "We move fast without breaking things. Our startup mentality allows us to identify opportunities quickly and adapt to changing needs. But we pair this agility with institutional rigor—thorough due diligence, robust risk management, and professional governance at every step.",
      color: "from-violet-500 to-purple-500",
      gradient: "from-violet-50 to-purple-50",
      accent: "border-violet-500/20",
      examples: [
        "Rapid response to housing opportunities",
        "Innovative financing and delivery models",
        "Lean operations with institutional standards",
      ],
    },
    {
      icon: Target,
      title: "Social Impact Focus",
      desc: "Every development creates belonging and supports economic mobility.",
      longDesc: "Financial returns matter, but they're not our only measure of success. We track social outcomes: How many families found stable housing? How many kids stayed in the same school? How many people gained economic opportunity? These metrics drive our decisions as much as IRR.",
      color: "from-orange-500 to-red-500",
      gradient: "from-orange-50 to-red-50",
      accent: "border-orange-500/20",
      examples: [
        "Employment programs for residents",
        "Support services integrated into developments",
        "Measurable social impact reporting",
      ],
    },
    {
      icon: Heart,
      title: "Culturally Connected",
      desc: "Our lived experiences shape developments that respect Australia's diversity.",
      longDesc: "We are children of migrants. We understand what it's like to navigate a new country, a new culture, a new language. This lived experience informs every project—from design choices to community engagement to support services. We build for the Australia we know, not the Australia of decades past.",
      color: "from-pink-500 to-rose-500",
      gradient: "from-pink-50 to-rose-50",
      accent: "border-pink-500/20",
      examples: [
        "Multilingual communication and documentation",
        "Culturally sensitive design features",
        "Partnership with multicultural organizations",
      ],
    },
  ];

  const impactMetrics = [
    {
      number: "100%",
      label: "Values Alignment",
      desc: "Every project assessed against our core values",
    },
    {
      number: "6",
      label: "Core Principles",
      desc: "That guide every decision we make",
    },
    {
      number: "50+",
      label: "Communities Served",
      desc: "Through values-led development",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Back Link */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to About
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                GUIDING PRINCIPLES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Core
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                Values
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl">
              The principles that define our approach, differentiate our work, and ensure every project creates meaningful impact for the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-cyan-50 -mt-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {impactMetrics.map((metric, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  {metric.number}
                </div>
                <div className="text-base sm:text-lg font-semibold text-amber-600 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Values That Drive Impact
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              These aren't just words on a wall. They're the framework through which we evaluate every opportunity, make every decision, and measure every outcome. When values and action align, real change happens.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
                <span className="text-sm font-semibold text-amber-600">Lived Daily</span>
              </div>
              <div className="px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200">
                <span className="text-sm font-semibold text-cyan-600">Measurable Impact</span>
              </div>
              <div className="px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200">
                <span className="text-sm font-semibold text-emerald-600">Community First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid - Detailed */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            {values.map((value, i) => {
              const Icon = value.icon;
              const isEven = i % 2 === 0;
              
              return (
                <div key={i} className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${value.color}`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="text-4xl sm:text-5xl font-bold text-gray-200">
                        0{i + 1}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-lg text-amber-600 font-semibold mb-4">
                        {value.desc}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {value.longDesc}
                      </p>
                    </div>

                    {/* Examples */}
                    <div className={`bg-gradient-to-br ${value.gradient} rounded-xl p-6 border ${value.accent}`}>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        In Practice:
                      </h4>
                      <ul className="space-y-2">
                        {value.examples.map((example, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                            <div className="mt-1">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${value.color}`}></div>
                            </div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image/Visual */}
                  <div className={`relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl group ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-20`}></div>
                    
                    {/* Use actual images - placeholder for now */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-600">
                      <Image
                        src="/about-images/community.jpeg"
                        alt={value.title}
                        fill
                        className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                        <p className="text-white font-semibold text-sm">
                          {value.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Values Guide Our Work */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4">
                <Award className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">
                  VALUES IN ACTION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                How Values Guide Our Work
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every project, partnership, and decision passes through our values framework.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Project Selection */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                <div className="p-3 bg-amber-500 rounded-xl w-fit mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Project Selection
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We turn down projects that don't align with our values—no matter how profitable. Every opportunity is evaluated against our six principles before we proceed.
                </p>
              </div>

              {/* Partner Evaluation */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                <div className="p-3 bg-cyan-500 rounded-xl w-fit mb-4">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Partner Evaluation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We only work with partners who share our commitment to community impact and ethical conduct. Values alignment is non-negotiable.
                </p>
              </div>

              {/* Team Decisions */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
                <div className="p-3 bg-emerald-500 rounded-xl w-fit mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Team Decisions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our hiring, training, and performance reviews all reference our values. We build teams that embody these principles in their daily work.
                </p>
              </div>

              {/* Impact Measurement */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100">
                <div className="p-3 bg-violet-500 rounded-xl w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Impact Measurement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We track social outcomes alongside financial returns, measuring success through the lens of our values, not just profit margins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Commitment */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/60 z-10"></div>
                  <Image
                    src="/about-images/values-led.jpeg"
                    alt="Values Commitment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-12 flex flex-col justify-center text-white space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 w-fit">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Our Promise
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    Values First, Always
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    When profit and values conflict, we choose values. When speed and quality conflict, we choose quality. When market pressure and community needs conflict, we choose community.
                  </p>
                  <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                    These aren't aspirations. They're commitments we live by every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Partner with a
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                Values-Led Developer
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Work with a team that puts community, integrity, and impact at the center of everything we do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/hHLnMLZ8Arnc1dcB9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 sm:px-12 py-4 text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/about/leadership"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 sm:px-12 py-4 text-lg font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
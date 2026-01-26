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
      color: "from-sky-500 to-blue-500",
      gradient: "from-sky-50 to-blue-50",
      accent: "border-sky-500/20",
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

      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Back Link */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/70 hover:text-amber-300 mb-12 group transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium tracking-wide">Back to About</span>
          </Link>

          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 shadow-2xl">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Guiding Principles
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Our Core
              <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                Values
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              The principles that define our approach, differentiate our work, and ensure{" "}
              <span className="text-white font-medium">every project creates meaningful impact</span>{" "}
              for the communities we serve.
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-sky-400/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics - Elevated */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-sky-50/30 to-white -mt-16 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {impactMetrics.map((metric, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-3xl transition-all duration-500 text-center hover:-translate-y-2"
              >
                <div className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 mb-4">
                  {metric.number}
                </div>
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-3">
                  {metric.label}
                </div>
                <div className="text-base text-gray-600">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-8">
              Values That Drive Impact
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 font-light">
              These aren't just words on a wall. They're the <span className="font-bold text-blue-700">framework</span> through which we evaluate every opportunity, make every decision, and measure every outcome. When values and action align,{" "}
              <span className="font-bold text-amber-600">real change happens</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-amber-50 rounded-full border-2 border-amber-200 hover:border-amber-400 transition-all duration-300">
                <span className="text-base font-bold text-amber-700">Lived Daily</span>
              </div>
              <div className="px-6 py-3 bg-sky-50 rounded-full border-2 border-sky-200 hover:border-sky-400 transition-all duration-300">
                <span className="text-base font-bold text-sky-700">Measurable Impact</span>
              </div>
              <div className="px-6 py-3 bg-emerald-50 rounded-full border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                <span className="text-base font-bold text-emerald-700">Community First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid - Premium Detailed */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white via-sky-50/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto space-y-32 md:space-y-40">
            {values.map((value, i) => {
              const Icon = value.icon;
              const isEven = i % 2 === 0;
              
              return (
                <div key={i} className={`grid lg:grid-cols-12 gap-12 md:gap-16 items-center`}>
                  {/* Content */}
                  <div className={`lg:col-span-6 space-y-8 ${!isEven ? 'lg:col-start-7' : ''}`}>
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-7xl font-black text-gray-100">
                        0{i + 1}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                        {value.title}
                      </h3>
                      
                      <div className="flex items-center gap-3">
                        <div className={`h-1.5 w-20 bg-gradient-to-r ${value.color} rounded-full`}></div>
                        <div className={`h-1.5 w-3 bg-gradient-to-r ${value.color} rounded-full`}></div>
                      </div>

                      <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-700 leading-relaxed">
                        {value.desc}
                      </p>
                      
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                        {value.longDesc}
                      </p>
                    </div>

                    {/* Examples - Premium Card */}
                    <div className={`relative bg-gradient-to-br ${value.gradient} rounded-3xl p-8 border-2 ${value.accent} shadow-lg hover:shadow-xl transition-all duration-500`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full"></div>
                      <h4 className="font-black text-slate-900 mb-6 flex items-center gap-3 text-lg">
                        <CheckCircle className="w-6 h-6 text-emerald-500" />
                        In Practice:
                      </h4>
                      <ul className="space-y-4">
                        {value.examples.map((example, j) => (
                          <li key={j} className="flex items-start gap-4 text-base text-gray-700">
                            <div className="mt-1.5">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${value.color}`}></div>
                            </div>
                            <span className="font-medium">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image/Visual - Premium Treatment */}
                  <div className={`lg:col-span-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative">
                      <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10"></div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-20 z-5`}></div>
                        
                        <Image
                          src="/about-images/community.jpeg"
                          alt={value.title}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 right-8 z-20">
                          <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/40 shadow-2xl">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="text-slate-900 font-black text-lg">{value.title}</p>
                                <p className="text-slate-600 text-sm font-medium">Core Value #{i + 1}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Element */}
                      <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-gradient-to-br ${value.color} rounded-3xl opacity-10 -z-10`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Values Guide Our Work - Premium */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white to-amber-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-emerald-50 rounded-full border-2 border-emerald-200/50 mb-6">
                <Award className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-black text-emerald-700 uppercase tracking-widest">
                  Values in Action
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                How Values Guide Our Work
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-1.5 w-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                <div className="h-1.5 w-3 bg-emerald-600 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
                Every project, partnership, and decision passes through our values framework.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Project Selection */}
              <div className="group relative bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                
                <div className="relative z-10">
                  <div className="p-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    Project Selection
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We turn down projects that don't align with our values—no matter how profitable. Every opportunity is evaluated against our six principles before we proceed.
                  </p>
                </div>
              </div>

              {/* Partner Evaluation */}
              <div className="group relative bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-sky-300 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                
                <div className="relative z-10">
                  <div className="p-4 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    Partner Evaluation
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We only work with partners who share our commitment to community impact and ethical conduct. Values alignment is non-negotiable.
                  </p>
                </div>
              </div>

              {/* Team Decisions */}
              <div className="group relative bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                
                <div className="relative z-10">
                  <div className="p-4 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    Team Decisions
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our hiring, training, and performance reviews all reference our values. We build teams that embody these principles in their daily work.
                  </p>
                </div>
              </div>

              {/* Impact Measurement */}
              <div className="group relative bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-violet-300 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                
                <div className="relative z-10">
                  <div className="p-4 bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    Impact Measurement
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We track social outcomes alongside financial returns, measuring success through the lens of our values, not just profit margins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Commitment - Premium */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-80 lg:h-auto lg:min-h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/40 to-slate-900/80 z-10"></div>
                  <Image
                    src="/about-images/values-led.jpeg"
                    alt="Values Commitment"
                    fill
                    className="object-cover opacity-60"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-10 lg:p-16 flex flex-col justify-center text-white space-y-8">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 w-fit shadow-lg">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      Our Promise
                    </span>
                  </div>
                  
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                    Values First,<br />Always
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-sky-400 rounded-full"></div>
                    <div className="h-1.5 w-3 bg-sky-400 rounded-full"></div>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                    When profit and values conflict, we choose values. When speed and quality conflict, we choose quality. When market pressure and community needs conflict, we choose community.
                  </p>
                  
                  <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                    <p className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400 leading-relaxed">
                      These aren't aspirations. They're commitments we live by every single day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Partner with a
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                Values-Led Developer
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Work with a team that puts community, integrity, and impact at the center of everything we do.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://forms.gle/hHLnMLZ8Arnc1dcB9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-900 px-12 py-6 text-xl font-black rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <Link
                href="/about/leadership"
                className="inline-flex items-center justify-center gap-4 bg-transparent border-2 border-white text-white px-12 py-6 text-xl font-black rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-500"
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
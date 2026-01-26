"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  Building2,
  Users,
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Book,
  ChevronRight,
  Award,
  Heart,
  Shield,
} from "lucide-react";

export default function WhoWeArePage() {
  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Breadcrumb Navigation */}
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
              <Book className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Our Journey
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Built by the Community,
              <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                for the Community
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Property development has long been dominated by the "big guys"—but it's the "little guys" who live in these homes.{" "}
              <span className="text-white font-medium">HavenBridge was born to change that.</span>
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

      {/* Story Sections - Premium Layout */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-b from-white via-sky-50/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto space-y-32 md:space-y-40">

            {/* Chapter 1: Who We Are - Enhanced */}
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
              <div className="lg:col-span-5 space-y-8">
                {/* Chapter Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-full border-2 border-amber-200/50 shadow-sm">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
                    Chapter 01
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-4">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                    Who We Are
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                    <div className="h-1.5 w-3 bg-amber-600 rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                  <p className="font-light">
                    HavenBridge is a <span className="font-semibold text-slate-900">values-led property development firm</span> founded by leaders who represent modern Australia's diversity. As part of the 50% of Australians with roots beyond these borders, we understand what it means to be overlooked or excluded.
                  </p>
                  <p className="font-light">
                    We specialize in <span className="font-semibold text-slate-900">community-focused housing</span> that uplifts migrant communities, enables government priorities, and delivers lasting value. Our projects blend social impact, commercial excellence, and cultural insight.
                  </p>
                  
                  {/* Callout Box */}
                  <div className="relative p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                    <Shield className="w-8 h-8 text-blue-600 mb-3" />
                    <p className="text-blue-900 font-bold text-lg md:text-xl leading-relaxed">
                      We operate with institutional discipline and entrepreneurial agility, bridging the worlds of capital and community.
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100">
                    <div className="text-3xl font-black text-amber-600 mb-1">50%</div>
                    <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Diverse Australia</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                    <div className="text-3xl font-black text-blue-600 mb-1">100%</div>
                    <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Community First</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
                    <Award className="w-8 h-8 text-sky-600 mx-auto mb-1" />
                    <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Values Led</div>
                  </div>
                </div>
              </div>

              {/* Premium Image Treatment */}
              <div className="lg:col-span-7">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10"></div>
                    <Image
                      src="/about-images/values-led.jpeg"
                      alt="Values-Led Development"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                      <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/40 shadow-2xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                            <Heart className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-slate-900 font-black text-lg">Values-Led Development</p>
                            <p className="text-slate-600 text-sm font-medium">Building with purpose</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl opacity-10 -z-10"></div>
                </div>
              </div>
            </div>

            {/* Chapter 2: The Gap We Saw - Enhanced */}
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
              {/* Image First on Desktop */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative">
                  <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent z-10"></div>
                    <Image
                      src="/about-images/Chapter-2.jpg"
                      alt="Community Voice Matters"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                      <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/40 shadow-2xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-slate-900 font-black text-lg">Community Voice Matters</p>
                            <p className="text-slate-600 text-sm font-medium">Building together, not apart</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl opacity-10 -z-10"></div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-100/50 rounded-full border-2 border-blue-200/50 shadow-sm">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-black text-blue-700 uppercase tracking-widest">
                    Chapter 02
                  </span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                    The Gap We Saw
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-20 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></div>
                    <div className="h-1.5 w-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                  <p className="font-light">
                    For decades, <span className="font-semibold text-slate-900">large corporations</span> have shaped Australia's housing landscape. Yet it's <span className="font-semibold text-slate-900">everyday families</span>—migrants, workers, young people—who live in these homes.
                  </p>

                  <div className="relative p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                    <p className="text-blue-900 font-bold text-lg md:text-xl leading-relaxed">
                      Too often, these residents have no voice in how their homes are designed or delivered.
                    </p>
                  </div>

                  <p className="font-light">
                    HavenBridge exists because we saw housing being built{" "}
                    <span className="italic font-bold text-slate-900">for</span> communities, but never{" "}
                    <span className="italic font-bold text-slate-900">with</span> them.{" "}
                    <span className="font-semibold text-blue-700">We stepped into that gap.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 3: Our Background - Enhanced */}
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-full border-2 border-amber-200/50 shadow-sm">
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                  <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
                    Chapter 03
                  </span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                    From Both Worlds
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                    <div className="h-1.5 w-3 bg-amber-600 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                  <p className="font-light">
                    We're <span className="font-semibold text-slate-900">children of migrants</span>—the first in our families to navigate corporate Australia. We've been shaped by world-class institutions, mentored by industry leaders, and trained in governance and finance at the highest levels.
                  </p>
                  <p className="font-light">
                    But we were raised by <span className="font-semibold text-slate-900">communities who know</span> housing insecurity, language barriers, and the hope that comes with finally finding home.
                  </p>
                  
                  <div className="relative p-6 bg-gradient-to-br from-amber-50 to-amber-100/30 rounded-2xl border-l-4 border-amber-600 shadow-sm">
                    <GraduationCap className="w-8 h-8 text-amber-600 mb-3" />
                    <p className="text-amber-900 font-bold text-lg md:text-xl leading-relaxed">
                      This dual perspective lets us bridge institutions and the people they serve, understanding both strategy and belonging.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10"></div>
                    <Image
                      src="/about-images/community.jpeg"
                      alt="Institutional + Community"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                      <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/40 shadow-2xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-slate-900 font-black text-lg">Institutional + Community</p>
                            <p className="text-slate-600 text-sm font-medium">Bridging both worlds</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl opacity-10 -z-10"></div>
                </div>
              </div>
            </div>

            {/* Final Statement - Premium Treatment */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-96 lg:h-auto lg:min-h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/40 to-slate-900/80 z-10"></div>
                    <Image
                      src="/about-images/commitment.jpg"
                      alt="Our Commitment"
                      fill
                      className="object-cover opacity-60"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div className="p-10 lg:p-16 flex flex-col justify-center text-white space-y-8">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 w-fit shadow-lg">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                      <span className="text-xs font-black uppercase tracking-widest">
                        Our Commitment
                      </span>
                    </div>
                    
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                      Building Futures,<br />Not Just Buildings
                    </h3>
                    
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-sky-400 rounded-full"></div>
                      <div className="h-1.5 w-3 bg-sky-400 rounded-full"></div>
                    </div>
                    
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                      We bring together policy, development, and community to design housing that restores dignity and strengthens social cohesion.
                    </p>
                    
                    <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                      <p className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400 leading-relaxed">
                        The homes we build must reflect the people who will live in them.
                      </p>
                    </div>
                    
                    <p className="text-base text-gray-400 italic font-light">
                      This is HavenBridge. Building differently—because we know who we build for.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Navigation Cards */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-sky-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Continue Exploring HavenBridge
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="h-1 w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <Link
                href="/about/mission-vision"
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <Sparkles className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Mission & Vision</h3>
                  </div>
                  
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    Discover our purpose and the future we're building together.
                  </p>
                  
                  <div className="flex items-center gap-3 text-blue-600 font-bold text-base group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>

              <Link
                href="/about/leadership"
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                      <Users className="w-7 h-7 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Leadership & Board</h3>
                  </div>
                  
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    Meet the team driving our vision forward.
                  </p>
                  
                  <div className="flex items-center gap-3 text-amber-600 font-bold text-base group-hover:gap-4 transition-all duration-300">
                    Meet the Team
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Let's create housing that transforms lives and strengthens communities.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-900 px-14 py-6 text-xl md:text-2xl font-black rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Start a Conversation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
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
} from "lucide-react";

export default function WhoWeArePage() {
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
              <Book className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                OUR JOURNEY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Built by the Community,
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                for the Community
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl">
              Property development has long been dominated by the "big guys"—but it's the "little guys" who live in these homes. HavenBridge was born to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-20 md:space-y-24">

            {/* Chapter 1: Who We Are */}
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                    Chapter 01
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                  Who We Are
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"></div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    HavenBridge is a values-led property development firm founded by leaders who represent modern Australia's diversity. As part of the 50% of Australians with roots beyond these borders, we understand what it means to be overlooked or excluded.
                  </p>
                  <p>
                    We specialize in community-focused housing that uplifts migrant communities, enables government priorities, and delivers lasting value. Our projects blend social impact, commercial excellence, and cultural insight.
                  </p>
                  <p className="text-amber-600 font-semibold text-base md:text-lg">
                    We operate with institutional discipline and entrepreneurial agility, bridging the worlds of capital and community.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                <Image
                  src="/about-images/values-led.jpeg"
                  alt="Values-Led Development"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-white font-semibold text-sm">
                      Values-Led Development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 2: The Gap We Saw */}
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                <Image
                  src="/about-images/Chapter-2.jpg"
                  alt="Community Voice Matters"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-white font-semibold text-sm">
                      Community Voice Matters
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-50 rounded-full border border-cyan-200">
                  <Users className="w-4 h-4 text-cyan-600" />
                  <span className="text-xs font-bold text-cyan-600 uppercase tracking-wide">
                    Chapter 02
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                  The Gap We Saw
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    For decades, large corporations have shaped Australia's housing landscape. Yet it's everyday families—migrants, workers, young people—who live in these homes.
                  </p>
                  <p className="text-cyan-700 font-semibold text-base md:text-lg">
                    Too often, these residents have no voice in how their homes are designed or delivered.
                  </p>
                  <p>
                    HavenBridge exists because we saw housing being built{" "}
                    <span className="italic font-semibold">for</span> communities, but never{" "}
                    <span className="italic font-semibold">with</span> them. We stepped into that gap.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 3: Our Background */}
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                    Chapter 03
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                  From Both Worlds
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    We're children of migrants—the first in our families to navigate corporate Australia. We've been shaped by world-class institutions, mentored by industry leaders, and trained in governance and finance at the highest levels.
                  </p>
                  <p>
                    But we were raised by communities who know housing insecurity, language barriers, and the hope that comes with finally finding home.
                  </p>
                  <p className="text-emerald-600 font-semibold text-base md:text-lg">
                    This dual perspective lets us bridge institutions and the people they serve, understanding both strategy and belonging.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                <Image
                  src="/about-images/community.jpeg"
                  alt="Institutional + Community"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-white font-semibold text-sm">
                      Institutional + Community
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Statement */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto lg:min-h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/60 z-10"></div>
                  <Image
                    src="/about-images/commitment.jpg"
                    alt="Our Commitment"
                    fill
                    className="object-cover opacity-50"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center text-white space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 w-fit">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Our Commitment
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold">
                    Building Futures, Not Just Buildings
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-cyan-500 rounded-full"></div>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    We bring together policy, development, and community to design housing that restores dignity and strengthens social cohesion.
                  </p>
                  <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-cyan-500">
                    The homes we build must reflect the people who will live in them.
                  </p>
                  <p className="text-sm text-gray-300 italic">
                    This is HavenBridge. Building differently—because we know who we build for.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Next Steps - Navigation to Other Pages */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
              Continue Exploring HavenBridge
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link
                href="/about/mission-vision"
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Sparkles className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Mission & Vision</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Discover our purpose and the future we're building.
                </p>
                <div className="flex items-center gap-2 text-cyan-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/about/leadership"
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Leadership & Board</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Meet the team driving our vision forward.
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Meet the Team
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
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
              Ready to Partner With Us?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Let's create housing that transforms lives and strengthens communities.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
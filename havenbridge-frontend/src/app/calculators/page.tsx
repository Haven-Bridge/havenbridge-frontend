"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Calculator,
  TrendingUp,
  Home,
  Scale,
  DollarSign,
  Building2,
  Percent,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Award,
} from "lucide-react";
import CalculatorModal from "./CalculatorModal";
import CalculatorCard from "./components/CalculatorCard";
import FeasibilityCalculator from "./calculators/Feasibility";
import RoomingHouseCalculator from "./calculators/RoomingHouse";
import StampDutyCalculator from "./calculators/StampDuty";
import ConstructionCostCalculator from "./calculators/ConstructionCost";
import ModularComparisonCalculator from "./calculators/ModularComparison";
import VendorFinanceCalculator from "./calculators/VendorFinance";

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const calculators = [
    {
      id: "feasibility",
      title: "Development Feasibility Calculator",
      description:
        "Analyze project viability and ROI for residential developments",
      icon: TrendingUp,
      color: "from-amber-500 to-orange-500",
      component: FeasibilityCalculator,
    },
    {
      id: "rooming-house",
      title: "Rooming House Yield Calculator",
      description:
        "Calculate rental yields and cash flow for rooming house investments",
      icon: Home,
      color: "from-cyan-500 to-blue-500",
      component: RoomingHouseCalculator,
    },
    {
      id: "stamp-duty",
      title: "Stamp Duty Estimator",
      description:
        "Estimate government taxes and charges for property purchases",
      icon: Scale,
      color: "from-emerald-500 to-green-500",
      component: StampDutyCalculator,
    },
    {
      id: "construction-cost",
      title: "Construction Cost Estimator",
      description:
        "Calculate building costs per square meter and total project cost",
      icon: Building2,
      color: "from-violet-500 to-purple-500",
      component: ConstructionCostCalculator,
    },
    {
      id: "modular-comparison",
      title: "Modular vs Traditional Comparison",
      description:
        "Compare costs, timelines, and ROI between construction methods",
      icon: Percent,
      color: "from-pink-500 to-rose-500",
      component: ModularComparisonCalculator,
    },
    {
      id: "vendor-finance",
      title: "Vendor Finance Calculator",
      description:
        "Calculate repayment schedules for vendor finance arrangements",
      icon: DollarSign,
      color: "from-slate-600 to-gray-600",
      component: VendorFinanceCalculator,
    },
  ];

  const handleOpenCalculator = (calculatorId: string) => {
    setActiveCalculator(calculatorId);
  };

  const handleCloseCalculator = () => {
    setActiveCalculator(null);
  };

  const activeCalculatorData = calculators.find(
    (calc) => calc.id === activeCalculator
  );

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Calculator className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  DEVELOPMENT TOOLS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Professional <span className="text-amber-400">Development</span>
                <span className="block">Calculators</span>
              </h1>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() =>
                    document
                      .querySelector("#calculators-grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative inline-flex items-center justify-center bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Explore Calculators</span>
                  <ArrowRight className="relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute -inset-1 bg-linear-to-r from-amber-400 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </button>

                <a
                  href="https://forms.gle/hxvDpBwLLFqJV3qEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Book a Consultation
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image with Floating Stats */}
            <div className="relative h-full">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Main Image */}
                <Image
                  src="/hero-images/calc.png"
                  alt="HavenBridge Development Calculators - Professional property development tools"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                
                {/* Floating Stats - Exactly like Projects page */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-amber-400">6</div>
                    <div className="text-xs text-gray-300">Professional Tools</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-emerald-400">PDF/CSV</div>
                    <div className="text-xs text-gray-300">Export Formats</div>
                  </div>
                </div>

                {/* Corner Icon */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Same as Projects page */}
      <section className="py-16 bg-linear-to-br from-slate-50 to-cyan-50 -mt-8 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "6", label: "Professional Tools", icon: Calculator, color: "text-amber-500" },
              { number: "PDF/CSV", label: "Export Formats", icon: Building2, color: "text-cyan-500" },
              { number: "100%", label: "Free Access", icon: Award, color: "text-emerald-500" },
              { number: "24/7", label: "Accessible", icon: Sparkles, color: "text-violet-500" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${stat.color.replace('text', 'bg')}/10`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-gray-100 overflow-hidden rounded-full">
                      <div className={`h-full ${stat.color.replace('text', 'bg')} rounded-full group-hover:animate-progress`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section id="calculators-grid" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Select a Calculator
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose from our suite of professional development tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators.map((calculator) => (
                <CalculatorCard
                  key={calculator.id}
                  title={calculator.title}
                  description={calculator.description}
                  icon={calculator.icon}
                  color={calculator.color}
                  onClick={() => handleOpenCalculator(calculator.id)}
                />
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    How to Use
                  </h3>
                  <p className="text-slate-600">
                    Get the most accurate results
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    step: "01",
                    title: "Select Calculator",
                    desc: "Choose the tool that matches your needs",
                  },
                  {
                    step: "02",
                    title: "Input Data",
                    desc: "Enter project-specific information",
                  },
                  {
                    step: "03",
                    title: "Export Results",
                    desc: "Download PDF or CSV reports",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Modal */}
      {activeCalculatorData && (
        <CalculatorModal
          isOpen={!!activeCalculator}
          onClose={handleCloseCalculator}
          title={activeCalculatorData.title}
        >
          {React.createElement(activeCalculatorData.component)}
        </CalculatorModal>
      )}

      <Footer />
    </div>
  );
}

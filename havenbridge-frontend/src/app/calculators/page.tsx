"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calculator, TrendingUp, Home, Scale, DollarSign, Building2, Percent, Sparkles } from 'lucide-react';
import CalculatorModal from './CalculatorModal';
import CalculatorCard from './components/CalculatorCard';
import FeasibilityCalculator from './calculators/Feasibility';
import RoomingHouseCalculator from './calculators/RoomingHouse';
import StampDutyCalculator from './calculators/StampDuty';
import ConstructionCostCalculator from './calculators/ConstructionCost';
import ModularComparisonCalculator from './calculators/ModularComparison';
import VendorFinanceCalculator from './calculators/VendorFinance';

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const calculators = [
    {
      id: 'feasibility',
      title: 'Development Feasibility Calculator',
      description: 'Analyze project viability and ROI for residential developments',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      component: FeasibilityCalculator
    },
    {
      id: 'rooming-house',
      title: 'Rooming House Yield Calculator',
      description: 'Calculate rental yields and cash flow for rooming house investments',
      icon: Home,
      color: 'from-cyan-500 to-blue-500',
      component: RoomingHouseCalculator
    },
    {
      id: 'stamp-duty',
      title: 'Stamp Duty Estimator',
      description: 'Estimate government taxes and charges for property purchases',
      icon: Scale,
      color: 'from-emerald-500 to-green-500',
      component: StampDutyCalculator
    },
    {
      id: 'construction-cost',
      title: 'Construction Cost Estimator',
      description: 'Calculate building costs per square meter and total project cost',
      icon: Building2,
      color: 'from-violet-500 to-purple-500',
      component: ConstructionCostCalculator
    },
    {
      id: 'modular-comparison',
      title: 'Modular vs Traditional Comparison',
      description: 'Compare costs, timelines, and ROI between construction methods',
      icon: Percent,
      color: 'from-pink-500 to-rose-500',
      component: ModularComparisonCalculator
    },
    {
      id: 'vendor-finance',
      title: 'Vendor Finance Calculator',
      description: 'Calculate repayment schedules for vendor finance arrangements',
      icon: DollarSign,
      color: 'from-slate-600 to-gray-600',
      component: VendorFinanceCalculator
    }
  ];

  const handleOpenCalculator = (calculatorId: string) => {
    setActiveCalculator(calculatorId);
  };

  const handleCloseCalculator = () => {
    setActiveCalculator(null);
  };

  const activeCalculatorData = calculators.find(calc => calc.id === activeCalculator);

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                DEVELOPMENT TOOLS
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Development <span className="text-amber-400">Calculators</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional tools to analyze, plan, and optimize your construction projects
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
              {[
                { value: '6', label: 'Calculators' },
                { value: 'Real-time', label: 'Results' },
                { value: 'Export', label: 'Reports' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-20 bg-slate-50">
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
                  <h3 className="text-xl font-bold text-slate-900">How to Use</h3>
                  <p className="text-slate-600">Get the most accurate results</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: '01', title: 'Select Calculator', desc: 'Choose the tool that matches your needs' },
                  { step: '02', title: 'Input Data', desc: 'Enter project-specific information' },
                  { step: '03', title: 'Export Results', desc: 'Download PDF or CSV reports' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
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

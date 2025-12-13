"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calculator, TrendingUp, Home, Scale, DollarSign, Building2, Percent, ChevronRight, Sparkles } from 'lucide-react';
import CalculatorModal from './CalculatorModal';
import CalculatorCard from './components/CalculatorCard';
import FeasibilityCalculator from './calculators/Feasibility';
import RoomingHouseCalculator from './calculators/RoomingHouse';
import StampDutyCalculator from './calculators/StampDuty';
import ConstructionCostCalculator from './calculators/ConstructionCost';
import ModularComparisonCalculator from './calculators/ModularComparison';
import VendorFinanceCalculator from './calculators/VendorFinance';
import { 
  generatePDF, 
  generateCSVData, 
  generateCSVHeaders, 
  saveCalculation,
  getSavedCalculations 
} from './utils/exportUtils';

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [savedCalculations, setSavedCalculations] = useState<any[]>([]);

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

  // Load saved calculations
  useEffect(() => {
    setSavedCalculations(getSavedCalculations());
    
    const handleStorageUpdate = () => {
      setSavedCalculations(getSavedCalculations());
    };
    
    window.addEventListener('calculationsUpdated', handleStorageUpdate);
    return () => window.removeEventListener('calculationsUpdated', handleStorageUpdate);
  }, []);

  // Handle export events
  useEffect(() => {
    const handleExportPDF = (e: CustomEvent) => {
      const { calculatorId, title, inputs, results } = e.detail;
      generatePDF(title, inputs, results, calculatorId);
    };

    const handleExportCSV = (e: CustomEvent) => {
      const { calculatorId, title, inputs, results } = e.detail;
      const csvData = generateCSVData(inputs, results);
      const csvHeaders = generateCSVHeaders();
      const csvFilename = `HavenBridge_${calculatorId}_${new Date().toISOString().split('T')[0]}.csv`;
      
      // Create CSV download
      const csvContent = [
        csvHeaders.map(h => h.label).join(','),
        ...csvData.map(row => Object.values(row).join(','))
      ].join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = csvFilename;
      link.click();
      window.URL.revokeObjectURL(url);
    };

    const handleSaveCalculation = (e: CustomEvent) => {
      const { calculatorId, title, inputs, results } = e.detail;
      saveCalculation(calculatorId, title, inputs, results);
      alert('Calculation saved successfully!');
    };

    const handleViewSavedCalculations = () => {
      setShowSavedModal(true);
    };

    // @ts-ignore
    window.addEventListener('exportPDF', handleExportPDF);
    // @ts-ignore
    window.addEventListener('exportCSV', handleExportCSV);
    // @ts-ignore
    window.addEventListener('saveCalculation', handleSaveCalculation);
    // @ts-ignore
    window.addEventListener('viewSavedCalculations', handleViewSavedCalculations);

    return () => {
      // @ts-ignore
      window.removeEventListener('exportPDF', handleExportPDF);
      // @ts-ignore
      window.removeEventListener('exportCSV', handleExportCSV);
      // @ts-ignore
      window.removeEventListener('saveCalculation', handleSaveCalculation);
      // @ts-ignore
      window.removeEventListener('viewSavedCalculations', handleViewSavedCalculations);
    };
  }, []);

  const handleOpenCalculator = (calculatorId: string) => {
    setActiveCalculator(calculatorId);
  };

  const handleCloseCalculator = () => {
    setActiveCalculator(null);
  };

  const activeCalculatorData = calculators.find(calc => calc.id === activeCalculator);

  const handleDeleteCalculation = (id: number) => {
    if (confirm('Delete this saved calculation?')) {
      const updatedCalculations = savedCalculations.filter(calc => calc.id !== id);
      setSavedCalculations(updatedCalculations);
      localStorage.setItem('havenbridge_calculations', JSON.stringify(updatedCalculations));
      window.dispatchEvent(new Event('calculationsUpdated'));
    }
  };

  const handleClearAllCalculations = () => {
    if (confirm('Delete ALL saved calculations?')) {
      localStorage.removeItem('havenbridge_calculations');
      setSavedCalculations([]);
      window.dispatchEvent(new Event('calculationsUpdated'));
    }
  };

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Saved Calculations Modal */}
      {showSavedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Saved Calculations</h3>
              <button
                onClick={() => setShowSavedModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {savedCalculations.length === 0 ? (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600">No saved calculations yet</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Use the "Save Calculation" button to store your work
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {savedCalculations.map((calc) => (
                    <div key={calc.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-slate-900">{calc.title}</h4>
                          <p className="text-sm text-slate-600 mt-1">
                            Saved on {new Date(calc.timestamp).toLocaleDateString('en-AU', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteCalculation(calc.id)}
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                          title="Delete"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <button
                      onClick={handleClearAllCalculations}
                      className="w-full px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Clear All Saved Calculations
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <p className="text-sm text-slate-600 text-center">
                Calculations are saved locally in your browser
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
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
                { value: 'Save/Export', label: 'Reports' }
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
                  { step: '03', title: 'Save & Export', desc: 'Save locally or export professional reports' }
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
          calculatorId={activeCalculatorData.id}
        >
          {React.createElement(activeCalculatorData.component)}
        </CalculatorModal>
      )}

      <Footer />
    </div>
  );
}

// Clock icon component for Saved Calculations Modal
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

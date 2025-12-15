"use client";

import React, { ReactNode, useState, useEffect } from 'react';
import { X, Download, Printer, FileText, Save, Clock, Calculator as CalcIcon } from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  calculatorId: string;
  children: ReactNode;
}

// Interface for calculator results
export interface CalculatorResults {
  title: string;
  metrics: Array<{
    label: string;
    value: string | number;
    unit?: string;
    color?: string;
  }>;
  summary?: string;
  breakdown?: Array<{
    label: string;
    value: string | number;
  }>;
  chartData?: Array<{
    label: string;
    value: number;
  }>;
}

export default function CalculatorModal({ 
  isOpen, 
  onClose, 
  title, 
  calculatorId, 
  children 
}: CalculatorModalProps) {
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    // Listen for calculation results from child components
    const handleResultsUpdate = (e: CustomEvent) => {
      if (e.detail.calculatorId === calculatorId) {
        setResults(e.detail.results);
        setIsCalculating(false);
      }
    };

    const handleCalculationStart = () => {
      setIsCalculating(true);
    };

    // @ts-ignore
    window.addEventListener('calculatorResultsUpdated', handleResultsUpdate);
    // @ts-ignore
    window.addEventListener('calculationStarted', handleCalculationStart);

    return () => {
      // @ts-ignore
      window.removeEventListener('calculatorResultsUpdated', handleResultsUpdate);
      // @ts-ignore
      window.removeEventListener('calculationStarted', handleCalculationStart);
    };
  }, [calculatorId]);

  if (!isOpen) return null;

  const handleExportPDF = () => {
    // Will be implemented with export functionality
    alert('PDF export will be available soon');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveCalculation = () => {
    const event = new CustomEvent('saveCalculation', {
      detail: { calculatorId, title, results }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                <p className="text-sm text-slate-600 mt-1">
                  Enter values on the left, see results on the right
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSaveCalculation}
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                    title="Save calculation"
                  >
                    <Save className="w-4 h-4" />
                    <span className="hidden sm:inline">Save</span>
                  </button>
                  <button
                    onClick={handleExportPDF}
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                    title="Export as PDF"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="hidden sm:inline">PDF</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors"
                    title="Print"
                  >
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">Print</span>
                  </button>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex flex-col lg:flex-row h-[calc(90vh-80px)]">
            {/* Inputs Panel */}
            <div className="lg:w-1/2 border-r border-slate-200 overflow-y-auto p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Input Parameters</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
              {children}
            </div>
            
            {/* Results Panel */}
            <div className="lg:w-1/2 bg-gradient-to-br from-slate-50 to-blue-50 overflow-y-auto p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Results & Analysis</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
              </div>
              
              {/* Results Display */}
              <div className="space-y-6">
                {isCalculating ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500"></div>
                    </div>
                    <p className="text-lg font-medium text-slate-900">Calculating...</p>
                    <p className="text-sm text-slate-600 mt-2">Processing your inputs</p>
                  </div>
                ) : results ? (
                  <>
                    {/* Summary Card */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-slate-900">Calculation Summary</h4>
                        <div className="flex items-center gap-2">
                          <CalcIcon className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-600">Results</span>
                        </div>
                      </div>
                      
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {results.metrics.slice(0, 4).map((metric, index) => (
                          <div 
                            key={index} 
                            className={`p-4 rounded-lg ${
                              metric.color === 'positive' ? 'bg-emerald-50' :
                              metric.color === 'warning' ? 'bg-amber-50' :
                              metric.color === 'negative' ? 'bg-red-50' : 'bg-slate-50'
                            }`}
                          >
                            <div className="text-sm text-slate-600 mb-1">{metric.label}</div>
                            <div className="text-2xl font-bold text-slate-900">
                              {metric.value} {metric.unit || ''}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {results.summary && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="text-slate-700">{results.summary}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Breakdown Table */}
                    {results.breakdown && results.breakdown.length > 0 && (
                      <div className="bg-white rounded-xl p-6 border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-4">Detailed Breakdown</h4>
                        <div className="space-y-3">
                          {results.breakdown.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                              <span className="text-slate-700">{item.label}</span>
                              <span className="font-bold text-slate-900">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Recommendations */}
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                      <h4 className="font-bold text-slate-900 mb-3">Recommendations</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                          <span className="text-slate-700">Review all calculated values for accuracy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                          <span className="text-slate-700">Consider market conditions and contingencies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                          <span className="text-slate-700">Consult with financial advisors for major projects</span>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12 text-slate-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                      <CalcIcon className="w-8 h-8 text-slate-300" />
                    </div>
                    <p className="text-lg font-medium">Enter values to see results</p>
                    <p className="text-sm mt-2">Results will appear here as you input data</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleSaveCalculation}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save Results
                  </button>
                  <button
                    onClick={() => {
                      const event = new CustomEvent('viewSavedCalculations');
                      window.dispatchEvent(event);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors"
                  >
                    <Clock className="w-4 h-4" />
                    View Saved
                  </button>
                </div>
                
                <div className="mt-4 text-center">
                  <button
                    onClick={() => {
                      // Reset calculator
                      const event = new CustomEvent('resetCalculator', { detail: { calculatorId } });
                      window.dispatchEvent(event);
                    }}
                    className="text-sm text-slate-600 hover:text-slate-900 hover:underline"
                  >
                    Reset Calculator
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

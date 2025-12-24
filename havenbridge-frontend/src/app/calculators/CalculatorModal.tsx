"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Download, FileText } from 'lucide-react';
import { CSVLink } from 'react-csv';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

interface CalculatorResults {
  calculatorId?: string;
  title?: string;
  metrics?: Array<{ label: string; value: string; unit?: string; color?: string }>;
  summary?: string;
  breakdown?: Array<{ label: string; value: string }>;
  inputs?: Record<string, any>;
}

export default function CalculatorModal({ isOpen, onClose, title, children }: CalculatorModalProps) {
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [exportData, setExportData] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Listen for calculation events
  useEffect(() => {
    const handleResultsUpdated = (event: Event) => {
      const customEvent = event as CustomEvent;
      setResults(customEvent.detail.results);
      setIsLoading(false);
      
      // Store export data
      if (customEvent.detail.results) {
        setExportData({
          calculatorId: customEvent.detail.calculatorId || 'calculator',
          results: customEvent.detail.results,
          inputs: customEvent.detail.inputs || {},
          timestamp: new Date().toISOString()
        });
      }
    };

    const handleCalculationStarted = () => {
      setIsLoading(true);
    };

    const handleResetCalculator = () => {
      setResults(null);
      setExportData(null);
      setIsLoading(false);
    };

    window.addEventListener('calculatorResultsUpdated', handleResultsUpdated as EventListener);
    window.addEventListener('calculationStarted', handleCalculationStarted);
    window.addEventListener('resetCalculator', handleResetCalculator);

    return () => {
      window.removeEventListener('calculatorResultsUpdated', handleResultsUpdated as EventListener);
      window.removeEventListener('calculationStarted', handleCalculationStarted);
      window.removeEventListener('resetCalculator', handleResetCalculator);
    };
  }, []);

  const generatePDF = () => {
    if (!exportData) return;
    
    // Import jsPDF dynamically
    import('jspdf').then((jsPDFModule) => {
      import('jspdf-autotable').then((autoTableModule) => {
        const { jsPDF } = jsPDFModule;
        const autoTable = autoTableModule.default;
        
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.width;
        
        // Header
        doc.setFontSize(20);
        doc.setTextColor(0, 102, 204);
        doc.text(exportData.results.title || title, pageWidth / 2, 20, { align: 'center' });
        
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, pageWidth / 2, 30, { align: 'center' });
        
        let yPos = 45;
        
        // Summary
        if (exportData.results.summary) {
          doc.setFontSize(14);
          doc.setTextColor(0, 0, 0);
          doc.text('Summary', 14, yPos);
          yPos += 10;
          
          doc.setFontSize(11);
          doc.setTextColor(60, 60, 60);
          const splitSummary = doc.splitTextToSize(exportData.results.summary, pageWidth - 28);
          doc.text(splitSummary, 14, yPos);
          yPos += splitSummary.length * 7 + 10;
        }
        
        // Metrics
        if (exportData.results.metrics && exportData.results.metrics.length > 0) {
          doc.setFontSize(14);
          doc.setTextColor(0, 0, 0);
          doc.text('Key Metrics', 14, yPos);
          yPos += 10;
          
          const metricsData = exportData.results.metrics.map((metric: any) => [
            metric.label,
            metric.value + (metric.unit || '')
          ]);
          
          autoTable(doc, {
            startY: yPos,
            head: [['Metric', 'Value']],
            body: metricsData,
            theme: 'grid',
            headStyles: { fillColor: [0, 102, 204], textColor: 255 },
            styles: { fontSize: 11, cellPadding: 5 },
            margin: { left: 14, right: 14 }
          });
          
          yPos = (doc as any).lastAutoTable.finalY + 15;
        }
        
        // Breakdown
        if (exportData.results.breakdown && exportData.results.breakdown.length > 0) {
          doc.setFontSize(14);
          doc.setTextColor(0, 0, 0);
          doc.text('Calculation Details', 14, yPos);
          yPos += 10;
          
          const breakdownData = exportData.results.breakdown.map((item: any) => [
            item.label,
            item.value
          ]);
          
          autoTable(doc, {
            startY: yPos,
            head: [['Item', 'Value']],
            body: breakdownData,
            theme: 'grid',
            headStyles: { fillColor: [60, 60, 60], textColor: 255 },
            styles: { fontSize: 11, cellPadding: 5 },
            margin: { left: 14, right: 14 }
          });
        }
        
        // Footer
        const pageHeight = doc.internal.pageSize.height;
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('Generated by Development Pro Calculators', pageWidth / 2, pageHeight - 10, { align: 'center' });
        
        // Save PDF
        const fileName = `${(exportData.results.title || title).replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
      });
    }).catch(error => {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    });
  };

  const generateCSVData = () => {
    if (!exportData) return [];
    
    const csvData = [];
    
    // Header
    csvData.push([exportData.results.title || title]);
    csvData.push(['Generated on:', new Date().toLocaleString()]);
    csvData.push([]);
    
    // Summary
    if (exportData.results.summary) {
      csvData.push(['Summary']);
      csvData.push([exportData.results.summary]);
      csvData.push([]);
    }
    
    // Metrics
    if (exportData.results.metrics && exportData.results.metrics.length > 0) {
      csvData.push(['Key Metrics']);
      exportData.results.metrics.forEach((metric: any) => {
        csvData.push([metric.label, metric.value + (metric.unit || '')]);
      });
      csvData.push([]);
    }
    
    // Breakdown
    if (exportData.results.breakdown && exportData.results.breakdown.length > 0) {
      csvData.push(['Calculation Details']);
      exportData.results.breakdown.forEach((item: any) => {
        csvData.push([item.label, item.value]);
      });
    }
    
    return csvData;
  };

  const handleReset = () => {
    window.dispatchEvent(new CustomEvent('resetCalculator'));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-linear-to-r from-slate-900 to-blue-900 text-white">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-slate-300 text-sm">Interactive calculator with real-time results</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close calculator"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Calculator Inputs */}
          <div className="w-1/2 border-r border-slate-200 overflow-y-auto p-6">
            {children}
          </div>

          {/* Right Panel - Results */}
          <div className="w-1/2 bg-linear-to-b from-slate-50 to-white overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Results & Analysis</h3>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Reset Calculator
              </button>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-600">Calculating results...</p>
                </div>
              </div>
            ) : results ? (
              <div className="space-y-6">
                {/* Summary */}
                {results.summary && (
                  <div className="bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-5">
                    <h4 className="font-bold text-cyan-800 mb-2">Summary</h4>
                    <p className="text-cyan-700">{results.summary}</p>
                  </div>
                )}

                {/* Key Metrics */}
                {results.metrics && results.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {results.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border ${
                          metric.color === 'positive'
                            ? 'bg-emerald-50 border-emerald-200'
                            : metric.color === 'negative'
                            ? 'bg-red-50 border-red-200'
                            : metric.color === 'warning'
                            ? 'bg-amber-50 border-amber-200'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="text-sm text-slate-600 mb-1">{metric.label}</div>
                        <div
                          className={`text-2xl font-bold ${
                            metric.color === 'positive'
                              ? 'text-emerald-700'
                              : metric.color === 'negative'
                              ? 'text-red-700'
                              : metric.color === 'warning'
                              ? 'text-amber-700'
                              : 'text-slate-900'
                          }`}
                        >
                          {metric.value}
                          {metric.unit && <span className="text-sm font-normal ml-1">{metric.unit}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Breakdown */}
                {results.breakdown && results.breakdown.length > 0 && (
                  <div className="bg-white rounded-xl border border-slate-200 p-5">
                    <h4 className="font-bold text-slate-900 mb-4">Calculation Breakdown</h4>
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

                {/* Export Buttons */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Export Results</h4>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={generatePDF}
                      disabled={!exportData}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
                    >
                      <Download className="w-4 h-4" />
                      Export PDF
                    </button>
                    
                    {exportData && (
                      <CSVLink
                        data={generateCSVData()}
                        filename={`${(results.title || title).replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors min-w-[140px] no-underline"
                      >
                        <FileText className="w-4 h-4" />
                        Export CSV
                      </CSVLink>
                    )}
                  </div>
                  {!exportData && (
                    <p className="text-sm text-slate-500 mt-2 text-center">
                      Enter values to enable export
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 bg-linear-to-r from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg"></div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">No Results Yet</h4>
                <p className="text-slate-600 max-w-md">
                  Enter values in the calculator to see real-time results and analysis here.
                  The results will update automatically as you adjust the inputs.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { ReactNode, useState, useEffect } from 'react';
import { X, Download, Printer, FileText, Save, Clock } from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  calculatorId: string;
  children: ReactNode;
}

export default function CalculatorModal({ 
  isOpen, 
  onClose, 
  title, 
  calculatorId, 
  children 
}: CalculatorModalProps) {
  const [inputs, setInputs] = useState<Record<string, any>>({});
  const [results, setResults] = useState<Record<string, any>>({});

  if (!isOpen) return null;

  // Listen for updates from calculator components
  useEffect(() => {
    const handleInputUpdate = (e: CustomEvent) => {
      if (e.detail.calculatorId === calculatorId) {
        setInputs(e.detail.inputs || {});
        setResults(e.detail.results || {});
      }
    };

    // @ts-ignore
    window.addEventListener('calculatorInputsUpdated', handleInputUpdate);
    
    return () => {
      // @ts-ignore
      window.removeEventListener('calculatorInputsUpdated', handleInputUpdate);
    };
  }, [calculatorId]);

  const handleExportPDF = () => {
    // Dispatch event for export
    const event = new CustomEvent('exportPDF', {
      detail: { calculatorId, title, inputs, results }
    });
    window.dispatchEvent(event);
  };

  const handleExportCSV = () => {
    const event = new CustomEvent('exportCSV', {
      detail: { calculatorId, title, inputs, results }
    });
    window.dispatchEvent(event);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${title} - HavenBridge</title>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                max-width: 800px; 
                margin: 0 auto; 
                padding: 20px;
                color: #333;
              }
              .header { 
                background: #0f172a; 
                color: white; 
                padding: 20px; 
                text-align: center;
                margin-bottom: 30px;
                border-radius: 8px;
              }
              .section { 
                margin: 30px 0; 
                padding: 20px;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
              }
              h1 { 
                color: #0f172a; 
                margin: 20px 0; 
              }
              h2 { 
                color: #475569; 
                border-bottom: 2px solid #f59e0b;
                padding-bottom: 10px;
              }
              table { 
                width: 100%; 
                border-collapse: collapse; 
                margin: 15px 0;
              }
              th { 
                background: #f1f5f9; 
                padding: 12px; 
                text-align: left;
                border: 1px solid #e2e8f0;
              }
              td { 
                padding: 12px; 
                border: 1px solid #e2e8f0;
              }
              .footer { 
                margin-top: 40px; 
                padding-top: 20px; 
                border-top: 1px solid #e2e8f0; 
                font-size: 12px;
                color: #64748b;
                text-align: center;
              }
              @media print {
                .no-print { display: none; }
                body { padding: 0; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; color: white;">HavenBridge Development</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">${title}</p>
              <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
                Generated: ${new Date().toLocaleDateString('en-AU', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            
            <div class="section">
              <h2>Input Parameters</h2>
              <table>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  ${Object.entries(inputs).map(([key, value]) => `
                    <tr>
                      <td>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                      <td>${value}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            
            <div class="section">
              <h2>Results & Analysis</h2>
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  ${Object.entries(results).map(([key, value]) => `
                    <tr>
                      <td>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                      <td>${value}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            
            <div class="footer">
              <p>© 2025 HavenBridge Development. All rights reserved.</p>
              <p>Calculations are estimates only. Professional advice recommended.</p>
              <p class="no-print">Close this window to return to the calculator.</p>
            </div>
            
            <script>
              window.onload = function() {
                window.print();
                setTimeout(() => {
                  document.querySelector('.no-print').innerHTML = 'Print completed. You may close this window.';
                }, 1000);
              }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleSaveCalculation = () => {
    const event = new CustomEvent('saveCalculation', {
      detail: { calculatorId, title, inputs, results }
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
                  Fill in the inputs on the left, view results on the right
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                {/* Quick Action Buttons */}
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
              
              {/* Results Container - Will be populated by calculator components */}
              <div id={`results-${calculatorId}`} className="space-y-6">
                <div className="text-center py-12 text-slate-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-slate-300" />
                  </div>
                  <p className="text-lg font-medium">Fill in inputs to see results</p>
                  <p className="text-sm mt-2">Results will appear here as you enter data</p>
                </div>
              </div>

              {/* Export Panel - Always visible */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Download className="w-5 h-5 text-slate-600" />
                  <h4 className="font-bold text-slate-900">Export Options</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleSaveCalculation}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save
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
                  <button
                    onClick={handleExportPDF}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    PDF
                  </button>
                  <button
                    onClick={handleExportCSV}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    CSV
                  </button>
                </div>
                
                <div className="mt-4 text-center">
                  <button
                    onClick={() => window.location.reload()}
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

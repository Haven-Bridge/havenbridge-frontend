"use client";

import React, { useEffect, useState } from 'react';
import { Download, Printer, FileText, FileSpreadsheet, Save, Trash2, Clock, X } from 'lucide-react';
import { CSVLink } from 'react-csv';
import { generatePDF } from '../utils/exportUtils';

interface ExportPanelProps {
  calculatorId: string;
  calculatorTitle: string;
  inputs: Record<string, any>;
  results: Record<string, any>;
  onSave?: () => void;
}

export default function ExportPanel({ 
  calculatorId, 
  calculatorTitle, 
  inputs, 
  results, 
  onSave 
}: ExportPanelProps) {
  const [showSaved, setShowSaved] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const handleExportPDF = () => {
    try {
      generatePDF(calculatorTitle, inputs, results, calculatorId);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      console.error('PDF export failed:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }
  };

  const handleSaveCalculation = () => {
    try {
      setSaveStatus('saving');
      saveCalculation(calculatorId, calculatorTitle, inputs, results);
      
      setTimeout(() => {
        setSaveStatus('saved');
        if (onSave) onSave();
        setTimeout(() => setSaveStatus('idle'), 2000);
      }, 500);
    } catch (error) {
      console.error('Save failed:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${calculatorTitle} - HavenBridge</title>
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
              <p style="margin: 5px 0 0 0; opacity: 0.9;">${calculatorTitle}</p>
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

  const csvData = generateCSVData(inputs, results);
  const csvHeaders = generateCSVHeaders();
  const csvFilename = `HavenBridge_${calculatorId}_${new Date().toISOString().split('T')[0]}.csv`;

  const getSaveButtonText = () => {
    switch (saveStatus) {
      case 'saving': return 'Saving...';
      case 'saved': return 'Saved!';
      case 'error': return 'Error';
      default: return 'Save Calculation';
    }
  };

  const getSaveButtonClass = () => {
    switch (saveStatus) {
      case 'saving': return 'bg-amber-500 hover:bg-amber-600';
      case 'saved': return 'bg-emerald-500 hover:bg-emerald-600';
      case 'error': return 'bg-red-500 hover:bg-red-600';
      default: return 'bg-cyan-500 hover:bg-cyan-600';
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Save Button */}
        <button
          onClick={handleSaveCalculation}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-white rounded-lg font-medium transition-colors ${getSaveButtonClass()}`}
          disabled={saveStatus === 'saving'}
        >
          <Save className={`w-4 h-4 ${saveStatus === 'saving' ? 'animate-spin' : ''}`} />
          {getSaveButtonText()}
        </button>

        {/* View Saved Button */}
        <button
          onClick={() => setShowSaved(!showSaved)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors"
        >
          <Clock className="w-4 h-4" />
          View Saved
        </button>
      </div>

      {/* Export Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        <button
          onClick={handleExportPDF}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
        >
          <FileText className="w-4 h-4" />
          PDF
        </button>

        <CSVLink
          data={csvData}
          headers={csvHeaders}
          filename={csvFilename}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors no-underline"
        >
          <FileSpreadsheet className="w-4 h-4" />
          CSV
        </CSVLink>

        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print
        </button>

        <button
          onClick={() => window.location.reload()}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-violet-500 text-white rounded-lg font-medium hover:bg-violet-600 transition-colors"
        >
          <Download className="w-4 h-4" />
          Reset
        </button>
      </div>

      {/* Saved Calculations Modal */}
      {showSaved && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Saved Calculations</h3>
              <button
                onClick={() => setShowSaved(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <SavedCalculationsList onClose={() => setShowSaved(false)} />
            </div>
            
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <p className="text-sm text-slate-600 text-center">
                Calculations are saved locally in your browser
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Saved Calculations List Component
function SavedCalculationsList({ onClose }: { onClose: () => void }) {
  const [calculations, setCalculations] = useState<any[]>([]);

  useEffect(() => {
    const savedCalculations = JSON.parse(localStorage.getItem('havenbridge_calculations') || '[]');
    setCalculations(savedCalculations);
    
    const handleStorageChange = () => {
      const updatedCalculations = JSON.parse(localStorage.getItem('havenbridge_calculations') || '[]');
      setCalculations(updatedCalculations);
    };
    
    window.addEventListener('calculationsUpdated', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('calculationsUpdated', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLoadCalculation = (calculation: any) => {
    // This would be implemented to load the calculation back into the calculator
    // You'd need to pass a callback from the parent component
    alert(`Load calculation: ${calculation.title}\n\nThis feature would load your saved inputs.`);
    onClose();
  };

  const handleDeleteCalculation = (id: number) => {
    if (confirm('Delete this saved calculation?')) {
      const updatedCalculations = calculations.filter(calc => calc.id !== id);
      localStorage.setItem('havenbridge_calculations', JSON.stringify(updatedCalculations));
      setCalculations(updatedCalculations);
      window.dispatchEvent(new Event('calculationsUpdated'));
    }
  };

  if (calculations.length === 0) {
    return (
      <div className="text-center py-8">
        <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <p className="text-slate-600">No saved calculations yet</p>
        <p className="text-sm text-slate-500 mt-2">
          Use the "Save Calculation" button to store your work
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {calculations.map((calc) => (
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
            <div className="flex gap-2">
              <button
                onClick={() => handleLoadCalculation(calc)}
                className="px-3 py-1 text-sm bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
              >
                Load
              </button>
              <button
                onClick={() => handleDeleteCalculation(calc.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-slate-500">Inputs:</div>
              <div className="text-slate-700">{Object.keys(calc.inputs).length} parameters</div>
              <div className="text-slate-500">Results:</div>
              <div className="text-slate-700">{Object.keys(calc.results).length} metrics</div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="mt-6 pt-6 border-t border-slate-200">
        <button
          onClick={() => {
            if (confirm('Delete all saved calculations?')) {
              localStorage.removeItem('havenbridge_calculations');
              setCalculations([]);
              window.dispatchEvent(new Event('calculationsUpdated'));
            }
          }}
          className="w-full px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
        >
          Clear All Saved Calculations
        </button>
      </div>
    </div>
  );
}
function saveCalculation(calculatorId: string, calculatorTitle: string, inputs: Record<string, any>, results: Record<string, any>) {
    const calculation = {
        id: Date.now(),
        calculatorId,
        title: calculatorTitle,
        inputs,
        results,
        timestamp: new Date().toISOString()
    };
    
    const savedCalculations = JSON.parse(localStorage.getItem('havenbridge_calculations') || '[]');
    savedCalculations.push(calculation);
    localStorage.setItem('havenbridge_calculations', JSON.stringify(savedCalculations));
    window.dispatchEvent(new Event('calculationsUpdated'));
}

function generateCSVData(inputs: Record<string, any>, results: Record<string, any>) {
    return [
        {
            'Parameter': 'Input Parameters',
            'Value': ''
        },
        ...Object.entries(inputs).map(([key, value]) => ({
            'Parameter': key,
            'Value': value
        })),
        {
            'Parameter': '',
            'Value': ''
        },
        {
            'Parameter': 'Results & Analysis',
            'Value': ''
        },
        ...Object.entries(results).map(([key, value]) => ({
            'Parameter': key,
            'Value': value
        }))
    ];
}

function generateCSVHeaders() {
    return [
        { label: 'Parameter', key: 'Parameter' },
        { label: 'Value', key: 'Value' }
    ];
}


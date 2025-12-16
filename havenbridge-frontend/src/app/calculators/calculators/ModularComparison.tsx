"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { RefreshCw, Clock, Factory, Home } from 'lucide-react';
import { formatCurrency, formatNumber } from '../utils/formatters';

export default function ModularComparisonCalculator() {
  const [inputs, setInputs] = useState({
    projectValue: '',
    size: '',
    location: 'metro',
    complexity: 'medium',
    customisation: 'medium'
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Reset handler for modal reset button
  useEffect(() => {
    const handleReset = () => {
      setInputs({
        projectValue: '',
        size: '',
        location: 'metro',
        complexity: 'medium',
        customisation: 'medium'
      });
      setHasCalculated(false);
      setResults(null);
    };

    window.addEventListener('resetCalculator', handleReset);
    return () => window.removeEventListener('resetCalculator', handleReset);
  }, []);

  // Calculate whenever inputs change
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasValues = (inputs.projectValue && parseFloat(inputs.projectValue) > 0) || 
                       (inputs.size && parseFloat(inputs.size) > 0);
      if (hasValues) {
        calculateAndUpdateResults();
        setHasCalculated(true);
      } else {
        setResults(null);
        setHasCalculated(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputs]);

  const handleInputChange = (field: string, value: string) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputs(prev => ({ ...prev, [field]: value }));
    }
  };

  const calculateAndUpdateResults = () => {
    window.dispatchEvent(new CustomEvent('calculationStarted'));
    const results = calculateResults();
    setResults(results);
    
    const event = new CustomEvent('calculatorResultsUpdated', {
      detail: {
        calculatorId: 'modular-comparison',
        results: results,
        inputs: inputs
      }
    });
    window.dispatchEvent(event);
  };

  const calculateResults = () => {
    const projectValue = parseFloat(inputs.projectValue) || 0;
    const size = parseFloat(inputs.size) || 0;
    
    // Traditional construction costs
    const traditionalCostPerSqm = 3200; // Base
    const traditionalTimeWeeks = 52; // Base weeks
    
    // Modular construction costs (typically 10-20% less)
    const modularCostReduction = 0.15; // 15% less
    const modularCostPerSqm = traditionalCostPerSqm * (1 - modularCostReduction);
    
    // Time savings (30-50% faster)
    const modularTimeSavings = 0.4; // 40% faster
    const modularTimeWeeks = traditionalTimeWeeks * (1 - modularTimeSavings);
    
    // Calculate costs
    const traditionalCost = traditionalCostPerSqm * size;
    const modularCost = modularCostPerSqm * size;
    const costSavings = traditionalCost - modularCost;
    const costSavingsPercent = traditionalCost > 0 ? (costSavings / traditionalCost) * 100 : 0;
    
    // Calculate time savings
    const timeSavingsWeeks = traditionalTimeWeeks - modularTimeWeeks;
    const timeSavingsPercent = (timeSavingsWeeks / traditionalTimeWeeks) * 100;
    
    // Financing cost savings (due to shorter construction period)
    const interestRate = 0.06; // 6% annual
    const financingSavings = traditionalCost * (interestRate * (timeSavingsWeeks / 52));
    
    // Total savings including financing
    const totalSavings = costSavings + financingSavings;
    const totalSavingsPercent = traditionalCost > 0 ? (totalSavings / traditionalCost) * 100 : 0;
    
    // ROI comparison (earlier completion = earlier income)
    const weeklyRentalValue = 1000; // Example weekly rental value
    const earlyIncome = weeklyRentalValue * timeSavingsWeeks;

    let summary = '';
    if (totalSavingsPercent > 10) {
      summary = 'Strong case for modular construction with significant savings';
    } else if (totalSavingsPercent > 0) {
      summary = 'Modular construction may be viable with moderate savings';
    } else {
      summary = 'Traditional construction may be more suitable for this project';
    }

    return {
      title: 'Modular vs Traditional Construction',
      metrics: [
        { label: 'Total Savings', value: formatCurrency(totalSavings), unit: '', color: totalSavingsPercent > 0 ? 'positive' : 'negative' },
        { label: 'Cost Savings %', value: `${costSavingsPercent.toFixed(1)}%`, unit: '' },
        { label: 'Time Savings', value: `${timeSavingsWeeks} weeks`, unit: '' },
        { label: 'Time Savings %', value: `${timeSavingsPercent.toFixed(0)}%`, unit: '' }
      ],
      summary: summary,
      breakdown: [
        { label: 'Traditional Cost', value: formatCurrency(traditionalCost) },
        { label: 'Modular Cost', value: formatCurrency(modularCost) },
        { label: 'Traditional Time', value: `${traditionalTimeWeeks} weeks` },
        { label: 'Modular Time', value: `${modularTimeWeeks} weeks` },
        { label: 'Financing Savings', value: formatCurrency(financingSavings) },
        { label: 'Early Income Potential', value: formatCurrency(earlyIncome) }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      projectValue: '',
      size: '',
      location: 'metro',
      complexity: 'medium',
      customisation: 'medium'
    });
    setHasCalculated(false);
    window.dispatchEvent(new CustomEvent('resetCalculator'));
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Project Value"
          type="text"
          value={inputs.projectValue}
          onChange={(value) => handleInputChange('projectValue', value)}
          prefix="$"
          placeholder="e.g., 1,000,000"
          helpText="Total project budget or value"
        />
        
        <InputField
          label="Building Size"
          type="text"
          value={inputs.size}
          onChange={(value) => handleInputChange('size', value)}
          suffix="sqm"
          placeholder="e.g., 200"
          helpText="Total floor area in square meters"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Location
          </label>
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-slate-400" />
            <select
              value={inputs.location}
              onChange={(e) => setInputs(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="metro">Metro Area</option>
              <option value="regional">Regional</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Design Complexity
          </label>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-400" />
            <select
              value={inputs.complexity}
              onChange={(e) => setInputs(prev => ({ ...prev, complexity: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="simple">Simple</option>
              <option value="medium">Medium</option>
              <option value="complex">Complex</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-900">
          Customisation Level
        </label>
        <select
          value={inputs.customisation}
          onChange={(e) => setInputs(prev => ({ ...prev, customisation: e.target.value }))}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
        >
          <option value="low">Standard</option>
          <option value="medium">Custom</option>
          <option value="high">Bespoke</option>
        </select>
      </div>

      {/* Example Scenario */}
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Factory className="w-4 h-4 text-pink-600" />
          <span className="text-sm font-medium text-pink-800">Example Scenario</span>
        </div>
        <p className="text-sm text-pink-700">
          $1M project, 200 sqm, metro area, medium complexity, custom design
        </p>
        <button
          onClick={() => {
            setInputs({
              projectValue: '1000000',
              size: '200',
              location: 'metro',
              complexity: 'medium',
              customisation: 'medium'
            });
          }}
          className="mt-2 text-sm text-pink-700 hover:text-pink-800 font-medium"
        >
          Load this example →
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={calculateAndUpdateResults}
          className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          disabled={!inputs.projectValue && !inputs.size}
        >
          <RefreshCw className="w-4 h-4" />
          Calculate Now
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
        >
          Reset
        </button>
      </div>

      {hasCalculated && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-800">
              Results updating in real-time
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

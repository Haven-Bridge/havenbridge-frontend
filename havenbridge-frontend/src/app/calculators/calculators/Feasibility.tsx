"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { Target, TrendingUp, DollarSign, Percent, Calendar } from 'lucide-react';
import { formatCurrency, formatPercentage } from '../utils/formatters';

export default function FeasibilityCalculator() {
  const [inputs, setInputs] = useState({
    landCost: '500000',
    constructionCost: '800000',
    expectedSalePrice: '1500000',
    holdingPeriod: '12',
    interestRate: '6',
    profitMarginTarget: '20'
  });

  const [results, setResults] = useState<Record<string, any>>({});

  useEffect(() => {
    const calculatedResults = calculateResults();
    setResults(calculatedResults);
    
    // Dispatch event to update modal
    const event = new CustomEvent('calculatorInputsUpdated', {
      detail: {
        calculatorId: 'feasibility',
        inputs,
        results: calculatedResults
      }
    });
    window.dispatchEvent(event);
  }, [inputs]);

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateResults = () => {
    const landCost = parseFloat(inputs.landCost) || 0;
    const constructionCost = parseFloat(inputs.constructionCost) || 0;
    const expectedSalePrice = parseFloat(inputs.expectedSalePrice) || 0;
    const holdingPeriod = parseFloat(inputs.holdingPeriod) || 0;
    const interestRate = parseFloat(inputs.interestRate) || 0;
    const profitMarginTarget = parseFloat(inputs.profitMarginTarget) || 0;

    const totalCost = landCost + constructionCost;
    const financingCost = totalCost * (interestRate / 100) * (holdingPeriod / 12);
    const totalProjectCost = totalCost + financingCost;
    const expectedProfit = expectedSalePrice - totalProjectCost;
    const profitMargin = (expectedProfit / totalProjectCost) * 100;
    const roi = (expectedProfit / totalProjectCost) * 100;
    const feasibilityScore = profitMargin >= profitMarginTarget ? 'High' : profitMargin >= profitMarginTarget * 0.7 ? 'Medium' : 'Low';

    return {
      totalCost: formatCurrency(totalCost),
      financingCost: formatCurrency(financingCost),
      totalProjectCost: formatCurrency(totalProjectCost),
      expectedProfit: formatCurrency(expectedProfit),
      profitMargin: formatPercentage(profitMargin),
      roi: formatPercentage(roi),
      feasibilityScore,
      profitTarget: formatPercentage(profitMarginTarget),
      profitStatus: expectedProfit >= 0 ? 'profitable' : 'loss'
    };
  };

  // Update results display
  useEffect(() => {
    const resultsContainer = document.getElementById('results-feasibility');
    if (resultsContainer && Object.keys(results).length > 0) {
      const colorClass = results.feasibilityScore === 'High' ? 'bg-emerald-500' : 
                        results.feasibilityScore === 'Medium' ? 'bg-amber-500' : 'bg-red-500';
      
      resultsContainer.innerHTML = `
        <div class="space-y-6">
          <!-- Feasibility Score -->
          <div class="bg-white rounded-xl p-6 border border-slate-200">
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-bold text-slate-900">Feasibility Assessment</h4>
              <div class="flex items-center gap-2">
                <i class="w-4 h-4 text-slate-400">🎯</i>
                <span class="text-sm text-slate-600">Score</span>
              </div>
            </div>
            <div class="flex items-center justify-center mb-4">
              <div class="${colorClass} text-white text-4xl font-bold w-24 h-24 rounded-full flex items-center justify-center">
                ${results.feasibilityScore === 'High' ? '✓' : results.feasibilityScore === 'Medium' ? '~' : '✗'}
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-slate-900 mb-1">${results.feasibilityScore} Viability</div>
              <div class="text-sm text-slate-600">
                ${results.feasibilityScore === 'High' ? 'Project meets all targets' : 
                  results.feasibilityScore === 'Medium' ? 'Review costs or pricing' : 
                  'Re-evaluate project parameters'}
              </div>
            </div>
          </div>
          
          <!-- Key Metrics -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg p-4 border border-slate-200">
              <div class="flex items-center gap-2 mb-2">
                <i class="w-4 h-4 text-cyan-500">%</i>
                <span class="text-sm font-medium text-slate-700">Profit Margin</span>
              </div>
              <div class="text-2xl font-bold text-slate-900">${results.profitMargin}</div>
              <div class="text-xs text-slate-500 mt-1">vs target: ${results.profitTarget}</div>
            </div>
            
            <div class="bg-white rounded-lg p-4 border border-slate-200">
              <div class="flex items-center gap-2 mb-2">
                <i class="w-4 h-4 text-emerald-500">📈</i>
                <span class="text-sm font-medium text-slate-700">ROI</span>
              </div>
              <div class="text-2xl font-bold text-slate-900">${results.roi}</div>
              <div class="text-xs text-slate-500 mt-1">Return on investment</div>
            </div>
          </div>
          
          <!-- Breakdown -->
          <div class="bg-white rounded-xl p-6 border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-4">Cost Breakdown</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Total Project Cost</span>
                <span class="font-bold text-slate-900">${results.totalProjectCost}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Expected Profit</span>
                <span class="font-bold ${results.profitStatus === 'profitable' ? 'text-emerald-600' : 'text-red-600'}">
                  ${results.expectedProfit}
                </span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Financing Cost</span>
                <span class="font-bold text-slate-900">${results.financingCost}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }, [results]);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Land Cost"
          type="number"
          value={inputs.landCost}
          onChange={(value) => handleInputChange('landCost', value)}
          prefix="$"
          placeholder="500,000"
          min={0}
          step={1000}
        />
        <InputField
          label="Construction Cost"
          type="number"
          value={inputs.constructionCost}
          onChange={(value) => handleInputChange('constructionCost', value)}
          prefix="$"
          placeholder="800,000"
          min={0}
          step={1000}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Expected Sale Price"
          type="number"
          value={inputs.expectedSalePrice}
          onChange={(value) => handleInputChange('expectedSalePrice', value)}
          prefix="$"
          placeholder="1,500,000"
          min={0}
          step={1000}
        />
        <InputField
          label="Holding Period (months)"
          type="number"
          value={inputs.holdingPeriod}
          onChange={(value) => handleInputChange('holdingPeriod', value)}
          suffix="months"
          placeholder="12"
          min={1}
          max={36}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Interest Rate"
          type="number"
          value={inputs.interestRate}
          onChange={(value) => handleInputChange('interestRate', value)}
          suffix="%"
          placeholder="6"
          min={0}
          max={20}
          step={0.1}
        />
        <InputField
          label="Profit Margin Target"
          type="number"
          value={inputs.profitMarginTarget}
          onChange={(value) => handleInputChange('profitMarginTarget', value)}
          suffix="%"
          placeholder="20"
          min={0}
          max={100}
          step={0.1}
        />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-medium text-amber-800">Example Scenario</span>
        </div>
        <p className="text-sm text-amber-700">
          Typical residential development: $500k land, $800k construction, 12-month hold
        </p>
      </div>

      {/* Hidden results container for modal */}
      <div id="results-feasibility" className="hidden"></div>
    </div>
  );
}

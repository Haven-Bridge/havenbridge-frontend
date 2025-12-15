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

  const [hasCalculated, setHasCalculated] = useState(false);

  // Calculate whenever inputs change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(inputs).some(val => val && parseFloat(val) > 0)) {
        calculateAndUpdateResults();
        setHasCalculated(true);
      }
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timer);
  }, [inputs]);

  const handleInputChange = (field: string, value: string) => {
    // Allow only numbers and decimal points
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputs(prev => ({ ...prev, [field]: value }));
    }
  };

  const calculateAndUpdateResults = () => {
    // Start calculation event
    window.dispatchEvent(new CustomEvent('calculationStarted'));

    const results = calculateResults();
    
    // Dispatch results to parent
    const event = new CustomEvent('calculatorResultsUpdated', {
      detail: {
        calculatorId: 'feasibility',
        results: results
      }
    });
    window.dispatchEvent(event);
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
    
    let feasibilityScore = 'Medium';
    let scoreColor = 'warning';
    
    if (profitMargin >= profitMarginTarget) {
      feasibilityScore = 'High';
      scoreColor = 'positive';
    } else if (profitMargin < profitMarginTarget * 0.5) {
      feasibilityScore = 'Low';
      scoreColor = 'negative';
    }

    let summary = '';
    if (feasibilityScore === 'High') {
      summary = 'Project meets profitability targets and shows strong viability.';
    } else if (feasibilityScore === 'Medium') {
      summary = 'Project shows moderate viability. Consider reviewing costs or adjusting sale price.';
    } else {
      summary = 'Project requires significant review. Consider re-evaluating project parameters.';
    }

    return {
      title: 'Development Feasibility Analysis',
      metrics: [
        { label: 'Feasibility Score', value: feasibilityScore, color: scoreColor },
        { label: 'Profit Margin', value: formatPercentage(profitMargin), unit: '', color: profitMargin >= profitMarginTarget ? 'positive' : profitMargin >= 0 ? 'warning' : 'negative' },
        { label: 'ROI', value: formatPercentage(roi), unit: '' },
        { label: 'Expected Profit', value: formatCurrency(expectedProfit), unit: '' }
      ],
      summary: summary,
      breakdown: [
        { label: 'Land Cost', value: formatCurrency(landCost) },
        { label: 'Construction Cost', value: formatCurrency(constructionCost) },
        { label: 'Financing Cost', value: formatCurrency(financingCost) },
        { label: 'Total Project Cost', value: formatCurrency(totalProjectCost) },
        { label: 'Expected Sale Price', value: formatCurrency(expectedSalePrice) },
        { label: 'Profit Margin Target', value: formatPercentage(profitMarginTarget) }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      landCost: '500000',
      constructionCost: '800000',
      expectedSalePrice: '1500000',
      holdingPeriod: '12',
      interestRate: '6',
      profitMarginTarget: '20'
    });
    setHasCalculated(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Land Cost"
          type="text"
          value={inputs.landCost}
          onChange={(value) => handleInputChange('landCost', value)}
          prefix="$"
          placeholder="500,000"
          helpText="Purchase price of the land"
        />
        <InputField
          label="Construction Cost"
          type="text"
          value={inputs.constructionCost}
          onChange={(value) => handleInputChange('constructionCost', value)}
          prefix="$"
          placeholder="800,000"
          helpText="Total construction and development costs"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Expected Sale Price"
          type="text"
          value={inputs.expectedSalePrice}
          onChange={(value) => handleInputChange('expectedSalePrice', value)}
          prefix="$"
          placeholder="1,500,000"
          helpText="Expected market value upon completion"
        />
        <InputField
          label="Holding Period (months)"
          type="text"
          value={inputs.holdingPeriod}
          onChange={(value) => handleInputChange('holdingPeriod', value)}
          suffix="months"
          placeholder="12"
          helpText="Time from purchase to sale"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Interest Rate"
          type="text"
          value={inputs.interestRate}
          onChange={(value) => handleInputChange('interestRate', value)}
          suffix="%"
          placeholder="6"
          helpText="Annual financing interest rate"
        />
        <InputField
          label="Profit Margin Target"
          type="text"
          value={inputs.profitMarginTarget}
          onChange={(value) => handleInputChange('profitMarginTarget', value)}
          suffix="%"
          placeholder="20"
          helpText="Minimum acceptable profit margin"
        />
      </div>

      {/* Example Scenario */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-medium text-amber-800">Example Scenario</span>
        </div>
        <p className="text-sm text-amber-700">
          Typical residential development: $500k land, $800k construction, 12-month hold at 6% interest
        </p>
        <button
          onClick={() => {
            setInputs({
              landCost: '500000',
              constructionCost: '800000',
              expectedSalePrice: '1500000',
              holdingPeriod: '12',
              interestRate: '6',
              profitMarginTarget: '20'
            });
          }}
          className="mt-2 text-sm text-amber-700 hover:text-amber-800 font-medium"
        >
          Load this example →
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={calculateAndUpdateResults}
          className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          disabled={!Object.values(inputs).some(val => val)}
        >
          <TrendingUp className="w-4 h-4" />
          Calculate Now
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Calculation Status */}
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

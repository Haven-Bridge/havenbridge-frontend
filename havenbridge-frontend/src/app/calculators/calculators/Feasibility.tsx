"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { Target, TrendingUp, DollarSign, Percent, Calendar, Building2, Home } from 'lucide-react';
import { formatCurrency, formatPercentage, calculateROI, getStateDefaults } from '../utils/formatters';

export default function FeasibilityCalculator() {
  // Initialize with empty strings and NEW configurable inputs
  const [inputs, setInputs] = useState({
    landCost: '',
    constructionCost: '',
    expectedSalePrice: '',
    holdingPeriod: '',
    interestRate: '',
    profitMarginTarget: '',
    state: 'VIC', // NEW: State selection for defaults
    sellingCostsPercent: '2.5', // NEW: Selling costs (% of sale price)
    holdingCostsMonthly: '500', // NEW: Monthly holding costs
    constructionContingencyPercent: '10', // NEW: Construction contingency
    professionalFeesPercent: '3' // NEW: Professional/design fees
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Reset handler for modal reset button
  useEffect(() => {
    const handleReset = () => {
      setInputs({
        landCost: '',
        constructionCost: '',
        expectedSalePrice: '',
        holdingPeriod: '',
        interestRate: '',
        profitMarginTarget: '',
        state: 'VIC',
        sellingCostsPercent: '2.5',
        holdingCostsMonthly: '500',
        constructionContingencyPercent: '10',
        professionalFeesPercent: '3'
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
      // Only calculate if at least one input has a value
      const hasValues = inputs.landCost || inputs.constructionCost || inputs.expectedSalePrice;
      if (hasValues) {
        calculateAndUpdateResults();
        setHasCalculated(true);
      } else {
        // Clear results if all main inputs are empty
        setResults(null);
        setHasCalculated(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputs]);

  const handleInputChange = (field: string, value: string) => {
    // Allow only numbers and decimal points
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputs(prev => ({ ...prev, [field]: value }));
    }
  };

  // Update interest rate when state changes
  useEffect(() => {
    if (inputs.state && !inputs.interestRate) {
      const stateDefaults = getStateDefaults(inputs.state);
      setInputs(prev => ({
        ...prev,
        interestRate: stateDefaults.averageInterestRate.toFixed(1)
      }));
    }
  }, [inputs.state]);

  const calculateAndUpdateResults = () => {
    window.dispatchEvent(new CustomEvent('calculationStarted'));
    const results = calculateResults();
    setResults(results);
    
    const event = new CustomEvent('calculatorResultsUpdated', {
      detail: {
        calculatorId: 'feasibility',
        results: results,
        inputs: inputs
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
    const sellingCostsPercent = parseFloat(inputs.sellingCostsPercent) || 0;
    const holdingCostsMonthly = parseFloat(inputs.holdingCostsMonthly) || 0;
    const constructionContingencyPercent = parseFloat(inputs.constructionContingencyPercent) || 0;
    const professionalFeesPercent = parseFloat(inputs.professionalFeesPercent) || 0;

    // Get state defaults for additional context
    const stateDefaults = getStateDefaults(inputs.state);

    // Calculate all costs
    const baseConstructionCost = constructionCost;
    const constructionContingency = baseConstructionCost * (constructionContingencyPercent / 100);
    const professionalFees = baseConstructionCost * (professionalFeesPercent / 100);
    
    const adjustedConstructionCost = baseConstructionCost + constructionContingency + professionalFees;
    const totalInvestment = landCost + adjustedConstructionCost;
    
    const financingCost = totalInvestment * (interestRate / 100) * (holdingPeriod / 12);
    const holdingCosts = holdingCostsMonthly * holdingPeriod;
    const sellingCosts = expectedSalePrice * (sellingCostsPercent / 100);
    
    const totalProjectCost = totalInvestment + financingCost + holdingCosts + sellingCosts;
    const expectedProfit = expectedSalePrice - totalProjectCost;
    
    // CORRECTED: Profit margin based on total project cost
    const profitMargin = totalProjectCost > 0 ? (expectedProfit / totalProjectCost) * 100 : 0;
    
    // CORRECTED: ROI based on total investment (land + construction)
    const roi = calculateROI(expectedProfit, totalInvestment, holdingPeriod);
    
    // Annualized ROI for comparison
    const annualizedROI = holdingPeriod > 0 ? roi * (12 / holdingPeriod) : roi;
    
    let feasibilityScore = 'Medium';
    let scoreColor = 'warning';
    let scoreDetails = '';
    
    if (profitMargin >= profitMarginTarget) {
      feasibilityScore = 'High';
      scoreColor = 'positive';
      scoreDetails = 'Meets or exceeds target profit margin';
    } else if (profitMargin < profitMarginTarget * 0.5) {
      feasibilityScore = 'Low';
      scoreColor = 'negative';
      scoreDetails = 'Below 50% of target margin';
    } else {
      scoreDetails = 'Within 50-100% of target margin';
    }

    let summary = '';
    if (feasibilityScore === 'High') {
      summary = `Project shows strong viability with ${profitMargin.toFixed(1)}% profit margin.`;
    } else if (feasibilityScore === 'Medium') {
      summary = `Project shows moderate viability. Consider reviewing costs or adjusting sale price.`;
    } else {
      summary = `Project requires significant review. Current margin (${profitMargin.toFixed(1)}%) is below target.`;
    }

    const stateLabels: Record<string, string> = {
      'VIC': 'Victoria',
      'NSW': 'New South Wales',
      'QLD': 'Queensland',
      'SA': 'South Australia',
      'WA': 'Western Australia',
      'TAS': 'Tasmania',
      'ACT': 'ACT',
      'NT': 'Northern Territory'
    };

    return {
      title: 'Development Feasibility Analysis',
      metrics: [
        { 
          label: 'Feasibility Score', 
          value: feasibilityScore, 
          color: scoreColor,
          details: scoreDetails
        },
        { 
          label: 'Profit Margin', 
          value: formatPercentage(profitMargin), 
          unit: '', 
          color: profitMargin >= profitMarginTarget ? 'positive' : profitMargin >= 0 ? 'warning' : 'negative',
          details: `Target: ${formatPercentage(profitMarginTarget)}`
        },
        { 
          label: 'Annual ROI', 
          value: formatPercentage(annualizedROI), 
          unit: '',
          details: holdingPeriod !== 12 ? `(${formatPercentage(roi)} over ${holdingPeriod} months)` : ''
        },
        { 
          label: 'Expected Profit', 
          value: formatCurrency(expectedProfit), 
          unit: '',
          color: expectedProfit >= 0 ? 'positive' : 'negative'
        }
      ],
      summary: summary,
      breakdown: [
        { label: 'Land Cost', value: formatCurrency(landCost) },
        { label: 'Base Construction Cost', value: formatCurrency(baseConstructionCost) },
        { label: 'Construction Contingency', value: `${constructionContingencyPercent}% = ${formatCurrency(constructionContingency)}` },
        { label: 'Professional Fees', value: `${professionalFeesPercent}% = ${formatCurrency(professionalFees)}` },
        { label: 'Total Investment', value: formatCurrency(totalInvestment) },
        { label: 'Financing Cost', value: formatCurrency(financingCost) },
        { label: 'Holding Costs', value: formatCurrency(holdingCosts) },
        { label: 'Selling Costs', value: `${sellingCostsPercent}% = ${formatCurrency(sellingCosts)}` },
        { label: 'Total Project Cost', value: formatCurrency(totalProjectCost) },
        { label: 'Expected Sale Price', value: formatCurrency(expectedSalePrice) },
        { label: 'State', value: stateLabels[inputs.state] || inputs.state },
        { label: 'Interest Rate', value: `${interestRate}% p.a.` }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      landCost: '',
      constructionCost: '',
      expectedSalePrice: '',
      holdingPeriod: '',
      interestRate: '',
      profitMarginTarget: '',
      state: 'VIC',
      sellingCostsPercent: '2.5',
      holdingCostsMonthly: '500',
      constructionContingencyPercent: '10',
      professionalFeesPercent: '3'
    });
    setHasCalculated(false);
    setResults(null);
    window.dispatchEvent(new CustomEvent('resetCalculator'));
  };

  // Quick percentage buttons for configurable inputs
  const PercentageButtons = ({ field, currentValue, suggestions }: {
    field: string;
    currentValue: string;
    suggestions: Array<{ label: string; value: number }>;
  }) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.label}
          type="button"
          onClick={() => handleInputChange(field, suggestion.value.toString())}
          className={`px-3 py-1 text-xs rounded-lg transition-colors ${
            parseFloat(currentValue) === suggestion.value
              ? 'bg-cyan-500 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Basic Project Inputs */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Land Cost"
          type="text"
          value={inputs.landCost}
          onChange={(value) => handleInputChange('landCost', value)}
          prefix="$"
          placeholder="e.g., 500,000"
          helpText="Purchase price of the land"
        />
        <InputField
          label="Construction Cost"
          type="text"
          value={inputs.constructionCost}
          onChange={(value) => handleInputChange('constructionCost', value)}
          prefix="$"
          placeholder="e.g., 800,000"
          helpText="Base construction costs before contingencies"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Expected Sale Price"
          type="text"
          value={inputs.expectedSalePrice}
          onChange={(value) => handleInputChange('expectedSalePrice', value)}
          prefix="$"
          placeholder="e.g., 1,500,000"
          helpText="Expected market value upon completion"
        />
        <InputField
          label="Holding Period (months)"
          type="text"
          value={inputs.holdingPeriod}
          onChange={(value) => handleInputChange('holdingPeriod', value)}
          suffix="months"
          placeholder="e.g., 12"
          helpText="Time from purchase to sale"
        />
      </div>

      {/* Location & Financing */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            State/Territory
            <span className="text-xs text-slate-500 ml-2">
              (Affects default interest rate)
            </span>
          </label>
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-slate-400" />
            <select
              value={inputs.state}
              onChange={(e) => setInputs(prev => ({ ...prev, state: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="VIC">Victoria</option>
              <option value="NSW">New South Wales</option>
              <option value="QLD">Queensland</option>
              <option value="SA">South Australia</option>
              <option value="WA">Western Australia</option>
              <option value="TAS">Tasmania</option>
              <option value="ACT">ACT</option>
              <option value="NT">Northern Territory</option>
            </select>
          </div>
        </div>
        
        <InputField
          label="Interest Rate"
          type="text"
          value={inputs.interestRate}
          onChange={(value) => handleInputChange('interestRate', value)}
          suffix="% p.a."
          placeholder="e.g., 6.2"
          helpText="Annual financing interest rate"
        />
      </div>

      {/* Configurable Cost Inputs */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          Additional Costs & Contingencies
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Selling Costs
              <span className="text-xs text-slate-500 ml-2">
                (Agent commission, marketing)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={inputs.sellingCostsPercent}
                onChange={(e) => handleInputChange('sellingCostsPercent', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
                min="0"
                max="10"
                step="0.1"
              />
              <span className="text-slate-600">% of sale price</span>
            </div>
            <PercentageButtons
              field="sellingCostsPercent"
              currentValue={inputs.sellingCostsPercent}
              suggestions={[
                { label: "Low (1.5%)", value: 1.5 },
                { label: "Standard (2.5%)", value: 2.5 },
                { label: "Premium (3.5%)", value: 3.5 }
              ]}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Monthly Holding Costs
              <span className="text-xs text-slate-500 ml-2">
                (Rates, insurance, utilities)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">$</span>
              <input
                type="number"
                value={inputs.holdingCostsMonthly}
                onChange={(e) => handleInputChange('holdingCostsMonthly', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
                min="0"
                max="5000"
                step="50"
              />
              <span className="text-slate-600">per month</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <button
                type="button"
                onClick={() => handleInputChange('holdingCostsMonthly', '300')}
                className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                  inputs.holdingCostsMonthly === '300'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Basic ($300)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('holdingCostsMonthly', '500')}
                className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                  inputs.holdingCostsMonthly === '500'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Standard ($500)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('holdingCostsMonthly', '800')}
                className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                  inputs.holdingCostsMonthly === '800'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                High ($800)
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Construction Contingency
              <span className="text-xs text-slate-500 ml-2">
                (Unexpected construction costs)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={inputs.constructionContingencyPercent}
                onChange={(e) => handleInputChange('constructionContingencyPercent', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
                min="0"
                max="25"
                step="1"
              />
              <span className="text-slate-600">% of construction</span>
            </div>
            <PercentageButtons
              field="constructionContingencyPercent"
              currentValue={inputs.constructionContingencyPercent}
              suggestions={[
                { label: "Minimal (5%)", value: 5 },
                { label: "Standard (10%)", value: 10 },
                { label: "Conservative (15%)", value: 15 }
              ]}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Professional Fees
              <span className="text-xs text-slate-500 ml-2">
                (Design, engineering, permits)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={inputs.professionalFeesPercent}
                onChange={(e) => handleInputChange('professionalFeesPercent', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
                min="0"
                max="10"
                step="0.5"
              />
              <span className="text-slate-600">% of construction</span>
            </div>
            <PercentageButtons
              field="professionalFeesPercent"
              currentValue={inputs.professionalFeesPercent}
              suggestions={[
                { label: "Basic (2%)", value: 2 },
                { label: "Standard (3%)", value: 3 },
                { label: "Complex (5%)", value: 5 }
              ]}
            />
          </div>
        </div>
      </div>

      {/* Profit Target */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Profit Margin Target"
          type="text"
          value={inputs.profitMarginTarget}
          onChange={(value) => handleInputChange('profitMarginTarget', value)}
          suffix="%"
          placeholder="e.g., 20"
          helpText="Minimum acceptable profit margin"
        />
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
  <div className="flex items-center gap-2 mb-2">
    <Target className="w-4 h-4 text-amber-600" />
    <span className="text-sm font-medium text-amber-800">Industry Benchmark</span>
  </div>
  <p className="text-sm text-amber-700">
    Residential projects typically target 15-25% profit margin. 
    Commercial may be 10-20%.
  </p>
  <div className="flex flex-wrap gap-2 mt-2">
    <button
      onClick={() => handleInputChange('profitMarginTarget', '15')}
      className="text-[11px] px-2 py-1 bg-amber-100 text-amber-700 rounded hover:bg-amber-200 whitespace-nowrap"
    >
      15% (Conservative)
    </button>
    <button
      onClick={() => handleInputChange('profitMarginTarget', '20')}
      className="text-[11px] px-2 py-1 bg-amber-100 text-amber-700 rounded hover:bg-amber-200 whitespace-nowrap"
    >
      20% (Standard)
    </button>
    <button
      onClick={() => handleInputChange('profitMarginTarget', '25')}
      className="text-[11px] px-2 py-1 bg-amber-100 text-amber-700 rounded hover:bg-amber-200 whitespace-nowrap"
    >
      25% (Aggressive)
    </button>
  </div>
</div>
      </div>

      {/* Example Scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Example 1: Standard Development</span>
          </div>
          <p className="text-sm text-amber-700">
            $500k land, $800k construction, 12 months, VIC, 6% interest
          </p>
          <button
            onClick={() => {
              setInputs({
                landCost: '500000',
                constructionCost: '800000',
                expectedSalePrice: '1500000',
                holdingPeriod: '12',
                interestRate: '6.1',
                profitMarginTarget: '20',
                state: 'VIC',
                sellingCostsPercent: '2.5',
                holdingCostsMonthly: '500',
                constructionContingencyPercent: '10',
                professionalFeesPercent: '3'
              });
            }}
            className="mt-2 text-sm text-amber-700 hover:text-amber-800 font-medium"
          >
            Load Example →
          </button>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Example 2: NSW Project</span>
          </div>
          <p className="text-sm text-blue-700">
            $700k land, $1.2M construction, 18 months, NSW, higher costs
          </p>
          <button
            onClick={() => {
              setInputs({
                landCost: '700000',
                constructionCost: '1200000',
                expectedSalePrice: '2200000',
                holdingPeriod: '18',
                interestRate: '6.2',
                profitMarginTarget: '18',
                state: 'NSW',
                sellingCostsPercent: '2.5',
                holdingCostsMonthly: '600',
                constructionContingencyPercent: '12',
                professionalFeesPercent: '4'
              });
            }}
            className="mt-2 text-sm text-blue-700 hover:text-blue-800 font-medium"
          >
            Load Example →
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={calculateAndUpdateResults}
          className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          disabled={!inputs.landCost && !inputs.constructionCost && !inputs.expectedSalePrice}
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

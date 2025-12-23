"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { Building2, Ruler, Layers, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { formatCurrency, formatNumber, getStateDefaults } from '../utils/formatters';

export default function ConstructionCostCalculator() {
  // Initialize with current market data and configurable inputs
  const [inputs, setInputs] = useState({
    propertyType: 'townhouse',
    size: '',
    quality: 'medium',
    state: 'VIC', // Changed from 'location' to 'state'
    locationType: 'metro', // Metro/regional/remote within state
    floors: '',
    siteComplexity: 'medium',
    constructionYear: '2024', // NEW: Year for cost escalation
    inflationAdjustment: 'on', // NEW: Apply inflation adjustment
    marketConditions: 'normal', // NEW: Market condition multiplier
    designComplexity: 'medium' // NEW: Design complexity impact
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Reset handler
  useEffect(() => {
    const handleReset = () => {
      setInputs({
        propertyType: 'townhouse',
        size: '',
        quality: 'medium',
        state: 'VIC',
        locationType: 'metro',
        floors: '',
        siteComplexity: 'medium',
        constructionYear: '2024',
        inflationAdjustment: 'on',
        marketConditions: 'normal',
        designComplexity: 'medium'
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
      const hasValues = inputs.size && parseFloat(inputs.size) > 0;
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
        calculatorId: 'construction-cost',
        results: results,
        inputs: inputs
      }
    });
    window.dispatchEvent(event);
  };

  const calculateResults = () => {
    const size = parseFloat(inputs.size) || 0;
    const floors = parseFloat(inputs.floors) || 1;
    const constructionYear = parseInt(inputs.constructionYear) || 2024;
    
    // 2024 MARKET RATES (Updated from industry sources)
    const baseCosts2024: Record<string, Record<string, number>> = {
      // Per square meter rates for 2024
      townhouse: { 
        low: 2800,    // Budget finishes
        medium: 3500,  // Standard finishes (was 3200)
        high: 4400     // Premium finishes (was 4000)
      },
      house: { 
        low: 2500,     // Project home
        medium: 3200,  // Custom design (was 2800)
        high: 4000     // Architect designed (was 3500)
      },
      apartment: { 
        low: 3200,     // Basic apartment
        medium: 4000,  // Mid-tier (was 3500)
        high: 5000     // Luxury (was 4500)
      },
      commercial: { 
        low: 3400,     // Basic office/retail
        medium: 4500,  // Standard commercial (was 4000)
        high: 5800     // High-end commercial (was 5000)
      },
      industrial: { 
        low: 1800,     // Warehouse basic
        medium: 2400,  // Standard industrial (was 2000)
        high: 3200     // High-spec industrial (was 2800)
      }
    };

    // Get base cost for selected property type and quality
    const baseCost = baseCosts2024[inputs.propertyType]?.[inputs.quality] || 3500;
    
    // STATE MULTIPLIER (from getStateDefaults)
    const stateDefaults = getStateDefaults(inputs.state);
    const stateMultiplier = stateDefaults.constructionCostMultiplier;
    
    // Location type multiplier (metro/regional/remote WITHIN state)
    const locationMultiplier = {
      metro: 1.0,
      regional: 1.15,  // Regional costs MORE, not less (updated from 0.85)
      remote: 1.35     // Remote costs significantly more (updated from 1.2)
    }[inputs.locationType] || 1.0;
    
    // Site complexity multiplier
    const complexityMultiplier = {
      easy: 0.95,
      medium: 1.0,
      difficult: 1.25  // Increased from 1.15 for truly difficult sites
    }[inputs.siteComplexity] || 1.0;
    
    // Multi-story adjustment
    const floorMultiplier = floors > 2 ? 1.12 : 1.0; // Slight increase for multi-story
    
    // Design complexity impact
    const designComplexityMultiplier = {
      simple: 0.95,
      medium: 1.0,
      complex: 1.15
    }[inputs.designComplexity] || 1.0;
    
    // Market conditions multiplier
    const marketMultiplier = {
      recession: 0.90,    // 10% discount in recession
      normal: 1.0,        // Normal market
      'high-demand': 1.15 // 15% premium in high demand
    }[inputs.marketConditions] || 1.0;
    
    // Inflation adjustment from base year (2024)
    const inflationRate = 0.03; // 3% annual construction inflation
    const yearsDifference = 2024 - constructionYear;
    const inflationMultiplier = inputs.inflationAdjustment === 'on' 
      ? Math.pow(1 + inflationRate, Math.max(0, yearsDifference))
      : 1.0;
    
    // Calculate adjusted cost per sqm
    const costPerSqm = baseCost * 
                       stateMultiplier * 
                       locationMultiplier * 
                       complexityMultiplier * 
                       floorMultiplier * 
                       designComplexityMultiplier * 
                       marketMultiplier * 
                       inflationMultiplier;
    
    // Base construction cost
    const constructionCost = costPerSqm * size;
    
    // Additional costs (as percentages of construction cost)
    const designFees = constructionCost * 0.08;    // Architecture, engineering
    const councilFees = constructionCost * 0.03;   // Permits, approvals
    const contingency = constructionCost * 0.12;   // Increased from 10%
    const siteWorks = constructionCost * 0.05;     // Site preparation, demolition
    const landscaping = constructionCost * 0.03;   // Basic landscaping
    
    const totalProjectCost = constructionCost + designFees + councilFees + 
                            contingency + siteWorks + landscaping;

    // Property type labels
    const typeLabels: Record<string, string> = {
      townhouse: 'Townhouse',
      house: 'Detached House',
      apartment: 'Apartment Building',
      commercial: 'Commercial Building',
      industrial: 'Industrial Building'
    };

    const qualityLabels: Record<string, string> = {
      low: 'Budget',
      medium: 'Standard',
      high: 'Premium'
    };

    const complexityLabels: Record<string, string> = {
      easy: 'Easy (Flat, clear)',
      medium: 'Medium (Some slope, trees)',
      difficult: 'Difficult (Steep, rocky, access issues)'
    };

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

    const locationLabels: Record<string, string> = {
      metro: 'Metro Area',
      regional: 'Regional',
      remote: 'Remote'
    };

    // Cost analysis
    let costAnalysis = '';
    if (costPerSqm < 3000) {
      costAnalysis = 'Below average construction costs - likely basic finishes';
    } else if (costPerSqm < 4500) {
      costAnalysis = 'Standard construction costs within market range';
    } else if (costPerSqm < 6000) {
      costAnalysis = 'Premium construction costs with higher quality finishes';
    } else {
      costAnalysis = 'High-end construction with luxury finishes and features';
    }

    // Add location note
    if (inputs.locationType === 'regional') {
      costAnalysis += ' (Regional areas often cost more due to logistics)';
    } else if (inputs.locationType === 'remote') {
      costAnalysis += ' (Remote locations significantly increase costs)';
    }

    return {
      title: 'Construction Cost Estimate 2024',
      metrics: [
        { 
          label: 'Total Project Cost', 
          value: formatCurrency(totalProjectCost), 
          unit: '', 
          color: 'info',
          details: `$${formatNumber(costPerSqm)} per sqm`
        },
        { 
          label: 'Construction Cost', 
          value: formatCurrency(constructionCost), 
          unit: '' 
        },
        { 
          label: 'Cost per sqm', 
          value: formatCurrency(costPerSqm), 
          unit: '/sqm',
          details: `Base: $${formatNumber(baseCost)} × ${stateMultiplier.toFixed(2)}× state`
        },
        { 
          label: 'Contingency', 
          value: formatCurrency(contingency), 
          unit: '' 
        }
      ],
      summary: costAnalysis,
      breakdown: [
        { label: 'Property Type', value: typeLabels[inputs.propertyType] || inputs.propertyType },
        { label: 'Building Size', value: `${formatNumber(size)} sqm` },
        { label: 'Quality Level', value: qualityLabels[inputs.quality] || inputs.quality },
        { label: 'State', value: stateLabels[inputs.state] || inputs.state },
        { label: 'Location Type', value: locationLabels[inputs.locationType] || inputs.locationType },
        { label: 'Number of Floors', value: `${floors} (${floorMultiplier.toFixed(2)}× multiplier)` },
        { label: 'Site Complexity', value: complexityLabels[inputs.siteComplexity] || inputs.siteComplexity },
        { label: 'Design Complexity', value: inputs.designComplexity.charAt(0).toUpperCase() + inputs.designComplexity.slice(1) },
        { label: 'Market Conditions', value: inputs.marketConditions === 'high-demand' ? 'High Demand (+15%)' : 
                                           inputs.marketConditions === 'recession' ? 'Recession (-10%)' : 'Normal' },
        { label: 'Base Cost per sqm', value: `$${formatNumber(baseCost)}` },
        { label: 'State Multiplier', value: `${stateMultiplier.toFixed(2)}×` },
        { label: 'Location Multiplier', value: `${locationMultiplier.toFixed(2)}×` },
        { label: 'Complexity Multiplier', value: `${complexityMultiplier.toFixed(2)}×` },
        { label: 'Design & Engineering', value: formatCurrency(designFees) },
        { label: 'Council & Permits', value: formatCurrency(councilFees) },
        { label: 'Site Works', value: formatCurrency(siteWorks) },
        { label: 'Landscaping', value: formatCurrency(landscaping) }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      propertyType: 'townhouse',
      size: '',
      quality: 'medium',
      state: 'VIC',
      locationType: 'metro',
      floors: '',
      siteComplexity: 'medium',
      constructionYear: '2024',
      inflationAdjustment: 'on',
      marketConditions: 'normal',
      designComplexity: 'medium'
    });
    setHasCalculated(false);
    window.dispatchEvent(new CustomEvent('resetCalculator'));
  };

  return (
    <div className="space-y-6">
      {/* Basic Project Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Property Type
          </label>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-slate-400" />
            <select
              value={inputs.propertyType}
              onChange={(e) => setInputs(prev => ({ ...prev, propertyType: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="townhouse">Townhouse</option>
              <option value="house">Detached House</option>
              <option value="apartment">Apartment Building</option>
              <option value="commercial">Commercial Building</option>
              <option value="industrial">Industrial Building</option>
            </select>
          </div>
        </div>
        
        <InputField
          label="Total Floor Area"
          type="text"
          value={inputs.size}
          onChange={(value) => handleInputChange('size', value)}
          suffix="sqm"
          placeholder="e.g., 200"
          helpText="Total floor area in square meters"
        />
      </div>

      {/* Location & State */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            State/Territory
            <span className="text-xs text-slate-500 ml-2">
              (Major cost variation)
            </span>
          </label>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-slate-400" />
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
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Location Type
            <span className="text-xs text-slate-500 ml-2">
              (Within state)
            </span>
          </label>
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-slate-400" />
            <select
              value={inputs.locationType}
              onChange={(e) => setInputs(prev => ({ ...prev, locationType: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="metro">Metro Area (Major city)</option>
              <option value="regional">Regional (Country town)</option>
              <option value="remote">Remote (Outback, island)</option>
            </select>
          </div>
          {inputs.locationType === 'regional' && (
            <p className="text-xs text-amber-600 mt-1">
              Note: Regional often costs 15% more than metro due to logistics
            </p>
          )}
        </div>
      </div>

      {/* Quality & Complexity */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Quality Level
          </label>
          <select
            value={inputs.quality}
            onChange={(e) => setInputs(prev => ({ ...prev, quality: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
          >
            <option value="low">Budget (Basic finishes)</option>
            <option value="medium">Standard (Market standard)</option>
            <option value="high">Premium (High-end finishes)</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Site Complexity
          </label>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-slate-400" />
            <select
              value={inputs.siteComplexity}
              onChange={(e) => setInputs(prev => ({ ...prev, siteComplexity: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="easy">Easy (Flat, clear, good access)</option>
              <option value="medium">Medium (Some slope, trees)</option>
              <option value="difficult">Difficult (Steep, rocky, poor access)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Additional Factors */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Additional Cost Factors
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 text-slate-900">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Construction Year
              <span className="text-xs text-slate-500 ml-2">
                (For inflation adjustment)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-slate-400" />
              <select
                value={inputs.constructionYear}
                onChange={(e) => setInputs(prev => ({ ...prev, constructionYear: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
              >
                <option value="2024">2024 (Current rates)</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Inflation Adjustment
            </label>
            <div className="flex gap-4 text-blue-900">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="on"
                  checked={inputs.inflationAdjustment === 'on'}
                  onChange={(e) => setInputs(prev => ({ ...prev, inflationAdjustment: e.target.value }))}
                  className="mr-2"
                />
                <span>Apply 3% annual inflation</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="off"
                  checked={inputs.inflationAdjustment === 'off'}
                  onChange={(e) => setInputs(prev => ({ ...prev, inflationAdjustment: e.target.value }))}
                  className="mr-2"
                />
                <span>Use nominal rates</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Market Conditions
            </label>
            <select
              value={inputs.marketConditions}
              onChange={(e) => setInputs(prev => ({ ...prev, marketConditions: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="recession">Recession (Lower costs)</option>
              <option value="normal">Normal Market</option>
              <option value="high-demand">High Demand (Premium)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Design Complexity
            </label>
            <select
              value={inputs.designComplexity}
              onChange={(e) => setInputs(prev => ({ ...prev, designComplexity: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="simple">Simple (Standard design)</option>
              <option value="medium">Medium (Custom features)</option>
              <option value="complex">Complex (Unique/architectural)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Floors Input */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Number of Floors"
          type="text"
          value={inputs.floors}
          onChange={(value) => handleInputChange('floors', value)}
          suffix="floors"
          placeholder="e.g., 2"
          helpText="Number of storeys in the building"
        />
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">2024 Cost Guide</span>
          </div>
          <p className="text-sm text-blue-700">
            Based on Cordell, Rawlinsons, and industry data for Australian construction
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Rates include materials, labor, and basic finishes
          </p>
        </div>
      </div>

      {/* Example Scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-800">Example 1: VIC Townhouse</span>
          </div>
          <p className="text-sm text-violet-700">
            200 sqm townhouse, standard quality, metro VIC, 2 floors
          </p>
          <button
            onClick={() => {
              setInputs({
                propertyType: 'townhouse',
                size: '200',
                quality: 'medium',
                state: 'VIC',
                locationType: 'metro',
                floors: '2',
                siteComplexity: 'medium',
                constructionYear: '2024',
                inflationAdjustment: 'on',
                marketConditions: 'normal',
                designComplexity: 'medium'
              });
            }}
            className="mt-2 text-sm text-violet-700 hover:text-violet-800 font-medium"
          >
            Load Example →
          </button>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Example 2: NSW Regional House</span>
          </div>
          <p className="text-sm text-amber-700">
            250 sqm house, premium quality, regional NSW, difficult site
          </p>
          <button
            onClick={() => {
              setInputs({
                propertyType: 'house',
                size: '250',
                quality: 'high',
                state: 'NSW',
                locationType: 'regional',
                floors: '1',
                siteComplexity: 'difficult',
                constructionYear: '2024',
                inflationAdjustment: 'on',
                marketConditions: 'high-demand',
                designComplexity: 'complex'
              });
            }}
            className="mt-2 text-sm text-amber-700 hover:text-amber-800 font-medium"
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
          disabled={!inputs.size}
        >
          <Building2 className="w-4 h-4" />
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

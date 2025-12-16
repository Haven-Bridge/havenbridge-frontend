"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { Building2, Ruler, Layers } from 'lucide-react';
import { formatCurrency, formatNumber } from '../utils/formatters';

export default function ConstructionCostCalculator() {
  const [inputs, setInputs] = useState({
    propertyType: 'townhouse',
    size: '',
    quality: 'medium',
    location: 'metro',
    floors: '',
    siteComplexity: 'medium'
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Reset handler for modal reset button
  useEffect(() => {
    const handleReset = () => {
      setInputs({
        propertyType: 'townhouse',
        size: '',
        quality: 'medium',
        location: 'metro',
        floors: '',
        siteComplexity: 'medium'
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
    
    // Base cost per sqm based on property type and quality
    const baseCosts: Record<string, Record<string, number>> = {
      townhouse: { low: 2500, medium: 3200, high: 4000 },
      house: { low: 2200, medium: 2800, high: 3500 },
      apartment: { low: 2800, medium: 3500, high: 4500 },
      commercial: { low: 3000, medium: 4000, high: 5000 },
      industrial: { low: 1500, medium: 2000, high: 2800 }
    };

    const baseCost = baseCosts[inputs.propertyType]?.[inputs.quality] || 3000;
    
    // Location multiplier
    const locationMultiplier = {
      metro: 1.0,
      regional: 0.85,
      remote: 1.2
    }[inputs.location] || 1.0;
    
    // Site complexity multiplier
    const complexityMultiplier = {
      easy: 0.95,
      medium: 1.0,
      difficult: 1.15
    }[inputs.siteComplexity] || 1.0;
    
    // Multi-story adjustment
    const floorMultiplier = floors > 2 ? 1.1 : 1.0;
    
    // Calculate costs
    const costPerSqm = baseCost * locationMultiplier * complexityMultiplier * floorMultiplier;
    const constructionCost = costPerSqm * size;
    
    // Additional costs
    const designFees = constructionCost * 0.08;
    const councilFees = constructionCost * 0.03;
    const contingency = constructionCost * 0.1;
    
    const totalProjectCost = constructionCost + designFees + councilFees + contingency;

    // Property type labels
    const typeLabels: Record<string, string> = {
      townhouse: 'Townhouse',
      house: 'Detached House',
      apartment: 'Apartment',
      commercial: 'Commercial',
      industrial: 'Industrial'
    };

    const qualityLabels: Record<string, string> = {
      low: 'Budget',
      medium: 'Standard',
      high: 'Premium'
    };

    const complexityLabels: Record<string, string> = {
      easy: 'Easy',
      medium: 'Medium',
      difficult: 'Difficult'
    };

    const locationLabels: Record<string, string> = {
      metro: 'Metro Area',
      regional: 'Regional',
      remote: 'Remote'
    };

    let summary = '';
    if (costPerSqm < 3000) {
      summary = 'Below average construction costs for this property type';
    } else if (costPerSqm < 4000) {
      summary = 'Standard construction costs within market range';
    } else {
      summary = 'Premium construction costs with higher quality finishes';
    }

    return {
      title: 'Construction Cost Estimate',
      metrics: [
        { label: 'Total Project Cost', value: formatCurrency(totalProjectCost), unit: '', color: 'info' },
        { label: 'Cost per sqm', value: formatCurrency(costPerSqm), unit: '/sqm' },
        { label: 'Construction Cost', value: formatCurrency(constructionCost), unit: '' },
        { label: 'Contingency', value: formatCurrency(contingency), unit: '' }
      ],
      summary: summary,
      breakdown: [
        { label: 'Property Type', value: typeLabels[inputs.propertyType] || inputs.propertyType },
        { label: 'Building Size', value: `${formatNumber(size)} sqm` },
        { label: 'Quality Level', value: qualityLabels[inputs.quality] || inputs.quality },
        { label: 'Location', value: locationLabels[inputs.location] || inputs.location },
        { label: 'Number of Floors', value: floors.toString() },
        { label: 'Site Complexity', value: complexityLabels[inputs.siteComplexity] || inputs.siteComplexity }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      propertyType: 'townhouse',
      size: '',
      quality: 'medium',
      location: 'metro',
      floors: '',
      siteComplexity: 'medium'
    });
    setHasCalculated(false);
    window.dispatchEvent(new CustomEvent('resetCalculator'));
  };

  return (
    <div className="space-y-6">
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
              <option value="apartment">Apartment</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>
        </div>
        
        <InputField
          label="Total Area"
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
            Quality Level
          </label>
          <select
            value={inputs.quality}
            onChange={(e) => setInputs(prev => ({ ...prev, quality: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
          >
            <option value="low">Budget</option>
            <option value="medium">Standard</option>
            <option value="high">Premium</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Location
          </label>
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-slate-400" />
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
      </div>

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
              <option value="easy">Easy (Flat, clear)</option>
              <option value="medium">Medium (Some slope)</option>
              <option value="difficult">Difficult (Steep, rocky)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Example Scenario */}
      <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-4 h-4 text-violet-600" />
          <span className="text-sm font-medium text-violet-800">Example Scenario</span>
        </div>
        <p className="text-sm text-violet-700">
          200 sqm townhouse, standard quality, metro area, 2 floors, medium site complexity
        </p>
        <button
          onClick={() => {
            setInputs({
              propertyType: 'townhouse',
              size: '200',
              quality: 'medium',
              location: 'metro',
              floors: '2',
              siteComplexity: 'medium'
            });
          }}
          className="mt-2 text-sm text-violet-700 hover:text-violet-800 font-medium"
        >
          Load this example →
        </button>
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

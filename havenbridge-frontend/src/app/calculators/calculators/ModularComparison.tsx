"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { RefreshCw, Clock, Factory, Home, Truck, Wrench } from 'lucide-react';
import { formatCurrency, formatNumber, getStateDefaults } from '../utils/formatters';

export default function ModularComparisonCalculator() {
  // Initialize with configurable inputs
  const [inputs, setInputs] = useState({
    projectValue: '',
    size: '',
    state: 'VIC', // State for location-based adjustments
    locationType: 'metro', // Metro/regional/remote
    designComplexity: 'medium',
    customisationLevel: 'medium',
    // MODULAR CONFIGURABLE FACTORS:
    modularCostSavings: '12', // % savings (was fixed 15%)
    timeSavings: '35', // % time savings (was fixed 40%)
    siteSuitability: 'good', // How suitable site is for modular
    transportDistance: '50', // km to transport modules
    earlyIncomeWeekly: '1000' // Weekly income if completed early
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Reset handler
  useEffect(() => {
    const handleReset = () => {
      setInputs({
        projectValue: '',
        size: '',
        state: 'VIC',
        locationType: 'metro',
        designComplexity: 'medium',
        customisationLevel: 'medium',
        modularCostSavings: '12',
        timeSavings: '35',
        siteSuitability: 'good',
        transportDistance: '50',
        earlyIncomeWeekly: '1000'
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
    const modularCostSavingsPercent = parseFloat(inputs.modularCostSavings) || 0;
    const timeSavingsPercentInput = parseFloat(inputs.timeSavings) || 0;
    const transportDistance = parseFloat(inputs.transportDistance) || 0;
    const earlyIncomeWeekly = parseFloat(inputs.earlyIncomeWeekly) || 0;
    
    // Get state defaults for construction costs
    const stateDefaults = getStateDefaults(inputs.state);
    
    // BASE TRADITIONAL COSTS (using Construction Cost calculator rates)
    const traditionalBaseCosts = {
      townhouse: 3500,
      house: 3200,
      apartment: 4000,
      commercial: 4500,
      industrial: 2400
    };
    
    // Use average of traditional costs for comparison
    const traditionalCostPerSqm = Object.values(traditionalBaseCosts).reduce((a, b) => a + b, 0) / 
                                 Object.values(traditionalBaseCosts).length;
    
    // Apply state multiplier to traditional
    const traditionalCostPerSqmAdjusted = traditionalCostPerSqm * stateDefaults.constructionCostMultiplier;
    
    // Location type multiplier (same as construction calculator)
    const locationMultiplier = {
      metro: 1.0,
      regional: 1.15,
      remote: 1.35
    }[inputs.locationType] || 1.0;
    
    // Traditional construction time (weeks) based on size
    const traditionalTimeWeeks = Math.max(26, Math.min(78, size / 100 * 26)); // 26-78 weeks
    
    // MODULAR COSTS
    // Base modular cost (after savings)
    const modularCostPerSqmBase = traditionalCostPerSqmAdjusted * (1 - (modularCostSavingsPercent / 100));
    
    // Transport cost adjustment ($/km per sqm)
    const transportCostPerKm = 5; // $5 per km per sqm for module transport
    const transportCost = transportDistance * transportCostPerKm * size / 1000; // Scale for size
    
    // Site suitability adjustment
    const siteSuitabilityMultiplier = {
      poor: 1.15,   // Poor site adds 15% cost
      average: 1.05, // Average adds 5%
      good: 1.0      // Good site no additional cost
    }[inputs.siteSuitability] || 1.0;
    
    // Customisation impact on modular
    const customisationMultiplier = {
      low: 0.95,     // Standard designs cheaper
      medium: 1.0,   // Custom designs standard cost
      high: 1.12     // High customisation adds 12% cost
    }[inputs.customisationLevel] || 1.0;
    
    // Final modular cost calculation
    const modularCostPerSqm = (modularCostPerSqmBase * siteSuitabilityMultiplier * customisationMultiplier) + 
                              (transportCost / size);
    
    // Modular construction time
    const modularTimeWeeks = traditionalTimeWeeks * (1 - (timeSavingsPercentInput / 100));
    
    // Calculate costs
    const traditionalCost = traditionalCostPerSqmAdjusted * locationMultiplier * size;
    const modularCost = modularCostPerSqm * locationMultiplier * size;
    
    const costSavings = traditionalCost - modularCost;
    const costSavingsPercent = traditionalCost > 0 ? (costSavings / traditionalCost) * 100 : 0;
    
    // Time savings
    const timeSavingsWeeks = traditionalTimeWeeks - modularTimeWeeks;
    const timeSavingsPercent = (timeSavingsWeeks / traditionalTimeWeeks) * 100;
    
    // Financing cost savings (due to shorter construction period)
    const interestRate = 0.062; // 6.2% average from state defaults
    const financingSavings = traditionalCost * (interestRate * (timeSavingsWeeks / 52));
    
    // Early income (rental or operational income from earlier completion)
    const earlyIncome = earlyIncomeWeekly * timeSavingsWeeks;
    
    // Total savings including financing and early income
    const totalSavings = costSavings + financingSavings + earlyIncome;
    const totalSavingsPercent = traditionalCost > 0 ? (totalSavings / traditionalCost) * 100 : 0;

    // Additional factors
    const qualityComparison = modularCostSavingsPercent > 10 ? "similar" : "potentially lower";
    const flexibilityNote = inputs.customisationLevel === 'high' ? "Limited design flexibility" : "Adequate flexibility";
    
    let summary = '';
    if (totalSavingsPercent > 15) {
      summary = `Strong case for modular construction with ${totalSavingsPercent.toFixed(1)}% total savings. Quality: ${qualityComparison}.`;
    } else if (totalSavingsPercent > 5) {
      summary = `Modular construction may be viable with ${totalSavingsPercent.toFixed(1)}% savings. Consider site logistics.`;
    } else if (totalSavingsPercent > 0) {
      summary = `Modular shows marginal savings (${totalSavingsPercent.toFixed(1)}%). ${flexibilityNote}.`;
    } else {
      summary = `Traditional construction may be more suitable for this project. Modular shows ${Math.abs(totalSavingsPercent).toFixed(1)}% higher cost.`;
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

    const suitabilityLabels: Record<string, string> = {
      'poor': 'Poor (Limited access, difficult site)',
      'average': 'Average (Moderate access)',
      'good': 'Good (Easy access, flat site)'
    };

    return {
      title: 'Modular vs Traditional Construction Analysis',
      metrics: [
        { 
          label: 'Total Savings', 
          value: formatCurrency(totalSavings), 
          unit: '', 
          color: totalSavingsPercent > 0 ? 'positive' : 'negative',
          details: totalSavingsPercent > 0 ? `${totalSavingsPercent.toFixed(1)}% of traditional cost` : ''
        },
        { 
          label: 'Cost Savings', 
          value: formatCurrency(costSavings), 
          unit: '',
          details: `${costSavingsPercent.toFixed(1)}% cheaper`
        },
        { 
          label: 'Time Savings', 
          value: `${timeSavingsWeeks.toFixed(0)} weeks`, 
          unit: '',
          details: `${timeSavingsPercent.toFixed(0)}% faster`
        },
        { 
          label: 'Early Income', 
          value: formatCurrency(earlyIncome), 
          unit: '' 
        }
      ],
      summary: summary,
      breakdown: [
        { label: 'Project Size', value: `${formatNumber(size)} sqm` },
        { label: 'State', value: stateLabels[inputs.state] || inputs.state },
        { label: 'Location Type', value: inputs.locationType === 'metro' ? 'Metro Area' : 
                                       inputs.locationType === 'regional' ? 'Regional' : 'Remote' },
        { label: 'Traditional Cost', value: formatCurrency(traditionalCost) },
        { label: 'Traditional Time', value: `${traditionalTimeWeeks.toFixed(0)} weeks` },
        { label: 'Modular Cost', value: formatCurrency(modularCost) },
        { label: 'Modular Time', value: `${modularTimeWeeks.toFixed(0)} weeks` },
        { label: 'Modular Cost Savings Setting', value: `${inputs.modularCostSavings}% (Industry: 10-20%)` },
        { label: 'Time Savings Setting', value: `${inputs.timeSavings}% (Industry: 30-50%)` },
        { label: 'Site Suitability', value: suitabilityLabels[inputs.siteSuitability] || inputs.siteSuitability },
        { label: 'Transport Distance', value: `${transportDistance} km` },
        { label: 'Transport Cost Impact', value: formatCurrency(transportCost) },
        { label: 'Customisation Level', value: inputs.customisationLevel.charAt(0).toUpperCase() + inputs.customisationLevel.slice(1) },
        { label: 'Financing Savings', value: formatCurrency(financingSavings) },
        { label: 'Weekly Early Income', value: formatCurrency(earlyIncomeWeekly) }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      projectValue: '',
      size: '',
      state: 'VIC',
      locationType: 'metro',
      designComplexity: 'medium',
      customisationLevel: 'medium',
      modularCostSavings: '12',
      timeSavings: '35',
      siteSuitability: 'good',
      transportDistance: '50',
      earlyIncomeWeekly: '1000'
    });
    setHasCalculated(false);
    window.dispatchEvent(new CustomEvent('resetCalculator'));
  };

  // Quick adjustment buttons for modular factors
  const ModularFactorButtons = ({ field, currentValue, suggestions, label }: {
    field: string;
    currentValue: string;
    suggestions: Array<{ label: string; value: number; description?: string }>;
    label: string;
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
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
            title={suggestion.description}
          >
            {suggestion.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Project Basics */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Project Value/Budget"
          type="text"
          value={inputs.projectValue}
          onChange={(value) => handleInputChange('projectValue', value)}
          prefix="$"
          placeholder="e.g., 1,000,000"
          helpText="Total project budget or expected value"
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

      {/* Location */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            State/Territory
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
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Location Type
          </label>
          <select
            value={inputs.locationType}
            onChange={(e) => setInputs(prev => ({ ...prev, locationType: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
          >
            <option value="metro">Metro Area</option>
            <option value="regional">Regional</option>
            <option value="remote">Remote</option>
          </select>
          {inputs.locationType === 'remote' && (
            <p className="text-xs text-amber-600 mt-1">
              Note: Remote locations may reduce modular savings due to transport costs
            </p>
          )}
        </div>
      </div>

      {/* Modular Configuration Section */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Factory className="w-4 h-4" />
          Modular Construction Settings
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ModularFactorButtons
            field="modularCostSavings"
            currentValue={inputs.modularCostSavings}
            label="Cost Savings vs Traditional"
            suggestions={[
              { label: "Low (8%)", value: 8, description: "Complex projects, high customisation" },
              { label: "Moderate (12%)", value: 12, description: "Standard modular projects" },
              { label: "High (18%)", value: 18, description: "Simple designs, volume projects" },
              { label: "Very High (25%)", value: 25, description: "Repetitive units, off-the-shelf" }
            ]}
          />
          
          <ModularFactorButtons
            field="timeSavings"
            currentValue={inputs.timeSavings}
            label="Time Savings vs Traditional"
            suggestions={[
              { label: "Moderate (30%)", value: 30, description: "Some site work still required" },
              { label: "Typical (35%)", value: 35, description: "Standard modular construction" },
              { label: "High (45%)", value: 45, description: "Full off-site construction" },
              { label: "Very High (60%)", value: 60, description: "Simple modules, ideal site" }
            ]}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Site Suitability for Modular
              <span className="text-xs text-slate-500 ml-2">
                (Access, terrain, services)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-slate-400" />
              <select
                value={inputs.siteSuitability}
                onChange={(e) => setInputs(prev => ({ ...prev, siteSuitability: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
              >
                <option value="good">Good (Easy access, flat, services ready)</option>
                <option value="average">Average (Moderate access, some preparation)</option>
                <option value="poor">Poor (Difficult access, steep, remote services)</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Transport Distance
              <span className="text-xs text-slate-500 ml-2">
                (From factory to site)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-slate-400" />
              <input
                type="number"
                value={inputs.transportDistance}
                onChange={(e) => handleInputChange('transportDistance', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
                min="0"
                max="1000"
                step="10"
              />
              <span className="text-slate-600">km</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <button
                type="button"
                onClick={() => handleInputChange('transportDistance', '20')}
                className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded hover:bg-slate-200"
              >
                Local (20km)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('transportDistance', '100')}
                className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded hover:bg-slate-200"
              >
                Regional (100km)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('transportDistance', '300')}
                className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded hover:bg-slate-200"
              >
                Remote (300km)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Factors */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Design Complexity
          </label>
          <select
            value={inputs.designComplexity}
            onChange={(e) => setInputs(prev => ({ ...prev, designComplexity: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
          >
            <option value="simple">Simple (Standard, repetitive)</option>
            <option value="medium">Medium (Some custom features)</option>
            <option value="complex">Complex (Unique, architectural)</option>
          </select>
          {inputs.designComplexity === 'complex' && (
            <p className="text-xs text-amber-600 mt-1">
              Complex designs may reduce modular savings
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Customisation Level
          </label>
          <select
            value={inputs.customisationLevel}
            onChange={(e) => setInputs(prev => ({ ...prev, customisationLevel: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
          >
            <option value="low">Standard (Off-the-shelf designs)</option>
            <option value="medium">Custom (Modified standard designs)</option>
            <option value="high">Bespoke (Fully custom designs)</option>
          </select>
        </div>
      </div>

      {/* Early Income */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
        <h3 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Early Completion Benefits
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-emerald-900">
              Weekly Income if Completed Early
              <span className="text-xs text-emerald-700 ml-2">
                (Rental, operational income)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">$</span>
              <input
                type="number"
                value={inputs.earlyIncomeWeekly}
                onChange={(e) => handleInputChange('earlyIncomeWeekly', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-emerald-900 bg-white"
                min="0"
                max="10000"
                step="100"
              />
              <span className="text-emerald-600">per week</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <button
                type="button"
                onClick={() => handleInputChange('earlyIncomeWeekly', '500')}
                className="px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200"
              >
                Residential ($500)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('earlyIncomeWeekly', '1500')}
                className="px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200"
              >
                Commercial ($1,500)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('earlyIncomeWeekly', '3000')}
                className="px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200"
              >
                Industrial ($3,000)
              </button>
            </div>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-emerald-800 mb-2">Time Value Benefits</h4>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>• Earlier rental income</li>
              <li>• Reduced holding costs</li>
              <li>• Quicker return on investment</li>
              <li>• Reduced financing costs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Example Scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Factory className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-800">Example 1: VIC Standard Modular</span>
          </div>
          <p className="text-sm text-pink-700">
            $1M project, 200 sqm, metro VIC, standard settings
          </p>
          <button
            onClick={() => {
              setInputs({
                projectValue: '1000000',
                size: '200',
                state: 'VIC',
                locationType: 'metro',
                designComplexity: 'medium',
                customisationLevel: 'medium',
                modularCostSavings: '12',
                timeSavings: '35',
                siteSuitability: 'good',
                transportDistance: '50',
                earlyIncomeWeekly: '1000'
              });
            }}
            className="mt-2 text-sm text-pink-700 hover:text-pink-800 font-medium"
          >
            Load Example →
          </button>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Factory className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">Example 2: NSW Regional Complex</span>
          </div>
          <p className="text-sm text-purple-700">
            $1.5M project, 300 sqm, regional NSW, complex design
          </p>
          <button
            onClick={() => {
              setInputs({
                projectValue: '1500000',
                size: '300',
                state: 'NSW',
                locationType: 'regional',
                designComplexity: 'complex',
                customisationLevel: 'high',
                modularCostSavings: '8',
                timeSavings: '30',
                siteSuitability: 'average',
                transportDistance: '150',
                earlyIncomeWeekly: '2000'
              });
            }}
            className="mt-2 text-sm text-purple-700 hover:text-purple-800 font-medium"
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

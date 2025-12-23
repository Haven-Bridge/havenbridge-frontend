"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { Scale, MapPin, Home, Shield } from 'lucide-react';
import { formatCurrency, calculateStampDuty, calculateAdditionalFees } from '../utils/formatters';

export default function StampDutyCalculator() {
  const [inputs, setInputs] = useState({
    propertyValue: '',
    state: 'VIC',
    isFirstHomeBuyer: 'no',
    propertyType: 'established',
    foreignBuyer: 'no'
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Reset handler for modal reset button
  useEffect(() => {
    const handleReset = () => {
      setInputs({
        propertyValue: '',
        state: 'VIC',
        isFirstHomeBuyer: 'no',
        propertyType: 'established',
        foreignBuyer: 'no'
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
      const hasValues = inputs.propertyValue && parseFloat(inputs.propertyValue) > 0;
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
        calculatorId: 'stamp-duty',
        results: results,
        inputs: inputs
      }
    });
    window.dispatchEvent(event);
  };

  const calculateResults = () => {
    const propertyValue = parseFloat(inputs.propertyValue) || 0;
    const isFirstHome = inputs.isFirstHomeBuyer === 'yes';
    const isForeignBuyer = inputs.foreignBuyer === 'yes';
    
    // Calculate stamp duty using the updated function signature
    const stampDuty = calculateStampDuty(
      propertyValue, 
      inputs.state, 
      isFirstHome,
      inputs.propertyType as "established" | "new" | "vacant"
    );
    
    // Calculate additional fees using state-specific rules
    const additionalFees = calculateAdditionalFees(
      propertyValue, 
      inputs.state, 
      isForeignBuyer
    );
    
    const { transferFee, registrationFee, foreignSurcharge } = additionalFees;
    
    const totalCharges = stampDuty + transferFee + registrationFee + foreignSurcharge;
    const totalCost = propertyValue + totalCharges;
    const chargesPercentage = propertyValue > 0 ? (totalCharges / propertyValue) * 100 : 0;

    // Improved summary logic with state-specific information
    let summary = '';
    if (isFirstHome) {
      if (inputs.state === 'SA' || inputs.state === 'NT') {
        summary = 'No first home buyer concessions available in this state';
      } else {
        summary = 'First home buyer concessions applied based on state rules';
      }
    } else if (isForeignBuyer) {
      const surchargeRates: Record<string, string> = {
        'VIC': '8%',
        'NSW': '8%', 
        'QLD': '7%',
        'SA': '7%',
        'WA': '7%',
        'TAS': '8%',
        'ACT': '8%',
        'NT': '8%'
      };
      summary = `Foreign buyer surcharge applied (${surchargeRates[inputs.state] || 'varies'} rate)`;
    } else {
      summary = `Total government charges are ${chargesPercentage.toFixed(2)}% of property value`;
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
      title: 'Stamp Duty & Government Charges',
      metrics: [
        { 
          label: 'Total Charges', 
          value: formatCurrency(totalCharges), 
          unit: '', 
          color: 'info' 
        },
        { 
          label: 'Stamp Duty', 
          value: formatCurrency(stampDuty), 
          unit: '',
          color: stampDuty === 0 && isFirstHome ? 'positive' : undefined
        },
        { 
          label: 'As Percentage', 
          value: `${chargesPercentage.toFixed(2)}%`, 
          unit: '' 
        },
        { 
          label: 'Total Cost', 
          value: formatCurrency(totalCost), 
          unit: '' 
        }
      ],
      summary: summary,
      breakdown: [
        { label: 'Property Value', value: formatCurrency(propertyValue) },
        { label: 'State/Territory', value: stateLabels[inputs.state] || inputs.state },
        { 
          label: 'First Home Buyer', 
          value: isFirstHome ? 'Yes' : 'No'
        },
        { 
          label: 'Property Type', 
          value: inputs.propertyType === 'established' ? 'Established Home' : 
                 inputs.propertyType === 'new' ? 'New Home' : 'Vacant Land' 
        },
        { 
          label: 'Foreign Buyer', 
          value: isForeignBuyer ? 'Yes' : 'No' 
        },
        { 
          label: 'Stamp Duty Calculation', 
          value: stampDuty === 0 && isFirstHome ? 'Exempt (First Home)' : 'Applied' 
        },
        { 
          label: 'Transfer Fee', 
          value: formatCurrency(transferFee) 
        },
        { 
          label: 'Registration Fee', 
          value: formatCurrency(registrationFee) 
        },
        { 
          label: 'Foreign Surcharge', 
          value: formatCurrency(foreignSurcharge) 
        }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      propertyValue: '',
      state: 'VIC',
      isFirstHomeBuyer: 'no',
      propertyType: 'established',
      foreignBuyer: 'no'
    });
    setHasCalculated(false);
    window.dispatchEvent(new CustomEvent('resetCalculator'));
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Property Value"
          type="text"
          value={inputs.propertyValue}
          onChange={(value) => handleInputChange('propertyValue', value)}
          prefix="$"
          placeholder="e.g., 800,000"
          helpText="Purchase price or market value"
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            State/Territory
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
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            First Home Buyer?
          </label>
          <select
            value={inputs.isFirstHomeBuyer}
            onChange={(e) => setInputs(prev => ({ ...prev, isFirstHomeBuyer: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Property Type
          </label>
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-slate-400" />
            <select
              value={inputs.propertyType}
              onChange={(e) => setInputs(prev => ({ ...prev, propertyType: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="established">Established Home</option>
              <option value="new">New Home</option>
              <option value="vacant">Vacant Land</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Foreign Buyer?
          </label>
          <select
            value={inputs.foreignBuyer}
            onChange={(e) => setInputs(prev => ({ ...prev, foreignBuyer: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">Note</span>
          </div>
          <p className="text-sm text-emerald-700">
            First home buyers may be eligible for concessions or exemptions
          </p>
        </div>
      </div>

      {/* Example Scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Example 1: VIC First Home</span>
          </div>
          <p className="text-sm text-amber-700">
            $550,000 in Victoria, established home, first home buyer
          </p>
          <button
            onClick={() => {
              setInputs({
                propertyValue: '550000',
                state: 'VIC',
                isFirstHomeBuyer: 'yes',
                propertyType: 'established',
                foreignBuyer: 'no'
              });
            }}
            className="mt-2 text-sm text-amber-700 hover:text-amber-800 font-medium"
          >
            Load Example →
          </button>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Example 2: NSW Standard</span>
          </div>
          <p className="text-sm text-blue-700">
            $800,000 in NSW, established home, not first home buyer
          </p>
          <button
            onClick={() => {
              setInputs({
                propertyValue: '800000',
                state: 'NSW',
                isFirstHomeBuyer: 'no',
                propertyType: 'established',
                foreignBuyer: 'no'
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
          disabled={!inputs.propertyValue}
        >
          <Scale className="w-4 h-4" />
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

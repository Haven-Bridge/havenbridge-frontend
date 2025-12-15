"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { Scale, MapPin, Home, Shield } from 'lucide-react';
import { formatCurrency, calculateStampDuty } from '../utils/formatters';

export default function StampDutyCalculator() {
  const [inputs, setInputs] = useState({
    propertyValue: '800000',
    state: 'VIC',
    isFirstHomeBuyer: 'no',
    propertyType: 'established',
    foreignBuyer: 'no'
  });

  const [hasCalculated, setHasCalculated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(inputs).some(val => val && (typeof val === 'string'))) {
        calculateAndUpdateResults();
        setHasCalculated(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputs]);

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateAndUpdateResults = () => {
    window.dispatchEvent(new CustomEvent('calculationStarted'));
    const results = calculateResults();
    
    const event = new CustomEvent('calculatorResultsUpdated', {
      detail: {
        calculatorId: 'stamp-duty',
        results: results
      }
    });
    window.dispatchEvent(event);
  };

  const calculateResults = () => {
    const propertyValue = parseFloat(inputs.propertyValue) || 0;
    const isFirstHome = inputs.isFirstHomeBuyer === 'yes';
    
    // Calculate stamp duty
    const stampDuty = calculateStampDuty(propertyValue, inputs.state, isFirstHome);
    
    // Additional charges (simplified)
    const transferFee = propertyValue * 0.0002;
    const registrationFee = 200;
    const foreignSurcharge = inputs.foreignBuyer === 'yes' ? propertyValue * 0.08 : 0;
    
    const totalCharges = stampDuty + transferFee + registrationFee + foreignSurcharge;
    const totalCost = propertyValue + totalCharges;
    const chargesPercentage = (totalCharges / propertyValue) * 100;

    let summary = '';
    if (inputs.isFirstHomeBuyer === 'yes') {
      summary = 'First home buyers may qualify for additional concessions or exemptions';
    } else if (inputs.foreignBuyer === 'yes') {
      summary = 'Foreign buyers pay additional surcharge of 8% in most states';
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
        { label: 'Total Charges', value: formatCurrency(totalCharges), unit: '', color: 'info' },
        { label: 'Stamp Duty', value: formatCurrency(stampDuty), unit: '' },
        { label: 'As Percentage', value: `${chargesPercentage.toFixed(2)}%`, unit: '' },
        { label: 'Total Cost', value: formatCurrency(totalCost), unit: '' }
      ],
      summary: summary,
      breakdown: [
        { label: 'Property Value', value: formatCurrency(propertyValue) },
        { label: 'State/Territory', value: stateLabels[inputs.state] || inputs.state },
        { label: 'First Home Buyer', value: inputs.isFirstHomeBuyer === 'yes' ? 'Yes' : 'No' },
        { label: 'Property Type', value: inputs.propertyType === 'established' ? 'Established Home' : inputs.propertyType === 'new' ? 'New Home' : 'Vacant Land' },
        { label: 'Foreign Buyer', value: inputs.foreignBuyer === 'yes' ? 'Yes' : 'No' },
        { label: 'Foreign Surcharge', value: formatCurrency(foreignSurcharge) }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      propertyValue: '800000',
      state: 'VIC',
      isFirstHomeBuyer: 'no',
      propertyType: 'established',
      foreignBuyer: 'no'
    });
    setHasCalculated(false);
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
          placeholder="800,000"
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
              onChange={(e) => handleInputChange('state', e.target.value)}
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
            onChange={(e) => handleInputChange('isFirstHomeBuyer', e.target.value)}
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
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
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
            onChange={(e) => handleInputChange('foreignBuyer', e.target.value)}
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

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={calculateAndUpdateResults}
          className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          disabled={!Object.values(inputs).some(val => val)}
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

"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { Home, Users, DollarSign, Percent, Bed } from 'lucide-react';
import { formatCurrency, formatPercentage } from '../utils/formatters';

export default function RoomingHouseCalculator() {
  const [inputs, setInputs] = useState({
    propertyPrice: '1000000',
    numberOfRooms: '8',
    weeklyRent: '300',
    occupancyRate: '85',
    annualExpenses: '25000',
    managementFee: '8'
  });

  const [hasCalculated, setHasCalculated] = useState(false);

  // Calculate whenever inputs change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.values(inputs).some(val => val && parseFloat(val) > 0)) {
        calculateAndUpdateResults();
        setHasCalculated(true);
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
    
    const event = new CustomEvent('calculatorResultsUpdated', {
      detail: {
        calculatorId: 'rooming-house',
        results: results
      }
    });
    window.dispatchEvent(event);
  };

  const calculateResults = () => {
    const propertyPrice = parseFloat(inputs.propertyPrice) || 0;
    const numberOfRooms = parseFloat(inputs.numberOfRooms) || 0;
    const weeklyRent = parseFloat(inputs.weeklyRent) || 0;
    const occupancyRate = parseFloat(inputs.occupancyRate) || 0;
    const annualExpenses = parseFloat(inputs.annualExpenses) || 0;
    const managementFee = parseFloat(inputs.managementFee) || 0;

    // Calculations
    const annualRent = weeklyRent * numberOfRooms * 52 * (occupancyRate / 100);
    const managementCost = annualRent * (managementFee / 100);
    const totalExpenses = annualExpenses + managementCost;
    const netIncome = annualRent - totalExpenses;
    
    const grossYield = (annualRent / propertyPrice) * 100;
    const netYield = (netIncome / propertyPrice) * 100;
    const cashFlow = netIncome / 12;
    const roi = (netIncome / (propertyPrice * 0.3)) * 100;

    let summary = '';
    if (netYield >= 6) {
      summary = 'Strong investment with above average returns for rooming houses';
    } else if (netYield >= 4) {
      summary = 'Competitive returns for the market';
    } else {
      summary = 'Below average - review costs or rental rates';
    }

    return {
      title: 'Rooming House Yield Analysis',
      metrics: [
        { label: 'Gross Yield', value: formatPercentage(grossYield), unit: '', color: 'info' },
        { label: 'Net Yield', value: formatPercentage(netYield), unit: '', color: netYield >= 6 ? 'positive' : netYield >= 4 ? 'warning' : 'negative' },
        { label: 'Monthly Cash Flow', value: formatCurrency(cashFlow), unit: '' },
        { label: 'Annual ROI', value: formatPercentage(roi), unit: '' }
      ],
      summary: summary,
      breakdown: [
        { label: 'Property Price', value: formatCurrency(propertyPrice) },
        { label: 'Number of Rooms', value: numberOfRooms.toString() },
        { label: 'Weekly Rent per Room', value: formatCurrency(weeklyRent) },
        { label: 'Occupancy Rate', value: formatPercentage(occupancyRate) },
        { label: 'Annual Expenses', value: formatCurrency(annualExpenses) },
        { label: 'Management Fee', value: formatPercentage(managementFee) }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      propertyPrice: '1000000',
      numberOfRooms: '8',
      weeklyRent: '300',
      occupancyRate: '85',
      annualExpenses: '25000',
      managementFee: '8'
    });
    setHasCalculated(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Property Purchase Price"
          type="text"
          value={inputs.propertyPrice}
          onChange={(value) => handleInputChange('propertyPrice', value)}
          prefix="$"
          placeholder="1,000,000"
          helpText="Total purchase price of the property"
        />
        <InputField
          label="Number of Rooms"
          type="text"
          value={inputs.numberOfRooms}
          onChange={(value) => handleInputChange('numberOfRooms', value)}
          suffix="rooms"
          placeholder="8"
          helpText="Total number of rentable rooms"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Weekly Rent per Room"
          type="text"
          value={inputs.weeklyRent}
          onChange={(value) => handleInputChange('weeklyRent', value)}
          prefix="$"
          placeholder="300"
          helpText="Weekly rent charged per room"
        />
        <InputField
          label="Occupancy Rate"
          type="text"
          value={inputs.occupancyRate}
          onChange={(value) => handleInputChange('occupancyRate', value)}
          suffix="%"
          placeholder="85"
          helpText="Expected occupancy percentage"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Annual Expenses"
          type="text"
          value={inputs.annualExpenses}
          onChange={(value) => handleInputChange('annualExpenses', value)}
          prefix="$"
          placeholder="25,000"
          helpText="Annual operating expenses"
        />
        <InputField
          label="Management Fee"
          type="text"
          value={inputs.managementFee}
          onChange={(value) => handleInputChange('managementFee', value)}
          suffix="%"
          placeholder="8"
          helpText="Property management fee percentage"
        />
      </div>

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Home className="w-4 h-4 text-cyan-600" />
          <span className="text-sm font-medium text-cyan-800">Rooming House Example</span>
        </div>
        <p className="text-sm text-cyan-700">
          8-room property with $300/week rent, 85% occupancy, $25k annual expenses
        </p>
        <button
          onClick={() => {
            setInputs({
              propertyPrice: '1000000',
              numberOfRooms: '8',
              weeklyRent: '300',
              occupancyRate: '85',
              annualExpenses: '25000',
              managementFee: '8'
            });
          }}
          className="mt-2 text-sm text-cyan-700 hover:text-cyan-800 font-medium"
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
          <DollarSign className="w-4 h-4" />
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

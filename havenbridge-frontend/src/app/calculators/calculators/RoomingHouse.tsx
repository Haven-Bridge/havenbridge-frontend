"use client";

import React, { useState } from 'react';
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

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
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
    const roi = (netIncome / (propertyPrice * 0.3)) * 100; // Assuming 30% deposit

    return {
      annualRent,
      totalExpenses,
      netIncome,
      grossYield,
      netYield,
      cashFlow,
      roi
    };
  };

  const results = calculateResults();

  return (
    <>
      {/* Inputs Section */}
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Property Purchase Price"
            type="number"
            value={inputs.propertyPrice}
            onChange={(value) => handleInputChange('propertyPrice', value)}
            prefix="$"
            placeholder="1,000,000"
            min={0}
            step={1000}
          />
          <InputField
            label="Number of Rooms"
            type="number"
            value={inputs.numberOfRooms}
            onChange={(value) => handleInputChange('numberOfRooms', value)}
            suffix="rooms"
            placeholder="8"
            min={1}
            max={20}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Weekly Rent per Room"
            type="number"
            value={inputs.weeklyRent}
            onChange={(value) => handleInputChange('weeklyRent', value)}
            prefix="$"
            placeholder="300"
            min={0}
            step={10}
          />
          <InputField
            label="Occupancy Rate"
            type="number"
            value={inputs.occupancyRate}
            onChange={(value) => handleInputChange('occupancyRate', value)}
            suffix="%"
            placeholder="85"
            min={0}
            max={100}
            step={0.1}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Annual Expenses"
            type="number"
            value={inputs.annualExpenses}
            onChange={(value) => handleInputChange('annualExpenses', value)}
            prefix="$"
            placeholder="25,000"
            min={0}
            step={1000}
          />
          <InputField
            label="Management Fee"
            type="number"
            value={inputs.managementFee}
            onChange={(value) => handleInputChange('managementFee', value)}
            suffix="%"
            placeholder="8"
            min={0}
            max={20}
            step={0.1}
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
        </div>
      </div>

      {/* Results Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.updateRoomingHouseResults = function() {
            const container = document.getElementById('results-container');
            if (!container) return;
            
            const results = ${JSON.stringify(results)};
            const inputs = ${JSON.stringify(inputs)};
            
            container.innerHTML = \`
              <div class="space-y-6">
                <!-- Yield Summary -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <div class="flex items-center justify-between mb-6">
                    <h4 class="font-bold text-slate-900">Yield Analysis</h4>
                    <div class="flex items-center gap-2">
                      <Percent class="w-4 h-4 text-slate-400" />
                      <span class="text-sm text-slate-600">Returns</span>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="text-center p-4 bg-cyan-50 rounded-lg">
                      <div class="text-sm text-cyan-700 mb-1">Gross Yield</div>
                      <div class="text-2xl font-bold text-cyan-600">\${results.grossYield.toFixed(1)}%</div>
                    </div>
                    <div class="text-center p-4 bg-emerald-50 rounded-lg">
                      <div class="text-sm text-emerald-700 mb-1">Net Yield</div>
                      <div class="text-2xl font-bold text-emerald-600">\${results.netYield.toFixed(1)}%</div>
                    </div>
                  </div>
                  
                  <div class="text-center">
                    <div class="text-lg font-bold text-slate-900 mb-1">
                      \${results.netYield >= 6 ? 'Strong Investment' : results.netYield >= 4 ? 'Good Investment' : 'Consider Reviewing'}
                    </div>
                    <div class="text-sm text-slate-600">
                      \${results.netYield >= 6 ? 'Above average returns for rooming houses' : 
                        results.netYield >= 4 ? 'Competitive returns for the market' : 
                        'Below average - review costs or rental rates'}
                    </div>
                  </div>
                </div>
                
                <!-- Income Breakdown -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-4">Income & Expenses</h4>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-slate-600">Gross Annual Rent</span>
                        <span class="font-bold text-slate-900">\${formatCurrency(results.annualRent)}</span>
                      </div>
                      <div class="text-xs text-slate-500">
                        \${inputs.numberOfRooms} rooms × \${formatCurrency(parseFloat(inputs.weeklyRent) || 0)}/week × \${inputs.occupancyRate}% occupancy
                      </div>
                    </div>
                    
                    <div class="border-t border-slate-200 pt-4">
                      <div class="flex justify-between items-center mb-2">
                        <span class="text-slate-600">Total Expenses</span>
                        <span class="font-bold text-slate-900">\${formatCurrency(results.totalExpenses)}</span>
                      </div>
                      <div class="text-sm text-slate-500 space-y-1">
                        <div class="flex justify-between">
                          <span>Annual Expenses:</span>
                          <span>\${formatCurrency(parseFloat(inputs.annualExpenses) || 0)}</span>
                        </div>
                        <div class="flex justify-between">
                          <span>Management (\${inputs.managementFee}%):</span>
                          <span>\${formatCurrency(results.totalExpenses - (parseFloat(inputs.annualExpenses) || 0))}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="border-t border-slate-200 pt-4">
                      <div class="flex justify-between items-center">
                        <span class="text-slate-700 font-medium">Net Annual Income</span>
                        <span class="text-xl font-bold \${results.netIncome >= 0 ? 'text-emerald-600' : 'text-red-600'}">
                          \${formatCurrency(results.netIncome)}
                        </span>
                      </div>
                      <div class="text-sm text-slate-500 mt-1">
                        Monthly cash flow: \${formatCurrency(results.cashFlow)}
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- ROI -->
                <div class="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-6 text-white">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="font-bold">Return on Investment</h4>
                    <DollarSign class="w-5 h-5 text-amber-400" />
                  </div>
                  <div class="text-center mb-4">
                    <div class="text-4xl font-bold text-amber-400">\${results.roi.toFixed(1)}%</div>
                    <div class="text-sm text-gray-300">Annual ROI (30% deposit)</div>
                  </div>
                  <div class="text-sm text-gray-300">
                    Based on \${formatCurrency(parseFloat(inputs.propertyPrice) || 0)} property with 30% deposit
                  </div>
                </div>
              </div>
            \`;
          };
          
          // Update results when inputs change
          document.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', window.updateRoomingHouseResults);
          });
          
          // Initial update
          window.updateRoomingHouseResults();
        `
      }} />
    </>
  );
}

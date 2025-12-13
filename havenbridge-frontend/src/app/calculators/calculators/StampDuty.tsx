"use client";

import React, { useState } from 'react';
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

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
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

    return {
      stampDuty,
      transferFee,
      registrationFee,
      foreignSurcharge,
      totalCharges,
      totalCost,
      chargesPercentage
    };
  };

  const results = calculateResults();

  return (
    <>
      {/* Inputs Section */}
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Property Value"
            type="number"
            value={inputs.propertyValue}
            onChange={(value) => handleInputChange('propertyValue', value)}
            prefix="$"
            placeholder="800,000"
            min={0}
            step={1000}
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              State/Territory
            </label>
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
      </div>

      {/* Results Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.updateStampDutyResults = function() {
            const container = document.getElementById('results-container');
            if (!container) return;
            
            const results = ${JSON.stringify(results)};
            const inputs = ${JSON.stringify(inputs)};
            
            container.innerHTML = \`
              <div class="space-y-6">
                <!-- Total Charges -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <div class="flex items-center justify-between mb-6">
                    <h4 class="font-bold text-slate-900">Total Government Charges</h4>
                    <div class="flex items-center gap-2">
                      <Scale class="w-4 h-4 text-slate-400" />
                      <span class="text-sm text-slate-600">\${inputs.state}</span>
                    </div>
                  </div>
                  
                  <div class="text-center mb-6">
                    <div class="text-4xl font-bold text-slate-900 mb-2">\${formatCurrency(results.totalCharges)}</div>
                    <div class="text-sm text-slate-600">
                      \${results.chargesPercentage.toFixed(2)}% of property value
                    </div>
                  </div>
                  
                  <div class="space-y-3">
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Stamp Duty</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.stampDuty)}</span>
                    </div>
                    \${inputs.foreignBuyer === 'yes' ? \`
                      <div class="flex justify-between items-center">
                        <span class="text-slate-600">Foreign Buyer Surcharge</span>
                        <span class="font-bold text-red-600">\${formatCurrency(results.foreignSurcharge)}</span>
                      </div>
                    \` : ''}
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Transfer Fee</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.transferFee)}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Registration Fee</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.registrationFee)}</span>
                    </div>
                  </div>
                </div>
                
                <!-- First Home Buyer Info -->
                \${inputs.isFirstHomeBuyer === 'yes' ? \`
                  <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                    <div class="flex items-center gap-3 mb-4">
                      <Home class="w-5 h-5 text-amber-600" />
                      <h4 class="font-bold text-amber-900">First Home Buyer Benefits</h4>
                    </div>
                    <ul class="space-y-2 text-sm text-amber-800">
                      <li class="flex items-start gap-2">
                        <div class="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5"></div>
                        <span>May qualify for stamp duty concessions or exemptions</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div class="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5"></div>
                        <span>First Home Owner Grant may be available for new properties</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <div class="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5"></div>
                        <span>Check state government websites for current incentives</span>
                      </li>
                    </ul>
                  </div>
                \` : ''}
                
                <!-- Total Cost -->
                <div class="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-6 text-white">
                  <h4 class="font-bold mb-4">Total Property Cost</h4>
                  <div class="text-center mb-4">
                    <div class="text-3xl font-bold text-white mb-2">\${formatCurrency(results.totalCost)}</div>
                    <div class="text-sm text-gray-300">Property value + all government charges</div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-3 bg-white/10 rounded-lg">
                      <div class="text-sm text-gray-300 mb-1">Property Value</div>
                      <div class="font-bold">\${formatCurrency(parseFloat(inputs.propertyValue) || 0)}</div>
                    </div>
                    <div class="text-center p-3 bg-white/10 rounded-lg">
                      <div class="text-sm text-gray-300 mb-1">Total Charges</div>
                      <div class="font-bold">\${formatCurrency(results.totalCharges)}</div>
                    </div>
                  </div>
                </div>
                
                <!-- State Comparison -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-4">State Comparison</h4>
                  <div class="text-sm text-slate-600 mb-3">
                    Stamp duty for \${formatCurrency(parseFloat(inputs.propertyValue) || 0)} property:
                  </div>
                  <div class="space-y-2">
                    \${['VIC', 'NSW', 'QLD'].map(state => {
                      const duty = calculateStampDuty(parseFloat(inputs.propertyValue) || 0, state, inputs.isFirstHomeBuyer === 'yes');
                      const isCurrent = state === inputs.state;
                      return \`
                        <div class="flex justify-between items-center p-2 \${isCurrent ? 'bg-cyan-50 rounded' : ''}">
                          <span class="\${isCurrent ? 'font-medium text-cyan-700' : 'text-slate-600'}">\${state}</span>
                          <span class="\${isCurrent ? 'font-bold text-cyan-700' : 'font-medium text-slate-700'}">
                            \${formatCurrency(duty)}
                          </span>
                        </div>
                      \`;
                    }).join('')}
                  </div>
                </div>
              </div>
            \`;
          };
          
          // Update results when inputs change
          document.querySelectorAll('input, select').forEach(element => {
            element.addEventListener('input', window.updateStampDutyResults);
            element.addEventListener('change', window.updateStampDutyResults);
          });
          
          // Initial update
          window.updateStampDutyResults();
        `
      }} />
    </>
  );
}

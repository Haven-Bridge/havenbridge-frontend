"use client";

import React, { useState } from 'react';
import InputField from '../components/InputField';
import { RefreshCw, Clock, DollarSign, TrendingUp, Factory, Home } from 'lucide-react';
import { formatCurrency, formatNumber } from '../utils/formatters';

export default function ModularComparisonCalculator() {
  const [inputs, setInputs] = useState({
    projectValue: '1000000',
    size: '200',
    location: 'metro',
    complexity: 'medium',
    customisation: 'medium'
  });

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateResults = () => {
    const projectValue = parseFloat(inputs.projectValue) || 0;
    const size = parseFloat(inputs.size) || 0;
    
    // Traditional construction costs
    const traditionalCostPerSqm = 3200; // Base
    const traditionalTimeWeeks = 52; // Base weeks
    
    // Modular construction costs (typically 10-20% less)
    const modularCostReduction = 0.15; // 15% less
    const modularCostPerSqm = traditionalCostPerSqm * (1 - modularCostReduction);
    
    // Time savings (30-50% faster)
    const modularTimeSavings = 0.4; // 40% faster
    const modularTimeWeeks = traditionalTimeWeeks * (1 - modularTimeSavings);
    
    // Calculate costs
    const traditionalCost = traditionalCostPerSqm * size;
    const modularCost = modularCostPerSqm * size;
    const costSavings = traditionalCost - modularCost;
    const costSavingsPercent = (costSavings / traditionalCost) * 100;
    
    // Calculate time savings
    const timeSavingsWeeks = traditionalTimeWeeks - modularTimeWeeks;
    const timeSavingsPercent = (timeSavingsWeeks / traditionalTimeWeeks) * 100;
    
    // Financing cost savings (due to shorter construction period)
    const interestRate = 0.06; // 6% annual
    const financingSavings = traditionalCost * (interestRate * (timeSavingsWeeks / 52));
    
    // Total savings including financing
    const totalSavings = costSavings + financingSavings;
    const totalSavingsPercent = (totalSavings / traditionalCost) * 100;
    
    // ROI comparison (earlier completion = earlier income)
    const weeklyRentalValue = 1000; // Example weekly rental value
    const earlyIncome = weeklyRentalValue * timeSavingsWeeks;

    return {
      traditionalCost,
      modularCost,
      costSavings,
      costSavingsPercent,
      traditionalTimeWeeks,
      modularTimeWeeks,
      timeSavingsWeeks,
      timeSavingsPercent,
      financingSavings,
      totalSavings,
      totalSavingsPercent,
      earlyIncome
    };
  };

  const results = calculateResults();

  return (
    <>
      {/* Inputs Section */}
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Project Value"
            type="number"
            value={inputs.projectValue}
            onChange={(value) => handleInputChange('projectValue', value)}
            prefix="$"
            placeholder="1,000,000"
            min={0}
            step={1000}
          />
          
          <InputField
            label="Building Size"
            type="number"
            value={inputs.size}
            onChange={(value) => handleInputChange('size', value)}
            suffix="sqm"
            placeholder="200"
            min={50}
            max={5000}
            step={10}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Location
            </label>
            <select
              value={inputs.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="metro">Metro Area</option>
              <option value="regional">Regional</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Design Complexity
            </label>
            <select
              value={inputs.complexity}
              onChange={(e) => handleInputChange('complexity', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="simple">Simple</option>
              <option value="medium">Medium</option>
              <option value="complex">Complex</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Customisation Level
            </label>
            <select
              value={inputs.customisation}
              onChange={(e) => handleInputChange('customisation', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="low">Standard</option>
              <option value="medium">Custom</option>
              <option value="high">Bespoke</option>
            </select>
          </div>
          
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Factory className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-800">Modular Advantage</span>
            </div>
            <p className="text-sm text-pink-700">
              Factory construction reduces weather delays and improves quality control
            </p>
          </div>
        </div>
      </div>

      {/* Results Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.updateModularComparisonResults = function() {
            const container = document.getElementById('results-container');
            if (!container) return;
            
            const results = ${JSON.stringify(results)};
            
            container.innerHTML = \`
              <div class="space-y-6">
                <!-- Cost Comparison -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-6">Cost Comparison</h4>
                  
                  <div class="grid grid-cols-2 gap-6 mb-6">
                    <!-- Traditional -->
                    <div class="text-center p-4 border border-slate-200 rounded-lg">
                      <div class="flex items-center justify-center gap-2 mb-3">
                        <Home class="w-5 h-5 text-slate-400" />
                        <div class="text-sm font-medium text-slate-700">Traditional</div>
                      </div>
                      <div class="text-2xl font-bold text-slate-900 mb-1">\${formatCurrency(results.traditionalCost)}</div>
                      <div class="text-xs text-slate-500">Construction Cost</div>
                    </div>
                    
                    <!-- Modular -->
                    <div class="text-center p-4 border border-cyan-200 rounded-lg bg-cyan-50">
                      <div class="flex items-center justify-center gap-2 mb-3">
                        <Factory class="w-5 h-5 text-cyan-600" />
                        <div class="text-sm font-medium text-cyan-700">Modular</div>
                      </div>
                      <div class="text-2xl font-bold text-cyan-600 mb-1">\${formatCurrency(results.modularCost)}</div>
                      <div class="text-xs text-cyan-500">Construction Cost</div>
                    </div>
                  </div>
                  
                  <!-- Savings -->
                  <div class="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="text-sm font-medium text-emerald-800">Total Cost Savings</div>
                        <div class="text-xs text-emerald-600">Including financing benefits</div>
                      </div>
                      <div class="text-right">
                        <div class="text-xl font-bold text-emerald-700">\${formatCurrency(results.totalSavings)}</div>
                        <div class="text-sm text-emerald-600">(\${results.totalSavingsPercent.toFixed(1)}%)</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Time Comparison -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-6">Time Comparison</h4>
                  
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-slate-600">Traditional Construction</span>
                        <span class="font-bold text-slate-900">\${results.traditionalTimeWeeks} weeks</span>
                      </div>
                      <div class="w-full bg-slate-200 rounded-full h-2">
                        <div class="bg-slate-400 h-2 rounded-full" style="width: 100%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-slate-600">Modular Construction</span>
                        <span class="font-bold text-cyan-600">\${results.modularTimeWeeks} weeks</span>
                      </div>
                      <div class="w-full bg-cyan-100 rounded-full h-2">
                        <div 
                          class="bg-cyan-500 h-2 rounded-full" 
                          style="width: \${(results.modularTimeWeeks / results.traditionalTimeWeeks) * 100}%"
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <Clock class="w-4 h-4 text-amber-600" />
                        <div class="text-sm font-medium text-amber-800">Time Savings</div>
                      </div>
                      <div class="text-right">
                        <div class="text-lg font-bold text-amber-700">\${results.timeSavingsWeeks} weeks</div>
                        <div class="text-sm text-amber-600">(\${results.timeSavingsPercent.toFixed(0)}% faster)</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Financial Benefits -->
                <div class="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-6 text-white">
                  <h4 class="font-bold mb-6">Financial Benefits</h4>
                  
                  <div class="space-y-4">
                    <div class="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <div class="flex items-center gap-3">
                        <DollarSign class="w-5 h-5 text-amber-400" />
                        <div>
                          <div class="text-sm text-gray-300">Construction Cost Savings</div>
                          <div class="text-xs text-gray-400">Direct build cost reduction</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="font-bold text-amber-400">\${formatCurrency(results.costSavings)}</div>
                        <div class="text-sm text-gray-300">\${results.costSavingsPercent.toFixed(1)}%</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <div class="flex items-center gap-3">
                        <TrendingUp class="w-5 h-5 text-emerald-400" />
                        <div>
                          <div class="text-sm text-gray-300">Financing Cost Savings</div>
                          <div class="text-xs text-gray-400">Shorter construction period</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="font-bold text-emerald-400">\${formatCurrency(results.financingSavings)}</div>
                        <div class="text-sm text-gray-300">6% interest savings</div>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                      <div class="flex items-center gap-3">
                        <RefreshCw class="w-5 h-5 text-cyan-400" />
                        <div>
                          <div class="text-sm text-gray-300">Early Revenue Potential</div>
                          <div class="text-xs text-gray-400">Earlier project completion</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="font-bold text-cyan-400">+\${formatCurrency(results.earlyIncome)}</div>
                        <div class="text-sm text-gray-300">Potential early income</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Recommendation -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-4">Recommendation</h4>
                  
                  <div class="space-y-4">
                    <div class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div class="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      </div>
                      <div>
                        <div class="font-medium text-slate-900">Modular is recommended when:</div>
                        <ul class="text-sm text-slate-600 mt-1 space-y-1">
                          <li>• Time to market is critical</li>
                          <li>• Site access is challenging</li>
                          <li>• Quality consistency is important</li>
                          <li>• Weather conditions are unfavorable</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                      <div>
                        <div class="font-medium text-slate-900">Traditional may be better when:</div>
                        <ul class="text-sm text-slate-600 mt-1 space-y-1">
                          <li>• Highly custom design is required</li>
                          <li>• Local labor costs are very low</li>
                          <li>• Project timeline is flexible</li>
                          <li>• Site is easily accessible</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            \`;
          };
          
          // Update results when inputs change
          document.querySelectorAll('input, select').forEach(element => {
            element.addEventListener('input', window.updateModularComparisonResults);
            element.addEventListener('change', window.updateModularComparisonResults);
          });
          
          // Initial update
          window.updateModularComparisonResults();
        `
      }} />
    </>
  );
}

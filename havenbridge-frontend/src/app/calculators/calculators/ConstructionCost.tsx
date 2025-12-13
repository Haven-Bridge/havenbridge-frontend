"use client";

import React, { useState } from 'react';
import InputField from '../components/InputField';
import { Building2, Ruler, Layers, Truck, Wrench } from 'lucide-react';
import { formatCurrency, formatNumber } from '../utils/formatters';

export default function ConstructionCostCalculator() {
  const [inputs, setInputs] = useState({
    propertyType: 'townhouse',
    size: '200',
    quality: 'medium',
    location: 'metro',
    floors: '2',
    siteComplexity: 'medium'
  });

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateResults = () => {
    const size = parseFloat(inputs.size) || 0;
    
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
    const floorMultiplier = parseFloat(inputs.floors) > 2 ? 1.1 : 1.0;
    
    // Calculate costs
    const costPerSqm = baseCost * locationMultiplier * complexityMultiplier * floorMultiplier;
    const constructionCost = costPerSqm * size;
    
    // Additional costs
    const designFees = constructionCost * 0.08;
    const councilFees = constructionCost * 0.03;
    const contingency = constructionCost * 0.1;
    
    const totalProjectCost = constructionCost + designFees + councilFees + contingency;

    return {
      costPerSqm,
      constructionCost,
      designFees,
      councilFees,
      contingency,
      totalProjectCost
    };
  };

  const results = calculateResults();

  return (
    <>
      {/* Inputs Section */}
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Property Type
            </label>
            <select
              value={inputs.propertyType}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="townhouse">Townhouse</option>
              <option value="house">Detached House</option>
              <option value="apartment">Apartment</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>
          
          <InputField
            label="Total Area"
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
              Quality Level
            </label>
            <select
              value={inputs.quality}
              onChange={(e) => handleInputChange('quality', e.target.value)}
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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Number of Floors"
            type="number"
            value={inputs.floors}
            onChange={(value) => handleInputChange('floors', value)}
            suffix="floors"
            placeholder="2"
            min={1}
            max={10}
          />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Site Complexity
            </label>
            <select
              value={inputs.siteComplexity}
              onChange={(e) => handleInputChange('siteComplexity', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="easy">Easy (Flat, clear)</option>
              <option value="medium">Medium (Some slope)</option>
              <option value="difficult">Difficult (Steep, rocky)</option>
            </select>
          </div>
        </div>

        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-800">Cost Guidelines</span>
          </div>
          <p className="text-sm text-violet-700">
            Costs vary based on materials, design complexity, and market conditions
          </p>
        </div>
      </div>

      {/* Results Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.updateConstructionCostResults = function() {
            const container = document.getElementById('results-container');
            if (!container) return;
            
            const results = ${JSON.stringify(results)};
            const inputs = ${JSON.stringify(inputs)};
            
            // Quality labels
            const qualityLabels = { low: 'Budget', medium: 'Standard', high: 'Premium' };
            const locationLabels = { metro: 'Metro Area', regional: 'Regional', remote: 'Remote' };
            const complexityLabels = { easy: 'Easy', medium: 'Medium', difficult: 'Difficult' };
            const typeLabels = {
              townhouse: 'Townhouse', house: 'Detached House', 
              apartment: 'Apartment', commercial: 'Commercial', industrial: 'Industrial'
            };
            
            container.innerHTML = \`
              <div class="space-y-6">
                <!-- Cost Summary -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <div class="flex items-center justify-between mb-6">
                    <h4 class="font-bold text-slate-900">Cost Summary</h4>
                    <div class="flex items-center gap-2">
                      <Ruler class="w-4 h-4 text-slate-400" />
                      <span class="text-sm text-slate-600">\${inputs.size} sqm</span>
                    </div>
                  </div>
                  
                  <div class="text-center mb-6">
                    <div class="text-4xl font-bold text-slate-900 mb-2">\${formatCurrency(results.totalProjectCost)}</div>
                    <div class="text-sm text-slate-600">
                      Total project cost • \${formatCurrency(results.costPerSqm)} per sqm
                    </div>
                  </div>
                  
                  <!-- Cost Breakdown -->
                  <div class="space-y-3">
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Construction Cost</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.constructionCost)}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Design & Engineering Fees</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.designFees)}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Council & Permit Fees</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.councilFees)}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Contingency (10%)</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.contingency)}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Project Details -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-4">Project Details</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-slate-50 rounded-lg p-4">
                      <div class="text-sm text-slate-600 mb-1">Property Type</div>
                      <div class="font-bold text-slate-900">\${typeLabels[inputs.propertyType]}</div>
                    </div>
                    <div class="bg-slate-50 rounded-lg p-4">
                      <div class="text-sm text-slate-600 mb-1">Quality Level</div>
                      <div class="font-bold text-slate-900">\${qualityLabels[inputs.quality]}</div>
                    </div>
                    <div class="bg-slate-50 rounded-lg p-4">
                      <div class="text-sm text-slate-600 mb-1">Location</div>
                      <div class="font-bold text-slate-900">\${locationLabels[inputs.location]}</div>
                    </div>
                    <div class="bg-slate-50 rounded-lg p-4">
                      <div class="text-sm text-slate-600 mb-1">Site Complexity</div>
                      <div class="font-bold text-slate-900">\${complexityLabels[inputs.siteComplexity]}</div>
                    </div>
                  </div>
                </div>
                
                <!-- Cost Comparison -->
                <div class="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-6 text-white">
                  <h4 class="font-bold mb-4">Cost Per Square Meter</h4>
                  
                  <div class="mb-6">
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-gray-300">Your Project</span>
                      <span class="font-bold text-amber-400">\${formatCurrency(results.costPerSqm)}</span>
                    </div>
                    <div class="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        class="bg-amber-500 h-2 rounded-full" 
                        style="width: \${Math.min(100, (results.costPerSqm / 5000) * 100)}%"
                      ></div>
                    </div>
                  </div>
                  
                  <div class="space-y-3">
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-300">Budget Range</span>
                      <span class="text-sm">\$2,200 - \$3,000</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-300">Standard Range</span>
                      <span class="text-sm">\$3,000 - \$3,800</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-300">Premium Range</span>
                      <span class="text-sm">\$3,800 - \$5,000+</span>
                    </div>
                  </div>
                </div>
                
                <!-- Trade Breakdown (Estimate) -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-4">Estimated Trade Breakdown</h4>
                  <div class="space-y-3">
                    \${[
                      { trade: 'Structure & Frame', percent: 25, icon: '🏗️' },
                      { trade: 'Electrical & Plumbing', percent: 15, icon: '⚡' },
                      { trade: 'Interior Finishes', percent: 20, icon: '🪚' },
                      { trade: 'External Works', percent: 15, icon: '🌳' },
                      { trade: 'Kitchen & Bathrooms', percent: 25, icon: '🚿' }
                    ].map(item => {
                      const amount = results.constructionCost * (item.percent / 100);
                      return \`
                        <div class="flex items-center justify-between">
                          <div class="flex items-center gap-3">
                            <span class="text-lg">\${item.icon}</span>
                            <div>
                              <div class="text-sm font-medium text-slate-700">\${item.trade}</div>
                              <div class="text-xs text-slate-500">\${item.percent}% of construction</div>
                            </div>
                          </div>
                          <div class="font-bold text-slate-900">\${formatCurrency(amount)}</div>
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
            element.addEventListener('input', window.updateConstructionCostResults);
            element.addEventListener('change', window.updateConstructionCostResults);
          });
          
          // Initial update
          window.updateConstructionCostResults();
        `
      }} />
    </>
  );
}
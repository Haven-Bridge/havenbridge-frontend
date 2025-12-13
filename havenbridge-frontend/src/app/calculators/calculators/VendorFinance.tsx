"use client";

import React, { useState } from 'react';
import InputField from '../components/InputField';
import { DollarSign, Calendar, Percent, TrendingUp, Calculator } from 'lucide-react';
import { formatCurrency, formatNumber } from '../utils/formatters';

export default function VendorFinanceCalculator() {
  const [inputs, setInputs] = useState({
    purchasePrice: '800000',
    deposit: '20',
    interestRate: '6',
    term: '5',
    balloonPayment: '0',
    paymentFrequency: 'monthly'
  });

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateResults = () => {
    const purchasePrice = parseFloat(inputs.purchasePrice) || 0;
    const depositPercent = parseFloat(inputs.deposit) || 0;
    const interestRate = parseFloat(inputs.interestRate) || 0;
    const term = parseFloat(inputs.term) || 0;
    const balloonPercent = parseFloat(inputs.balloonPayment) || 0;
    const frequency = inputs.paymentFrequency;
    
    // Calculate loan amount
    const depositAmount = purchasePrice * (depositPercent / 100);
    const loanAmount = purchasePrice - depositAmount;
    const balloonAmount = loanAmount * (balloonPercent / 100);
    const principalAmount = loanAmount - balloonAmount;
    
    // Calculate payments based on frequency
    const periodsPerYear = frequency === 'weekly' ? 52 : 
                          frequency === 'fortnightly' ? 26 : 12;
    const totalPeriods = term * periodsPerYear;
    const periodicRate = (interestRate / 100) / periodsPerYear;
    
    // Calculate periodic payment (excluding balloon)
    let periodicPayment = 0;
    if (periodicRate > 0) {
      periodicPayment = principalAmount * 
        (periodicRate * Math.pow(1 + periodicRate, totalPeriods)) / 
        (Math.pow(1 + periodicRate, totalPeriods) - 1);
    } else {
      periodicPayment = principalAmount / totalPeriods;
    }
    
    // Calculate total payments
    const totalPayments = periodicPayment * totalPeriods;
    const totalInterest = totalPayments - principalAmount;
    const totalCost = depositAmount + totalPayments + balloonAmount;
    
    // Create amortization schedule (first 12 periods)
    const schedule = [];
    let balance = principalAmount;
    for (let i = 1; i <= Math.min(12, totalPeriods); i++) {
      const interest = balance * periodicRate;
      const principal = periodicPayment - interest;
      balance -= principal;
      
      schedule.push({
        period: i,
        payment: periodicPayment,
        principal,
        interest,
        balance
      });
    }

    return {
      depositAmount,
      loanAmount,
      balloonAmount,
      periodicPayment,
      totalPayments,
      totalInterest,
      totalCost,
      schedule,
      frequencyLabel: frequency.charAt(0).toUpperCase() + frequency.slice(1)
    };
  };

  const results = calculateResults();

  return (
    <>
      {/* Inputs Section */}
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Purchase Price"
            type="number"
            value={inputs.purchasePrice}
            onChange={(value) => handleInputChange('purchasePrice', value)}
            prefix="$"
            placeholder="800,000"
            min={0}
            step={1000}
          />
          
          <InputField
            label="Deposit Percentage"
            type="number"
            value={inputs.deposit}
            onChange={(value) => handleInputChange('deposit', value)}
            suffix="%"
            placeholder="20"
            min={0}
            max={100}
            step={1}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Interest Rate"
            type="number"
            value={inputs.interestRate}
            onChange={(value) => handleInputChange('interestRate', value)}
            suffix="%"
            placeholder="6"
            min={0}
            max={20}
            step={0.1}
          />
          
          <InputField
            label="Loan Term"
            type="number"
            value={inputs.term}
            onChange={(value) => handleInputChange('term', value)}
            suffix="years"
            placeholder="5"
            min={1}
            max={30}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            label="Balloon Payment"
            type="number"
            value={inputs.balloonPayment}
            onChange={(value) => handleInputChange('balloonPayment', value)}
            suffix="%"
            placeholder="0"
            min={1}
            max={100}
            step={1}
            helpText="Percentage of loan amount due at end of term"
          />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Payment Frequency
            </label>
            <select
              value={inputs.paymentFrequency}
              onChange={(e) => handleInputChange('paymentFrequency', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
            >
              <option value="monthly">Monthly</option>
              <option value="fortnightly">Fortnightly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-800">Vendor Finance Note</span>
          </div>
          <p className="text-sm text-slate-700">
            Vendor finance allows flexible terms between buyer and seller without traditional bank financing
          </p>
        </div>
      </div>

      {/* Results Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.updateVendorFinanceResults = function() {
            const container = document.getElementById('results-container');
            if (!container) return;
            
            const results = ${JSON.stringify(results)};
            const inputs = ${JSON.stringify(inputs)};
            
            container.innerHTML = \`
              <div class="space-y-6">
                <!-- Payment Summary -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <div class="flex items-center justify-between mb-6">
                    <h4 class="font-bold text-slate-900">Payment Summary</h4>
                    <div class="flex items-center gap-2">
                      <Calendar class="w-4 h-4 text-slate-400" />
                      <span class="text-sm text-slate-600">\${inputs.term} years</span>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="text-center p-4 bg-cyan-50 rounded-lg">
                      <div class="text-sm text-cyan-700 mb-1">\${results.frequencyLabel} Payment</div>
                      <div class="text-2xl font-bold text-cyan-600">\${formatCurrency(results.periodicPayment)}</div>
                    </div>
                    
                    <div class="text-center p-4 bg-slate-50 rounded-lg">
                      <div class="text-sm text-slate-700 mb-1">Total Interest</div>
                      <div class="text-2xl font-bold text-slate-900">\${formatCurrency(results.totalInterest)}</div>
                    </div>
                  </div>
                  
                  <div class="space-y-3">
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Purchase Price</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(parseFloat(inputs.purchasePrice) || 0)}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Deposit (\${inputs.deposit}%)</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.depositAmount)}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-slate-600">Loan Amount</span>
                      <span class="font-bold text-slate-900">\${formatCurrency(results.loanAmount)}</span>
                    </div>
                    \${parseFloat(inputs.balloonPayment) > 0 ? \`
                      <div class="flex justify-between items-center">
                        <span class="text-slate-600">Balloon Payment (\${inputs.balloonPayment}%)</span>
                        <span class="font-bold text-amber-600">\${formatCurrency(results.balloonAmount)}</span>
                      </div>
                    \` : ''}
                  </div>
                </div>
                
                <!-- Total Cost Breakdown -->
                <div class="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-6 text-white">
                  <h4 class="font-bold mb-6">Total Cost Breakdown</h4>
                  
                  <div class="space-y-4">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-300">Purchase Price</span>
                      <span class="font-bold">\${formatCurrency(parseFloat(inputs.purchasePrice) || 0)}</span>
                    </div>
                    
                    <div class="flex justify-between items-center">
                      <span class="text-gray-300">Total Interest Cost</span>
                      <span class="font-bold text-amber-400">+\${formatCurrency(results.totalInterest)}</span>
                    </div>
                    
                    \${parseFloat(inputs.balloonPayment) > 0 ? \`
                      <div class="flex justify-between items-center">
                        <span class="text-gray-300">Balloon Payment</span>
                        <span class="font-bold text-amber-400">+\${formatCurrency(results.balloonAmount)}</span>
                      </div>
                    \` : ''}
                    
                    <div class="border-t border-white/20 pt-4 mt-4">
                      <div class="flex justify-between items-center">
                        <span class="text-lg font-bold">Total Cost of Purchase</span>
                        <span class="text-2xl font-bold text-white">\${formatCurrency(results.totalCost)}</span>
                      </div>
                      <div class="text-sm text-gray-300 mt-1">
                        Including all payments over \${inputs.term} years
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Payment Schedule -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-4">Payment Schedule (First 12 periods)</h4>
                  
                  <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="border-b border-slate-200">
                          <th class="text-left py-2 font-medium text-slate-600">Period</th>
                          <th class="text-right py-2 font-medium text-slate-600">Payment</th>
                          <th class="text-right py-2 font-medium text-slate-600">Principal</th>
                          <th class="text-right py-2 font-medium text-slate-600">Interest</th>
                          <th class="text-right py-2 font-medium text-slate-600">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        \${results.schedule.map(row => \`
                          <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="py-2 text-slate-700">\${row.period}</td>
                            <td class="py-2 text-right font-medium text-slate-900">\${formatCurrency(row.payment)}</td>
                            <td class="py-2 text-right text-emerald-600">\${formatCurrency(row.principal)}</td>
                            <td class="py-2 text-right text-amber-600">\${formatCurrency(row.interest)}</td>
                            <td class="py-2 text-right text-slate-700">\${formatCurrency(row.balance)}</td>
                          </tr>
                        \`).join('')}
                      </tbody>
                    </table>
                  </div>
                  
                  <div class="mt-4 text-sm text-slate-500">
                    Showing first 12 of \${parseInt(inputs.term) * 
                      (inputs.paymentFrequency === 'weekly' ? 52 : 
                       inputs.paymentFrequency === 'fortnightly' ? 26 : 12)} payments
                  </div>
                </div>
                
                <!-- Interest Analysis -->
                <div class="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 class="font-bold text-slate-900 mb-4">Interest Analysis</h4>
                  
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-slate-600">Total Interest Paid</span>
                        <span class="font-bold text-amber-600">\${formatCurrency(results.totalInterest)}</span>
                      </div>
                      <div class="w-full bg-amber-100 rounded-full h-2">
                        <div 
                          class="bg-amber-500 h-2 rounded-full" 
                          style="width: \${Math.min(100, (results.totalInterest / results.loanAmount) * 100)}%"
                        ></div>
                      </div>
                      <div class="text-xs text-slate-500 mt-1">
                        \${((results.totalInterest / results.loanAmount) * 100).toFixed(1)}% of loan amount
                      </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                      <div class="bg-slate-50 rounded-lg p-3">
                        <div class="text-sm text-slate-600 mb-1">Effective Interest Rate</div>
                        <div class="font-bold text-slate-900">\${inputs.interestRate}% p.a.</div>
                      </div>
                      
                      <div class="bg-slate-50 rounded-lg p-3">
                        <div class="text-sm text-slate-600 mb-1">Average Interest per Payment</div>
                        <div class="font-bold text-slate-900">
                          \${formatCurrency(results.totalInterest / (parseInt(inputs.term) * 
                            (inputs.paymentFrequency === 'weekly' ? 52 : 
                             inputs.paymentFrequency === 'fortnightly' ? 26 : 12)))}
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-4">
                      <div class="flex items-center gap-2 mb-2">
                        <TrendingUp class="w-4 h-4 text-emerald-600" />
                        <div class="text-sm font-medium text-emerald-800">Cost Saving Tip</div>
                      </div>
                      <p class="text-sm text-emerald-700">
                        Making extra principal payments can significantly reduce total interest paid over the loan term.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            \`;
          };
          
          // Update results when inputs change
          document.querySelectorAll('input, select').forEach(element => {
            element.addEventListener('input', window.updateVendorFinanceResults);
            element.addEventListener('change', window.updateVendorFinanceResults);
          });
          
          // Initial update
          window.updateVendorFinanceResults();
        `
      }} />
    </>
  );
}

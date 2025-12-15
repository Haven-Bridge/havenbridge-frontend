"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { DollarSign, Calendar, Percent, TrendingUp } from 'lucide-react';
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
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputs(prev => ({ ...prev, [field]: value }));
    }
  };

  const calculateAndUpdateResults = () => {
    window.dispatchEvent(new CustomEvent('calculationStarted'));
    const results = calculateResults();
    
    const event = new CustomEvent('calculatorResultsUpdated', {
      detail: {
        calculatorId: 'vendor-finance',
        results: results
      }
    });
    window.dispatchEvent(event);
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

    // Frequency label
    const frequencyLabels: Record<string, string> = {
      'weekly': 'Weekly',
      'fortnightly': 'Fortnightly',
      'monthly': 'Monthly'
    };

    let summary = '';
    if (interestRate < 5) {
      summary = 'Competitive interest rate for vendor finance arrangement';
    } else if (interestRate < 8) {
      summary = 'Moderate interest rate typical for vendor finance';
    } else {
      summary = 'Higher interest rate - consider negotiating terms';
    }

    return {
      title: 'Vendor Finance Calculator',
      metrics: [
        { label: `${frequencyLabels[frequency] || 'Monthly'} Payment`, value: formatCurrency(periodicPayment), unit: '', color: 'info' },
        { label: 'Total Interest', value: formatCurrency(totalInterest), unit: '' },
        { label: 'Total Cost', value: formatCurrency(totalCost), unit: '' },
        { label: 'Balloon Payment', value: formatCurrency(balloonAmount), unit: '' }
      ],
      summary: summary,
      breakdown: [
        { label: 'Purchase Price', value: formatCurrency(purchasePrice) },
        { label: 'Deposit Amount', value: formatCurrency(depositAmount) },
        { label: 'Loan Amount', value: formatCurrency(loanAmount) },
        { label: 'Interest Rate', value: `${interestRate}% p.a.` },
        { label: 'Loan Term', value: `${term} years` },
        { label: 'Payment Frequency', value: frequencyLabels[frequency] || frequency }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      purchasePrice: '800000',
      deposit: '20',
      interestRate: '6',
      term: '5',
      balloonPayment: '0',
      paymentFrequency: 'monthly'
    });
    setHasCalculated(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Purchase Price"
          type="text"
          value={inputs.purchasePrice}
          onChange={(value) => handleInputChange('purchasePrice', value)}
          prefix="$"
          placeholder="800,000"
          helpText="Total purchase price of the property"
        />
        
        <InputField
          label="Deposit Percentage"
          type="text"
          value={inputs.deposit}
          onChange={(value) => handleInputChange('deposit', value)}
          suffix="%"
          placeholder="20"
          helpText="Initial deposit as percentage of purchase price"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Interest Rate"
          type="text"
          value={inputs.interestRate}
          onChange={(value) => handleInputChange('interestRate', value)}
          suffix="%"
          placeholder="6"
          helpText="Annual interest rate charged by vendor"
        />
        
        <InputField
          label="Loan Term"
          type="text"
          value={inputs.term}
          onChange={(value) => handleInputChange('term', value)}
          suffix="years"
          placeholder="5"
          helpText="Length of the vendor finance agreement"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Balloon Payment"
          type="text"
          value={inputs.balloonPayment}
          onChange={(value) => handleInputChange('balloonPayment', value)}
          suffix="%"
          placeholder="0"
          helpText="Percentage of loan due at end of term (optional)"
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Payment Frequency
          </label>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-slate-400" />
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

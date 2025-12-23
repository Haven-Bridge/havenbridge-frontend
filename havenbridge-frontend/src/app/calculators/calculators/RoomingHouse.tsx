"use client";

import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import { Home, Users, DollarSign, Percent, Bed, Building, CreditCard } from 'lucide-react';
import { formatCurrency, formatPercentage, calculateNetYield, calculateEquityROI, getStateDefaults } from '../utils/formatters';

export default function RoomingHouseCalculator() {
  // Initialize with configurable inputs
  const [inputs, setInputs] = useState({
    propertyPrice: '',
    numberOfRooms: '',
    weeklyRent: '',
    occupancyRate: '',
    annualExpenses: '',
    managementFee: '',
    state: 'VIC', // NEW: State selection
    loanToValueRatio: '70', // NEW: Configurable LVR (was arbitrary 30% equity)
    interestRate: '', // NEW: Will auto-fill from state defaults
    loanTerm: '30', // NEW: Loan term in years
    maintenanceReservePercent: '8', // NEW: Maintenance reserve
    vacancyWeeks: '2.6' // NEW: Weeks vacant per year (calculated from occupancy rate)
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Reset handler for modal reset button
  useEffect(() => {
    const handleReset = () => {
      setInputs({
        propertyPrice: '',
        numberOfRooms: '',
        weeklyRent: '',
        occupancyRate: '',
        annualExpenses: '',
        managementFee: '',
        state: 'VIC',
        loanToValueRatio: '70',
        interestRate: '',
        loanTerm: '30',
        maintenanceReservePercent: '8',
        vacancyWeeks: '2.6'
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
      const hasValues = inputs.propertyPrice && parseFloat(inputs.propertyPrice) > 0;
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

  // Auto-update vacancy weeks when occupancy rate changes
  useEffect(() => {
    if (inputs.occupancyRate) {
      const occupancy = parseFloat(inputs.occupancyRate);
      if (!isNaN(occupancy)) {
        const vacancyPercent = 100 - occupancy;
        const vacancyWeeks = (vacancyPercent / 100) * 52;
        setInputs(prev => ({ ...prev, vacancyWeeks: vacancyWeeks.toFixed(1) }));
      }
    }
  }, [inputs.occupancyRate]);

  // Auto-fill interest rate and other defaults when state changes
  useEffect(() => {
    if (inputs.state) {
      const stateDefaults = getStateDefaults(inputs.state);
      
      setInputs(prev => ({
        ...prev,
        interestRate: prev.interestRate || stateDefaults.averageInterestRate.toFixed(1),
        managementFee: prev.managementFee || stateDefaults.averageManagementFee.toFixed(1),
        occupancyRate: prev.occupancyRate || (100 - stateDefaults.averageVacancyRate).toFixed(1)
      }));
    }
  }, [inputs.state]);

  const calculateAndUpdateResults = () => {
    window.dispatchEvent(new CustomEvent('calculationStarted'));
    const results = calculateResults();
    setResults(results);
    
    const event = new CustomEvent('calculatorResultsUpdated', {
      detail: {
        calculatorId: 'rooming-house',
        results: results,
        inputs: inputs
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
    const loanToValueRatio = parseFloat(inputs.loanToValueRatio) || 0;
    const interestRate = parseFloat(inputs.interestRate) || 0;
    const loanTerm = parseFloat(inputs.loanTerm) || 0;
    const maintenanceReservePercent = parseFloat(inputs.maintenanceReservePercent) || 0;

    // Get state defaults for context
    const stateDefaults = getStateDefaults(inputs.state);

    // Calculations
    const annualRent = weeklyRent * numberOfRooms * 52 * (occupancyRate / 100);
    const managementCost = annualRent * (managementFee / 100);
    
    // Maintenance reserve
    const maintenanceReserve = annualRent * (maintenanceReservePercent / 100);
    
    // Total expenses including maintenance
    const totalExpenses = annualExpenses + managementCost + maintenanceReserve;
    const netIncome = annualRent - totalExpenses;
    
    // Yields
    const grossYield = propertyPrice > 0 ? (annualRent / propertyPrice) * 100 : 0;
    const netYield = calculateNetYield(annualRent, totalExpenses, propertyPrice);
    
    // Monthly cash flow
    const cashFlow = netIncome / 12;
    
    // Loan calculations
    const loanAmount = propertyPrice * (loanToValueRatio / 100);
    const equityAmount = propertyPrice - loanAmount;
    
    // Monthly loan repayment
    const monthlyInterestRate = (interestRate / 100) / 12;
    const totalPayments = loanTerm * 12;
    let monthlyLoanPayment = 0;
    
    if (monthlyInterestRate > 0) {
      monthlyLoanPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / 
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    } else {
      monthlyLoanPayment = loanAmount / totalPayments;
    }
    
    // Cash flow after debt service
    const cashFlowAfterDebt = cashFlow - monthlyLoanPayment;
    
    // ROI calculations
    const roiOnEquity = calculateEquityROI(netIncome, equityAmount);
    const roiOnEquityAfterDebt = calculateEquityROI(netIncome - (monthlyLoanPayment * 12), equityAmount);

    let summary = '';
    if (netYield >= 6) {
      summary = 'Strong investment with above-average returns for rooming houses';
    } else if (netYield >= 4) {
      summary = 'Competitive returns for the market';
    } else if (netYield > 0) {
      summary = 'Below average - review costs or rental rates';
    } else {
      summary = 'Negative cash flow - reconsider investment parameters';
    }

    // Add debt service note if applicable
    if (loanAmount > 0) {
      summary += ` ${cashFlowAfterDebt >= 0 ? 'Positive' : 'Negative'} cash flow after debt service.`;
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
      title: 'Rooming House Investment Analysis',
      metrics: [
        { 
          label: 'Gross Yield', 
          value: formatPercentage(grossYield), 
          unit: '', 
          color: 'info',
          details: `State avg: ${formatPercentage(stateDefaults.averageRentalYield)}`
        },
        { 
          label: 'Net Yield', 
          value: formatPercentage(netYield), 
          unit: '', 
          color: netYield >= 6 ? 'positive' : netYield >= 4 ? 'warning' : 'negative',
          details: netYield >= 4 ? 'Meets minimum target' : 'Below target'
        },
        { 
          label: 'Monthly Cash Flow', 
          value: formatCurrency(cashFlowAfterDebt), 
          unit: '',
          color: cashFlowAfterDebt >= 0 ? 'positive' : 'negative',
          details: loanAmount > 0 ? 'After debt service' : 'Before financing'
        },
        { 
          label: 'ROI on Equity', 
          value: formatPercentage(roiOnEquityAfterDebt), 
          unit: '',
          details: `Based on ${loanToValueRatio}% LVR`
        }
      ],
      summary: summary,
      breakdown: [
        { label: 'Property Price', value: formatCurrency(propertyPrice) },
        { label: 'State', value: stateLabels[inputs.state] || inputs.state },
        { label: 'Number of Rooms', value: numberOfRooms.toString() },
        { label: 'Weekly Rent per Room', value: formatCurrency(weeklyRent) },
        { label: 'Occupancy Rate', value: `${occupancyRate}% (${(52 - parseFloat(inputs.vacancyWeeks)).toFixed(1)} weeks occupied)` },
        { label: 'Annual Gross Rent', value: formatCurrency(annualRent) },
        { label: 'Management Fee', value: `${managementFee}% = ${formatCurrency(managementCost)}` },
        { label: 'Maintenance Reserve', value: `${maintenanceReservePercent}% = ${formatCurrency(maintenanceReserve)}` },
        { label: 'Other Annual Expenses', value: formatCurrency(annualExpenses) },
        { label: 'Total Expenses', value: formatCurrency(totalExpenses) },
        { label: 'Net Operating Income', value: formatCurrency(netIncome) },
        { label: 'Loan-to-Value Ratio', value: `${loanToValueRatio}%` },
        { label: 'Loan Amount', value: formatCurrency(loanAmount) },
        { label: 'Equity/Deposit', value: formatCurrency(equityAmount) },
        { label: 'Interest Rate', value: `${interestRate}% p.a.` },
        { label: 'Monthly Loan Payment', value: formatCurrency(monthlyLoanPayment) }
      ]
    };
  };

  const handleReset = () => {
    setInputs({
      propertyPrice: '',
      numberOfRooms: '',
      weeklyRent: '',
      occupancyRate: '',
      annualExpenses: '',
      managementFee: '',
      state: 'VIC',
      loanToValueRatio: '70',
      interestRate: '',
      loanTerm: '30',
      maintenanceReservePercent: '8',
      vacancyWeeks: '2.6'
    });
    setHasCalculated(false);
    setResults(null);
    window.dispatchEvent(new CustomEvent('resetCalculator'));
  };

  // Quick percentage buttons
  const PercentageButtons = ({ field, currentValue, suggestions }: {
    field: string;
    currentValue: string;
    suggestions: Array<{ label: string; value: number }>;
  }) => (
    <div className="flex flex-wrap gap-2 mt-2">
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
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Property & Location */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Property Purchase Price"
          type="text"
          value={inputs.propertyPrice}
          onChange={(value) => handleInputChange('propertyPrice', value)}
          prefix="$"
          placeholder="e.g., 1,000,000"
          helpText="Total purchase price including stamp duty"
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            State/Territory
            <span className="text-xs text-slate-500 ml-2">
              (Sets default rates)
            </span>
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
      </div>

      {/* Rental Income */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Number of Rooms"
          type="text"
          value={inputs.numberOfRooms}
          onChange={(value) => handleInputChange('numberOfRooms', value)}
          suffix="rooms"
          placeholder="e.g., 8"
          helpText="Total number of rentable rooms"
        />
        
        <InputField
          label="Weekly Rent per Room"
          type="text"
          value={inputs.weeklyRent}
          onChange={(value) => handleInputChange('weeklyRent', value)}
          prefix="$"
          placeholder="e.g., 300"
          helpText="Weekly rent charged per room"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Occupancy Rate"
          type="text"
          value={inputs.occupancyRate}
          onChange={(value) => handleInputChange('occupancyRate', value)}
          suffix="%"
          placeholder="e.g., 85"
          helpText={`Expected occupancy (${inputs.vacancyWeeks} weeks vacant)`}
        />
        
        <InputField
          label="Annual Expenses"
          type="text"
          value={inputs.annualExpenses}
          onChange={(value) => handleInputChange('annualExpenses', value)}
          prefix="$"
          placeholder="e.g., 25,000"
          helpText="Council rates, water, insurance, repairs"
        />
      </div>

      {/* Financing Section */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          Financing & Loan Details
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 text-slate-900">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Loan-to-Value Ratio (LVR)
              <span className="text-xs text-slate-500 ml-2">
                (Was arbitrary 30% equity)
              </span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="50"
                max="90"
                step="5"
                value={inputs.loanToValueRatio}
                onChange={(e) => handleInputChange('loanToValueRatio', e.target.value)}
                className="flex-1"
              />
              <input
                type="number"
                value={inputs.loanToValueRatio}
                onChange={(e) => handleInputChange('loanToValueRatio', e.target.value)}
                className="w-20 px-3 py-2 border rounded"
                min="0"
                max="95"
                step="5"
              />
              <span className="text-slate-600">%</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <button
                type="button"
                onClick={() => handleInputChange('loanToValueRatio', '60')}
                className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                  inputs.loanToValueRatio === '60'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Conservative (60%)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('loanToValueRatio', '70')}
                className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                  inputs.loanToValueRatio === '70'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Standard (70%)
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('loanToValueRatio', '80')}
                className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                  inputs.loanToValueRatio === '80'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Aggressive (80%)
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-900">
              Interest Rate
            </label>
            <InputField
              type="text"
              value={inputs.interestRate}
              onChange={(value) => handleInputChange('interestRate', value)}
              suffix="% p.a."
              placeholder="e.g., 6.2"
              helpText="Annual loan interest rate" label={''}            />
          </div>
        </div>
      </div>

      {/* Operating Costs */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Management Fee
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={inputs.managementFee}
              onChange={(e) => handleInputChange('managementFee', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
              min="0"
              max="15"
              step="0.5"
            />
            <span className="text-slate-600">% of rent</span>
          </div>
          <PercentageButtons
            field="managementFee"
            currentValue={inputs.managementFee}
            suggestions={[
              { label: "Budget (6%)", value: 6 },
              { label: "Standard (8%)", value: 8 },
              { label: "Full Service (10%)", value: 10 }
            ]}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-900">
            Maintenance Reserve
            <span className="text-xs text-slate-500 ml-2">
              (For ongoing repairs & maintenance)
            </span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={inputs.maintenanceReservePercent}
              onChange={(e) => handleInputChange('maintenanceReservePercent', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 bg-white"
              min="0"
              max="15"
              step="0.5"
            />
            <span className="text-slate-600">% of rent</span>
          </div>
          <PercentageButtons
            field="maintenanceReservePercent"
            currentValue={inputs.maintenanceReservePercent}
            suggestions={[
              { label: "Low (5%)", value: 5 },
              { label: "Standard (8%)", value: 8 },
              { label: "High (12%)", value: 12 }
            ]}
          />
        </div>
      </div>

      {/* Example Scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-800">Example 1: VIC Rooming House</span>
          </div>
          <p className="text-sm text-cyan-700">
            8 rooms, $300/week, 85% occupancy, 70% LVR
          </p>
          <button
            onClick={() => {
              const defaults = getStateDefaults('VIC');
              setInputs({
                propertyPrice: '1000000',
                numberOfRooms: '8',
                weeklyRent: '300',
                occupancyRate: '85',
                annualExpenses: '25000',
                managementFee: defaults.averageManagementFee.toFixed(1),
                state: 'VIC',
                loanToValueRatio: '70',
                interestRate: defaults.averageInterestRate.toFixed(1),
                loanTerm: '30',
                maintenanceReservePercent: '8',
                vacancyWeeks: ((100 - 85) / 100 * 52).toFixed(1)
              });
            }}
            className="mt-2 text-sm text-cyan-700 hover:text-cyan-800 font-medium"
          >
            Load Example →
          </button>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Building className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Example 2: QLD Higher Yield</span>
          </div>
          <p className="text-sm text-blue-700">
            10 rooms, $280/week, 88% occupancy, 80% LVR
          </p>
          <button
            onClick={() => {
              const defaults = getStateDefaults('QLD');
              setInputs({
                propertyPrice: '850000',
                numberOfRooms: '10',
                weeklyRent: '280',
                occupancyRate: '88',
                annualExpenses: '22000',
                managementFee: defaults.averageManagementFee.toFixed(1),
                state: 'QLD',
                loanToValueRatio: '80',
                interestRate: defaults.averageInterestRate.toFixed(1),
                loanTerm: '30',
                maintenanceReservePercent: '8',
                vacancyWeeks: ((100 - 88) / 100 * 52).toFixed(1)
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
          disabled={!inputs.propertyPrice}
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

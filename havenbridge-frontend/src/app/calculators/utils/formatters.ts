// formatters.ts - Updated with all 8 Australian states/territories
// Includes state-specific fees and location-based defaults

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-AU').format(value);
};

// Interface for state-specific rules
interface StateRules {
  brackets: Array<{
    min: number;
    max?: number; // undefined means "and above"
    baseAmount: number;
    ratePer100: number; // rate per $100
  }>;
  firstHomeBuyer?: {
    fullExemptionThreshold: number;
    partialExemptionThreshold: number;
    partialExemptionRate?: number;
    landExemptionThreshold?: number;
  };
  foreignSurcharge: number;
  additionalFees: {
    transferRate: number; // Rate for transfer fee (e.g., 0.0002 = 0.02%)
    registrationFee: number; // Fixed registration fee
    mortgageRegistration: number; // Mortgage registration fee
  };
}

// State rules configuration - ALL 8 STATES CORRECTED
const stateRules: Record<string, StateRules> = {
  // NEW SOUTH WALES
  NSW: {
    brackets: [
      { min: 0, max: 16000, baseAmount: 0, ratePer100: 1.25 },
      { min: 16000, max: 35000, baseAmount: 200, ratePer100: 1.50 },
      { min: 35000, max: 93000, baseAmount: 485, ratePer100: 1.75 },
      { min: 93000, max: 351000, baseAmount: 1500, ratePer100: 3.50 },
      { min: 351000, max: 1168000, baseAmount: 10530, ratePer100: 4.50 },
      { min: 1168000, max: undefined, baseAmount: 47295, ratePer100: 5.50 }
    ],
    firstHomeBuyer: {
      fullExemptionThreshold: 800000, // Property
      landExemptionThreshold: 350000, // Land
      partialExemptionThreshold: 1000000 // Properties above 800k get discount
    },
    foreignSurcharge: 0.08, // 8%
    additionalFees: {
      transferRate: 0.0002, // 0.02%
      registrationFee: 200,
      mortgageRegistration: 146.40
    }
  },

  // VICTORIA
  VIC: {
    brackets: [
      { min: 0, max: 25000, baseAmount: 0, ratePer100: 1.4 }, // 1.4% of value
      { min: 25000, max: 130000, baseAmount: 350, ratePer100: 2.4 },
      { min: 130000, max: 960000, baseAmount: 2870, ratePer100: 6.0 },
      { min: 960000, max: 2000000, baseAmount: 0, ratePer100: 5.5 }, // 5.5% of whole value
      { min: 2000000, max: undefined, baseAmount: 110000, ratePer100: 6.5 }
    ],
    firstHomeBuyer: {
      fullExemptionThreshold: 600000,
      partialExemptionThreshold: 750000,
      partialExemptionRate: 0.05 // Discount rate for partial exemption
    },
    foreignSurcharge: 0.08, // 8%
    additionalFees: {
      transferRate: 0.00025, // 0.025%
      registrationFee: 220,
      mortgageRegistration: 119.20
    }
  },

  // QUEENSLAND
  QLD: {
    brackets: [
      { min: 0, max: 5000, baseAmount: 0, ratePer100: 0 },
      { min: 5000, max: 75000, baseAmount: 0, ratePer100: 1.50 },
      { min: 75000, max: 540000, baseAmount: 1050, ratePer100: 3.50 },
      { min: 540000, max: 1000000, baseAmount: 17325, ratePer100: 4.50 },
      { min: 1000000, max: undefined, baseAmount: 38025, ratePer100: 5.75 }
    ],
    firstHomeBuyer: {
      fullExemptionThreshold: 550000, // Home
      landExemptionThreshold: 400000, // Land
      partialExemptionThreshold: 550000 // No partial exemption in QLD
    },
    foreignSurcharge: 0.07, // 7%
    additionalFees: {
      transferRate: 0.00015, // 0.015%
      registrationFee: 180,
      mortgageRegistration: 199.10
    }
  },

  // SOUTH AUSTRALIA
  SA: {
    brackets: [
      { min: 0, max: 12000, baseAmount: 0, ratePer100: 1.00 },
      { min: 12000, max: 30000, baseAmount: 120, ratePer100: 2.00 },
      { min: 30000, max: 50000, baseAmount: 480, ratePer100: 3.00 },
      { min: 50000, max: 100000, baseAmount: 1080, ratePer100: 3.50 },
      { min: 100000, max: 200000, baseAmount: 2830, ratePer100: 4.00 },
      { min: 200000, max: 250000, baseAmount: 6830, ratePer100: 4.25 },
      { min: 250000, max: 300000, baseAmount: 8955, ratePer100: 4.75 },
      { min: 300000, max: 500000, baseAmount: 11330, ratePer100: 5.00 },
      { min: 500000, max: undefined, baseAmount: 21330, ratePer100: 5.50 }
    ],
    firstHomeBuyer: {
      fullExemptionThreshold: 0, // No exemption in SA
      partialExemptionThreshold: 0
    },
    foreignSurcharge: 0.07, // 7%
    additionalFees: {
      transferRate: 0.0002, // 0.02%
      registrationFee: 190,
      mortgageRegistration: 175.20
    }
  },

  // WESTERN AUSTRALIA
  WA: {
    brackets: [
      { min: 0, max: 120000, baseAmount: 0, ratePer100: 1.90 },
      { min: 120001, max: 150000, baseAmount: 2280, ratePer100: 2.85 },
      { min: 150001, max: 360000, baseAmount: 3135, ratePer100: 3.80 },
      { min: 360001, max: 725000, baseAmount: 11115, ratePer100: 4.75 },
      { min: 725001, max: undefined, baseAmount: 28453, ratePer100: 5.15 }
    ],
    firstHomeBuyer: {
      fullExemptionThreshold: 430000, // Home
      landExemptionThreshold: 300000, // Land
      partialExemptionThreshold: 530000 // Home partial exemption
    },
    foreignSurcharge: 0.07, // 7%
    additionalFees: {
      transferRate: 0.0002, // 0.02%
      registrationFee: 210,
      mortgageRegistration: 174.50
    }
  },

  // TASMANIA
  TAS: {
    brackets: [
      { min: 0, max: 3000, baseAmount: 50, ratePer100: 0 },
      { min: 3000, max: 25000, baseAmount: 50, ratePer100: 1.75 },
      { min: 25000, max: 75000, baseAmount: 435, ratePer100: 2.25 },
      { min: 75000, max: 200000, baseAmount: 1560, ratePer100: 3.50 },
      { min: 200000, max: 375000, baseAmount: 5935, ratePer100: 4.00 },
      { min: 375000, max: 725000, baseAmount: 12935, ratePer100: 4.25 },
      { min: 725000, max: undefined, baseAmount: 27810, ratePer100: 4.50 }
    ],
    firstHomeBuyer: {
      fullExemptionThreshold: 0,
      partialExemptionThreshold: 600000,
      partialExemptionRate: 0.50 // 50% discount
    },
    foreignSurcharge: 0.08, // 8%
    additionalFees: {
      transferRate: 0.0003, // 0.03%
      registrationFee: 150,
      mortgageRegistration: 137.60
    }
  },

  // AUSTRALIAN CAPITAL TERRITORY
  ACT: {
    brackets: [
      { min: 0, max: 260000, baseAmount: 0, ratePer100: 0.49 },
      { min: 260001, max: 300000, baseAmount: 1274, ratePer100: 2.20 },
      { min: 300001, max: 500000, baseAmount: 2154, ratePer100: 3.40 },
      { min: 500001, max: 750000, baseAmount: 8954, ratePer100: 4.32 },
      { min: 750001, max: 1000000, baseAmount: 19754, ratePer100: 5.90 },
      { min: 1000000, max: 1455000, baseAmount: 34504, ratePer100: 6.40 },
      { min: 1455000, max: undefined, baseAmount: 0, ratePer100: 4.54 } // 4.54% of total value
    ],
    firstHomeBuyer: {
      fullExemptionThreshold: 0, // ACT has income-based concessions instead
      partialExemptionThreshold: 1000000,
      partialExemptionRate: 1.0 // Up to $34,504 waiver
    },
    foreignSurcharge: 0.08, // 8%
    additionalFees: {
      transferRate: 0.0002, // 0.02%
      registrationFee: 230,
      mortgageRegistration: 153.10
    }
  },

  // NORTHERN TERRITORY - SPECIAL FORMULA
  NT: {
    brackets: [
      { min: 0, max: 525000, baseAmount: 0, ratePer100: 0 }, // Special formula applies
      { min: 525001, max: 3000000, baseAmount: 0, ratePer100: 4.95 }, // 4.95% of value
      { min: 3000001, max: 5000000, baseAmount: 0, ratePer100: 5.75 }, // 5.75% of value
      { min: 5000001, max: undefined, baseAmount: 0, ratePer100: 5.95 } // 5.95% of value
    ],
    firstHomeBuyer: {
      fullExemptionThreshold: 0, // No specific exemptions
      partialExemptionThreshold: 0
    },
    foreignSurcharge: 0.08, // 8%
    additionalFees: {
      transferRate: 0.00025, // 0.025%
      registrationFee: 170,
      mortgageRegistration: 158.40
    }
  }
};

// Helper function to calculate duty using progressive brackets
const calculateProgressiveDuty = (propertyValue: number, brackets: Array<{
  min: number;
  max?: number;
  baseAmount: number;
  ratePer100: number;
}>): number => {
  let duty = 0;
  
  for (const bracket of brackets) {
    // Check if property value falls within this bracket
    const bracketMax = bracket.max || Infinity;
    
    if (propertyValue > bracket.min) {
      const taxableAmount = Math.min(propertyValue, bracketMax) - bracket.min;
      
      if (taxableAmount > 0) {
        // Calculate duty for this bracket
        duty += bracket.baseAmount + (taxableAmount / 100) * bracket.ratePer100;
      }
    }
    
    // If we've reached the max bracket that contains our value, break
    if (propertyValue <= bracketMax) {
      break;
    }
  }
  
  return Math.max(0, duty);
};

// Special NT formula function
const calculateNTDuty = (propertyValue: number): number => {
  if (propertyValue <= 525000) {
    // NT special formula: (0.06571441 x V²) + 15V where V = 0.1% of property value
    const V = propertyValue * 0.001; // 0.1% of property value
    return (0.06571441 * V * V) + (15 * V);
  }
  // For higher values, use the percentage rates
  return 0;
};

// Main stamp duty calculation function
export const calculateStampDuty = (
  propertyValue: number, 
  state: string, 
  isFirstHomeBuyer: boolean = false,
  propertyType: 'established' | 'new' | 'vacant' = 'established'
): number => {
  const rules = stateRules[state];
  
  if (!rules) {
    // Fallback for unknown state (shouldn't happen with UI validation)
    return propertyValue * 0.04;
  }
  
  // Calculate base duty
  let duty = 0;
  
  if (state === 'NT' && propertyValue <= 525000) {
    duty = calculateNTDuty(propertyValue);
  } else {
    duty = calculateProgressiveDuty(propertyValue, rules.brackets);
  }
  
  // Apply first home buyer concessions
  if (isFirstHomeBuyer && rules.firstHomeBuyer) {
    const concessions = rules.firstHomeBuyer;
    
    // Check for full exemption
    if (concessions.fullExemptionThreshold > 0 && 
        propertyValue <= concessions.fullExemptionThreshold) {
      duty = 0;
    }
    // Check for partial exemption (different rules per state)
    else if (concessions.partialExemptionThreshold > 0 && 
             propertyValue <= concessions.partialExemptionThreshold) {
      if (state === 'VIC' && concessions.partialExemptionRate) {
        // VIC: partial exemption with discount rate
        duty = (propertyValue - concessions.fullExemptionThreshold) * concessions.partialExemptionRate;
      } else if (state === 'TAS' && concessions.partialExemptionRate) {
        // TAS: 50% discount
        duty *= (1 - concessions.partialExemptionRate);
      } else if (state === 'ACT') {
        // ACT: waiver up to $34,504
        duty = Math.max(0, duty - 34504);
      }
      // NSW, QLD, WA have land vs property thresholds - simplified here
    }
  }
  
  return Math.round(duty);
};

// Additional government charges with state-specific fees
export const calculateAdditionalFees = (
  propertyValue: number, 
  state: string, 
  isForeignBuyer: boolean
): {
  stampDuty: number;
  transferFee: number;
  registrationFee: number;
  mortgageRegistrationFee: number;
  foreignSurcharge: number;
  totalCharges: number;
} => {
  const rules = stateRules[state] || stateRules.NSW;
  
  const stampDuty = calculateStampDuty(propertyValue, state, false); // Calculate without first home concession for breakdown
  
  const transferFee = Math.round(propertyValue * rules.additionalFees.transferRate);
  const registrationFee = rules.additionalFees.registrationFee;
  const mortgageRegistrationFee = rules.additionalFees.mortgageRegistration;
  const foreignSurcharge = isForeignBuyer ? propertyValue * rules.foreignSurcharge : 0;
  
  const totalCharges = stampDuty + transferFee + registrationFee + mortgageRegistrationFee + foreignSurcharge;
  
  return {
    stampDuty,
    transferFee,
    registrationFee,
    mortgageRegistrationFee,
    foreignSurcharge,
    totalCharges
  };
};

// Get state-specific default values for other calculators
export const getStateDefaults = (state: string) => {
  const stateDefaults: Record<string, {
    averageRentalYield: number;
    averageVacancyRate: number;
    averageManagementFee: number;
    averageInterestRate: number;
    constructionCostMultiplier: number;
  }> = {
    NSW: {
      averageRentalYield: 3.2, // % (Sydney metro typically 3-3.5%)
      averageVacancyRate: 2.1,
      averageManagementFee: 8.0,
      averageInterestRate: 6.2,
      constructionCostMultiplier: 1.15 // 15% above national average
    },
    VIC: {
      averageRentalYield: 3.5, // % (Melbourne typically 3.2-3.8%)
      averageVacancyRate: 2.3,
      averageManagementFee: 7.5,
      averageInterestRate: 6.1,
      constructionCostMultiplier: 1.10
    },
    QLD: {
      averageRentalYield: 4.8, // % (Brisbane typically 4.5-5.5%)
      averageVacancyRate: 1.8,
      averageManagementFee: 8.5,
      averageInterestRate: 6.0,
      constructionCostMultiplier: 0.95 // 5% below national average
    },
    SA: {
      averageRentalYield: 4.3, // % (Adelaide typically 4-4.5%)
      averageVacancyRate: 1.9,
      averageManagementFee: 8.0,
      averageInterestRate: 6.0,
      constructionCostMultiplier: 0.95
    },
    WA: {
      averageRentalYield: 5.2, // % (Perth typically 5-6%)
      averageVacancyRate: 1.5,
      averageManagementFee: 9.0,
      averageInterestRate: 5.9,
      constructionCostMultiplier: 0.90 // 10% below national average
    },
    TAS: {
      averageRentalYield: 5.0, // % (Hobart typically 4.8-5.2%)
      averageVacancyRate: 1.2,
      averageManagementFee: 8.0,
      averageInterestRate: 6.1,
      constructionCostMultiplier: 1.05 // Island logistics increase costs
    },
    ACT: {
      averageRentalYield: 4.0, // % (Canberra typically 3.8-4.2%)
      averageVacancyRate: 1.5,
      averageManagementFee: 7.0,
      averageInterestRate: 6.0,
      constructionCostMultiplier: 1.08
    },
    NT: {
      averageRentalYield: 5.5, // % (Darwin typically 5-6%)
      averageVacancyRate: 3.5, // Higher due to mining cycle
      averageManagementFee: 10.0,
      averageInterestRate: 6.3,
      constructionCostMultiplier: 1.25 // Remote location increases costs
    }
  };
  
  return stateDefaults[state] || stateDefaults.NSW;
};

// Calculate ROI correctly (for Feasibility calculator)
export const calculateROI = (
  profit: number,
  totalInvestment: number, // Land + construction costs
  holdingPeriodMonths: number = 12
): number => {
  if (totalInvestment <= 0) return 0;
  
  // Annualized ROI: (Profit / Total Investment) * (12 / Holding Period)
  const roi = (profit / totalInvestment) * 100;
  
  // Annualize if holding period is not 12 months
  if (holdingPeriodMonths !== 12) {
    return roi * (12 / holdingPeriodMonths);
  }
  
  return roi;
};

// Calculate net yield for rooming house (corrected)
export const calculateNetYield = (
  annualRent: number,
  annualExpenses: number,
  propertyPrice: number
): number => {
  if (propertyPrice <= 0) return 0;
  const netIncome = annualRent - annualExpenses;
  return (netIncome / propertyPrice) * 100;
};

// Calculate ROI based on equity/deposit (not arbitrary 30%)
export const calculateEquityROI = (
  netIncome: number,
  equityAmount: number // Actual deposit or equity amount
): number => {
  if (equityAmount <= 0) return 0;
  return (netIncome / equityAmount) * 100;
};

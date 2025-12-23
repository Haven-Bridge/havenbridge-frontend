// Location-based default values for all Australian states/territories
// Based on 2024 market data from official sources

export interface LocationDefaults {
  state: string;
  name: string;
  construction: {
    costMultiplier: number; // Relative to national average (1.0)
    laborCostMultiplier: number;
    materialCostMultiplier: number;
  };
  property: {
    averageRentalYield: number; // % gross yield
    averageCapitalGrowth: number; // % annual
    vacancyRate: number; // % average
  };
  finance: {
    averageInterestRate: number; // % p.a.
    averageLoanTerm: number; // years
  };
}

export const locationDefaults: Record<string, LocationDefaults> = {
  NSW: {
    state: 'NSW',
    name: 'New South Wales',
    construction: {
      costMultiplier: 1.15, // 15% above national average (Sydney effect)
      laborCostMultiplier: 1.20,
      materialCostMultiplier: 1.10,
    },
    property: {
      averageRentalYield: 3.2, // % (Sydney metro typically 3-3.5%)
      averageCapitalGrowth: 4.5,
      vacancyRate: 2.1,
    },
    finance: {
      averageInterestRate: 6.2,
      averageLoanTerm: 28,
    },
  },
  VIC: {
    state: 'VIC',
    name: 'Victoria',
    construction: {
      costMultiplier: 1.10, // 10% above national average
      laborCostMultiplier: 1.15,
      materialCostMultiplier: 1.05,
    },
    property: {
      averageRentalYield: 3.5, // % (Melbourne typically 3.2-3.8%)
      averageCapitalGrowth: 3.8,
      vacancyRate: 2.3,
    },
    finance: {
      averageInterestRate: 6.1,
      averageLoanTerm: 28,
    },
  },
  QLD: {
    state: 'QLD',
    name: 'Queensland',
    construction: {
      costMultiplier: 0.95, // 5% below national average
      laborCostMultiplier: 0.90,
      materialCostMultiplier: 1.00,
    },
    property: {
      averageRentalYield: 4.8, // % (Brisbane typically 4.5-5.5%)
      averageCapitalGrowth: 3.2,
      vacancyRate: 1.8,
    },
    finance: {
      averageInterestRate: 6.0,
      averageLoanTerm: 27,
    },
  },
  WA: {
    state: 'WA',
    name: 'Western Australia',
    construction: {
      costMultiplier: 0.90, // 10% below national average
      laborCostMultiplier: 0.85,
      materialCostMultiplier: 0.95,
    },
    property: {
      averageRentalYield: 5.2, // % (Perth typically 5-6%)
      averageCapitalGrowth: 2.5,
      vacancyRate: 1.5,
    },
    finance: {
      averageInterestRate: 5.9,
      averageLoanTerm: 26,
    },
  },
  SA: {
    state: 'SA',
    name: 'South Australia',
    construction: {
      costMultiplier: 0.95,
      laborCostMultiplier: 0.92,
      materialCostMultiplier: 0.98,
    },
    property: {
      averageRentalYield: 4.3, // % (Adelaide typically 4-4.5%)
      averageCapitalGrowth: 3.0,
      vacancyRate: 1.9,
    },
    finance: {
      averageInterestRate: 6.0,
      averageLoanTerm: 27,
    },
  },
  TAS: {
    state: 'TAS',
    name: 'Tasmania',
    construction: {
      costMultiplier: 1.05, // Island logistics increase costs
      laborCostMultiplier: 1.00,
      materialCostMultiplier: 1.10,
    },
    property: {
      averageRentalYield: 5.0, // % (Hobart typically 4.8-5.2%)
      averageCapitalGrowth: 2.8,
      vacancyRate: 1.2,
    },
    finance: {
      averageInterestRate: 6.1,
      averageLoanTerm: 26,
    },
  },
  ACT: {
    state: 'ACT',
    name: 'Australian Capital Territory',
    construction: {
      costMultiplier: 1.08,
      laborCostMultiplier: 1.12,
      materialCostMultiplier: 1.04,
    },
    property: {
      averageRentalYield: 4.0, // % (Canberra typically 3.8-4.2%)
      averageCapitalGrowth: 3.5,
      vacancyRate: 1.5,
    },
    finance: {
      averageInterestRate: 6.0,
      averageLoanTerm: 28,
    },
  },
  NT: {
    state: 'NT',
    name: 'Northern Territory',
    construction: {
      costMultiplier: 1.25, // Remote location increases costs significantly
      laborCostMultiplier: 1.30,
      materialCostMultiplier: 1.20,
    },
    property: {
      averageRentalYield: 5.5, // % (Darwin typically 5-6%)
      averageCapitalGrowth: 1.5,
      vacancyRate: 3.5, // Higher due to mining cycle
    },
    finance: {
      averageInterestRate: 6.3,
      averageLoanTerm: 25,
    },
  },
};

// Get defaults for a specific state
export const getLocationDefaults = (state: string): LocationDefaults => {
  return locationDefaults[state] || locationDefaults.NSW; // Default to NSW if not found
};

// Get construction cost adjustment based on location type
export const getConstructionLocationMultiplier = (
  state: string, 
  locationType: 'metro' | 'regional' | 'remote' = 'metro'
): number => {
  const baseMultiplier = getLocationDefaults(state).construction.costMultiplier;
  
  // Adjust for regional/remote within the state
  const locationAdjustments = {
    metro: 1.0,
    regional: 1.15, // Regional areas often cost MORE due to logistics
    remote: 1.35,   // Remote areas significantly more expensive
  };
  
  return baseMultiplier * locationAdjustments[locationType];
};

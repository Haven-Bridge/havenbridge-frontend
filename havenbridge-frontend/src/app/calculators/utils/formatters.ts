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

export const calculateStampDuty = (propertyValue: number, state: string, isFirstHome: boolean): number => {
  // Victoria stamp duty rates (simplified)
  if (state === 'VIC') {
    if (isFirstHome) {
      if (propertyValue <= 600000) return 0;
      if (propertyValue <= 750000) {
        const over = propertyValue - 600000;
        return over * 0.05;
      }
    }
    
    if (propertyValue <= 25000) return propertyValue * 0.014;
    if (propertyValue <= 130000) return 350 + (propertyValue - 25000) * 0.024;
    if (propertyValue <= 960000) return 2870 + (propertyValue - 130000) * 0.06;
    if (propertyValue <= 2000000) return 53750 + (propertyValue - 960000) * 0.055;
    return 110750 + (propertyValue - 2000000) * 0.065;
  }
  
  // NSW stamp duty rates (simplified)
  if (state === 'NSW') {
    if (propertyValue <= 14300) return propertyValue * 0.0125;
    if (propertyValue <= 30500) return 179 + (propertyValue - 14300) * 0.02;
    if (propertyValue <= 88100) return 503 + (propertyValue - 30500) * 0.03;
    if (propertyValue <= 350700) return 2237 + (propertyValue - 88100) * 0.035;
    if (propertyValue <= 1094700) return 11432 + (propertyValue - 350700) * 0.045;
    return 48962 + (propertyValue - 1094700) * 0.056;
  }
  
  // Default (simplified)
  return propertyValue * 0.04;
};

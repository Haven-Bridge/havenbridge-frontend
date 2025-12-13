import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Format date for file names
export const formatDateForFilename = (): string => {
  const now = new Date();
  return now.toISOString().split('T')[0].replace(/-/g, '') + 
         '_' + 
         now.getHours().toString().padStart(2, '0') + 
         now.getMinutes().toString().padStart(2, '0');
};

// Generate PDF
export const generatePDF = (
  title: string,
  inputs: Record<string, any>,
  results: Record<string, any>,
  calculatorType: string
): void => {
  const doc = new jsPDF();
  
  // Add HavenBridge header
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('HavenBridge Development', 105, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text('Development Calculators', 105, 28, { align: 'center' });
  
  // Title
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.text(title, 20, 50);
  
  // Date
  doc.setFontSize(10);
  doc.text(`Generated: ${new Date().toLocaleDateString('en-AU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}`, 20, 60);
  
  // Inputs section
  doc.setFontSize(14);
  doc.text('Input Parameters', 20, 75);
  
  const inputRows = Object.entries(inputs).map(([key, value]) => [
    key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    typeof value === 'number' ? 
      key.includes('Rate') || key.includes('Percent') || key.includes('Percentage') ? 
        `${value.toFixed(1)}%` :
        `$${value.toLocaleString('en-AU')}` :
      value.toString()
  ]);
  
  autoTable(doc, {
    startY: 80,
    head: [['Parameter', 'Value']],
    body: inputRows,
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246] }, // blue-500
  });
  
  // Results section
  const finalY = (doc as any).lastAutoTable.finalY || 100;
  doc.setFontSize(14);
  doc.text('Results & Analysis', 20, finalY + 15);
  
  const resultRows = Object.entries(results).map(([key, value]) => [
    key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    typeof value === 'number' ? 
      key.includes('Rate') || key.includes('Percent') || key.includes('Percentage') || key.includes('Yield') || key.includes('ROI') ? 
        `${value.toFixed(1)}%` :
        `$${value.toLocaleString('en-AU')}` :
      value.toString()
  ]);
  
  autoTable(doc, {
    startY: finalY + 20,
    head: [['Metric', 'Value']],
    body: resultRows,
    theme: 'grid',
    headStyles: { fillColor: [245, 158, 11] }, // amber-500
  });
  
  // Footer
  const finalY2 = (doc as any).lastAutoTable.finalY || finalY + 50;
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('© 2025 HavenBridge Development. All rights reserved.', 105, 280, { align: 'center' });
  doc.text('Calculations are estimates only. Professional advice recommended.', 105, 285, { align: 'center' });
  
  // Save PDF
  doc.save(`HavenBridge_${calculatorType}_${formatDateForFilename()}.pdf`);
};

// Generate CSV data
export const generateCSVData = (
  inputs: Record<string, any>,
  results: Record<string, any>
): Array<Record<string, any>> => {
  const data = [];
  
  // Inputs section
  data.push({ Category: 'Inputs', Parameter: '', Value: '' });
  Object.entries(inputs).forEach(([key, value]) => {
    data.push({
      Category: 'Inputs',
      Parameter: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
      Value: value
    });
  });
  
  // Results section
  data.push({ Category: 'Results', Parameter: '', Value: '' });
  Object.entries(results).forEach(([key, value]) => {
    data.push({
      Category: 'Results',
      Parameter: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
      Value: value
    });
  });
  
  return data;
};

// Generate CSV headers
export const generateCSVHeaders = () => [
  { label: 'Category', key: 'Category' },
  { label: 'Parameter', key: 'Parameter' },
  { label: 'Value', key: 'Value' },
];

// Save calculation to localStorage
export const saveCalculation = (
  calculatorId: string,
  title: string,
  inputs: Record<string, any>,
  results: Record<string, any>
): void => {
  try {
    const savedCalculations = getSavedCalculations();
    
    const newCalculation = {
      id: Date.now(),
      calculatorId,
      title,
      inputs,
      results,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-AU')
    };
    
    savedCalculations.unshift(newCalculation); // Add to beginning
    if (savedCalculations.length > 20) {
      savedCalculations.length = 20; // Keep only last 20
    }
    
    localStorage.setItem('havenbridge_calculations', JSON.stringify(savedCalculations));
    
    // Dispatch event for other components to listen to
    window.dispatchEvent(new Event('calculationsUpdated'));
  } catch (error) {
    console.error('Error saving calculation:', error);
  }
};

// Get saved calculations
export const getSavedCalculations = (): Array<any> => {
  try {
    const saved = localStorage.getItem('havenbridge_calculations');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error getting saved calculations:', error);
    return [];
  }
};

// Clear a specific calculation
export const clearCalculation = (id: number): void => {
  try {
    const savedCalculations = getSavedCalculations();
    const filtered = savedCalculations.filter((calc: any) => calc.id !== id);
    localStorage.setItem('havenbridge_calculations', JSON.stringify(filtered));
    window.dispatchEvent(new Event('calculationsUpdated'));
  } catch (error) {
    console.error('Error clearing calculation:', error);
  }
};

// Clear all calculations
export const clearAllCalculations = (): void => {
  try {
    localStorage.removeItem('havenbridge_calculations');
    window.dispatchEvent(new Event('calculationsUpdated'));
  } catch (error) {
    console.error('Error clearing all calculations:', error);
  }
};

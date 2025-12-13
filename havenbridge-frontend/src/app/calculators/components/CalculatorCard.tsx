import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

export default function CalculatorCard({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  onClick 
}: CalculatorCardProps) {
  return (
    <div 
      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className={`bg-gradient-to-br ${color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-2 group-hover:gap-3 transition-all">
          Open Calculator
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <div className="text-xs text-slate-400">Click to open</div>
      </div>
    </div>
  );
}

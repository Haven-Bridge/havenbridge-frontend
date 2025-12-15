import React from 'react';
import { Info } from 'lucide-react';

interface InputFieldProps {
  label: string;
  type?: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  suffix?: string;
  prefix?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  error?: string;
  helpText?: string;
  disabled?: boolean;
}

export default function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  suffix,
  prefix,
  min,
  max,
  step,
  required = false,
  error,
  helpText,
  disabled = false
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-900">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {prefix && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
            {prefix}
          </div>
        )}
        
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={`w-full px-4 py-3 rounded-lg border ${
            error ? 'border-red-300' : 'border-slate-300'
          } focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder:text-slate-500 bg-white ${
            prefix ? 'pl-10' : ''
          } ${suffix ? 'pr-10' : ''} ${
            disabled ? 'bg-slate-50 cursor-not-allowed' : ''
          }`}
        />
        
        {suffix && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500">
            {suffix}
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <Info className="w-4 h-4" />
          {error}
        </p>
      )}
      
      {helpText && !error && (
        <p className="text-sm text-slate-500">{helpText}</p>
      )}
    </div>
  );
}

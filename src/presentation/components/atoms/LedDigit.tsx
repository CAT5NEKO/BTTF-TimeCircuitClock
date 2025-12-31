import React from 'react';
import clsx from 'clsx';

interface LedDigitProps {
  value: string | number;
  type?: 'dseg7' | 'dseg14';
  color: string;
  className?: string;
  glow?: boolean;
}

export const LedDigit: React.FC<LedDigitProps> = ({ 
  value, 
  type = 'dseg7', 
  color, 
  className,
  glow = true
}) => {
  
  return (
    <span 
      className={clsx(className, "led-digit", {
        'led-glow': glow
      })}
      style={{ 
        color: color, 
        fontFamily: type === 'dseg14' ? 'var(--font-dseg14)' : 'var(--font-dseg7)',
      }}
    >
      {value}
    </span>
  );
};

import React from 'react';

interface TypographicLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
}

export const TypographicLogo: React.FC<TypographicLogoProps> = ({ size = 'md', withTagline = false }) => {
  const sizeClasses = {
    sm: 'text-base tracking-[0.14em]',
    md: 'text-lg md:text-xl tracking-[0.16em]',
    lg: 'text-2xl md:text-3xl tracking-[0.18em]'
  }[size];

  return (
    <div className="flex flex-col select-none">
      <div className={`font-extrabold uppercase font-sans whitespace-nowrap shrink-0 flex items-center ${sizeClasses}`}>
        <span className="text-slate-900 dark:text-white transition-colors">
          FRINGE
        </span>
        <span className="text-cyan-500 dark:text-cyan-400 font-black ml-1.5 transition-colors">
          CODING
        </span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-500 ml-1 mb-0.5 opacity-90" aria-hidden="true" />
      </div>
      {withTagline && (
        <span className="text-[11px] tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
          Beyond the Ordinary. Into What's Possible.
        </span>
      )}
    </div>
  );
};

import React from 'react';
import { ComparisonRow } from '../types/article';

interface ComparisonTableProps {
  title?: string;
  headers: string[];
  rows: ComparisonRow[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, headers, rows }) => {
  return (
    <div className="my-6 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#0C1220]">
      {title && (
        <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs md:text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 font-semibold">
              {headers.map((h, i) => (
                <th key={i} className="py-3 px-4 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-slate-200 whitespace-nowrap">
                  {row.aspect}
                </td>
                <td className="py-3 px-4 text-slate-600 dark:text-slate-300">
                  {row.optionA}
                </td>
                <td className="py-3 px-4 text-slate-600 dark:text-slate-300">
                  {row.optionB}
                </td>
                <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-400">
                  {row.recommendation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

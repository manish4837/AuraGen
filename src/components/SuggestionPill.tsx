import React from "react";

export interface SuggestionPillProps {
  children: React.ReactNode;
}

const SuggestionPill: React.FC<SuggestionPillProps> = ({ children }) => (
  <button className="rounded-full border border-slate-700/80 bg-slate-900/90 px-2.5 py-1 text-left text-[11px] text-slate-300 hover:border-violet-400/80 hover:text-slate-50 transition-colors">
    {children}
  </button>
);

export default SuggestionPill;

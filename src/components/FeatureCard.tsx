import React from "react";

export interface FeatureCardProps {
  label: string;
  title: string;
  description: string;
  pill: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  label,
  title,
  description,
  pill,
}) => (
  <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-4 text-xs shadow-[0_18px_40px_rgba(15,23,42,0.75)] backdrop-blur">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-violet-500/10 via-transparent to-sky-500/10 transition-opacity" />
    <div className="relative space-y-2.5">
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span>{label}</span>
        <span className="rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] text-slate-300">
          {pill}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-[11px] leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  </div>
);

export default FeatureCard;

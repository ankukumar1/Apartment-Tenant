import React from "react";

interface BillingStatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendColor: string;
  borderColor: string;
  gradient: string;
}

export function BillingStatCard({
  icon,
  label,
  value,
  trend,
  trendColor,
  borderColor,
  gradient,
}: BillingStatCardProps) {
  return (
    <div className="relative overflow-hidden bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-all duration-300">
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${
          borderColor.split("-")[1]
        }-500 to-transparent opacity-50`}
      />
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-xl bg-white/5 ${borderColor.replace(
            "border",
            "text"
          )}`}
        >
          {icon}
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full bg-white/5 ${trendColor}`}
        >
          {trend}
        </span>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <h3 className="text-3xl font-bold text-white font-display mb-2">
          {value}
        </h3>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-2/3 h-full bg-gradient-to-r ${gradient} -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </div>
  );
}

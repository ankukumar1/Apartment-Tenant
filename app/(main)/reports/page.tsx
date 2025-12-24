"use client";

import React, { useState } from "react";
import {
  Download,
  Calendar,
  Building2,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Home,
  RefreshCcw,
} from "lucide-react";

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState("Last 30 Days");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-display mb-2">
            Reports & Analytics
          </h1>
          <p className="text-gray-400">
            Track property performance, financial trends, and tenant metrics.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/25">
          <Download className="w-5 h-5" />
          Generate Report
        </button>
      </div>

      {/* Filters */}
      <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-auto">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
            Filter by Property
          </label>
          <div className="relative">
            <select className="w-full md:w-64 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
              <option>All Properties</option>
              <option>Sunset Gardens</option>
              <option>Skyline Lofts</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 p-1 bg-white/5 rounded-xl border border-white/5 w-full md:w-auto overflow-x-auto">
          {["Last 30 Days", "This Quarter", "Year to Date", "Custom Range"].map(
            (range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  timeRange === range
                    ? "bg-primary text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {range === "Custom Range" ? (
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {range}
                  </span>
                ) : (
                  range
                )}
              </button>
            )
          )}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          label="Total Revenue"
          value="$45,200"
          trend="+12% vs last month"
          icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
          trendType="positive"
          chartColor="bg-emerald-500"
        />
        <MetricCard
          label="Occupancy Rate"
          value="92%"
          trend="+2% vs last month"
          icon={<Home className="w-5 h-5 text-blue-400" />}
          trendType="positive"
          chartColor="bg-blue-500"
        />
        <MetricCard
          label="Outstanding Bills"
          value="$1,250"
          trend="+5% overdue"
          icon={<AlertCircle className="w-5 h-5 text-orange-400" />}
          trendType="negative"
          chartColor="bg-orange-500"
        />
        <MetricCard
          label="Tenant Turnover"
          value="3 Units"
          trend="-1 unit vs avg"
          icon={<RefreshCcw className="w-5 h-5 text-purple-400" />}
          trendType="neutral"
          chartColor="bg-purple-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Financial Overview - Bar Chart */}
        <div className="lg:col-span-2 bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white font-display">
              Financial Overview
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-400">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="text-sm text-gray-400">Expense</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 mt-6">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => (
              <div
                key={month}
                className="flex-1 flex flex-col items-center gap-3"
              >
                <div className="w-full flex justify-center gap-1 h-full items-end">
                  <div
                    style={{ height: `${[45, 65, 50, 70, 80, 85][i]}%` }}
                    className="w-3 sm:w-6 bg-blue-500 rounded-t-sm hover:bg-blue-400 transition-all duration-300"
                  />
                  <div
                    style={{ height: `${[30, 40, 25, 45, 40, 50][i]}%` }}
                    className="w-3 sm:w-6 bg-white/10 rounded-t-sm hover:bg-white/20 transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Status - Donut Chart Representation */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white font-display mb-8">
            Unit Status
          </h3>
          <div className="relative w-48 h-48 mx-auto mb-8">
            {/* CSS Conic Gradient for Donut Chart */}
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "conic-gradient(#3b82f6 0% 85%, #d1d5db 85% 95%, #ef4444 95% 100%)",
              }}
            >
              <div className="absolute inset-4 bg-[#0B0D12] rounded-full flex flex-col items-center justify-center border border-white/5">
                <span className="text-4xl font-bold text-white">50</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  Total Units
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-300">Occupied</span>
              </div>
              <span className="text-sm font-medium text-white">42 (85%)</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-300">Vacant</span>
              </div>
              <span className="text-sm font-medium text-white">5 (10%)</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-sm text-gray-300">Maintenance</span>
              </div>
              <span className="text-sm font-medium text-white">3 (5%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white font-display">
            Recent Financial Activity
          </h3>
          <button className="text-sm text-primary hover:text-primary/80 font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Property
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-right py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                {
                  id: "#TRX-00921",
                  prop: "Sunset Blvd - Unit 4B",
                  date: "Oct 24, 2023",
                  cat: "Rent Payment",
                  amt: "$1,450.00",
                  status: "Completed",
                },
                {
                  id: "#TRX-00922",
                  prop: "Skyline Lofts - Unit 12",
                  date: "Oct 23, 2023",
                  cat: "Maintenance",
                  amt: "$250.00",
                  status: "Pending",
                },
                {
                  id: "#TRX-00923",
                  prop: "The Plaza - Unit 8",
                  date: "Oct 22, 2023",
                  cat: "Utility Bill",
                  amt: "$85.50",
                  status: "Completed",
                },
                {
                  id: "#TRX-00924",
                  prop: "Sunset Gardens - Unit 105",
                  date: "Oct 21, 2023",
                  cat: "Rent Payment",
                  amt: "$1,200.00",
                  status: "Completed",
                },
              ].map((tx) => (
                <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-sm text-white font-medium">
                    {tx.id}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-300">{tx.prop}</td>
                  <td className="py-4 px-6 text-sm text-gray-400">{tx.date}</td>
                  <td className="py-4 px-6 text-sm text-gray-300">{tx.cat}</td>
                  <td className="py-4 px-6 text-sm text-white font-bold">
                    {tx.amt}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        tx.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function MetricCard({
  label,
  value,
  trend,
  trendType,
  icon,
}: {
  label: string;
  value: string;
  trend: string;
  trendType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
  chartColor: string;
}) {
  const trendColor =
    trendType === "positive"
      ? "text-emerald-400"
      : trendType === "negative"
      ? "text-red-400"
      : "text-blue-400";

  const TrendIcon =
    trendType === "positive"
      ? ArrowUpRight
      : trendType === "negative"
      ? AlertCircle
      : ArrowDownRight;

  return (
    <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-400 mb-1">{label}</p>
          <h3 className="text-3xl font-bold text-white font-display">
            {value}
          </h3>
        </div>
        <div className="p-3 bg-white/5 rounded-xl text-gray-300 group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`${trendColor} flex items-center text-xs font-bold`}>
          {trendType === "positive" && (
            <ArrowUpRight className="w-3 h-3 mr-1" />
          )}
          {trendType === "negative" && (
            <TrendingDown className="w-3 h-3 mr-1" />
          )}
          {trendType === "neutral" && <RefreshCcw className="w-3 h-3 mr-1" />}
          {trend.split(" ")[0]} {/* Extracting percentage/value */}
        </span>
        <span className="text-xs text-gray-500">
          {trend.substring(trend.indexOf(" "))}
        </span>
      </div>
    </div>
  );
}

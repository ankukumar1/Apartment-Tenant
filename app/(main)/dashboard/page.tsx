"use client";

import React from "react";
import {
  Building2,
  Users,
  Wallet,
  Bell,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";
import {
  dashboardStats,
  recentActivity,
} from "@/components/demoData/DashboardDemoData";

export default function DashboardPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "tenants":
        return <Users className="h-5 w-5 text-secondary" />;
      case "units":
        return <Building2 className="h-5 w-5 text-primary" />;
      case "revenue":
        return <Wallet className="h-5 w-5 text-accent" />;
      case "requests":
        return <Bell className="h-5 w-5 text-yellow-400" />;
      default:
        return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "success":
        return "text-emerald-400";
      case "pending":
        return "text-yellow-400";
      case "system":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white font-display mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">
          Welcome back, here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={getIcon(stat.iconType)}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">Recent Activity</h2>
            <button className="text-sm text-primary hover:text-white transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div
                  className={`p-2 rounded-full bg-white/5 border border-white/10 ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status === "completed" || item.status === "success" ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : item.status === "pending" ? (
                    <Clock className="w-4 h-4" />
                  ) : (
                    <FileText className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">
                      {item.user}
                    </p>
                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{item.action}</p>
                </div>
                {item.amount && (
                  <span className="text-sm font-bold text-emerald-400">
                    {item.amount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Info */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-2">
              Upgrade to Pro
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Unlock advanced analytics and unlimited property management.
            </p>
            <button className="w-full py-2.5 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Upgrade Now
            </button>
          </div>

          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-300">
                <span>Add New Property</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-300">
                <span>Create Invoice</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-300">
                <span>Register Tenant</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface/50 p-6 backdrop-blur-md transition-all hover:border-white/20 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <div className="p-2 rounded-lg bg-white/5 border border-white/5 shadow-inner">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-white font-display mb-1">
        {value}
      </div>
      <p className="text-xs text-gray-500">{change}</p>
    </div>
  );
}

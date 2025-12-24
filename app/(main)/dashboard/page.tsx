"use client";

import React from "react";
import { Building2, Users, Wallet, Bell, LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-display mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">
          Welcome back, here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total Tenants"
          value="124"
          change="+4% from last month"
          icon={<Users className="h-5 w-5 text-secondary" />}
        />
        <StatCard
          title="Available Units"
          value="8"
          change="-2 from last month"
          icon={<Building2 className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Total Revenue"
          value="$48,200"
          change="+12% from last month"
          icon={<Wallet className="h-5 w-5 text-accent" />}
        />
        <StatCard
          title="Pending Requests"
          value="12"
          change="Requires attention"
          icon={<Bell className="h-5 w-5 text-yellow-400" />}
        />
      </div>

      {/* Content Area Placeholder */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <LayoutDashboard className="h-8 w-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-medium text-white">Dashboard Content</h3>
          <p className="text-gray-400 max-w-sm mt-2">
            This is where your charts, tables, and detailed management tools
            will go.
          </p>
        </div>
      </div>
    </>
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
    <div className="rounded-xl border border-white/10 bg-surface/50 p-6 backdrop-blur-md transition-all hover:border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <div className="p-2 rounded-lg bg-white/5">{icon}</div>
      </div>
      <div className="text-2xl font-bold text-white font-display mb-1">
        {value}
      </div>
      <p className="text-xs text-gray-500">{change}</p>
    </div>
  );
}

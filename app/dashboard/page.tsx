"use client";

import React, { useEffect, useState } from "react";
import {
  Building2,
  Users,
  Wallet,
  Settings,
  LogOut,
  Bell,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { storage } from "@/utils/storage";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Load user data for display
    const storedUser = storage.getUser();
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    storage.clear();
    router.push("/login");
  };

  return (
    <AuthGuard>
      <div className="h-screen bg-background font-sans text-foreground flex overflow-hidden">
        {/* Sidebar background ambience */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-surface/50 backdrop-blur-xl border-r border-white/10 transition-transform duration-300 md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex h-16 items-center px-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white font-display">
                  AptManager
                </span>
              </div>
              <button
                className="ml-auto md:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 space-y-1 px-3 py-4">
              <NavItem
                href="/dashboard"
                icon={<LayoutDashboard className="h-5 w-5" />}
                label="Dashboard"
                active
              />
              <NavItem
                href="/dashboard/tenants"
                icon={<Users className="h-5 w-5" />}
                label="Tenants"
              />
              <NavItem
                href="/dashboard/billings"
                icon={<Wallet className="h-5 w-5" />}
                label="Billing"
              />
              <NavItem
                href="/dashboard/settings"
                icon={<Settings className="h-5 w-5" />}
                label="Settings"
              />
            </nav>

            {/* User & Logout */}
            <div className="border-t border-white/10 p-4">
              <div className="flex items-center gap-3 mb-4 px-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-xs font-bold text-white">
                  {user?.name
                    ? user.name.charAt(0).toUpperCase()
                    : user?.email?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {user?.name || "User"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {user?.email || "loading..."}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-400 hover:bg-white/5 hover:text-red-300 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex flex-1 flex-col z-10">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b border-white/10 bg-surface/30 backdrop-blur-md px-6 z-20">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6 text-gray-400" />
            </button>

            <div className="flex items-center gap-4 ml-auto">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
              </button>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto p-6 md:p-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                <h3 className="text-lg font-medium text-white">
                  Dashboard Content
                </h3>
                <p className="text-gray-400 max-w-sm mt-2">
                  This is where your charts, tables, and detailed management
                  tools will go.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}

function NavItem({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
        active
          ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </Link>
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

"use client";

import React, { useState } from "react";
import {
  Bell,
  Check,
  Plus,
  AlertTriangle,
  Clock,
  Info,
  ChevronDown,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Zap,
  Calendar,
  Settings,
  Mail,
  FileText,
  Wrench,
  CheckCircle,
} from "lucide-react";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("Inbox");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-display mb-2">
            Notifications & Alerts
          </h1>
          <p className="text-gray-400">
            Manage system alerts, reminders, and communication preferences.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all font-medium text-sm">
            <Check className="w-4 h-4" />
            Mark all as read
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/25 text-sm">
            <Plus className="w-4 h-4" />
            Create Reminder
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          icon={<AlertTriangle className="w-5 h-5 text-red-500" />}
          title="Urgent Attention"
          count={3}
          badge="+2 new"
          badgeColor="bg-red-500/10 text-red-400"
          borderLeft="border-l-4 border-l-red-500"
        />
        <SummaryCard
          icon={<Clock className="w-5 h-5 text-orange-500" />}
          title="Pending Actions"
          count={12}
          badge="+5 new"
          badgeColor="bg-orange-500/10 text-orange-400"
          borderLeft="border-l-4 border-l-orange-500"
        />
        <SummaryCard
          icon={<Info className="w-5 h-5 text-blue-500" />}
          title="System Notices"
          count={5}
          badge="All caught up"
          badgeColor="bg-blue-500/10 text-blue-400"
          borderLeft="border-l-4 border-l-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Inbox */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
            {/* Tabs & Filters */}
            <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm font-medium w-full sm:w-auto overflow-x-auto">
                {["Inbox", "Archived", "Sent"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 relative transition-colors ${
                      activeTab === tab
                        ? "text-primary"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-primary/50 appearance-none cursor-pointer pr-8">
                    <option>All Types</option>
                    <option>Alerts</option>
                    <option>Messages</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
                <div className="relative flex-1 sm:flex-none">
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-primary/50 appearance-none cursor-pointer pr-8">
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
                <button className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Notification List */}
            <div className="divide-y divide-white/5">
              <NotificationItem
                icon={<AlertTriangle className="w-5 h-5 text-red-400" />}
                iconBg="bg-red-500/10"
                title="Lease Expiring Soon: Unit 108"
                desc="The lease for tenant Sarah Jenkins expires in 30 days. No renewal action has been taken yet."
                time="Today"
                details={
                  <div className="flex gap-2 mt-3">
                    <button className="px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-xs font-medium text-white transition-colors">
                      Draft Renewal
                    </button>
                    <button className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 rounded-lg text-xs font-medium text-red-400 transition-colors">
                      Contact Tenant
                    </button>
                  </div>
                }
                accent="border-l-2 border-l-red-500 pl-4"
              />
              <NotificationItem
                icon={<AlertTriangle className="w-5 h-5 text-yellow-400" />}
                iconBg="bg-yellow-500/10"
                title="Rent Overdue: Unit 304"
                desc="John Doe has missed the payment deadline. Outstanding amount: $1,200.00"
                time="2 hours ago"
                details={
                  <div className="flex gap-2 mt-3">
                    <button className="px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-xs font-medium text-white transition-colors">
                      Send Reminder
                    </button>
                  </div>
                }
                accent="border-l-2 border-l-yellow-500 pl-4"
              />
              <NotificationItem
                icon={<Wrench className="w-5 h-5 text-blue-400" />}
                iconBg="bg-blue-500/10"
                title="New Request: Leaking Faucet"
                isNew
                desc="Unit 102 reported a slow leak in the master bathroom sink."
                time="Yesterday"
                accent="border-l-2 border-l-blue-500 pl-4"
              />
              <NotificationItem
                icon={<Settings className="w-5 h-5 text-gray-400" />}
                iconBg="bg-white/5"
                title="System Maintenance Complete"
                desc="Scheduled database optimization was completed successfully."
                time="2 days ago"
                accent="pl-4.5"
              />
              <NotificationItem
                icon={<CheckCircle className="w-5 h-5 text-emerald-400" />}
                iconBg="bg-emerald-500/10"
                title="Rent Received: Unit 501"
                desc="Payment of $1,450.00 confirmed via Bank Transfer."
                time="3 days ago"
                accent="pl-4.5"
              />
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-white/10">
              <p className="text-xs text-gray-500">Showing 1-5 of 24 alerts</p>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-white/10 rounded text-gray-400">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-white/10 rounded text-gray-400">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Rules */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Quick Rules</h3>
              <button className="text-xs text-primary hover:text-primary/80">
                Manage All
              </button>
            </div>
            <div className="space-y-6">
              <ToggleRule
                title="Late Rent Alert"
                desc="Notify on 1 day after due date"
                defaultChecked
              />
              <ToggleRule
                title="Lease Expiry"
                desc="Email reminder 60 days out"
                defaultChecked
              />
              <ToggleRule
                title="Auto-Reply"
                desc="For maintenance after 6PM"
                defaultChecked={false}
              />
            </div>
          </div>

          {/* Upcoming Reminders */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">
              Upcoming Reminders
            </h3>
            <div className="space-y-4">
              <ReminderItem
                day="24"
                month="OCT"
                title="HVAC Inspection"
                subtitle="Building A, B & C"
                time="10:00 AM"
              />
              <ReminderItem
                day="31"
                month="OCT"
                title="Send Monthly Report"
                subtitle="To Property Owners"
                time="Auto-Send"
              />
            </div>
            <button className="w-full mt-6 py-2 rounded-lg border border-white/10 border-dashed text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              + Add New Reminder
            </button>
          </div>

          {/* Automate Workflow Banner */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="p-2 bg-white/20 rounded-lg w-fit mb-4">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Automate Your Workflow</h3>
              <p className="text-sm text-blue-100 mb-4">
                Set up smart triggers to automatically notify tenants about rent
                and maintenance.
              </p>
              <button className="px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-bold shadow-lg hover:bg-blue-50 transition-colors">
                Explore Automation
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components

function SummaryCard({
  icon,
  title,
  count,
  badge,
  badgeColor,
  borderLeft,
}: any) {
  return (
    <div
      className={`bg-surface/30 backdrop-blur-md border border-white/10 rounded-xl p-5 relative overflow-hidden`}
    >
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${
          borderLeft.replace("border-l-4", "bg-current").split(" ")[1]
        }`}
      />
      <div className="flex justify-between items-start mb-2">
        <div className={`p-2 rounded-lg bg-white/5`}>{icon}</div>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}
        >
          {badge}
        </span>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-400 mb-0.5">{title}</p>
        <h3 className="text-2xl font-bold text-white">{count}</h3>
      </div>
    </div>
  );
}

function NotificationItem({
  icon,
  iconBg,
  title,
  desc,
  time,
  details,
  isNew,
  accent,
}: any) {
  return (
    <div
      className={`p-4 md:p-6 hover:bg-white/5 transition-colors group flex gap-4 ${
        accent || ""
      }`}
    >
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            {title}
            {isNew && (
              <span className="bg-blue-500/20 text-blue-400 text-[10px] px-1.5 py-0.5 rounded border border-blue-500/20">
                New
              </span>
            )}
          </h4>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
            {time}
          </span>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
        {details}
      </div>
    </div>
  );
}

function ToggleRule({ title, desc, defaultChecked }: any) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
      <button
        onClick={() => setChecked(!checked)}
        className={`w-11 h-6 rounded-full transition-colors relative ${
          checked ? "bg-primary" : "bg-white/10"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

function ReminderItem({ day, month, title, subtitle, time }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase">
          {month}
        </span>
        <span className="text-lg font-bold text-white leading-none">{day}</span>
      </div>
      <div>
        <h4 className="text-sm font-bold text-white">{title}</h4>
        <p className="text-xs text-gray-500 mb-1">{subtitle}</p>
        <div className="flex items-center gap-1 text-[10px] text-primary">
          <Clock className="w-3 h-3" />
          {time}
        </div>
      </div>
    </div>
  );
}

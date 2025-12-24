"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  Mail,
  Phone,
  Globe,
  DollarSign,
  Calendar,
  Clock,
  Bell,
  Check,
  Shield,
  CreditCard,
  FileText,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white font-display mb-2">
          Settings
        </h1>
        <p className="text-gray-400">
          Manage your personal details, workspace preferences, and security
          settings.
        </p>
      </div>

      {/* My Profile */}
      <section className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold text-white">My Profile</h2>
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Public visibility
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 group cursor-pointer">
            <Image
              src="https://i.pravatar.cc/150?u=Jane"
              alt="Profile"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">Jane Cooper</h3>
            <p className="text-sm text-gray-400 mb-3">Property Manager</p>
          </div>
          <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm font-medium text-white transition-colors">
            Change Photo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InputGroup label="Full Name" defaultValue="Jane Cooper" />
          <InputGroup label="Job Title" defaultValue="Property Manager" />
          <InputGroup
            label="Email Address"
            defaultValue="jane.cooper@example.com"
            icon={<Mail className="w-4 h-4" />}
          />
          <InputGroup
            label="Phone Number"
            defaultValue="+1 (555) 000-0000"
            icon={<Phone className="w-4 h-4" />}
          />
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-2.5 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
            Save Changes
          </button>
        </div>
      </section>

      {/* General Preferences */}
      <section className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-bold text-white mb-6">
          General Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectGroup
            label="Language"
            options={["English (United States)", "Spanish", "French"]}
            icon={<Globe className="w-4 h-4" />}
          />
          <SelectGroup
            label="Currency"
            options={["USD ($)", "EUR (€)", "GBP (£)"]}
            icon={<DollarSign className="w-4 h-4" />}
          />
          <SelectGroup
            label="Date Format"
            options={["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"]}
            icon={<Calendar className="w-4 h-4" />}
          />
          <SelectGroup
            label="Time Zone"
            options={[
              "(GMT-08:00) Pacific Time",
              "(GMT-05:00) Eastern Time",
              "(GMT+00:00) UTC",
            ]}
            icon={<Clock className="w-4 h-4" />}
          />
        </div>
      </section>

      {/* Notifications */}
      <section className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-bold text-white mb-6">Notifications</h2>
        <div className="space-y-6">
          <ToggleItem
            title="Rent Payments"
            desc="Receive an email when a tenant pays rent."
            defaultChecked={true}
          />
          <ToggleItem
            title="Maintenance Requests"
            desc="Get notified immediately for new maintenance tickets."
            defaultChecked={true}
          />
          <ToggleItem
            title="Marketing Emails"
            desc="Receive news, updates, and rental tips."
            defaultChecked={false}
          />
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-bold text-white mb-6">Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-white/10 rounded-xl bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                <FileText className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">QuickBooks</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-green-500 font-medium">
                    Connected
                  </span>
                </div>
              </div>
            </div>
            <button className="text-xs text-gray-400 hover:text-white font-medium transition-colors">
              Disconnect
            </button>
          </div>

          <div className="p-4 border border-white/10 rounded-xl bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#635BFF]/10 rounded-lg flex items-center justify-center border border-[#635BFF]/20">
                <CreditCard className="w-5 h-5 text-[#635BFF]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Stripe</h3>
                <p className="text-xs text-gray-400 mt-0.5">Payment Gateway</p>
              </div>
            </div>
            <button className="px-3 py-1.5 bg-white border border-gray-200 rounded text-xs font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
              Connect
            </button>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-bold text-white mb-6">Security</h2>
        <div className="space-y-6">
          <div className="w-full md:w-1/2">
            <label className="text-sm font-medium text-gray-300 mb-2 block">
              Current Password
            </label>
            <input
              type="password"
              defaultValue="password123"
              className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                New Password
              </label>
              <input
                type="password"
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="........"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="........"
              />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button className="text-sm text-primary hover:text-primary/80 font-medium">
              Update Password
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Components
function InputGroup({
  label,
  defaultValue,
  icon,
}: {
  label: string;
  defaultValue?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">{label}</label>
      <div className="relative">
        <input
          defaultValue={defaultValue}
          className={`w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all ${
            icon ? "pl-10" : ""
          }`}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

function SelectGroup({
  label,
  options,
  icon,
}: {
  label: string;
  options: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">{label}</label>
      <div className="relative">
        <select className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer pl-10">
          {options.map((opt) => (
            <option key={opt} className="bg-surface">
              {opt}
            </option>
          ))}
        </select>
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            {icon}
          </div>
        )}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-500" />
      </div>
    </div>
  );
}

function ToggleItem({
  title,
  desc,
  defaultChecked,
}: {
  title: string;
  desc: string;
  defaultChecked: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
      <button
        onClick={() => setChecked(!checked)}
        className={`w-12 h-6 rounded-full transition-colors relative ${
          checked ? "bg-primary" : "bg-white/10"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

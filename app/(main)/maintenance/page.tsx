"use client";

import React, { useState } from "react";
import {
  Wrench,
  Plus,
  Search,
  Filter,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import AddRequest from "@/components/Maintenance/AddRequest";

export default function MaintenancePage() {
  const [isCreating, setIsCreating] = useState(false);

  if (isCreating) {
    return (
      <AddRequest
        onBack={() => setIsCreating(false)}
        onSave={(data) => {
          console.log("Saved Request:", data);
          setIsCreating(false);
        }}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-300">Maintenance</span>
          </div>
          <h1 className="text-3xl font-bold text-white font-display mb-2">
            Maintenance Requests
          </h1>
          <p className="text-gray-400">
            Handle repair requests, track status, and schedule maintenance.
          </p>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/25"
        >
          <Plus className="w-5 h-5" />
          New Request
        </button>
      </div>

      {/* Toolbar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-5 relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
          <input
            type="text"
            placeholder="Search requests..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
          />
        </div>
        <div className="md:col-span-3">
          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
            <option>All Priorities</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Empty State / List Placeholder */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm min-h-[400px] flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
          <Wrench className="h-10 w-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          No Active Requests
        </h3>
        <p className="text-gray-400 max-w-sm mb-8">
          There are currently no active maintenance requests. Click specific
          requests above to create one.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl text-left">
          <div className="bg-surface/50 border border-white/10 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2 text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Completed
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">124</div>
            <div className="text-xs text-gray-500">Past requests solved</div>
          </div>
          <div className="bg-surface/50 border border-white/10 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2 text-blue-400">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Avg. Time
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">2 Days</div>
            <div className="text-xs text-gray-500">Resolution time</div>
          </div>
          <div className="bg-surface/50 border border-white/10 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2 text-orange-400">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Pending
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">0</div>
            <div className="text-xs text-gray-500">Requires attention</div>
          </div>
        </div>
      </div>
    </div>
  );
}

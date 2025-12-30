import React from "react";
import { Search, Calendar, Filter, ChevronDown } from "lucide-react";

interface BillingToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  categoryFilter: string;
  onCategoryChange: (value: string) => void;
}

export function BillingToolbar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  categoryFilter,
  onCategoryChange,
}: BillingToolbarProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-1">
      <div className="md:col-span-4 relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
        <input
          type="text"
          placeholder="Search tenant or apartment..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
        />
      </div>
      <div className="md:col-span-2 relative">
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
        >
          <option value="All" className="bg-gray-900 text-white">
            All Statuses
          </option>
          <option value="Paid" className="bg-gray-900 text-white">
            Paid
          </option>
          <option value="Pending" className="bg-gray-900 text-white">
            Pending
          </option>
          <option value="Overdue" className="bg-gray-900 text-white">
            Overdue
          </option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
      <div className="md:col-span-2 relative">
        <select
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
        >
          <option value="All" className="bg-gray-900 text-white">
            All Categories
          </option>
          <option value="Rent" className="bg-gray-900 text-white">
            Rent
          </option>
          <option value="Electricity" className="bg-gray-900 text-white">
            Electricity
          </option>
          <option value="Maintenance" className="bg-gray-900 text-white">
            Maintenance
          </option>
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
      <div className="md:col-span-2 relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="month"
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all cursor-pointer [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
        />
      </div>
      <div className="md:col-span-2">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
          <Filter className="w-4 h-4" />
          More Filters
        </button>
      </div>
    </div>
  );
}

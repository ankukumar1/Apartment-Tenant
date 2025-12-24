import React from "react";
import { Search, Filter, Plus } from "lucide-react";

interface TenantToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onAddTenant: () => void;
}

export function TenantToolbar({
  searchTerm,
  onSearchChange,
  onAddTenant,
}: TenantToolbarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-1">
      <div className="relative w-full md:w-96 group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
        <input
          type="text"
          placeholder="Search by name, unit, or email..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
        />
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all w-full md:w-auto">
          <Filter className="w-4 h-4" />
          Filter
        </button>
        <button
          onClick={onAddTenant}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/25 w-full md:w-auto"
        >
          <Plus className="w-5 h-5" />
          Add Tenant
        </button>
      </div>
    </div>
  );
}

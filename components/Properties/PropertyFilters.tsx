import React from "react";
import { Search, Filter } from "lucide-react";

export function PropertyFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search by Unit Number or Tenant Name"
          className="w-full bg-surface/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
        />
      </div>
      <div className="flex gap-4">
        <select className="bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 cursor-pointer min-w-[140px]">
          <option>All Types</option>
          <option>2 BHK</option>
          <option>1 BHK</option>
        </select>
        <select className="bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 cursor-pointer min-w-[140px]">
          <option>All Statuses</option>
          <option>Occupied</option>
          <option>Vacant</option>
        </select>
        <button className="bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white hover:bg-white/5 transition-colors">
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { Users, Edit2 } from "lucide-react";
import Image from "next/image";

import { UnitType } from "@/types";

export interface UnitCardProps {
  unit: UnitType;
}

export function UnitCard({ unit }: { unit: UnitType }) {
  const statusColors: Record<UnitType["status"], string> = {
    Occupied: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Vacant: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Maintenance: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };

  return (
    <div className="bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-black/20 hover:border-primary/30 transition-all duration-300 group">
      {/* Image Area */}
      <div className="relative h-48 w-full bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={unit.image}
          alt={unit.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 text-black text-xs font-bold rounded-md shadow-lg">
            {unit.unitNumber}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full border backdrop-blur-md ${
              statusColors[unit.status]
            }`}
          >
            {unit.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
              {unit.title}
            </h3>
            <p className="text-xs text-gray-400">{unit.type}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary">
              ${unit.price.toLocaleString()}
              <span className="text-xs text-gray-400 font-normal">/mo</span>
            </p>
          </div>
        </div>

        <div className="my-4 border-t border-white/5" />

        {/* Tenant Info */}
        <div className="flex items-center gap-3 mb-6">
          {unit.tenant ? (
            <>
              {unit.tenant.image ? (
                <img
                  src={unit.tenant.image}
                  alt={unit.tenant.name}
                  className="w-10 h-10 rounded-full border-2 border-surface"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
              )}
              <div>
                <p className="text-xs text-gray-500">Tenant</p>
                <p className="text-sm font-medium text-white">
                  {unit.tenant.name}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-dashed border-white/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Status</p>
                <p className="text-sm font-medium text-gray-400 italic">
                  No tenant assigned
                </p>
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="flex-1 bg-white/5 hover:bg-primary/20 hover:text-primary text-sm font-medium text-white py-2.5 rounded-lg transition-all border border-white/5 hover:border-primary/20">
            View Details
          </button>
          <button className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all border border-white/5">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

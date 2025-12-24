import React from "react";
import { Users, Edit2 } from "lucide-react";
import Image from "next/image";

import { UnitType } from "@/types";

export interface UnitCardProps {
  unit: UnitType;
  onViewDetails: () => void;
  onEdit: () => void;
}

export function UnitCard({ unit, onViewDetails, onEdit }: UnitCardProps) {
  const statusColors: Record<UnitType["status"], string> = {
    Occupied: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Vacant: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Maintenance: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };

  return (
    <div className="group relative flex flex-col bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image Area */}
      <div className="relative h-56 w-full bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
        <Image
          src={unit.image}
          alt={unit.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/10">
            {unit.unitNumber}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span
            className={`px-3 py-1 text-xs font-bold rounded-lg border backdrop-blur-md ${
              statusColors[unit.status]
            }`}
          >
            {unit.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
              {unit.title}
            </h3>
            <p className="text-xs text-gray-400 font-medium bg-white/5 inline-block px-2 py-1 rounded-md border border-white/5">
              {unit.type}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              ${unit.price.toLocaleString()}
              <span className="text-xs text-gray-500 font-normal ml-1">
                /mo
              </span>
            </p>
          </div>
        </div>

        <div className="my-4 border-t border-white/5" />

        {/* Tenant Info */}
        <div className="flex items-center gap-3 mb-6 flex-1">
          {unit.tenant ? (
            <>
              <div className="relative w-10 h-10 rounded-full border border-white/10 overflow-hidden">
                {unit.tenant.image ? (
                  <Image
                    src={unit.tenant.image}
                    alt={unit.tenant.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-surface flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                  Tenant
                </span>
                <span className="text-sm font-medium text-gray-200">
                  {unit.tenant.name}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-dashed border-white/20 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                <Users className="w-5 h-5 text-gray-600 group-hover:text-primary/50 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                  Status
                </span>
                <span className="text-sm font-medium text-gray-400 italic">
                  No tenant assigned
                </span>
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <button
            onClick={onViewDetails}
            className="flex-1 bg-white/5 hover:bg-primary hover:text-white text-sm font-medium text-gray-300 py-2.5 rounded-xl transition-all border border-white/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            View Details
          </button>
          <button
            onClick={onEdit}
            className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl transition-all border border-white/10 hover:border-white/20 active:scale-95"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Building2,
  Users,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PropertyDetails from "@/components/Properties/PropertyDetails";
import { UnitType } from "@/types";
import { UnitCard } from "@/components/Properties/UnitCard";
import { PropertyFilters } from "@/components/Properties/PropertyFilters";
import { units } from "@/components/demoData/PropertiesDemoData";
import AddApartment from "@/components/Properties/AddApartment";

export default function PropertiesPage() {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitType | null>(null);
  const [editingUnit, setEditingUnit] = useState<UnitType | null>(null);

  if (isAdding) {
    return (
      <AddApartment
        onBack={() => setIsAdding(false)}
        onSave={(data) => {
          console.log("Saved:", data);
          setIsAdding(false);
          setEditingUnit(null);
        }}
        initialData={
          editingUnit
            ? {
                unitNumber: editingUnit.unitNumber,
                type: editingUnit.type,
                status: editingUnit.status,
                rent: editingUnit.price,
                // These fields are not in UnitType but are in the form,
                // typically we'd fetch full details or use what we have.
                // For demo, we'll map what we can.
                bedrooms: 2, // Mock default
                bathrooms: 2, // Mock default
                size: 1100, // Mock default
                deposit: editingUnit.price, // Mock default
              }
            : undefined
        }
      />
    );
  }

  if (selectedUnit) {
    return (
      <PropertyDetails
        unit={selectedUnit}
        onBack={() => setSelectedUnit(null)}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white font-display mb-2">
            Apartment Units
          </h1>
          <p className="text-gray-400">
            Manage your property units, occupancy, and tenant details.
          </p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-all shadow-lg shadow-primary/20"
        >
          <Building2 className="w-5 h-5" />
          Add New Unit
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Building2 className="w-6 h-6 text-blue-400" />}
          label="Total Units"
          value="42"
          borderColor="border-blue-500/50"
          gradient="from-blue-500/10 to-transparent"
        />
        <StatCard
          icon={<Users className="w-6 h-6 text-emerald-400" />}
          label="Occupied"
          value="38"
          borderColor="border-emerald-500/50"
          gradient="from-emerald-500/10 to-transparent"
        />
        <StatCard
          icon={<Home className="w-6 h-6 text-orange-400" />}
          label="Vacant"
          value="4"
          borderColor="border-orange-500/50"
          gradient="from-orange-500/10 to-transparent"
        />
      </div>

      {/* Search & Filters */}
      <PropertyFilters />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {units.map((unit) => (
          <UnitCard
            key={unit.id}
            unit={unit}
            onViewDetails={() => setSelectedUnit(unit)}
            onEdit={() => {
              setEditingUnit(unit);
              setIsAdding(true);
            }}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg font-medium">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-white/5 text-gray-400 rounded-lg font-medium">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-white/5 text-gray-400 rounded-lg font-medium">
          3
        </button>
        <span className="text-gray-500">...</span>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-white/5 text-gray-400 rounded-lg font-medium">
          8
        </button>
        <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, borderColor, gradient }: any) {
  return (
    <div className="relative overflow-hidden bg-surface/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-all duration-300">
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${
          borderColor.split("-")[1]
        }-500 to-transparent opacity-50`}
      />
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-xl bg-white/5 ${borderColor.replace(
            "border",
            "text"
          )}`}
        >
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <h3 className="text-3xl font-bold text-white font-display mb-2">
          {value}
        </h3>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-2/3 h-full bg-gradient-to-r ${gradient} -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </div>
  );
}

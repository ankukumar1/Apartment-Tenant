"use client";

import React, { useState } from "react";
import { Users, FileText, AlertCircle } from "lucide-react";
import { TenantType } from "@/types";
import { TenantToolbar } from "@/components/Tenants/TenantToolbar";
import { TenantTable } from "@/components/Tenants/TenantTable";
import { StatCard } from "@/components/Tenants/StatCard";
import AddTenant from "@/components/Tenants/AddTenant";

// Mock Data
import { tenants } from "@/components/demoData/TenantsDemoData";

import TenantDetails from "@/components/Tenants/TenantDetails";

// ... existing code ...

export default function TenantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<TenantType | null>(null);

  if (isAdding) {
    // Basic mapping from TenantType to FormValues for editing
    const initialData = selectedTenant
      ? {
          firstName: selectedTenant.name.split(" ")[0],
          lastName: selectedTenant.name.split(" ")[1] || "",
          email: selectedTenant.email,
          phone: selectedTenant.phone,
          unitId: selectedTenant.unit,
        }
      : undefined;

    return (
      <AddTenant
        onBack={() => {
          setIsAdding(false);
          // Do not clear selectedTenant so we go back to details
        }}
        onSave={(data) => {
          console.log("Saved Tenant:", data);
          setIsAdding(false);
        }}
        initialData={initialData}
      />
    );
  }

  if (selectedTenant) {
    return (
      <TenantDetails
        tenant={selectedTenant}
        onBack={() => setSelectedTenant(null)}
        onEdit={() => setIsAdding(true)}
        onDelete={() => {
          console.log("Delete", selectedTenant.id);
        }}
      />
    );
  }

  const filteredTenants = tenants.filter(
    (tenant) =>
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-display mb-2">
          Tenants Management
        </h1>
        <p className="text-gray-400">
          Manage your building's residents, lease agreements, and contact
          information.
        </p>
      </div>

      {/* Stats Cars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Users className="w-6 h-6 text-blue-400" />}
          label="Total Tenants"
          value="124"
          trend="+2% this month"
          trendColor="text-emerald-400"
          borderColor="border-blue-500/50"
          gradient="from-blue-500/10 to-transparent"
        />
        <StatCard
          icon={<FileText className="w-6 h-6 text-emerald-400" />}
          label="Occupancy Rate"
          value="92%"
          trend="+1.5%"
          trendColor="text-emerald-400"
          borderColor="border-emerald-500/50"
          gradient="from-emerald-500/10 to-transparent"
        />
        <StatCard
          icon={<AlertCircle className="w-6 h-6 text-orange-400" />}
          label="Pending Renewals"
          value="5"
          trend="Requires attention"
          trendColor="text-orange-400"
          borderColor="border-orange-500/50"
          gradient="from-orange-500/10 to-transparent"
        />
      </div>

      {/* Toolbar */}
      <TenantToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddTenant={() => setIsAdding(true)}
      />

      {/* Table */}
      <TenantTable
        tenants={filteredTenants}
        onEdit={(tenant) => {
          console.log("Edit tenant:", tenant);
          // Logic to open edit form would go here
          setIsAdding(true);
          // You would typically set an 'editingTenant' state here similar to properties
        }}
        onDelete={(id) => {
          console.log("Delete tenant:", id);
          // Logic to delete would go here
          alert("Delete logic not implemented yet for " + id);
        }}
        onViewDetails={(tenant) => {
          setSelectedTenant(tenant);
        }}
      />
    </div>
  );
}

// Sub-components

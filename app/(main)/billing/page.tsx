"use client";

import React, { useState } from "react";
import {
  Send,
  Plus,
  AlertTriangle,
  CheckCircle,
  CreditCard,
} from "lucide-react";
import { InvoiceType } from "@/types";
import { BillingToolbar } from "@/components/Billing/BillingToolbar";
import { BillingTable } from "@/components/Billing/BillingTable";
import { BillingStatCard } from "@/components/Billing/BillingStatCard";

import { invoices } from "@/components/demoData/BillingDemoData";

import CreateInvoice from "@/components/Billing/CreateInvoice";

// ... imports ...

export default function BillingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.unit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isCreating) {
    return (
      <CreateInvoice
        onBack={() => setIsCreating(false)}
        onSave={(data) => {
          console.log("Invoice created", data);
          setIsCreating(false);
          // Here you would also update the list of invoices
        }}
      />
    );
  }

  // ... inside BillingPage component
  const handleSendReminders = () => {
    const overdueCount = invoices.filter(
      (inv) => inv.status === "Overdue"
    ).length;
    if (overdueCount === 0) {
      alert("Good news! No overdue invoices to remind.");
      return;
    }
    const confirmSend = window.confirm(
      `Found ${overdueCount} overdue invoice(s). Send payment reminders to these tenants?`
    );
    if (confirmSend) {
      // Simulate sending
      alert(`Reminders sent successfully to ${overdueCount} tenants!`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-300">Billing & Invoicing</span>
          </div>
          <h1 className="text-3xl font-bold text-white font-display mb-2">
            Billing & Invoicing
          </h1>
          <p className="text-gray-400">
            Manage rent, utilities, and track payment statuses across all
            properties.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleSendReminders}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all font-medium"
          >
            <Send className="w-4 h-4" />
            Send Reminders
          </button>
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/25"
          >
            <Plus className="w-5 h-5" />
            Create New Invoice
          </button>
        </div>
      </div>

      {/* Stats Cars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BillingStatCard
          icon={<CreditCard className="w-6 h-6 text-blue-400" />}
          label="Outstanding Balance"
          value="$12,450.00"
          trend="+2.5% from last month"
          trendColor="text-emerald-400"
          borderColor="border-blue-500/50"
          gradient="from-blue-500/10 to-transparent"
        />
        <BillingStatCard
          icon={<AlertTriangle className="w-6 h-6 text-orange-400" />}
          label="Overdue Invoices"
          value="5"
          trend="+1 new since yesterday"
          trendColor="text-orange-400"
          borderColor="border-orange-500/50"
          gradient="from-orange-500/10 to-transparent"
        />
        <BillingStatCard
          icon={<CheckCircle className="w-6 h-6 text-emerald-400" />}
          label="Paid this Month"
          value="$45,200.00"
          trend="-5% vs last month"
          trendColor="text-gray-400"
          borderColor="border-emerald-500/50"
          gradient="from-emerald-500/10 to-transparent"
        />
      </div>

      {/* Toolbar */}
      <BillingToolbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Table */}
      <BillingTable
        invoices={filteredInvoices}
        onView={(inv) => console.log("View", inv.id)}
        onEdit={(inv) => console.log("Edit", inv.id)}
        onDelete={(id) => console.log("Delete", id)}
      />
    </div>
  );
}

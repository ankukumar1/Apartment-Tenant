"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Wallet,
  Send,
  Plus,
  Search,
  Calendar,
  Filter,
  MoreVertical,
  AlertTriangle,
  CheckCircle,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { InvoiceType } from "@/types";

// Mock Data
const invoices: InvoiceType[] = [
  {
    id: "INV-2023-001",
    tenant: {
      name: "John Cooper",
      email: "j.cooper@example.com",
      image: "https://i.pravatar.cc/150?u=John",
    },
    unit: "Unit 4B",
    category: "Rent",
    dueDate: "Oct 1, 2023",
    amount: 1200.0,
    status: "Paid",
  },
  {
    id: "INV-2023-002",
    tenant: {
      name: "Sarah Jenkins",
      email: "s.jenkins@example.com",
      image: "https://i.pravatar.cc/150?u=Sarah",
    },
    unit: "Unit 12A",
    category: "Electricity",
    dueDate: "Oct 5, 2023",
    amount: 145.5,
    status: "Pending",
  },
  {
    id: "INV-2023-003",
    tenant: {
      name: "Michael Ross",
      email: "m.ross@example.com",
      image: "https://i.pravatar.cc/150?u=Michael",
    },
    unit: "Unit 1C",
    category: "Maintenance",
    dueDate: "Sep 28, 2023",
    amount: 300.0,
    status: "Overdue",
  },
  {
    id: "INV-2023-004",
    tenant: {
      name: "Emily Chen",
      email: "e.chen@example.com",
      image: "https://i.pravatar.cc/150?u=Emily",
    },
    unit: "Unit 5H",
    category: "Rent",
    dueDate: "Oct 1, 2023",
    amount: 1450.0,
    status: "Paid",
  },
  {
    id: "INV-2023-005",
    tenant: {
      name: "David Kim",
      email: "d.kim@example.com",
      image: "https://i.pravatar.cc/150?u=David",
    },
    unit: "Unit 3B",
    category: "Electricity",
    dueDate: "Oct 6, 2023",
    amount: 98.2,
    status: "Pending",
  },
];

export default function BillingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.unit.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all font-medium">
            <Send className="w-4 h-4" />
            Send Reminders
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/25">
            <Plus className="w-5 h-5" />
            Create New Invoice
          </button>
        </div>
      </div>

      {/* Stats Cars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<CreditCard className="w-6 h-6 text-blue-400" />}
          label="Outstanding Balance"
          value="$12,450.00"
          trend="+2.5% from last month"
          trendColor="text-emerald-400"
          borderColor="border-blue-500/50"
          gradient="from-blue-500/10 to-transparent"
        />
        <StatCard
          icon={<AlertTriangle className="w-6 h-6 text-orange-400" />}
          label="Overdue Invoices"
          value="5"
          trend="+1 new since yesterday"
          trendColor="text-orange-400"
          borderColor="border-orange-500/50"
          gradient="from-orange-500/10 to-transparent"
        />
        <StatCard
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-1">
        <div className="md:col-span-4 relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
          <input
            type="text"
            placeholder="Search tenant or apartment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
          />
        </div>
        <div className="md:col-span-2">
          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
            <option>All Statuses</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
            <option>All Categories</option>
            <option>Rent</option>
            <option>Electricity</option>
            <option>Maintenance</option>
          </select>
        </div>
        <div className="md:col-span-2 relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Oct 2023"
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all cursor-pointer"
          />
        </div>
        <div className="md:col-span-2">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Invoice ID
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Tenant
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Unit
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-right py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredInvoices.map((inv) => (
                <tr
                  key={inv.id}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="py-4 px-6 text-sm font-medium text-white">
                    {inv.id}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                        <Image
                          src={inv.tenant.image}
                          alt={inv.tenant.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {inv.tenant.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {inv.tenant.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-400">
                    {inv.unit}
                  </td>
                  <td className="py-4 px-6">
                    <CategoryBadge category={inv.category} />
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`text-sm ${
                        inv.status === "Overdue"
                          ? "text-red-400 font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      {inv.dueDate}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm font-bold text-white">
                    $
                    {inv.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td className="py-4 px-6">
                    <StatusBadge status={inv.status} />
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-6 border-t border-white/10">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-white">1</span> to{" "}
            <span className="font-medium text-white">
              {filteredInvoices.length}
            </span>{" "}
            of <span className="font-medium text-white">42</span> results
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components
function StatCard({
  icon,
  label,
  value,
  trend,
  trendColor,
  borderColor,
  gradient,
}: any) {
  return (
    <div className="relative overflow-hidden bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-all duration-300">
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
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full bg-white/5 ${trendColor}`}
        >
          {trend}
        </span>
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

function StatusBadge({ status }: { status: InvoiceType["status"] }) {
  const styles = {
    Paid: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Overdue: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${styles[status].replace(
          "text",
          "bg"
        )}`}
      />
      {status}
    </span>
  );
}

function CategoryBadge({ category }: { category: InvoiceType["category"] }) {
  const styles = {
    Rent: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Electricity: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Maintenance: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  };

  return (
    <span
      className={`px-2 py-1 rounded-md text-xs font-medium border ${styles[category]}`}
    >
      {category}
    </span>
  );
}

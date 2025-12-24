import React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  CreditCard,
  History,
  Edit,
  Trash2,
  Download,
} from "lucide-react";
import { TenantType } from "@/types";

interface TenantDetailsProps {
  tenant: TenantType;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function TenantDetails({
  tenant,
  onBack,
  onEdit,
  onDelete,
}: TenantDetailsProps) {
  // Mock lease document data
  const documents = [
    { name: "Lease Agreement 2023.pdf", size: "2.4 MB", date: "Jan 1, 2023" },
    { name: "Renters Insurance.pdf", size: "1.2 MB", date: "Jan 3, 2023" },
    { name: "Move-in Inspection.pdf", size: "4.8 MB", date: "Jan 5, 2023" },
  ];

  // Mock payment history
  const paymentHistory = [
    { id: "INV-001", date: "Oct 1, 2023", amount: 1200, status: "Paid" },
    { id: "INV-002", date: "Sep 1, 2023", amount: 1200, status: "Paid" },
    { id: "INV-003", date: "Aug 1, 2023", amount: 1200, status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Tenants
        </button>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
          <button
            onClick={onDelete}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-32 h-32 rounded-full border-4 border-white/10 overflow-hidden shrink-0">
                <Image
                  src={tenant.image}
                  alt={tenant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-white font-display mb-1">
                    {tenant.name}
                  </h1>
                  <div className="flex items-center gap-3 text-gray-400">
                    <span>Tenant ID: {tenant.id}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                        tenant.status === "Active"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : tenant.status === "Overdue"
                          ? "bg-red-500/10 text-red-400 border-red-500/20"
                          : "bg-orange-500/10 text-orange-400 border-orange-500/20"
                      }`}
                    >
                      {tenant.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg">
                    <Mail className="w-4 h-4 text-primary" />
                    {tenant.email}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    {tenant.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lease Details */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white font-display mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Lease Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400">Unit</span>
                  <span className="text-white font-medium">{tenant.unit}</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400">Building</span>
                  <span className="text-white font-medium">
                    {tenant.building}
                  </span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400">Monthly Rent</span>
                  <span className="text-white font-medium">$1,200.00</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400">Lease Start</span>
                  <span className="text-white font-medium">Jan 1, 2023</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400">Lease End</span>
                  <span className="text-white font-medium">
                    {tenant.leaseEnd}
                  </span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-gray-400">Security Deposit</span>
                  <span className="text-white font-medium">$1,200.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white font-display mb-6 flex items-center gap-2">
              <History className="w-5 h-5 text-orange-400" />
              Recent Payments
            </h2>
            <div className="space-y-2">
              {paymentHistory.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Rent Payment</p>
                      <p className="text-xs text-gray-500">{payment.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">
                      ${payment.amount.toFixed(2)}
                    </p>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      {payment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
              View All History
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Documents */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Documents</h3>
            <div className="space-y-3">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-blue-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {doc.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {doc.size} • {doc.date}
                      </p>
                    </div>
                    <button className="p-2 text-gray-500 hover:text-white transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-dashed border-primary/30 rounded-xl hover:bg-primary/5">
              + Upload Document
            </button>
          </div>

          {/* Quick Stats */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 text-center">
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-xs text-gray-400">Months Stayed</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 text-center">
                <p className="text-2xl font-bold text-emerald-400">100%</p>
                <p className="text-xs text-gray-400">Payment Health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

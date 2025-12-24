"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Save, Upload, FileText, X } from "lucide-react";

// Form Validation Schema
const tenantSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  unitId: z.string().min(1, "Unit selection is required"),
  leaseStart: z.string().min(1, "Lease Start Date is required"),
  leaseEnd: z.string().min(1, "Lease End Date is required"),
  status: z.enum(["Active", "Pending"]),
  documents: z.any().optional(), // File upload handling is complex in pure React, keeping it simple
});

type TenantFormValues = z.infer<typeof tenantSchema>;

interface AddTenantProps {
  onBack: () => void;
  onSave: (data: TenantFormValues) => void;
  initialData?: Partial<TenantFormValues>;
}

export default function AddTenant({
  onBack,
  onSave,
  initialData,
}: AddTenantProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<TenantFormValues>({
    resolver: zodResolver(tenantSchema),
    defaultValues: {
      status: "Active",
      ...initialData,
    } as any,
  });

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Tenant Data:", data);
    onSave(data);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Tenants
        </button>
        <h1 className="text-3xl font-bold text-white font-display">
          {initialData ? "Edit Tenant" : "Add New Tenant"}
        </h1>
        <p className="text-gray-400 mt-2">
          Enter tenant details, assign a unit, and upload necessary documents.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Analysis */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                First Name <span className="text-red-400">*</span>
              </label>
              <input
                {...register("firstName")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-xs text-red-400">
                  {errors.firstName.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Last Name <span className="text-red-400">*</span>
              </label>
              <input
                {...register("lastName")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-xs text-red-400">
                  {errors.lastName.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-400">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && (
                <p className="text-xs text-red-400">
                  {errors.phone.message as string}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Unit & Lease Details */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            Unit & Lease Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-300">
                Assign Unit <span className="text-red-400">*</span>
              </label>
              <select
                {...register("unitId")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-surface text-gray-400">
                  Select a Unit
                </option>
                <option value="101" className="bg-surface">
                  Unit 101 - 2 BHK (Vacant)
                </option>
                <option value="102" className="bg-surface">
                  Unit 102 - Studio (Vacant)
                </option>
                <option value="205" className="bg-surface">
                  Unit 205 - 1 BHK (Vacant)
                </option>
              </select>
              {errors.unitId && (
                <p className="text-xs text-red-400">
                  {errors.unitId.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Lease Start Date <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                {...register("leaseStart")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [color-scheme:dark]"
              />
              {errors.leaseStart && (
                <p className="text-xs text-red-400">
                  {errors.leaseStart.message as string}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Lease End Date <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                {...register("leaseEnd")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [color-scheme:dark]"
              />
              {errors.leaseEnd && (
                <p className="text-xs text-red-400">
                  {errors.leaseEnd.message as string}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Documents Upload */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">Documents</h2>
          <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-primary/50 transition-colors group cursor-pointer bg-white/5">
            <input type="file" className="hidden" id="file-upload" multiple />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm font-medium text-white mb-1">
                Click to upload documents
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or PDF (max. 10MB)
              </p>
            </label>
          </div>

          {/* Mock Uploaded File List */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Lease_Agreement_Draft.pdf
                  </p>
                  <p className="text-xs text-gray-500">2.4 MB</p>
                </div>
              </div>
              <button
                type="button"
                className="p-1 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Tenant
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

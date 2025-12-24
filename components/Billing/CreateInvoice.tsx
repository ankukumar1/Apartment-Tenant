"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Save, DollarSign, Calendar } from "lucide-react";

// Invoice Schema
const invoiceSchema = z.object({
  tenantId: z.string().min(1, "Tenant is required"),
  unitId: z.string().min(1, "Unit is required"),
  category: z.string().min(1, "Category is required"),
  amount: z.coerce.number().min(1, "Amount must be greater than 0"),
  dueDate: z.string().min(1, "Due Date is required"),
  description: z.string().optional(),
});

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

interface CreateInvoiceProps {
  onBack: () => void;
  onSave: (data: InvoiceFormValues) => void;
  initialData?: Partial<InvoiceFormValues>; // For pre-filling tenant/unit
}

export default function CreateInvoice({
  onBack,
  onSave,
  initialData,
}: CreateInvoiceProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      category: "Rent",
      ...initialData,
    },
  });

  const onSubmit = async (data: InvoiceFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Invoice Created:", data);
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
          Back to Billing
        </button>
        <h1 className="text-3xl font-bold text-white font-display">
          Create New Invoice
        </h1>
        <p className="text-gray-400 mt-2">
          Generate a new invoice for a tenant.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Invoice Details */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-green-400" />
            </div>
            <h2 className="text-lg font-semibold text-white">
              Invoice Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Tenant <span className="text-red-400">*</span>
              </label>
              <select
                {...register("tenantId")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-surface text-gray-400">
                  Select tenant...
                </option>
                <option value="john" className="bg-surface">
                  John Cooper
                </option>
                <option value="sarah" className="bg-surface">
                  Sarah Jenkins
                </option>
              </select>
              {errors.tenantId && (
                <p className="text-xs text-red-400">
                  {errors.tenantId.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Unit <span className="text-red-400">*</span>
              </label>
              <select
                {...register("unitId")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-surface text-gray-400">
                  Select unit...
                </option>
                <option value="101" className="bg-surface">
                  Unit 101
                </option>
                <option value="102" className="bg-surface">
                  Unit 102
                </option>
              </select>
              {errors.unitId && (
                <p className="text-xs text-red-400">{errors.unitId.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                {...register("category")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="Rent" className="bg-surface">
                  Rent
                </option>
                <option value="Electricity" className="bg-surface">
                  Electricity
                </option>
                <option value="Water" className="bg-surface">
                  Water
                </option>
                <option value="Maintenance" className="bg-surface">
                  Maintenance Fee
                </option>
                <option value="Other" className="bg-surface">
                  Other
                </option>
              </select>
              {errors.category && (
                <p className="text-xs text-red-400">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Amount <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  step="0.01"
                  {...register("amount")}
                  placeholder="0.00"
                  className="w-full bg-background/50 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              {errors.amount && (
                <p className="text-xs text-red-400">{errors.amount.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Due Date <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="date"
                  {...register("dueDate")}
                  className="w-full bg-background/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [color-scheme:dark]"
                />
              </div>
              {errors.dueDate && (
                <p className="text-xs text-red-400">{errors.dueDate.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <label className="text-sm font-medium text-gray-300">
              Description (Optional)
            </label>
            <textarea
              {...register("description")}
              rows={3}
              placeholder="Add notes or payment details..."
              className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4">
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
            {isSubmitting ? "Creating..." : "Create Invoice"}
          </button>
        </div>
      </form>
    </div>
  );
}

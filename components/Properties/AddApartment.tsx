"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Save, X } from "lucide-react";

// Form Validation Schema
const apartmentSchema = z.object({
  unitNumber: z.string().min(1, "Unit Number is required"),
  type: z.string().min(1, "Apartment Type is required"),
  bedrooms: z.coerce.number().min(0),
  bathrooms: z.coerce.number().min(0),
  size: z.coerce.number().min(0),
  amenities: z.string().optional(),
  rent: z.coerce.number().min(0),
  deposit: z.coerce.number().min(0),
  status: z.enum(["Vacant", "Occupied", "Maintenance"]),
  tenantId: z.string().optional(),
});

type ApartmentFormValues = z.infer<typeof apartmentSchema>;

interface AddApartmentProps {
  onBack: () => void;
  onSave: (data: ApartmentFormValues) => void;
}

export default function AddApartment({ onBack, onSave }: AddApartmentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(apartmentSchema),
    defaultValues: {
      status: "Vacant",
    },
  });

  const onSubmit = async (data: ApartmentFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Data:", data);
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
          Back to Apartments
        </button>
        <h1 className="text-3xl font-bold text-white font-display">
          Add New Unit
        </h1>
        <p className="text-gray-400 mt-2">
          Enter details to add a new apartment unit to the property registry.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="unitNumber"
                className="text-sm font-medium text-gray-300"
              >
                Unit Number <span className="text-red-400">*</span>
              </label>
              <input
                id="unitNumber"
                {...register("unitNumber")}
                placeholder="e.g. 101, A-204"
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
              {errors.unitNumber && (
                <p className="text-xs text-red-400">
                  {errors.unitNumber.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="type"
                className="text-sm font-medium text-gray-300"
              >
                Apartment Type <span className="text-red-400">*</span>
              </label>
              <select
                id="type"
                {...register("type")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-surface text-gray-400">
                  Select Type
                </option>
                <option value="Studio" className="bg-surface">
                  Studio
                </option>
                <option value="1 BHK" className="bg-surface">
                  1 BHK
                </option>
                <option value="2 BHK" className="bg-surface">
                  2 BHK
                </option>
                <option value="3 BHK" className="bg-surface">
                  3 BHK
                </option>
                <option value="Penthouse" className="bg-surface">
                  Penthouse
                </option>
              </select>
              {errors.type && (
                <p className="text-xs text-red-400">{errors.type.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label
                htmlFor="bedrooms"
                className="text-sm font-medium text-gray-300"
              >
                Bedrooms
              </label>
              <input
                id="bedrooms"
                type="number"
                {...register("bedrooms")}
                placeholder="0"
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="bathrooms"
                className="text-sm font-medium text-gray-300"
              >
                Bathrooms
              </label>
              <input
                id="bathrooms"
                type="number"
                {...register("bathrooms")}
                placeholder="0"
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="size"
                className="text-sm font-medium text-gray-300"
              >
                Size (Sq Ft)
              </label>
              <input
                id="size"
                type="number"
                {...register("size")}
                placeholder="e.g 1200"
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="amenities"
              className="text-sm font-medium text-gray-300"
            >
              Amenities & Features
            </label>
            <textarea
              id="amenities"
              {...register("amenities")}
              placeholder="List amenities like Balcony, Central AC, Furnished, Dishwasher..."
              rows={3}
              className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
            />
          </div>
        </div>

        {/* Financials */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">Financials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="rent"
                className="text-sm font-medium text-gray-300"
              >
                Monthly Rent <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  id="rent"
                  type="number"
                  {...register("rent")}
                  placeholder="0.00"
                  className="w-full bg-background/50 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="deposit"
                className="text-sm font-medium text-gray-300"
              >
                Security Deposit
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  id="deposit"
                  type="number"
                  {...register("deposit")}
                  placeholder="0.00"
                  className="w-full bg-background/50 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Status & Assignment */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            Status & Assignment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="status"
                className="text-sm font-medium text-gray-300"
              >
                Initial Status <span className="text-red-400">*</span>
              </label>
              <select
                id="status"
                {...register("status")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="Vacant" className="bg-surface">
                  Vacant
                </option>
                <option value="Occupied" className="bg-surface">
                  Occupied
                </option>
                <option value="Maintenance" className="bg-surface">
                  Maintenance
                </option>
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="tenantId"
                className="text-sm font-medium text-gray-300"
              >
                Assign Tenant (Optional)
              </label>
              <select
                id="tenantId"
                {...register("tenantId")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-surface text-gray-400">
                  - Unassigned -
                </option>
                <option value="tenant1" className="bg-surface">
                  Michael Foster
                </option>
                <option value="tenant2" className="bg-surface">
                  Sarah Jenkins
                </option>
                <option value="tenant3" className="bg-surface">
                  David Chen
                </option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Leave as 'Unassigned' if the unit is currently vacant.
              </p>
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
                Save Unit
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

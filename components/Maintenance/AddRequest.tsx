"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Upload, X, Image as ImageIcon } from "lucide-react";

// Form Validation Schema
const maintenanceSchema = z.object({
  unitId: z.string().min(1, "Apartment Unit is required"),
  tenantId: z.string().min(1, "Tenant is required"),
  category: z.string().min(1, "Category is required"),
  urgency: z.enum(["Low", "Medium", "High", "Urgent"]),
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description is too long"),
  photos: z.any().optional(),
});

type MaintenanceFormValues = z.infer<typeof maintenanceSchema>;

interface AddRequestProps {
  onBack: () => void;
  onSave: (data: MaintenanceFormValues) => void;
}

export default function AddRequest({ onBack, onSave }: AddRequestProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<MaintenanceFormValues>({
    resolver: zodResolver(maintenanceSchema),
    defaultValues: {
      urgency: "Medium",
    },
  });

  const urgencyLevels = ["Low", "Medium", "High", "Urgent"];
  const currentUrgency = watch("urgency");
  const descriptionLength = watch("description")?.length || 0;

  const onSubmit = async (data: MaintenanceFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Maintenance Request:", data);
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
          Back to Requests
        </button>
        <h1 className="text-3xl font-bold text-white font-display">
          New Maintenance Request
        </h1>
        <p className="text-gray-400 mt-2">
          Fill in the details below to create a ticket for a maintenance issue.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Property Details */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 text-sm font-bold">1</span>
            </div>
            <h2 className="text-lg font-semibold text-white">
              Property Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Apartment Unit <span className="text-red-400">*</span>
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
                <option value="305" className="bg-surface">
                  Unit 305
                </option>
              </select>
              {errors.unitId && (
                <p className="text-xs text-red-400">{errors.unitId.message}</p>
              )}
            </div>

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
                  John Doe
                </option>
                <option value="sarah" className="bg-surface">
                  Sarah Smith
                </option>
              </select>
              {errors.tenantId && (
                <p className="text-xs text-red-400">
                  {errors.tenantId.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Issue Information */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 text-sm font-bold">2</span>
            </div>
            <h2 className="text-lg font-semibold text-white">
              Issue Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                {...register("category")}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-surface text-gray-400">
                  Select category...
                </option>
                <option value="plumbing" className="bg-surface">
                  Plumbing
                </option>
                <option value="electrical" className="bg-surface">
                  Electrical
                </option>
                <option value="appliance" className="bg-surface">
                  Appliance
                </option>
                <option value="other" className="bg-surface">
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
                Urgency Level <span className="text-red-400">*</span>
              </label>
              <div className="flex bg-background/50 border border-white/10 rounded-xl p-1">
                {urgencyLevels.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setValue("urgency", level as any)}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                      currentUrgency === level
                        ? "bg-primary text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <label className="text-sm font-medium text-gray-300">
              Issue Title <span className="text-red-400">*</span>
            </label>
            <input
              {...register("title")}
              className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              placeholder="e.g. Leaking faucet in kitchen"
            />
            {errors.title && (
              <p className="text-xs text-red-400">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Detailed Description <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("description")}
              rows={4}
              maxLength={500}
              className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              placeholder="Please describe the issue in detail..."
            />
            <div className="flex justify-between items-center mt-1">
              {errors.description ? (
                <p className="text-xs text-red-400">
                  {errors.description.message}
                </p>
              ) : (
                <span />
              )}
              <span className="text-xs text-gray-500">
                {descriptionLength}/500 characters
              </span>
            </div>
          </div>
        </div>

        {/* Photos & Videos */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 text-sm font-bold">3</span>
            </div>
            <h2 className="text-lg font-semibold text-white">
              Photos & Videos
            </h2>
          </div>

          <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-primary/50 transition-colors group cursor-pointer bg-white/5">
            <input
              type="file"
              className="hidden"
              id="maintenance-upload"
              multiple
            />
            <label
              htmlFor="maintenance-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm font-medium text-white mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (max. 10MB)
              </p>
            </label>
          </div>

          <div className="flex gap-4 mt-6">
            <div className="relative w-20 h-20 rounded-xl bg-orange-100/10 border border-white/10 flex items-center justify-center group overflow-hidden">
              <ImageIcon className="w-6 h-6 text-orange-400" />
              <button
                type="button"
                className="absolute top-1 right-1 p-0.5 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2.5 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors bg-surface"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Save, X, Upload, Image as ImageIcon } from "lucide-react";

// Form Validation Schema
const apartmentSchema = z.object({
  coverImage: z.any().optional(),
  plotImages: z.any().optional(),
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
  initialData?: Partial<ApartmentFormValues>;
}

export default function AddApartment({
  onBack,
  onSave,
  initialData,
}: AddApartmentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(apartmentSchema),
    defaultValues: {
      status: "Vacant",
      ...initialData,
    },
  });

  const [coverPreview, setCoverPreview] = React.useState<string | null>(null);
  const [plotPreviews, setPlotPreviews] = React.useState<string[]>([]);

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverPreview(url);
    }
  };

  const handlePlotImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPlotPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeCoverImage = () => {
    setCoverPreview(null);
    // You might want to reset the form field here too if strictly required
  };

  const removePlotImage = (index: number) => {
    setPlotPreviews((prev) => prev.filter((_, i) => i !== index));
  };

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
          {initialData ? "Edit Apartment Unit" : "Add New Unit"}
        </h1>
        <p className="text-gray-400 mt-2">
          {initialData
            ? "Update the details of the apartment unit."
            : "Enter details to add a new apartment unit to the property registry."}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Media & Photos */}
        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            Media & Photos
          </h2>

          {/* Cover Image */}
          <div className="mb-8">
            <label className="text-sm font-medium text-gray-300 mb-2 block">
              Cover Image
            </label>
            {!coverPreview ? (
              <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-primary/50 transition-colors group cursor-pointer bg-white/5 relative">
                <input
                  {...register("coverImage")}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    register("coverImage").onChange(e); // Propagate to hook form
                    handleCoverImageChange(e);
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm font-medium text-white mb-1">
                  Upload Cover Image
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG or WEBP (max. 5MB)
                </p>
              </div>
            ) : (
              <div className="relative w-full h-64 rounded-xl overflow-hidden group border border-white/10">
                <img
                  src={coverPreview}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    type="button"
                    onClick={removeCoverImage}
                    className="p-2 bg-red-500/80 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Plot Images */}
          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">
              Plot Images (Multiple)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {plotPreviews.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden group border border-white/10"
                >
                  <img
                    src={src}
                    alt={`Plot ${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePlotImage(index)}
                    className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <div className="border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center aspect-square text-center hover:border-primary/50 transition-colors group cursor-pointer bg-white/5 relative">
                <input
                  {...register("plotImages")}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    register("plotImages").onChange(e);
                    handlePlotImagesChange(e);
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Upload className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs font-medium text-white">Add Photos</p>
              </div>
            </div>
          </div>
        </div>
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

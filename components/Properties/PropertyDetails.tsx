import React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  CheckCircle2,
  User,
  Calendar,
  DollarSign,
  FileText,
  Wrench,
  Edit,
} from "lucide-react";
import { UnitType } from "@/types";

interface PropertyDetailsProps {
  unit: UnitType;
  onBack: () => void;
  onEdit: () => void;
  onCreateInvoice: () => void;
}

export default function PropertyDetails({
  unit,
  onBack,
  onEdit,
  onCreateInvoice,
}: PropertyDetailsProps) {
  // Mock amenities data since it's not in the base type yet
  const amenities = [
    "Air Conditioning",
    "Dishwasher",
    "Hardwood Floors",
    "In-unit Washer/Dryer",
    "Balcony",
    "High-speed Internet",
    "Pet Friendly",
    "Parking Spot",
  ];

  // Mock property images
  const propertyImages = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1484154218962-a1c00207bf9a",
  ];

  return (
    <div className="space-y-6">
      {/* Header / Nav */}
      <button
        onClick={onBack}
        className="flex items-center text-sm text-gray-400 hover:text-white transition-colors group mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Properties
      </button>

      {/* Hero Section */}
      <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-white/10 group">
        <Image
          src={unit.image}
          alt={unit.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-xs font-bold text-white">
                {unit.unitNumber}
              </span>
              <span
                className={`px-3 py-1 rounded-lg border backdrop-blur-md text-xs font-bold ${
                  unit.status === "Occupied"
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : unit.status === "Vacant"
                    ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                    : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                }`}
              >
                {unit.status}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white font-display mb-1">
              {unit.title}
            </h1>
            <div className="flex items-center text-gray-300 text-sm">
              <MapPin className="w-4 h-4 mr-1 text-primary" />
              <span>Skyline Av. 45, Downtown District</span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-3xl font-bold text-primary">
              ${unit.price.toLocaleString()}
              <span className="text-lg text-gray-300 font-normal">/mo</span>
            </p>
            <button
              onClick={onEdit}
              className="mt-3 flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Edit className="w-4 h-4" />
              Edit Property
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Property Gallery */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white font-display mb-4">
              Property Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {propertyImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`Property ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors">
              <BedDouble className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-lg font-bold text-white">2</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Bedrooms
              </span>
            </div>
            <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors">
              <Bath className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-lg font-bold text-white">2</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Bathrooms
              </span>
            </div>
            <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors">
              <Maximize className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-lg font-bold text-white">1,200</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Sq Ft
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white font-display mb-4">
              Description
            </h2>
            <p className="text-gray-400 leading-relaxed">
              This luxurious {unit.title.toLowerCase()} offers modern living at
              its finest. Featuring floor-to-ceiling windows with breathtaking
              city views, a state-of-the-art kitchen with premium appliances,
              and spacious living areas designed for comfort and style. The unit
              has been recently renovated and includes high-end finishes
              throughout.
            </p>
          </div>

          {/* Amenities */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white font-display mb-6">
              Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Tenant Card */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Current Tenant
            </h3>
            {unit.tenant ? (
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full border-2 border-white/10 overflow-hidden">
                  {unit.tenant.image ? (
                    <Image
                      src={unit.tenant.image}
                      alt={unit.tenant.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {unit.tenant.name}
                  </h4>
                  <p className="text-sm text-gray-400">{unit.tenant.role}</p>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-white/5 rounded-xl border border-dashed border-white/20 text-center mb-6 text-gray-500 italic">
                No tenant assigned
              </div>
            )}

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Lease Start</span>
                <span className="text-white font-medium">Jan 1, 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Lease End</span>
                <span className="text-white font-medium">Dec 31, 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Payment Status</span>
                <span className="text-emerald-400 font-medium">Up to date</span>
              </div>
            </div>

            <button className="w-full mt-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors font-medium">
              View Lease Agreement
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={onCreateInvoice}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left text-sm text-gray-300"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>Create Invoice</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left text-sm text-gray-300">
                <Wrench className="w-4 h-4 text-orange-400" />
                <span>Log Maintenance</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

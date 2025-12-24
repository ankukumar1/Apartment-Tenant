"use client";

import React from "react";
import { Users } from "lucide-react";

export default function TenantsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-display mb-2">
          Tenants Management
        </h1>
        <p className="text-gray-400">
          Manage your building's residents and their information.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-gray-500" />
          </div>
          <p className="text-gray-400">Tenants List will go here.</p>
        </div>
      </div>
    </>
  );
}

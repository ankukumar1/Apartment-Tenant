"use client";

import React from "react";
import { Building2 } from "lucide-react";

export default function PropertiesPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-display mb-2">
          Properties
        </h1>
        <p className="text-gray-400">View and manage your apartment units.</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <Building2 className="h-8 w-8 text-gray-500" />
          </div>
          <p className="text-gray-400">Properties List will go here.</p>
        </div>
      </div>
    </>
  );
}

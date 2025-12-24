"use client";

import React from "react";
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-display mb-2">
          Maintenance Requests
        </h1>
        <p className="text-gray-400">
          Handle repair requests and maintenance schedules.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wrench className="h-8 w-8 text-gray-500" />
          </div>
          <p className="text-gray-400">Maintenance requests will go here.</p>
        </div>
      </div>
    </>
  );
}

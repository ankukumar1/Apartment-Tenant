import React from "react";
import Image from "next/image";
import { Mail, Phone, MoreVertical } from "lucide-react";
import { TenantType } from "@/types";

interface TenantTableProps {
  tenants: TenantType[];
}

export function TenantTable({ tenants }: TenantTableProps) {
  return (
    <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Tenant Name
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Contact Info
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Apartment
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Lease Status
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                End Date
              </th>
              <th className="text-right py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {tenants.map((tenant) => (
              <tr
                key={tenant.id}
                className="hover:bg-white/5 transition-colors group"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={tenant.image}
                        alt={tenant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {tenant.name}
                      </p>
                      <p className="text-xs text-gray-500">ID: {tenant.id}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Mail className="w-3 h-3" />
                      {tenant.email}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Phone className="w-3 h-3" />
                      {tenant.phone}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {tenant.unit}
                    </p>
                    <p className="text-xs text-gray-500">{tenant.building}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <StatusBadge status={tenant.status} />
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-400">
                    {tenant.leaseEnd}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-6 border-t border-white/10">
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium text-white">1</span> to{" "}
          <span className="font-medium text-white">{tenants.length}</span> of{" "}
          <span className="font-medium text-white">124</span> results
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: TenantType["status"] }) {
  const styles = {
    Active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Overdue: "bg-red-500/10 text-red-400 border-red-500/20",
    "Expiring Soon": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${styles[status].replace(
          "text",
          "bg"
        )}`}
      />
      {status}
    </span>
  );
}

import React from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { InvoiceType } from "@/types";

interface BillingTableProps {
  invoices: InvoiceType[];
}

export function BillingTable({ invoices }: BillingTableProps) {
  return (
    <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Invoice ID
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Tenant
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Unit
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Due Date
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="text-right py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                className="hover:bg-white/5 transition-colors group"
              >
                <td className="py-4 px-6 text-sm font-medium text-white">
                  {inv.id}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={inv.tenant.image}
                        alt={inv.tenant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {inv.tenant.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {inv.tenant.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-400">{inv.unit}</td>
                <td className="py-4 px-6">
                  <CategoryBadge category={inv.category} />
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`text-sm ${
                      inv.status === "Overdue"
                        ? "text-red-400 font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {inv.dueDate}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-bold text-white">
                  $
                  {inv.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className="py-4 px-6">
                  <StatusBadge status={inv.status} />
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
          <span className="font-medium text-white">{invoices.length}</span> of{" "}
          <span className="font-medium text-white">42</span> results
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

function StatusBadge({ status }: { status: InvoiceType["status"] }) {
  const styles = {
    Paid: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Overdue: "bg-red-500/10 text-red-400 border-red-500/20",
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

function CategoryBadge({ category }: { category: InvoiceType["category"] }) {
  const styles = {
    Rent: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Electricity: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Maintenance: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  };

  return (
    <span
      className={`px-2 py-1 rounded-md text-xs font-medium border ${styles[category]}`}
    >
      {category}
    </span>
  );
}

import { InvoiceType } from "@/types";

export const invoices: InvoiceType[] = [
  {
    id: "INV-2023-001",
    tenant: {
      name: "John Cooper",
      email: "j.cooper@example.com",
      image: "https://i.pravatar.cc/150?u=John",
    },
    unit: "Unit 4B",
    category: "Rent",
    dueDate: "Oct 1, 2023",
    amount: 1200.0,
    status: "Paid",
  },
  {
    id: "INV-2023-002",
    tenant: {
      name: "Sarah Jenkins",
      email: "s.jenkins@example.com",
      image: "https://i.pravatar.cc/150?u=Sarah",
    },
    unit: "Unit 12A",
    category: "Electricity",
    dueDate: "Oct 5, 2023",
    amount: 145.5,
    status: "Pending",
  },
  {
    id: "INV-2023-003",
    tenant: {
      name: "Michael Ross",
      email: "m.ross@example.com",
      image: "https://i.pravatar.cc/150?u=Michael",
    },
    unit: "Unit 1C",
    category: "Maintenance",
    dueDate: "Sep 28, 2023",
    amount: 300.0,
    status: "Overdue",
  },
  {
    id: "INV-2023-004",
    tenant: {
      name: "Emily Chen",
      email: "e.chen@example.com",
      image: "https://i.pravatar.cc/150?u=Emily",
    },
    unit: "Unit 5H",
    category: "Rent",
    dueDate: "Oct 1, 2023",
    amount: 1450.0,
    status: "Paid",
  },
  {
    id: "INV-2023-005",
    tenant: {
      name: "David Kim",
      email: "d.kim@example.com",
      image: "https://i.pravatar.cc/150?u=David",
    },
    unit: "Unit 3B",
    category: "Electricity",
    dueDate: "Oct 6, 2023",
    amount: 98.2,
    status: "Pending",
  },
];

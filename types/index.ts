export interface UnitType {
  id: string;
  unitNumber: string;
  title: string;
  type: string;
  price: number;
  status: "Occupied" | "Vacant" | "Maintenance";
  tenant: {
    name: string;
    role: string;
    image: string | null;
  } | null;
  image: string;
}

export interface TenantType {
  id: string;
  name: string;
  email: string;
  phone: string;
  unit: string;
  building: string;
  status: "Active" | "Overdue" | "Expiring Soon";
  leaseEnd: string;
  image: string;
}

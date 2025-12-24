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

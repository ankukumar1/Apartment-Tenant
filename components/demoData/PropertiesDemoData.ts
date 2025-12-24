import { Unit } from "@/components/Properties/UnitCard";

export const units: Unit[] = [
  {
    id: "101",
    unitNumber: "Unit 101",
    title: "2 Bedroom Apartment",
    type: "2 BHK • 1,200 sqft",
    price: 2400,
    status: "Occupied",
    tenant: {
      name: "Michael Foster",
      role: "Tenant",
      image: "https://i.pravatar.cc/150?u=Michael",
    },
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "102",
    unitNumber: "Unit 102",
    title: "Studio Loft",
    type: "1 RK • 650 sqft",
    price: 1800,
    status: "Vacant",
    tenant: null,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "204",
    unitNumber: "Unit 204",
    title: "Penthouse Suite",
    type: "3 BHK • 2,100 sqft",
    price: 4500,
    status: "Occupied",
    tenant: {
      name: "Sarah Jenkins",
      role: "Tenant",
      image: "https://i.pravatar.cc/150?u=Sarah",
    },
    image:
      "https://images.unsplash.com/photo-1502005229766-3c8ef56462b1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "305",
    unitNumber: "Unit 305",
    title: "Deluxe 2 Bedroom",
    type: "2 BHK • 1,150 sqft",
    price: 2200,
    status: "Maintenance",
    tenant: {
      name: "Unavailable",
      role: "Tenant",
      image: null,
    },
    image:
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "104",
    unitNumber: "Unit 104",
    title: "Garden View Apt",
    type: "2 BHK • 1,300 sqft",
    price: 2600,
    status: "Occupied",
    tenant: {
      name: "David Chen",
      role: "Tenant",
      image: "https://i.pravatar.cc/150?u=David",
    },
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "402",
    unitNumber: "Unit 402",
    title: "Efficiency Unit",
    type: "1 BHK • 700 sqft",
    price: 1500,
    status: "Vacant",
    tenant: null,
    image:
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=800",
  },
];

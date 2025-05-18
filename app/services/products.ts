import type { Product } from "../types";

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Heavy Duty Excavator",
    description: "Professional-grade excavator for heavy construction work",
    manufacturer: "Caterpillar",
    price: 250000,
    category: "all",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    specs: [
      "Operating Weight: 20,000 kg",
      "Engine Power: 103 kW",
      "Bucket Capacity: 0.8 m³",
      "Max Digging Depth: 6.5 m",
    ],
  },
  {
    id: "2",
    name: "Professional Plastering Trowel",
    description:
      "High-quality stainless steel plastering trowel with ergonomic handle",
    manufacturer: "ToolMaster Pro",
    price: 29.99,
    category: "plastering",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: [
      "Blade Length: 11 inches",
      "Handle Material: Soft-grip rubber",
      "Blade Material: Stainless Steel",
      "Weight: 0.5 kg",
    ],
  },
  {
    id: "3",
    name: "Heavy Duty Scaffold Tower",
    description:
      "Industrial-grade aluminum scaffold tower with adjustable height",
    manufacturer: "ScaffoldTech Industries",
    price: 599.99,
    category: "scaffolding",
    image:
      "https://images.unsplash.com/photo-1516216628859-9c66c0152f04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: [
      "Maximum Height: 8 meters",
      "Platform Size: 2m x 1.5m",
      "Load Capacity: 950 kg",
      "Material: Aluminum Alloy",
    ],
  },
  {
    id: "4",
    name: "Concrete Mixer",
    description:
      "Professional concrete mixer with powerful motor and large capacity",
    manufacturer: "MixMaster Pro",
    price: 1299.99,
    category: "concrete",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    specs: [
      "Capacity: 3.5 cubic feet",
      "Motor Power: 1/2 HP",
      "Voltage: 120V",
      "Weight: 65 kg",
    ],
  },
  {
    id: "5",
    name: "Cordless Drill Set",
    description: "Professional cordless drill set with multiple attachments",
    manufacturer: "PowerTools Inc",
    price: 199.99,
    category: "powertools",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    specs: [
      "Battery: 20V Lithium-ion",
      "Chuck Size: 1/2 inch",
      "Speed: 0-1500 RPM",
      "Torque: 450 in-lbs",
    ],
  },
  {
    id: "6",
    name: "Block Laying Trowel",
    description: "Professional block laying trowel for masonry work",
    manufacturer: "Masonry Tools Co",
    price: 24.99,
    category: "blocklaying",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    specs: [
      "Blade Length: 9 inches",
      "Handle: Ergonomic rubber grip",
      "Material: Carbon steel",
      "Weight: 0.3 kg",
    ],
  },
];

export const getProducts = async (category: string): Promise<Product[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (category === "all") {
    return products;
  }

  return products.filter((product) => product.category === category);
};

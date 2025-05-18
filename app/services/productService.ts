import { Product } from "../types";

export async function getProducts(category?: string): Promise<Product[]> {
  try {
    const url =
      category && category !== "all"
        ? `/api/products?category=${encodeURIComponent(category)}`
        : "/api/products";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

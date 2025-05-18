"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import { getProducts } from "@/app/services/productService";
import { ProductCard } from "../ProductCard";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { EmptyProducts } from "./EmptyProducts";

interface ProductListProps {
  selectedCategory: string;
}

export const ProductList = ({ selectedCategory }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getProducts(selectedCategory);
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch products"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (products.length === 0) {
    return <EmptyProducts category={selectedCategory} />;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

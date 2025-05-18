"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { ProductList } from "./components/ProductList/ProductList";
import { Product } from "./types";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='container mx-auto px-4 pt-24 pb-12 flex-grow'>
        <div className='flex flex-col md:flex-row gap-6'>
          <aside className='md:w-64 flex-shrink-0'>
            <Categories
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>

          {/* Product Grid */}
          <div className='flex-1'>
            <ProductList selectedCategory={selectedCategory} />
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: "all", name: "All Equipment" },
  { id: "plastering", name: "Plastering Equipment" },
  { id: "blocklaying", name: "Block Laying Tools" },
  { id: "scaffolding", name: "Scaffolding Systems" },
  { id: "concrete", name: "Concrete Equipment" },
  { id: "powertools", name: "Power Tools" },
];

export const Categories = ({
  selectedCategory,
  onSelectCategory,
}: CategoriesProps) => {
  return (
    <div className='bg-white rounded-lg shadow-sm p-6'>
      <h2 className='text-lg font-semibold text-gray-900 mb-4'>Categories</h2>
      <div className='space-y-2'>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 transition-colors ${
              category.id === selectedCategory
                ? "bg-primary text-white hover:bg-primary/90"
                : ""
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

"use client";

import { Product } from "../types";
import { useState } from "react";
import { ProductDetailsModal } from "./ProductDetailsModal";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='bg-white rounded-lg shadow-sm overflow-hidden transform transition-transform hover:scale-[1.02]'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-48 object-cover'
        />
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900'>
            {product.name}
          </h3>
          <p className='text-gray-600 text-sm mt-1'>{product.description}</p>
          <div className='mt-4 flex items-center justify-between'>
            <span className='text-primary font-semibold'>
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={() => setShowModal(true)}
              className='bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors'
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <ProductDetailsModal
        product={product}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

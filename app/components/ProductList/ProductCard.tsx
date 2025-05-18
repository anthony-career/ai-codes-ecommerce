import { useState } from "react";
import { ProductDetailsModal } from "./ProductDetailsModal";
import { Product } from "@/app/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow'
        onClick={handleClick}
        role='button'
        tabIndex={0}
      >
        <div className='relative h-48'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>
            {product.name}
          </h3>
          <p className='text-gray-600 text-sm mb-2'>{product.description}</p>
          <div className='flex justify-between items-center'>
            <span className='text-lg font-bold text-blue-600'>
              ${product.price.toFixed(2)}
            </span>
            <span className='text-sm text-gray-500'>In Stock</span>
          </div>
        </div>
      </div>

      <ProductDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

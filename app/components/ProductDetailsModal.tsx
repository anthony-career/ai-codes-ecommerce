"use client";

import { Product } from "../types";
import { useCart } from "../contexts/CartContext";

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailsModal = ({
  product,
  isOpen,
  onClose,
}: ProductDetailsModalProps) => {
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center'>
      <div className='bg-white rounded-lg max-w-2xl w-full mx-4 overflow-hidden'>
        <div className='relative'>
          <button
            className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'
            onClick={onClose}
          >
            <i className='bx bx-x text-2xl'></i>
          </button>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-64 object-cover'
          />
        </div>
        <div className='p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            {product.name}
          </h2>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <h3 className='text-sm font-semibold text-gray-600 mb-1'>
                Manufacturer
              </h3>
              <p className='text-gray-900'>{product.manufacturer}</p>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-600 mb-1'>
                Price
              </h3>
              <p className='text-primary font-bold'>
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
          <div className='mb-6'>
            <h3 className='text-sm font-semibold text-gray-600 mb-1'>
              Specifications
            </h3>
            <ul className='list-disc list-inside text-gray-700 space-y-1'>
              {product.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleAddToCart}
            className='w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2'
          >
            <i className='bx bx-cart-add'></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

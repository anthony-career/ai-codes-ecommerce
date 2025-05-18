"use client";

import { useState } from "react";
import { useCart } from "@/app/contexts/CartContext";
import { CartModal } from "./CartModal";

export const Header = () => {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className='bg-white shadow-sm fixed w-full top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <i className='bx bx-building-house text-4xl text-primary'></i>
          <h1 className='text-2xl font-bold text-gray-900'>ConstructEquip</h1>
        </div>
        <button
          onClick={() => setIsCartOpen(true)}
          className='relative text-gray-600 hover:text-primary transition-colors'
          id='cartButton'
        >
          <i className='bx bx-cart text-2xl'></i>
          <span
            className='absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'
            id='cartCount'
          >
            {totalItems}
          </span>
        </button>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

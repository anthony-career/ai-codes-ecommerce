"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useCart } from "@/app/contexts/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { items, removeFromCart, total } = useCart();
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [momoNumber, setMomoNumber] = useState("");

  const subtotal = total;
  const tax = subtotal * 0.1;
  const finalTotal = subtotal + tax;

  const handlePayment = async () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    if (paymentMethod === "mtn" && !momoNumber) {
      alert("Please enter your mobile money number");
      return;
    }

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Payment successful! Thank you for your purchase.");
    onClose();
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'
        onClose={onClose}
      >
        <div className='bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto'>
          <div className='p-6'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-gray-900'>Your Cart</h2>
              <button
                onClick={onClose}
                className='text-gray-500 hover:text-gray-700'
              >
                <i className='bx bx-x text-2xl'></i>
              </button>
            </div>

            {/* Cart Items */}
            <div className='mb-6 space-y-4'>
              {items.length === 0 ? (
                <div className='text-center py-8'>
                  <i className='bx bx-cart text-4xl text-gray-400'></i>
                  <p className='text-gray-500 mt-2'>Your cart is empty</p>
                </div>
              ) : (
                items.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-4 p-4 bg-gray-50 rounded-lg'
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-20 h-20 object-cover rounded-md'
                    />
                    <div className='flex-grow'>
                      <h3 className='font-semibold text-gray-900'>
                        {item.name}
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        {item.manufacturer}
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='font-semibold text-primary'>
                        ${item.price.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className='text-red-500 text-sm hover:text-red-600'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary */}
            <div className='border-t border-gray-200 pt-4 mb-6'>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-gray-600'>Subtotal</span>
                <span className='text-gray-900 font-semibold'>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between items-center mb-4'>
                <span className='text-gray-600'>Tax (10%)</span>
                <span className='text-gray-900 font-semibold'>
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between items-center text-lg font-bold'>
                <span className='text-gray-900'>Total</span>
                <span className='text-primary'>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Form */}
            <div className='space-y-4'>
              <div className='grid grid-cols-1 gap-4'>
                <div className='col-span-full'>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Email
                  </label>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                    placeholder='your@email.com'
                  />
                </div>

                {/* Payment Method Selection */}
                <div className='col-span-full'>
                  <label className='block text-sm font-medium text-gray-700 mb-3'>
                    Select Payment Method
                  </label>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {/* Credit Card Option */}
                    <div className='payment-method-card'>
                      <input
                        type='radio'
                        name='paymentMethod'
                        id='cardPayment'
                        value='card'
                        className='hidden'
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                      />
                      <label
                        htmlFor='cardPayment'
                        className={`block p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                          paymentMethod === "card"
                            ? "border-primary border-2"
                            : ""
                        }`}
                      >
                        <div className='flex items-center gap-3'>
                          <div className='flex items-center gap-2'>
                            <i className='bx bxs-credit-card text-2xl text-primary'></i>
                            <span className='font-medium text-gray-900'>
                              Credit Card
                            </span>
                          </div>
                          <div className='flex gap-1 ml-auto'>
                            <img
                              src='https://raw.githubusercontent.com/stripe/stripe-press/master/assets/visa.svg'
                              alt='Visa'
                              className='h-6'
                            />
                            <img
                              src='https://raw.githubusercontent.com/stripe/stripe-press/master/assets/mastercard.svg'
                              alt='Mastercard'
                              className='h-6'
                            />
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* PayPal Option */}
                    <div className='payment-method-card'>
                      <input
                        type='radio'
                        name='paymentMethod'
                        id='paypalPayment'
                        value='paypal'
                        className='hidden'
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                      />
                      <label
                        htmlFor='paypalPayment'
                        className={`block p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                          paymentMethod === "paypal"
                            ? "border-primary border-2"
                            : ""
                        }`}
                      >
                        <div className='flex items-center gap-3'>
                          <i className='bx bxl-paypal text-2xl text-[#003087]'></i>
                          <span className='font-medium text-gray-900'>
                            PayPal
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Mobile Money Option */}
                    <div className='payment-method-card'>
                      <input
                        type='radio'
                        name='paymentMethod'
                        id='mtnMomo'
                        value='mtn'
                        className='hidden'
                        checked={paymentMethod === "mtn"}
                        onChange={() => setPaymentMethod("mtn")}
                      />
                      <label
                        htmlFor='mtnMomo'
                        className={`block p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                          paymentMethod === "mtn"
                            ? "border-primary border-2"
                            : ""
                        }`}
                      >
                        <div className='flex items-center gap-3'>
                          <i className='bx bx-mobile-alt text-2xl text-[#FFC107]'></i>
                          <span className='font-medium text-gray-900'>
                            MTN Mobile Money
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Apple Pay Option */}
                    <div className='payment-method-card'>
                      <input
                        type='radio'
                        name='paymentMethod'
                        id='applePay'
                        value='apple'
                        className='hidden'
                        checked={paymentMethod === "apple"}
                        onChange={() => setPaymentMethod("apple")}
                      />
                      <label
                        htmlFor='applePay'
                        className={`block p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                          paymentMethod === "apple"
                            ? "border-primary border-2"
                            : ""
                        }`}
                      >
                        <div className='flex items-center gap-3'>
                          <i className='bx bxl-apple text-2xl text-gray-900'></i>
                          <span className='font-medium text-gray-900'>
                            Apple Pay
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Dynamic Payment Form Fields */}
                <div className='col-span-full space-y-4'>
                  {/* Credit Card Fields */}
                  {paymentMethod === "card" && (
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        Card Information
                      </label>
                      <div className='stripe-element'>
                        <div className='p-3 border border-gray-300 rounded-md bg-white'>
                          <div className='space-y-3'>
                            <input
                              type='text'
                              placeholder='Card Number'
                              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            />
                            <div className='grid grid-cols-2 gap-3'>
                              <input
                                type='text'
                                placeholder='MM/YY'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                              />
                              <input
                                type='text'
                                placeholder='CVC'
                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Money Fields */}
                  {paymentMethod === "mtn" && (
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        Mobile Money Number
                      </label>
                      <div className='flex gap-2'>
                        <input
                          type='text'
                          value='+233'
                          className='w-20 px-3 py-2 border border-gray-300 rounded-md bg-gray-50'
                          readOnly
                        />
                        <input
                          type='tel'
                          value={momoNumber}
                          onChange={(e) => setMomoNumber(e.target.value)}
                          className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                          placeholder='Enter mobile number'
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handlePayment}
                className='w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2'
              >
                {paymentMethod === "card" && <i className='bx bx-lock-alt'></i>}
                {paymentMethod === "paypal" && (
                  <i className='bx bxl-paypal'></i>
                )}
                {paymentMethod === "mtn" && (
                  <i className='bx bx-mobile-alt'></i>
                )}
                {paymentMethod === "apple" && <i className='bx bxl-apple'></i>}
                {paymentMethod === "card" && "Pay Now"}
                {paymentMethod === "paypal" && "Pay with PayPal"}
                {paymentMethod === "mtn" && "Pay with Mobile Money"}
                {paymentMethod === "apple" && "Pay with Apple Pay"}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

import React from 'react';
import { useCart } from '../../context/CartContext';


const OrderSummary = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10; // Example shipping cost
  const tax = 5; // Example tax
  const total = subtotal + shipping + tax;

  return (
    <div>
      <div className="flex justify-between text-lg font-medium mb-4">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-lg font-medium mb-4">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-lg font-medium mb-4">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-2xl font-semibold mt-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;

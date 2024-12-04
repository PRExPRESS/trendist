import React from 'react';

interface OrderItemProps {
  name: string;
  image: string;
  qty: number;
  price: number;
}

const OrderItem = ({ name = "Product Name", image = "/path/to/image.jpg", qty = 1, price = 20 }: OrderItemProps) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-16 h-16 object-cover rounded-lg" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-sm text-gray-600">Quantity: {qty}</span>
        </div>
      </div>
      <div className="text-lg font-semibold">${(price * qty).toFixed(2)}</div>
    </div>
  );
};

export default OrderItem;

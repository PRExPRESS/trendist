import React from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/16/solid'
import { useCart } from '../../context/CartContext';


interface CartItemProps {
    id: number;
    name: string;
    quantity: number;
    price: number;
    color: string;
    size: string;
    image: string;
}

interface Props {
    item: CartItemProps;
}

const CartItem = ({ item }: Props) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();  

  return (
    <div className='w-full flex flex-row items-center justify-start gap-4 pb-2 border-b-2 border-line'>
      <div className="w-[80px] h-[110px]">
        <img src={item.image} alt={item.name} className='w-full h-full object-fill' />
      </div>
      <div className='w-full flex flex-col items-start justify-start gap-2'>
        <Link to={`/product/${item.name}`} className='text-black text-[16px] hover:text-accent'>
          {item.name}
        </Link>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row gap-4">
            <span>{item.size}</span>
            <div
              className={`block w-5 h-5 rounded-full border-2 border-black`}
              style={{ backgroundColor: item.color }}
            />
          </div>
          <span className='text-black text-lg font-bold'>
            $ {item.price * item.quantity}
          </span>
        </div>

        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row gap-4 bg-[#f2f2f2] items-baseline">
            <button
              onClick={() => decreaseQty(item.id)}  // Decrease quantity
              className='w-5 h-5 bg-[#f2f2f2] hover:text-accent text-black text-lg'
            >
              -
            </button>
            <h2 className='text-black text-lg'>{item.quantity}</h2>
            <button
              onClick={() => increaseQty(item.id)}  // Increase quantity
              className='w-5 h-5 bg-[#f2f2f2] hover:text-accent text-black text-lg'
            >
              +
            </button>
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            <TrashIcon className='w-5 h-5 hover:text-accent text-black' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

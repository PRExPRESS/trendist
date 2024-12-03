import React from 'react'

import prod from '../assets/images/prodcuts/black-2.jpg';
import { Button } from '@material-tailwind/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import {  Link, useSearchParams } from 'react-router-dom';
import products from '../../Data/Prodcut';
import { useCart } from '../context/CartContext';
const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();;
    const id  = searchParams.get('id');
    const product = products.find((item) => item.id === Number(id));

    const { addToCart } = useCart(); 

  // Handle Add to Cart Button click
  const handleAddToCart = () => {
    const item = {
      id : product?.id || 0,
      name : product?.name || '',
      price : product?.price || 0,
      color : product?.color || '',
      size : product?.size[0] || '',
      image : product?.image || '',
      quantity: 1, 
    };
    addToCart(item); 
  };
    return (
        <div className='w-full h-[100vh] flex flex-col p-8 mt-10'>
            <div className="flex flex-row w-full h-full gap-10 items-start justify-center">
                <div className="block w-1/4 h-[400px]">
                    <img src={product?.image} alt="" className='w-full h-full object-cover' />
                </div>
                <div className="flex flex-col w-1/2 h-full ">
                    <h1 className="text-black text-[25px] font-normal">{product?.name}</h1>
                    <span className='text-accent text-[36px] font-medium'>$ {product?.price}</span>
                    <span className='text-black text-[16px] font-normal'>Color: <span className='text-black text-lg font-normal'>{product?.color}</span></span>
                    <span className='text-black text-[16px] font-normal'>Size: S</span>
                    <span className='text-black text-[16px] font-normal'>Brand: <span className='text-black text-lg font-normal'>Nike</span></span>
                    <span className='text-black text-lg font-medium mt-6'>Description</span>
                    <p className='text-black text-[16px] font-normal text-wrap'>{product?.description}</p>

                    <div className="flex flex-row items-center gap-4 w-full  mt-6">
                        <Button
                            className='flex flex-row w-full justify-center items-center rounded-none bg-black text-white hover:bg-accent '
                            variant='filled'
                            {...({} as any)}
                            onClick={handleAddToCart}
                        >
                            <ShoppingBagIcon className='w-5 h-5 mr-2' />
                            <span className='text-white text-[16px] font-normal'>Add to Cart</span>
                        </Button>
                        <Link to={'/checkout'} className= 'flex flex-row  w-full justify-center items-center rounded-none border-line hover:border-black '>
                        <Button
                            className='w-full justify-center items-center rounded-none border-line hover:border-black '
                            variant='outlined'
                            {...({} as any)}
                            onClick={handleAddToCart}
                        >
                            <span className='text-black text-[16px] font-normal'>Buy Now</span>
                        </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

import React from 'react';

import prod from '../assets/images/prodcuts/black-2.jpg';
import { Button } from '@material-tailwind/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

import { Link, useSearchParams } from 'react-router-dom';
import products from '../../Data/Prodcut';
import { useCart } from '../context/CartContext';

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const product = products.find((item) => item.id === Number(id));

    const { addToCart } = useCart();

    // Handle Add to Cart Button click
    const handleAddToCart = () => {
        const item = {
            id: product?.id || 0,
            name: product?.name || '',
            price: product?.price || 0,
            color: product?.color || '',
            size: product?.size[0] || '',
            image: product?.image || '',
            quantity: 1,
        };
        addToCart(item);
    };

    return (
        <div className="w-full h-auto flex flex-col p-8 mt-10">
            <div className="flex flex-col md:flex-row w-full h-full gap-10 items-start justify-center">
                {/* Product Image */}
                <div className="w-full md:w-1/3 h-[400px] md:h-[500px] mb-6 md:mb-0">
                    <img src={product?.image || prod} alt={product?.name} className="w-full h-full object-cover" />
                </div>

                {/* Product Details */}
                <div className="flex flex-col w-full md:w-1/2 h-full">
                    <h1 className="text-black text-2xl md:text-3xl font-semibold">{product?.name}</h1>
                    <span className="text-accent text-3xl font-medium mt-2">${product?.price}</span>
                    <span className="text-black text-lg font-normal mt-4">Color: <span className="font-medium">{product?.color}</span></span>
                    <span className="text-black text-lg font-normal mt-2">Size: <span className="font-medium">S</span></span>
                    <span className="text-black text-lg font-normal mt-2">Brand: <span className="font-medium">Nike</span></span>

                    <span className="text-black text-xl font-medium mt-6">Description</span>
                    <p className="text-black text-md font-normal mt-2">{product?.description}</p>

                    {/* Add to Cart and Buy Now Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full mt-6">
                       
                        <Button {...({} as any)}
                            className="flex flex-row justify-center items-center w-full md:w-auto bg-black text-white hover:bg-accent rounded-none"
                            variant="filled"
                            onClick={handleAddToCart}
                        >
                            <ShoppingBagIcon className="w-5 h-5 mr-2" />
                            <span className="text-white text-[16px]">Add to Cart</span>
                        </Button>

                        {/* Buy Now Button */}
                        <Link to="/checkout" className="w-full md:w-auto">
                            <Button {...({} as any)}
                                className="w-full md:w-auto justify-center items-center border-2 border-black hover:border-accent text-black rounded-none"
                                variant="outlined"
                            >
                                <span className="text-black text-[16px]">Buy Now</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

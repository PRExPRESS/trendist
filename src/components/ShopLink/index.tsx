import React from 'react';
import SearchModel from '../SearchModel';
import Cart from '../Cart';

import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

const ShopLinks = () => {
    const [isOpenSearch, setIsOpenSearch] = React.useState(false);
    const [isOpenCart, setIsOpenCart] = React.useState(false);

    const { cart} = useCart();

    // Calculate the total quantity of items in the cart
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='w-full flex flex-row items-center gap-4'>
            {/* Search Icon */}
            <MagnifyingGlassIcon
                className='w-6 h-6 hover:cursor-pointer hover:text-accent'
                onClick={() => setIsOpenSearch(!isOpenSearch)}
            />

            {/* User Icon */}
            <UserIcon className='w-6 h-6 hover:cursor-pointer hover:text-accent' />

            {/* Shopping Cart Icon with Badge */}
            <div className='relative'>
                <ShoppingCartIcon
                    className='w-6 h-6 hover:cursor-pointer hover:text-accent'
                    onClick={() => setIsOpenCart(!isOpenCart)}
                />
                
                {/* Show the cart item count badge */}
                {cartItemCount > 0 && (
                    <div className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-accent text-white rounded-full text-xs'>
                        {cartItemCount}
                    </div>
                )}
            </div>

            
            {isOpenSearch && <SearchModel setIsOpenSearch={setIsOpenSearch} />}
            {isOpenCart && <Cart setIsOpenCart={setIsOpenCart} />}
        </div>
    );
};

export default ShopLinks;

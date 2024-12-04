import React, { useEffect, useRef, useState } from 'react';
import SearchModel from '../SearchModel';
import Cart from '../Cart';

import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ShopLinks = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [isOpenUserDropdown, setIsOpenUserDropdown] = useState(false); 

    const modalRef = useRef<HTMLDivElement | null>(null);
    

    const { cart } = useCart();
    const {isAuthenticated, logout} = useAuth();

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    

    // close dropdown when clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpenUserDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    

    return (
        <div className='md:w-full flex flex-row items-center gap-4'>
            {/* Search Icon */}
            <MagnifyingGlassIcon
                className='w-6 h-6 hover:cursor-pointer hover:text-accent'
                onClick={() => setIsOpenSearch(!isOpenSearch)}
            />

            {/* User Icon and Dropdown */}
            <div className="relative hidden md:block">
                <UserIcon
                    className='w-6 h-6 hover:cursor-pointer hover:text-accent'
                    onClick={() => setIsOpenUserDropdown(!isOpenUserDropdown)}
                />

                {/* Dropdown for Login/Logout */}
                {isOpenUserDropdown && (
                    <div className="absolute z-10 top-8 right-0 w-40 bg-white shadow-lg rounded-md" ref={modalRef}>
                        {isAuthenticated ? (
                            <button
                                className="w-full text-black text-[16px] p-2 hover:bg-gray-100"
                                onClick={() => {
                                   logout();
                                    setIsOpenUserDropdown(false);
                                }}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to="/login">
                                <button
                                    className="w-full text-black text-[16px] p-2 hover:bg-gray-100"
                                    onClick={() => setIsOpenUserDropdown(false)}
                                >
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                )}
            </div>

            {/* Shopping Cart Icon with Badge */}
            <div className="relative">
                <ShoppingCartIcon
                    className="w-6 h-6 hover:cursor-pointer hover:text-accent"
                    onClick={() => setIsOpenCart(!isOpenCart)}
                />

                {/* Cart Item Count Badge */}
                {cartItemCount > 0 && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-accent text-white rounded-full text-xs">
                        {cartItemCount}
                    </div>
                )}
            </div>

            {/* Modals */}
            {isOpenSearch && <SearchModel setIsOpenSearch={setIsOpenSearch} />}
            {isOpenCart && <Cart setIsOpenCart={setIsOpenCart} />}
        </div>
    );
};

export default ShopLinks;

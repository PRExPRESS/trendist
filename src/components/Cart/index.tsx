import { XMarkIcon } from '@heroicons/react/16/solid';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import CartItem from '../CartItem/CartItem';
import { Button } from '@material-tailwind/react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface Props {
    setIsOpenCart: (value: boolean) => void;
}

const Cart = ({ setIsOpenCart }: Props) => {
    const { cart} = useCart();
    const [isOpen, setIsOpen] = useState(true);
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsOpenCart(true);
        } else {
            setTimeout(() => setIsOpenCart(false), 500); 
        }
    }, [isOpen, setIsOpenCart]);

    // Calculate subtotal
    const subtotal = cart.reduce((total: number, item:any) => total + item.price * item.quantity, 0);

    return (
        <div className="w-full h-full inset-0 fixed bg-black/50 top-0 left-0 z-10 flex justify-center items-start">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={modalRef}
                        initial={{ x: '100%' }} 
                        animate={{ x: '0%' }} 
                        exit={{ x: '100%' }} 
                        transition={{ duration: 0.5, ease: 'easeOut' }} 
                        className="w-8/12 md:w-4/12 h-full flex flex-col items-center absolute top-0 right-0 bg-white p-3"
                    >
                        <div className="w-full h-16 flex flex-row justify-between items-center p-4 border-b border-line">
                            <h1 className="text-xl font-bold">Shopping Cart</h1>
                            <button onClick={() => setIsOpen(false)} className="w-6 h-6">
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* cart items */}
                        <div className="w-full md:h-[80vh] overflow-y-auto flex flex-col gap-4 p-4">
                            {cart.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                cart.map((item:any) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        
                                    />
                                ))
                            )}
                        </div>

                        {/* Cart subtotal and checkout */}
                        <div className="w-full h-16 flex flex-col md:flex-row justify-between items-center p-4 border-t border-line">
                            <div className="flex flex-row gap-4 items-baseline">
                                <h2 className="text-lg font-bold">Subtotal:</h2>
                                <h2 className="text-lg font-bold">$ {subtotal.toFixed(2)}</h2>
                            </div>
                            <Link to="/checkout">
                            <Button
                                {...({ className: 'w-32 h-10 rounded-none bg-black text-white hover:bg-accent hover:text-white' } as any)}
                                onClick={() => setIsOpen(false)}
                            >
                                Checkout
                            </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Cart;

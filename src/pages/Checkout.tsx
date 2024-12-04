import { Button } from '@material-tailwind/react'
import React from 'react'
import OrderSummary from '../components/OrderSummary'
import OrderItem from '../components/OrderItem'
import BillingDetails from '../components/BillingDetails.tsx'
import { useCart } from '../context/CartContext.tsx'
import toastr from 'toastr'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
    const {cart, checkout} = useCart();
    const navigate = useNavigate();
    const handleCheckout = () => {
        checkout();
        toastr.success('Your order has been placed successfully!', '', { "closeButton": true });
        navigate('/');
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className="w-full h-full pt-[69px] pb-[65px] bg-pag-title">
                <div className="w-full h-full text-center">
                    <h1 className="text-black text-[48px] font-normal">Checkout</h1>
                </div>
            </div>

            <div className="w-full min-h-screen bg-white text-black py-10 px-6">
                <div className="max-w-screen-lg mx-auto">
                    

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Billing Details */}
                        <div className="border p-6 rounded-lg shadow-md bg-gray-50">
                            <BillingDetails />
                        </div>

                        {/* Order Items */}
                        <div className="border p-6 rounded-lg shadow-md bg-gray-50">
                            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
                            <div className="space-y-6">
                                {
                                    cart.map((item) => <OrderItem name={item.name} image={item.image} qty={item.quantity} price={item.price} />)
                                }
                                
                            </div>

                            <div className="mt-6">
                                <OrderSummary />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-8">
                        <Button {...({} as any)} color="black" size="lg" className="px-12 py-3 text-white rounded-none"
                            onClick={handleCheckout}>
                            Place Order
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout

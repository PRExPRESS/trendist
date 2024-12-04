import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@material-tailwind/react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

// Sample product data (replace with actual props or import from product data)
interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  image: string;
  color: string;
  size: string[];
  description: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { addToCart } = useCart(); 

  // Handle Add to Cart Button click
  const handleAddToCart = () => {
    const item = {
      id : product.id,
      name : product.name,
      price : product.price,
      color : product.color,
      size : product.size[0],
      image : product.image,
      quantity: 1, 
    };
    addToCart(item); 
  };

  return (
    <div className='w-[322px] h-[500px] relative flex flex-col shadow-sm rounded-lg bg-white overflow-hidden' 
         onMouseEnter={() => setIsOpen(true)} 
         onMouseLeave={() => setIsOpen(false)}>
      
      <div className="w-full h-[400px] overflow-hidden">
        <Link to={`/product/${product.slug}?id=${product.id}`}>
          <AnimatePresence >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className='w-full h-full rounded-lg'>
              
              <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
            </motion.div>
          </AnimatePresence>
        </Link>
        
        {isOpen && (
          <AnimatePresence >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>

              <div className="relative -top-[120px] z-10 w-full flex flex-col">
                <Button {...({} as any)} variant="filled" className='mt-4 rounded-none w-7/12 mx-auto flex flex-row justify-center items-center gap-2 text-black bg-white hover:bg-black hover:text-white'
                  onClick={handleAddToCart}>
                  <ShoppingBagIcon className='w-5 h-5' />
                  Add to Cart
                </Button>

                <div className="flex flex-row items-center justify-center gap-4 w-full bg-white p-4 mt-4">
                  {product.size.map((size) => (
                    <div key={size} className="flex flex-col items-center justify-center border-black/50 border rounded-lg w-6 h-6">
                      <p>{size}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className={`w-full flex flex-col p-4`}>
        <Link to={`/product/${product.slug}?id=${product.id}`} >
        <span className='text-black text-lg font-normal hover:text-accent'>{product.name}</span>
        </Link>
        
        <span className='text-black text-sm font-bold'>${product.price.toFixed(2)}</span>
        <div className="flex flex-row">
          <div className="flex justify-center items-center w-5 h-5 hover:border border-black rounded-full">
            <div className="block rounded-full w-3 h-3" style={{ backgroundColor: product.color.toLowerCase() }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

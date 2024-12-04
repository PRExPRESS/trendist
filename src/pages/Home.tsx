import React from 'react';
import Hero from '../components/Hero';
import img1 from '../assets/images/collections/1.jpg';
import img2 from '../assets/images/collections/2.jpg';
import img3 from '../assets/images/collections/3.jpg';
import img4 from '../assets/images/collections/4.jpg';
import img5 from '../assets/images/collections/5.jpg';
import brd1 from '../assets/images/brands/1.png';
import brd2 from '../assets/images/brands/2.png';
import brd3 from '../assets/images/brands/3.png';
import brd4 from '../assets/images/brands/4.png';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import FeatureProducts from '../components/FeatureProducts';

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />

      {/* Collection Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8 px-4">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden relative">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img1} alt="Women" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
          <Button {...({} as any)} variant="filled" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black bg-white hover:bg-black hover:text-white rounded-none">
            Women
          </Button>
        </div>
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden relative">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={img2} alt="Bags" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
          <Button {...({} as any)} variant="filled" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black bg-white hover:bg-black hover:text-white rounded-none">
            Bags
          </Button>
        </div>
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden relative">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img3} alt="Accessories" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
          <Button {...({} as any)} variant="filled" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black bg-white hover:bg-black hover:text-white rounded-none">
            Accessories
          </Button>
        </div>
      </div>

      {/* Spring Sale Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-12 md:py-24 w-full mt-8">
        <div className="flex flex-col w-full md:w-5/12 items-start">
          <p className="text-black text-sm font-medium">SPRING SALE 30% OFF</p>
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-normal mt-4">New Arrivals</h1>
          <p className="text-black text-sm mt-4">Discover our latest collections</p>
          <Link to="/shop">
            <Button {...({} as any)} variant="filled" className="mt-4 rounded-none block text-white bg-black hover:bg-white hover:text-black">
              Shop Now
            </Button>
          </Link>
        </div>

        <div className="w-full sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 md:mt-0">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img5} alt="New Arrivals" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Featured Collections Section */}
      <div className="w-full flex flex-col mt-[100px] px-8">
        <h1 className="text-black text-3xl font-normal">Featured Collections</h1>
        <div className="flex flex-wrap justify-center mt-10">
          <FeatureProducts />
        </div>
      </div>

      {/* Brand Logos */}
      <div className="w-full flex flex-wrap justify-around items-center mt-[100px] mb-[50px] px-8">
        <div className="flex flex-col mb-4">
          <img src={brd1} alt="Brand 1" className="w-full" />
        </div>
        <div className="flex flex-col mb-4">
          <img src={brd2} alt="Brand 2" className="w-full" />
        </div>
        <div className="flex flex-col mb-4">
          <img src={brd3} alt="Brand 3" className="w-full" />
        </div>
        <div className="flex flex-col mb-4">
          <img src={brd4} alt="Brand 4" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;

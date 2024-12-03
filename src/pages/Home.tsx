import React from 'react'
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
    <div className='w-full h-full flex flex-col'>
      <Hero />

      <div className="grid grid-cols-3 gap-8 w-full h-[700px] mt-8 px-4">
        <div className="col-span-1 w-full h-[700px] overflow-hidden">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img1} alt="" className='w-full h-full ' />
              <div className="">
              </div>
            </motion.div>
          </AnimatePresence>
          <Button {...({
          } as any)} variant="filled" className=' rounded-none relative z-10 -top-[100px] mx-auto block text-black bg-white hover:bg-black hover:text-white'>Women</Button>
        </div>
        <div className="col-span-1 w-full h-[700px] ">
          <div className="row-span-1 w-full h-[340px] overflow-hidden" >
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={img2} alt="" className='w-full h-full ' />
              </motion.div>
            </AnimatePresence>
            <Button {...({
            } as any)} variant="filled" className=' rounded-none relative z-10 -top-[100px] mx-auto block text-black bg-white hover:bg-black hover:text-white'>Bags</Button>
          </div>
          <div className="row-span-1 w-full h-[325px] mt-[0px] overflow-hidden">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={img3} alt="" className='w-full h-full ' />

              </motion.div>
            </AnimatePresence>
            <Button {...({
            } as any)} variant="filled" className=' rounded-none relative z-10 -top-[100px] mx-auto block text-black bg-white hover:bg-black hover:text-white'>Accessories</Button>
          </div>
        </div>
        <div className="col-span-1 w-full h-[700px] overflow-hidden">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img4} alt="" className='w-full h-full ' />
            </motion.div>
          </AnimatePresence>
          <Button {...({
          } as any)} variant="filled" className=' rounded-none relative z-10 -top-[100px] mx-auto block text-black bg-white hover:bg-black hover:text-white'>Men</Button>
        </div>
      </div>

      <div className="w-full flex flex-row h-screen justify-center items-center px-10 mt-8">
        <div className="flex flex-col justify-center w-5/12 items-start">
          <p className='text-black text-sm font-medium'>SPRING SALE 30% OFF</p>
          <h1 className='text-black text-5xl font-normal mt-4'>New Arrivals</h1>
          <p className='text-black text-sm mt-4'>Discover our latest collections</p>
          <Link to={"/shop"}>
            <Button {...({
            } as any)} variant="filled" className='mt-4 rounded-none  block text-white bg-black hover:bg-white hover:text-black'>Shop Now</Button>
          </Link>
        </div>

        <div className="w-[500px] h-[500px]">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img5} alt="" className='w-full h-full ' />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      <div className="w-full h-full flex flex-col mt-[100px] px-8 ">
        <h1 className='text-black text-3xl font-normal'>Featured Collections</h1>
        <div className="flex flex-row w-full justify-center mt-10">
         <FeatureProducts />
        </div>
      </div>
      <div className="w-full h-full flex flex-row justify-around items-center mt-[100px] mb-[50px] px-8 ">
        <div className="flex flex-col">
            <img src={brd1} alt="" />
        </div>
        <div className="flex flex-col">
            <img src={brd2} alt="" />
        </div>
        <div className="flex flex-col">
            <img src={brd3} alt="" />
        </div>
        <div className="flex flex-col ">
            <img src={brd4} alt="" />
        </div>
        
      </div>
    </div>



  )
}

export default Home

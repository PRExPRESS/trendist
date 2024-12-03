import { FunnelIcon } from '@heroicons/react/24/outline'
import { Button } from '@material-tailwind/react'
import React from 'react'

import ProductCard from '../components/ProdcutCard'
import Prodcuts from '../../Data/Prodcut';


const Shop = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className="w-full h-full pt-[69px] pb-[65px] bg-pag-title">
        <div className="w-full h-full text-center">
          <h1 className="text-black text-[48px] font-normal">Shop</h1>
          <p className="text-black text-[16px] font-normal">Shop through our latest selection of Fashion</p>
        </div>
      </div>

      {/* shop content */}
      <div className="flex flex-col w-full h-full p-8 ">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col  justify-center items-center">
            <Button
            className='flex flex-row  justify-center items-center rounded-none border-line hover:border-black '
            variant='outlined'
            {...({} as any)}
            >
                <FunnelIcon className='w-5 h-5' />
                <span className='text-black text-[16px] font-normal'>Filter</span>
                </Button>
          </div>
        </div>

        {/* product list */}
        <div className="flex flex-col w-full h-full mt-10">
            <div className="flex flex-row w-full h-full flex-wrap items-center gap-6">
                {
                    Prodcuts.map((item, index) => {
                        return (
                            <ProductCard key={index} product={item} />
                        )
                    })
                }
                

            </div>
        </div>
      </div>
      {/* <Filter /> */}

    </div>
  )
}

export default Shop

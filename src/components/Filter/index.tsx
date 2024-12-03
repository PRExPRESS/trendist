import { FunnelIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Filter = () => {
  return (
    <div className='w-full h-full fixed top-0 left-0 inset-0 z-10 bg-black/50'>
      <div className="flex flex-col w-3/12 h-screen bg-white">
        <div className="flex flex-row justify-between items-center bg-gray-300 p-4 h-[70px]">
            <div className="flex flex-row items-center gap-3">
                <FunnelIcon className='w-5 h-5' />
                <h1 className="text-black text-sm font-medium uppercase">Filter</h1>
            </div>
          <button className="text-black text-[24px] font-bold">X</button>
        </div>

        <div className="flex flex-col gap-4 p-4 overflow-y-auto w-full h-full">
            
        </div>
      </div>
    </div>
  )
}

export default Filter

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { Input } from '@material-tailwind/react'
import { motion, AnimatePresence } from 'framer-motion'
import  { useEffect, useState, useRef } from 'react'

interface SearchModelProps {
    setIsOpenSearch: (value: boolean) => void
}

const SearchModel = ({ setIsOpenSearch }: SearchModelProps) => {
    const [isOpen, setIsOpen] = useState(true)
    const modalRef = useRef<HTMLDivElement | null>(null)

    // Close modal if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Handle modal opening/closing
    useEffect(() => {
        if (isOpen) {
            setIsOpenSearch(true)
        } else {
            setTimeout(() => setIsOpenSearch(false), 500) // Match animation duration
        }
    }, [isOpen, setIsOpenSearch])

    return (
        <div className="w-full h-full inset-0 fixed bg-black/50 top-0 left-0 z-10 flex justify-center items-start">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={modalRef}
                        className=" mt-[100px] p-4 w-6/12 flex flex-col items-center"
                        initial={{ y: '-100%' }} // Start off-screen from the top
                        animate={{ y: '0%' }} // Slide down when opening
                        exit={{ y: '-200%' }} // Slide up when exiting
                        transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
                    >
                        <div className="w-full bg-white p-4 flex flex-row items-center gap-1">
                            <MagnifyingGlassIcon className="w-6 h-6" />

                            <Input
                            {... ({
                                    label:"Search products...",
                                    variant:"standard",
                                    className:"rounded-none outline-none border-none",
                                    placeholder:"Search products..."

                                } as any)}
                            
                            />
                        </div>
                            <div className="bg-white py-4 mt-4 flex flex-col  w-full overflow-y-auto">
                                <span className='px-4 text-xl font-bold'>Results</span>
                                <div className="flex flex-row items-center gap-4 w-full h-full justify-between p-4 border-b-2">
                                    <div className="flex flex-col w-[75px] h-[75px]">
                                        <img src="" alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <div className="flex flex-col w-full h-full">
                                        <span className=" text-sm font-semibold">Product Name</span>
                                        <span className=" text-xs text-gray-500">Category</span>
                                        <span className=" text-sm font-semibold">Price</span>
                                    </div>
                                </div>
                            </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
{/*  */ }

export default SearchModel

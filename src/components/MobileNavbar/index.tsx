
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { XMarkIcon } from '@heroicons/react/16/solid';


interface MobileNavProps {
    username: boolean;
    logout: () => void;
    close: () => void;
}
const MobileNav: React.FC<MobileNavProps> = ({ username, logout, close }) => {
    
    return (
        <div className='w-full h-full inset-0 bg-black/50 absolute top-0 left-0 z-50'>
            <div className='w-10/12 h-full min-h-screen bg-white relative p-4'>
                <span className='absolute top-0 right-0'><XMarkIcon className="w-8 h-8 text-primary cursor-pointer hover:stroke-secondary" onClick={close} /></span>
                <div className="w-[150px] h-[auto] ">
                    <Link to={'/'}>
                        <img src={Logo} className="w-full h-full object-cover pl-5" alt="logo" />
                    </Link>
                    <div className="flex flex-col items-start justify-between w-full h-full p-6">
                        
                        {!username && (
                            <>
                            <span className='text-primary text-xl font-bold '>Hello, Guest</span>
                            <Link to={'/login'} className='hover:text-secondary mt-4' onClick={close}>Login</Link>
                            </>
                        )}


                        <Link to={'/'} className='hover:text-secondary mt-4' onClick={close}>Home</Link>

                        <Link to={'/shop'} className='hover:text-secondary mt-4' onClick={close}>Shop</Link>

                        <Link to={'/about'} className='hover:text-secondary mt-4' onClick={close}>About</Link>
                        <Link to={'/contact'} className='hover:text-secondary mt-4' onClick={close}>Contact</Link>
                        

                        {username && (
                            <Link to={'#'} className='hover:text-secondary mt-4 ' onClick={() => { logout(); close(); }}>Logout</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import ShopLinks from '../ShopLink';
import { Bars3Icon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import MobileNavbar from '../MobileNavbar';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {logout, isAuthenticated} = useAuth();
  return (
    <header className=' flex flex-col justify-between items-center w-full p-4 border-b border-line'>
    <div className='hidden md:flex flex-row justify-between items-center w-full '>
      <div className='w-[150px] h-[40px]'>
        <Link to="/" className='w-full h-full'>
          <img src={Logo} alt="trendiest" className='w-full h-full object-cover' />
        </Link>
      </div>

      <div className="w-3/12">
      <Navbar />
      </div>

      <div className="w-1/12 justify-end">
        <ShopLinks />
      </div>
    </div>
    <div className='md:hidden flex flex-row justify-between items-center w-full  '>
      <div className='w-[150px] h-[40px]'>
        <Link to="/" className='w-full h-full'>
          <img src={Logo} alt="trendiest" className='w-full h-full object-cover' />
        </Link>
      </div>
      
      <div className="w-1/2 flex flex-row  items-center justify-end gap-2 ">
        <ShopLinks />
        <div className=''>
          <Bars3Icon className='w-6 h-6' onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

        {
          isOpen && (
            <div className='flex flex-col justify-center items-center w-full h-full bg-white'>
              <MobileNavbar username={isAuthenticated} logout={logout} close={(): void => setIsOpen(false)} />
              </div>
          )
        }
    </div>
    </header>
  )
}

export default Header

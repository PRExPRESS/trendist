import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import ShopLinks from '../ShopLink';

const Header = () => {
  return (
    <header className='flex flex-row justify-between items-center w-full p-4 border-b border-line'>
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
    </header>
  )
}

export default Header

import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import fb from '../../assets/icons/fb.svg';
import insta from '../../assets/icons/insta.svg';
import tiktok from '../../assets/icons/tiktok.svg';

const Footer = () => {
  return (
    <footer className="w-full p-4 relative bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-start w-full p-4 border-t border-gray-300">
        {/* Company Information */}
        <div className="flex flex-col mb-6 md:mb-0">
          <div className="w-[150px] h-[40px]">
            <Link to="/" className="w-full h-full">
              <img src={Logo} alt="Trendiest" className="w-full h-full object-cover" />
            </Link>
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-black text-sm mt-1">Address: 123 Main Street</p>
            <p className="text-black text-sm mt-1">Colombo, Sri Lanka</p>
            <p className="text-black text-sm mt-1">Phone: 123-456-7890</p>
            <p className="text-black text-sm mt-1">Email: 1YKvS@example.com</p>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <Link to="/">
              <img src={fb} alt="facebook" className="w-6 h-6" />
            </Link>
            <Link to="/">
              <img src={insta} alt="instagram" className="w-6 h-6" />
            </Link>
            <Link to="/">
              <img src={tiktok} alt="tiktok" className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <span className="text-black text-lg font-bold">Help</span>
          <div className="flex flex-col mt-2">
            <Link to="#" className="text-black text-sm mt-1 hover:text-accent">Help Center</Link>
            <Link to="#" className="text-black text-sm mt-1 hover:text-accent">Terms & Conditions</Link>
            <Link to="#" className="text-black text-sm mt-1 hover:text-accent">Privacy Policy</Link>
            <Link to="#" className="text-black text-sm mt-1 hover:text-accent">FAQ's</Link>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <span className="text-black text-lg font-bold">About</span>
          <div className="flex flex-col mt-2">
            <Link to="#" className="text-black text-sm mt-1 hover:text-accent">About Us</Link>
            <Link to="#" className="text-black text-sm mt-1 hover:text-accent">Contact Us</Link>
            <Link to="#" className="text-black text-sm mt-1 hover:text-accent">Our Story</Link>
            <Link to="#" className="text-black text-sm mt-1 hover:text-accent">Visit Store</Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <span className="text-black text-lg font-bold">News Letter</span>
          <div className="flex flex-col mt-2">
            <p className="text-black text-sm mt-1">
              Subscribe to our newsletter and stay up-to-date with the latest trends and promotions.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md mb-2 md:mb-0"
              />
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full p-4 border-t border-gray-300">
        <p className="text-black text-sm">© 2023 Trendiest. All rights reserved.</p>
        <div className="flex flex-row gap-4">
          <Link to="#" className="text-black text-sm hover:text-accent">Terms of Use</Link>
          <Link to="#" className="text-black text-sm hover:text-accent">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

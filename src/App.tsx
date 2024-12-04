

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {

  const Layout = () => {
    return (
      <>
        <div className='font-albert bg-white flex-flex-col m-0 p-0 w-full'>
          
          {/* header */}
          <Header />
          {/* main content */}
          <Outlet />
          {/* footer */}
          <Footer />
        </div>
      </>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/product/:slug",
          element: <Product />,
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }

      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App



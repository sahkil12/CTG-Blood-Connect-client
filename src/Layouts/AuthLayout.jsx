import { Outlet } from "react-router-dom";
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
const AuthLayout = () => {
     return (
          <div>
               <header className="w-full bg-base-100 ">
                    <Link to={'/'}>
                         <div className='flex items-center pl-2 lg:pl-5 py-4 lg:w-[90%] mx-auto'>
                              <img className='w-16 lg:w-20' src={logo} alt="logo" />
                              <h2 className='text-xl lg:text-2xl font-semibold'>CTG Blood Connect</h2>
                         </div>
                    </Link>
               </header>
               <Outlet></Outlet>
          </div>
     );
};

export default AuthLayout; 
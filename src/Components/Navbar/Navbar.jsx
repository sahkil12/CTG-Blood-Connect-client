import logo from '../../assets/logo.png'
import { RiMenuAddFill } from "react-icons/ri";

const Navbar = () => {
     return (
          <div className="w-full bg-base-200 shadow-md py-1.5">
               <div className="navbar mx-auto lg:w-[85%]">
                    <div className="flex-none ">
                         <div className="drawer">
                              <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                              <div className="drawer-content">
                                   {/* Page content here */}
                                   <label htmlFor="my-drawer-1" className="flex lg:hidden btn btn-square drawer-button">
                                        <RiMenuAddFill size={22} />
                                   </label>
                              </div>
                              {/* drawer */}
                              <div className="drawer-side">
                                   <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                                   <div className="menu bg-gray-200 min-h-full w-72 md:w-80 p-2">
                                        {/* Sidebar content here */}
                                        <div className='flex items-center justify-center'>
                                             <img className='w-14 md:w-16' src={logo} alt="logo" />
                                             <h2 className='text-lg md:text-xl font-semibold'>CTG Blood Connect</h2>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*  */}
                    <div className="flex-1">
                         <div className='hidden lg:flex items-center'>
                              <img className='w-16 lg:w-20' src={logo} alt="logo" />
                              <h2 className='text-xl lg:text-2xl font-semibold'>CTG Blood Connect</h2>
                         </div>
                    </div>
                    <div className="flex-none">
                         <button className='btn btn-sm md:btn-md bg-red-500 font-bold text-white'>Login</button>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { RiMenuAddFill } from "react-icons/ri";
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
     const { user } = useAuth()
     console.log('nav', user);
     return (
          <div className="w-full bg-base-200 rounded-b-3xl shadow-md py-2 px-5 mx-auto lg:w-[90%]">
               <div className="navbar">
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
                         <Link to={'/'}>
                              <div className='hidden lg:flex items-center'>
                                   <img className='w-16 lg:w-20' src={logo} alt="logo" />
                                   <h2 className='text-xl lg:text-2xl font-semibold'>CTG Blood Connect</h2>
                              </div>
                         </Link>
                    </div>
                    <div className="flex-none">
                         {
                              user ? <div className="dropdown dropdown-end">
                                   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                             <img
                                                  alt=""
                                                  src={user?.photoURL} />
                                        </div>
                                   </div>
                                   <ul
                                        tabIndex="-1"
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li>
                                             <a className="justify-between">
                                                  Profile
                                                  <span className="badge">New</span>
                                             </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                   </ul>
                              </div> : <Link to={'/login'}>  <button className='btn btn-sm md:btn-md btn-primary'>Login</button></Link>
                         }

                    </div>
               </div>
          </div>
     );
};

export default Navbar;
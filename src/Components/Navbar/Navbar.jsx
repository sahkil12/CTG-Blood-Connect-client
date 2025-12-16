import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { RiMenuAddFill } from "react-icons/ri";
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
     const { user, logOutUser } = useAuth()
     const handleLogout = () => {
          logOutUser().catch(err => console.log(err));
     };
     return (
          <div className="w-full bg-base-200 rounded-b-3xl border border-neutral-300 shadow-md py-2 px-5 mx-auto lg:w-[90%]">
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
                                   <div className="menu bg-gray-200 min-h-full w-72 md:w-80 px-4 py-6 flex flex-col justify-between">
                                        <div>
                                             {/* Sidebar content here */}
                                             <div className='flex items-center'>
                                                  <img className='w-14 md:w-16' src={logo} alt="logo" />
                                                  <h2 className='text-lg md:text-xl font-semibold'>CTG Blood Connect</h2>
                                             </div>
                                             <div className='border mt-8 border-gray-600'></div>
                                             <ul className=' font-semibold mt-8 w-full gap-3 items-start text-black space-y-3'>
                                                  <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'bg-red-400 text-white py-2' : 'bg-gray-300 text-black py-2 hover:bg-gray-200 border border-neutral-400'}>Home</NavLink></li>
                                                  <li><NavLink to={'/donors'} className={({ isActive }) => isActive ? 'bg-red-400 text-white py-2' : 'bg-gray-300 text-black py-2 hover:bg-gray-200 border border-neutral-400'}>Donors</NavLink></li>
                                                  <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'bg-red-400 text-white py-2' : 'bg-gray-300 text-black py-2 hover:bg-gray-200 border border-neutral-400'}>About</NavLink></li>
                                             </ul>
                                        </div>
                                        {/*  */}
                                        <div className='mb-2'>
                                             {
                                                  user ? <button onClick={handleLogout} className='btn btn-primary w-full'>Logout</button> : <Link to={'/login'} className='btn btn-primary w-full'>Login</Link>
                                             }
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
                                   <div tabIndex={0} role="button" className="cursor-pointer rounded-full w-12 h-12 md:w-14 md:h-14 avatar">
                                        <div className="border-2 flex justify-center items-center border-green-400 hover:border-green-600 rounded-full">
                                             <img
                                                  alt="user"
                                                  className='w-10 h-10 md:w-12 md:h-12 rounded-full'
                                                  src={user?.photoURL || 'https://i.ibb.co.com/BKLSqwdN/user-pic.png'} />
                                        </div>
                                   </div>
                                   <ul
                                        tabIndex={-1}
                                        className="menu menu-sm dropdown-content border border-neutral-300 bg-gray-100 rounded-box z-1 mt-3 w-64 p-3 shadow">
                                        <li className="text-center">
                                             <p className="font-semibold text-lg">{user?.displayName}</p>
                                             <p className="text-sm text-gray-600">{user?.email}</p>
                                        </li>
                                        <li className="mt-8">
                                             <button className="btn bg-neutral-200 mb-4 btn-md w-full">
                                                  Profile
                                             </button>
                                             <button onClick={handleLogout} className="btn btn-primary btn-md w-full">
                                                  Logout
                                             </button>
                                        </li>
                                   </ul>
                              </div> : <Link to={'/login'}>  <button className='btn btn-sm md:btn-md btn-primary'>Login</button></Link>
                         }
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
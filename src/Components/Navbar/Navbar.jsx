import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { RiMenuAddFill } from "react-icons/ri";
import useAuth from '../../Hooks/useAuth';
import { useEffect, useState } from 'react';
import useRole from '../../Hooks/useRole';
import { MdOutlineLogout } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
     const { user, logOutUser } = useAuth()
     const navigate = useNavigate();
     const [scrolled, setScrolled] = useState(false);
     const { role, roleLoading, isDonor, profile } = useRole()
     const donor = role === 'donor' || isDonor
     const profileImg = profile || null
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 0) {
                    setScrolled(true);
               } else {
                    setScrolled(false);
               }
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);
     const handleLogout = () => {
          logOutUser();
          navigate('/login')
     };
     // small device links
     const drawerNavLinkStyle = ({ isActive }) =>
          isActive
               ? "block w-full px-4 py-2 bg-red-400 text-white font-semibold"
               : "block w-full px-4 py-2 border-b font-medium border-gray-300 hover:bg-gray-300"
     // large device links
     const navLinkStyle = ({ isActive }) =>
          isActive
               ? "text-red-400 border-b-2 pb-1 font-semibold transition-all duration-150"
               : "text-gray-800 hover:text-red-400 transition-all duration-150";
     return (
          <div className={`w-full bg-base-100 py-2 px-5 transition-all border-base-100 duration-100
                          ${scrolled ? "border-b border-gray-200 shadow-sm" : ""}`}>
               <div className="navbar mx-auto lg:w-[90%]">
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
                                   <div className="menu bg-gray-100 min-h-full w-72 md:w-80 px-4 py-6 flex flex-col justify-between">
                                        <div>
                                             {/* Sidebar content here */}
                                             <Link to={'/'} className='flex items-center'>
                                                  <img className='w-14 md:w-16' src={logo} alt="logo" />
                                                  <h2 className='text-lg md:text-xl font-semibold'>CTG Blood Connect</h2>
                                             </Link>
                                             <div className='border mt-8 border-gray-500'></div>
                                             <ul className=' mt-8 w-full gap-3 items-start text-black space-y-3'>
                                                  <li><NavLink onClick={() => document.getElementById("dashboard-drawer").checked = false} to={'/'} className={drawerNavLinkStyle}>Home</NavLink></li>
                                                  <li><NavLink onClick={() => document.getElementById("dashboard-drawer").checked = false} to={'/donors'} className={drawerNavLinkStyle}>Donors</NavLink></li>
                                                  <li><NavLink onClick={() => document.getElementById("dashboard-drawer").checked = false} to={'/about'} className={drawerNavLinkStyle}>About</NavLink></li>
                                                  {!roleLoading && role === 'admin' && (
                                                       <li><NavLink to={'/dashboard'} className={drawerNavLinkStyle}>Dashboard</NavLink></li>
                                                  )}
                                             </ul>
                                        </div>
                                        {/*  */}
                                        <div className='mb-2'>
                                             {!roleLoading && (donor || role === "admin") && (
                                                  <Link to={'/profile'} className="btn bg-neutral-200 mb-4 btn-md w-full">
                                                       Profile
                                                  </Link>
                                             )}
                                             {
                                                  user ? <button onClick={handleLogout} className='btn bg-red-400 text-white w-full gap-2'>Logout <MdOutlineLogout size={18}></MdOutlineLogout> </button>
                                                       :
                                                       <Link to={'/login'} className='btn bg-red-400 text-white w-full'>Login</Link>
                                             }
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*nav item */}
                    <div className='flex w-full justify-between items-center gap-6'>
                         <div className="">
                              <Link to={'/'}>
                                   <div className='hidden lg:flex items-center'>
                                        <img className='w-16 lg:w-20' src={logo} alt="logo" />
                                        <h2 className='text-xl lg:text-2xl font-semibold'>CTG Blood Connect</h2>
                                   </div>
                              </Link>
                         </div>
                         {/*  */}
                         <div className='hidden flex-1 justify-center lg:flex'>
                              <ul className='flex gap-8'>
                                   <li><NavLink to={'/'} className={navLinkStyle}>Home</NavLink></li>
                                   <li><NavLink to={'/donors'} className={navLinkStyle}>Donors</NavLink></li>
                                   <li><NavLink to={'/about'} className={navLinkStyle}>About </NavLink></li>
                                   {!roleLoading && role === 'admin' && (
                                        <li><NavLink to={'/dashboard'} className={navLinkStyle}>Dashboard</NavLink></li>
                                   )}
                              </ul>
                         </div>
                         <div className="flex items-center gap-2 md:gap-4">
                              {!roleLoading && !donor && role !== 'admin' && (
                                   <Link to="/be-a-donor" className="px-4 text-sm py-2 bg-red-400 rounded-lg text-white">
                                        Be a Donor
                                   </Link>
                              )}
                              {
                                   user ? <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="cursor-pointer rounded-full w-12 h-12 sm:w-14 sm:h-14 avatar">
                                             <div className="border-2 flex justify-center items-center border-red-300 hover:border-red-400 rounded-full">
                                                  <img
                                                       alt="user"
                                                       className='w-10 h-10 sm:w-12 sm:h-12 rounded-full'
                                                       src={profileImg ? profileImg : user?.photoURL} />
                                             </div>
                                        </div>
                                        <ul className="menu menu-sm dropdown-content border border-neutral-300 bg-gray-50 rounded-box z-50 mt-3 md:w-60 shadow">
                                             <li className="text-center">
                                                  <p className="font-semibold text-base md:text-lg">{user?.displayName}</p>
                                                  <p className="text-sm text-gray-600">{user?.email}</p>
                                             </li>
                                             <li className="mt-16">
                                                  {!roleLoading && (donor || role === "admin") && (
                                                       <Link to={'/profile'} className="btn bg-neutral-200 mb-4 text-sm ">
                                                            Profile <FaRegUserCircle size={18} />
                                                       </Link>
                                                  )}
                                                  <button onClick={handleLogout} className="btn bg-red-400 text-white text-sm ">
                                                       Logout <MdOutlineLogout size={18}></MdOutlineLogout>
                                                  </button>
                                             </li>
                                        </ul>
                                   </div> : <Link to={'/login'}>  <button className='cursor-pointer transition-all duration-300 px-5 text-xs md:text-base md:px-7 font-medium py-2 bg-white border-2 border-red-400 text-black hover:bg-red-400 hover:text-gray-100 rounded-lg'>Login</button></Link>
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
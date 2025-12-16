import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { RiMenuAddFill } from "react-icons/ri";
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
     const { user, logOutUser } = useAuth()
     const handleLogout = () => {
          logOutUser().catch(err => console.log(err));
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
                                             <div className='border mt-8 border-gray-500'></div>
                                             <ul className=' mt-8 w-full gap-3 items-start text-black space-y-3'>
                                                  <li><NavLink to={'/'} className={drawerNavLinkStyle}>Home</NavLink></li>
                                                  <li><NavLink to={'/donors'} className={drawerNavLinkStyle}>Donors</NavLink></li>
                                                  <li><NavLink to={'/about'} className={drawerNavLinkStyle}>About</NavLink></li>
                                             </ul>
                                        </div>
                                        {/*  */}
                                        <div className='mb-2'>
                                             {
                                                  user ? <button onClick={handleLogout} className='btn bg-red-400 text-white w-full'>Logout</button> : <Link to={'/login'} className='btn bg-red-400 text-white w-full'>Login</Link>
                                             }
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/*nav item */}
                    <div className='flex w-full justify-between items-center '>
                         <div className="">
                              <Link to={'/'}>
                                   <div className='hidden lg:flex items-center'>
                                        <img className='w-16 lg:w-20' src={logo} alt="logo" />
                                        <h2 className='text-xl lg:text-2xl font-semibold'>CTG Blood Connect</h2>
                                   </div>
                              </Link>
                         </div>
                         {/*  */}
                         <div className='hidden lg:flex '>
                              <ul className='flex gap-8'>
                                   <li><NavLink to={'/'} className={navLinkStyle}>Home</NavLink></li>
                                   <li><NavLink to={'/donors'} className={navLinkStyle}>Donors</NavLink></li>
                                   <li><NavLink to={'/about'} className={navLinkStyle}>About </NavLink></li>
                                   {/* <li><NavLink to={'/dashboard'} className={navLinkStyle}>Dashboard</NavLink></li> */}
                              </ul>
                         </div>
                         <div className="flex items-center gap-2 md:gap-4">
                              <Link to={'/be-a-donor'} className='cursor-pointer px-4 text-xs md:text-base md:px-6 py-2.5 bg-red-400 rounded-lg text-gray-100 font-medium'>Be a Donor</Link>
                              {
                                   user ? <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="cursor-pointer rounded-full w-12 h-12 md:w-14 md:h-14 avatar">
                                             <div className="border-2 flex justify-center items-center border-red-300 hover:border-red-400 rounded-full">
                                                  <img
                                                       alt="user"
                                                       className='w-10 h-10 md:w-12 md:h-12 rounded-full'
                                                       src={user?.photoURL || 'https://i.ibb.co.com/BKLSqwdN/user-pic.png'} />
                                             </div>
                                        </div>
                                        <ul
                                             tabIndex={-1}
                                             className="menu menu-sm dropdown-content border border-neutral-300 bg-gray-100 rounded-box z-1 mt-3 w-64 p-3 shadow h-72">
                                             <li className="text-center">
                                                  <p className="font-semibold text-lg">{user?.displayName}</p>
                                                  <p className="text-sm text-gray-600">{user?.email}</p>
                                             </li>
                                             <li className="mt-24">
                                                  <button className="btn bg-neutral-200 mb-4 btn-md w-full">
                                                       Profile
                                                  </button>
                                                  <button onClick={handleLogout} className="btn bg-red-400 text-white text-sm w-full">
                                                       Logout
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
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaTint, FaHome, FaBars } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import logo from '../assets/images/logo.png'

const DashboardLayout = () => {
     const { logOutUser } = useAuth();

     const navLinkClass = ({ isActive }) =>
          isActive
               ? "bg-red-400 text-white"
               : "text-gray-700 hover:bg-red-200";

     return (
          <div className="drawer lg:drawer-open">
               {/* Drawer toggle for small device */}
               <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

               {/* Main Content */}
               <div className="drawer-content flex flex-col">
                    {/* Top bar (mobile only) */}
                    <div className="navbar bg-base-100 shadow-sm lg:hidden">
                         <div className="flex-none">
                              <label htmlFor="dashboard-drawer" className="btn btn-ghost">
                                   <FaBars size={20} />
                              </label>
                         </div>
                         <div className="flex-1">
                              <h2 className="text-lg font-semibold">Admin Dashboard</h2>
                         </div>
                    </div>

                    {/* Page Content */}
                    <div className="p-4">
                         <Outlet />
                    </div>
               </div>

               {/* Sidebar */}
               <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                    <aside className="w-72 min-h-full bg-gray-100 border-r border-neutral-200 flex flex-col justify-between pb-5">
                         <div>
                              {/* Sidebar Header */}
                              <div className="py-3 px-2 pb-5 border-b-2 border-gray-400 ">
                                   {/* Sidebar content here */}
                                   <Link to={'/'} className='flex items-center'>
                                        <img className='w-14 md:w-16' src={logo} alt="logo" />
                                        <h2 className='text-lg md:text-xl font-semibold'>CTG Blood Connect</h2>
                                   </Link>
                                   <p className="ml-3 mt-1.5 font-semibold text-gray-600">Admin Panel</p>
                              </div>
                              {/* Navigation */}
                              <ul className="menu p-4 gap-4 w-full mt-5">
                                        <li>
                                             <NavLink to="/dashboard" end className={navLinkClass}>
                                                  <FaHome /> Dashboard Home
                                             </NavLink>
                                        </li>

                                        <li>
                                             <NavLink to="/dashboard/manage-users" className={navLinkClass}>
                                                  <FaUsers /> Manage Users
                                             </NavLink>
                                        </li>

                                   {/* <li>
                                   <NavLink to="/dashboard/manage-donors" className={navLinkClass}>
                                        <FaTint /> Manage Donors
                                   </NavLink>
                              </li> */}

                              </ul>
                         </div>
                         <li className="p-4 ">
                              <button
                                   onClick={logOutUser}
                                   className="text-white hover:bg-red-500/80 cursor-pointer py-1.5 font-semibold rounded-md bg-red-400 w-full"
                              >
                                   Logout
                              </button>
                         </li>
                    </aside>
               </div>
          </div>
     );
};

export default DashboardLayout;

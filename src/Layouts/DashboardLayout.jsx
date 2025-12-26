import { Link, NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaTint, FaHome, FaBars, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import useAuth from "../Hooks/useAuth";
import logo from '../assets/images/logo.png'

const DashboardLayout = () => {
     const { logOutUser } = useAuth();

     const navLinkClass = ({ isActive }) =>
          isActive
               ? "bg-red-400 text-white py-2.5 font-medium"
               : "text-gray-700 hover:bg-red-200 py-2.5 font-medium";

     return (
          <div className="drawer lg:drawer-open">
               {/* Drawer for small device */}
               <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

               {/* Main Content */}
               <div className="drawer-content flex flex-col">
                    {/* Top bar (mobile only) */}
                    <div className="navbar bg-base-100 space-x-3 shadow-sm lg:hidden ">
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
                    <div className="p-4 lg:p-6">
                         <Outlet />
                    </div>
               </div>

               {/* Sidebar */}
               <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                    <aside className="w-72 min-h-full bg-gray-100 border-r border-neutral-200 flex flex-col justify-between pb-2">
                         <div>
                              {/* Sidebar Header */}
                              <div className="py-3 px-2 pb-5 border-b-2 border-gray-400 ">
                                   {/* Sidebar content here */}
                                   <Link to={'/'} className='flex items-center'>
                                        <img className='w-14 md:w-16' src={logo} alt="logo" />
                                        <h2 className='text-lg md:text-xl font-semibold'>CTG Blood Connect</h2>
                                   </Link>
                                   <p className="ml-3 mt-2 font-semibold text-gray-600">Admin Panel</p>
                              </div>
                              {/* Navigation */}
                              <ul className="menu p-4 gap-4 w-full mt-3">
                                   <li>
                                        <NavLink onClick={() => document.getElementById("dashboard-drawer").checked = false} to="/dashboard" end className={navLinkClass}>
                                             <FaHome size={18}/> Dashboard Home
                                        </NavLink>
                                   </li>

                                   <li>
                                        <NavLink onClick={() => document.getElementById("dashboard-drawer").checked = false} to="/dashboard/manage-users" className={navLinkClass}>
                                             <FaUsers size={18}/> Manage Users
                                        </NavLink>
                                   </li>
                                   <li>
                                        <NavLink onClick={() => document.getElementById("dashboard-drawer").checked = false} to="/dashboard/Profile" className={navLinkClass}>
                                             <FaRegUserCircle size={18}/> Profile
                                        </NavLink>
                                   </li>
                              </ul>
                         </div>
                         <div className="p-4">
                              <button
                                   onClick={logOutUser}
                                   className="text-white hover:bg-red-500/80 cursor-pointer py-2 font-bold rounded-sm bg-red-400 w-full flex gap-2.5 items-center justify-center"
                              >
                                   Logout <MdOutlineLogout size={18}/>
                              </button>
                         </div>
                    </aside>
               </div>
          </div>
     );
};

export default DashboardLayout;

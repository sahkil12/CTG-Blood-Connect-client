import { NavLink } from 'react-router-dom';
import logo from '../../../public/logo.png'

const Footer = () => {
     const NavLinkStyles = ({ isActive }) =>
          isActive ? 'text-red-400 font-semibold transition-all duration-150' : 'text-gray-100 hover:text-red-400 transition-all duration-200'
     return (
          <footer className="footer footer-horizontal  footer-center bg-black/95 text-white p-5 md:p-10">
               <aside className='w-full px-4 lg:px-28 mx-auto lg:w-[90%]'>
                    <div className='flex items-center justify-center'>
                         <img className='w-16' src={logo} alt="logo" />
                         <h2 className='text-base sm:text-xl lg:text-2xl font-semibold'>CTG Blood Connect</h2>
                    </div>
                    <p className="text-xs sm:text-base text-gray-300 font-semibold">
                         Donate Blood, Save Lives in Chittagong
                    </p>
                    <ul className='border-t border-b border-gray-400 border-dashed py-5 my-4 w-full justify-center md:text-base flex gap-8 font-medium '>
                         <li><NavLink to={'/'} className={NavLinkStyles}>Home</NavLink></li>
                         <li><NavLink to={'/donors'} className={NavLinkStyles}>Donors</NavLink></li>
                         <li><NavLink to={'/about'} className={NavLinkStyles}>About</NavLink></li>
                    </ul>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
               </aside>

          </footer>
     );
};

export default Footer;
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import logo from '../../../public/logo.png';

const Footer = () => {
     const NavLinkStyles = ({ isActive }) =>
          isActive
               ? 'text-red-400 font-semibold transition-all duration-150'
               : 'text-gray-300 hover:text-red-400 transition-all duration-200';

     return (
          <footer className="bg-black/95 text-white py-10 px-6 ">
               <div className='mx-auto lg:w-[90%]'>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                         {/* Logo + Brand */}
                         <div className="flex flex-col items-center md:items-start gap-3">
                              <img className="w-20" src={logo} alt="CTG Blood Connect Logo" />
                              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">CTG Blood Connect</h2>
                              <p className="text-gray-400/90 text-sm sm:text-base font-medium text-center">
                                   Saving Lives, One Donation at a Time Chittagong
                              </p>

                              {/* Social Media Icons Inline */}
                              <div className="flex gap-5 mt-3">
                                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200">
                                        <FaFacebookF size={18} />
                                   </a>
                                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200">
                                        <FaTwitter size={18} />
                                   </a>
                                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200">
                                        <FaLinkedinIn size={18} />
                                   </a>
                              </div>
                         </div>

                         {/* Navigation */}
                         <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm sm:text-base font-medium">
                              <li><NavLink to="/" className={NavLinkStyles}>Home</NavLink></li>
                              <li><NavLink to="/donors" className={NavLinkStyles}>Donors</NavLink></li>
                              <li><NavLink to="/about" className={NavLinkStyles}>About</NavLink></li>
                              <li><NavLink to="/be-a-donor" className={NavLinkStyles}>Be a Donor</NavLink></li>
                         </ul>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-8 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm space-y-1 ">
                         <p>© {new Date().getFullYear()} CTG Blood Connect. All rights reserved.</p>
                         <p className='flex items-center gap-2 justify-center mt-2.5'> <FaPhoneAlt size={15}/> <a href="mailto:info@ctgbloodconnect.com" className="text-red-400 hover:underline">info@ctgbloodconnect.com</a></p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;

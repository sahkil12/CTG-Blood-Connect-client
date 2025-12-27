import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import useRole from "../../Hooks/useRole";
import Loader from "../Loader/Loader";

const Forbidden = () => {
     const { role, roleLoading } = useRole();
     if (roleLoading) return <Loader></Loader>
     return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50/40 to-white px-4">
               <div className="max-w-lg w-full p-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                         <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-2xl lg:text-3xl">
                              <FaLock />
                         </div>
                    </div>
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">
                         Access Forbidden
                    </h1>
                    {/* Subtitle */}
                    <p className="text-gray-700/80 mb-10">
                         You don’t have permission to access this page.
                         <br />
                         Please contact the administrator if you think this is a mistake.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                         <Link
                              to="/"
                              className="px-7 py-2.5 rounded-md bg-red-400 text-white font-semibold hover:bg-red-500/80 transition"
                         >
                              Go to Home
                         </Link>
                         {/*  */}
                         {
                              role === 'admin' &&
                              <Link
                                   to="/dashboard"
                                   className="px-7 py-2.5 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
                              >
                                   Dashboard
                              </Link>
                         }
                    </div>

                    {/* Code */}
                    <p className="mt-6 text-sm text-gray-500">
                         Error Code: 403
                    </p>
               </div>
          </div>
     );
};

export default Forbidden;

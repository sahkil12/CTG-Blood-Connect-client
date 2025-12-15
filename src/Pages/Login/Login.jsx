import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/blood donner.json";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
     const { loginUser, googleCreate } = useAuth()
     const [error, setError] = useState("");
     const navigate = useNavigate()
     const handleLogin = (e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email, password);
          loginUser(email, password)
               .then((res) => {
                    navigate('/')
                    console.log(res);
               })
               .catch((error) => {
                    console.log(error);
                    setError("Invalid email or password")
               });
     };
     const handleGoogleRegister = () => {
          googleCreate()
               .then((res) => {
                    navigate('/')
                    console.log(res);
               })
               .catch((error) => {
                    console.log(error);
                    setError("Invalid email or password")
               });
     }

     return (
          <div className="min-h-[calc(100vh-90px)] bg-base-100 flex items-center justify-center px-4 py-12">
               <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 items-center">
                    {/* left form */}
                    <div className="p-8 md:px-10 md:py-16 max-w-xl w-full mx-auto">
                         <h2 className="text-4xl lg:text-5xl mb-7 font-bold text-gray-900">
                              Welcome Back
                         </h2>
                         <p className="text-gray-600 md:text-lg">
                              Login to continue donating blood
                         </p>

                         <form onSubmit={handleLogin} className="mt-8 mb-5">
                               
                              <fieldset className="flex flex-col space-y-2 mb-4">
                                   <label className="font-medium text-gray-800">Your Email</label>
                                   <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        className="input border-2 py-6 lg:py-7 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-500"
                                        required
                                   />
                              </fieldset>
                              <fieldset className="flex flex-col space-y-2 mb-2">
                                   <label className="font-medium text-gray-800">Your Password</label>
                                   <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="input border-2 py-6 lg:py-7 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-500"
                                        required
                                   />
                              </fieldset>
                              <div className="flex justify-start pb-6 underline text-gray-500 font-medium">
                                   <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                              </div>
                              {error && (
                                   <p className="text-red-500 text-sm mb-3">{error}</p>
                              )}

                              <button className="btn btn-primary py-6 w-full text-lg">
                                   Login
                              </button>
                         </form>
                         <span className="font-medium text-base text-gray-500">Don't have an account? <Link to={'/register'}><b className="text-blue-600 hover:underline">Register</b></Link> </span>

                         {/* Divider */}
                         <div className="divider my-6 text-gray-500">OR Login With </div>

                         {/* Google Login */}
                         < button
                              onClick={handleGoogleRegister}
                              className="flex rounded-md justify-center items-center gap-2 w-full text-base font-bold bg-gray-200 py-1.5 border text-black border-[#e5e5e5]" >
                              <span className="py-2.5"> <FcGoogle size={22}></FcGoogle></span>
                              Login with Google
                         </button >
                    </div>
                    {/* right animation */}
                    <div className="hidden lg:block w-80 lg:w-fit">
                         <Lottie animationData={loginAnimation} loop={true} />
                    </div>
               </div>
          </div>
     );
};

export default Login;

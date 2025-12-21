import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/blood donner.json";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "../../Components/Loader/Loader";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
     const { createUser, googleCreate, updateUserProfile, user } = useAuth()
     const [error, setError] = useState("");
     const [nameError, setNameError] = useState("");
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate()
     const axiosPublic = useAxios();

     const saveUserToDB = async (user) => {
          try {
               await axiosPublic.post('/users', user);
          } catch (err) {
               setError(err.message)
          }
     };
     const handleRegister = async (e) => {
          e.preventDefault();
          const name = e.target.name.value.trim();
          const email = e.target.email.value;
          const password = e.target.password.value;
          const photo = 'https://i.ibb.co.com/cXsp46W4/user-pic.png'
          if (name.length < 5) {
               setNameError("Name must be at least 5 characters")
               return
          }
          else {
               setNameError("")
          }
          try {
               await createUser(email, password);
               // user profile update
               await updateUserProfile({
                    displayName: name,
                    photoURL: photo,
               });
               // Backend save
               saveUserToDB({ name, email, photo })

               toast.success("Your Account is Successfully Created");
               navigate("/be-a-donor");
          } catch (error) {
               setError(error.message);
          }
     };
     const handleGoogleLogin = async () => {
          try {
               const res = await googleCreate();
               const userInfo = res.user;
               // Save to backend
               const name = userInfo?.displayName
               const email = userInfo?.email
               const photo = userInfo?.photoURL
               saveUserToDB({ name, email, photo })
               toast.success("Your Account is Successfully Created");
               navigate("/be-a-donor");
          } catch (error) {
               setError(error.message);
          }
     }
     if (user) {
          <Loader></Loader>
          return <Navigate to={'/'}></Navigate>
     }

     return (
          <div className="min-h-[calc(100vh-97px)] bg-base-100 flex items-center justify-center px-3 py-12">
               <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 items-center">
                    {/* left form */}
                    <div className="px-2 md:px-10 max-w-xl w-full mx-auto">
                         <h2 className="text-3xl lg:text-5xl mb-5 md:mb-7 font-bold text-gray-900">
                              Create Your Account
                         </h2>
                         <p className="text-gray-600 md:text-lg">
                              Create an account to donate blood and save lives
                         </p>
                         {/* form */}
                         <form onSubmit={handleRegister} className="mt-7 mb-5">
                              {/* name */}
                              <fieldset className="flex flex-col space-y-2 mb-4">
                                   <label className="font-medium text-gray-800">Your Name</label>
                                   <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Full Name"
                                        className="input border-2 py-6 lg:py-7 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-500"
                                        required
                                   />
                                   {nameError && (
                                        <p className="text-red-500 text-sm mt-1">{nameError}</p>
                                   )}
                              </fieldset>
                              {/* email */}
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
                              {/* password */}
                              <fieldset className="flex flex-col space-y-2 mb-2 relative">
                                   <label className="font-medium text-gray-800">Your Password</label>
                                   <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        className="input border-2 py-6 lg:py-7 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-500"
                                        required
                                   />
                                   {/* show / hide icons */}
                                   <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-12 lg:top-[52px] cursor-pointer text-gray-500"
                                   >
                                        {showPassword ? (
                                             <AiOutlineEyeInvisible size={22} />
                                        ) : (
                                             <AiOutlineEye size={22} />
                                        )}
                                   </span>
                              </fieldset>
                              <div className="flex justify-start pb-6 underline text-gray-500 font-medium">
                                   <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                              </div>
                              {error && (
                                   <p className="text-red-500 text-sm mb-3">{error}</p>
                              )}

                              <button className="btn bg-red-400 text-white rounded-lg py-6 w-full text-lg">
                                   Register
                              </button>
                         </form>
                         <span className="font-medium text-base text-gray-500">Already have an account? <Link to={'/login'}><b className="text-red-400 hover:underline">Login</b></Link> </span>

                         {/* Divider */}
                         <div className="divider my-6 text-gray-500">OR Register With </div>

                         {/* Google Login */}
                         < button
                              onClick={handleGoogleLogin}
                              className="flex rounded-md justify-center items-center gap-2 w-full text-base font-bold bg-gray-200 py-1.5 border text-black border-[#e5e5e5]" >
                              <span className="py-2"> <FcGoogle size={20}></FcGoogle></span>
                              Register with Google
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

export default Register;
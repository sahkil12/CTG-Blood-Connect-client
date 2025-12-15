import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/blood donner.json";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
     const { loginUser } = useAuth()
     const [error, setError] = useState("");

     const handleLogin = (e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email, password);
          // loginUser(email, password)
          //      .then(() => { })
          //      .catch(() => setError("Invalid email or password"));
     };

     return (
           <div className="my-6 border rounded-3xl border-neutral-200 bg-base-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 items-center">
        {/* Left animation */}
        <div className="w-72 lg:w-fit">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>

        {/* Right form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Login to continue donating blood
          </p>

          <form onSubmit={handleLogin} className="mt-8">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="input input-bordered w-full mb-4"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full mb-4"
              required
            />

            {error && (
              <p className="text-red-500 text-sm mb-3">{error}</p>
            )}

            <button className="btn btn-primary w-full text-lg">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-6">OR</div>

          {/* Google Login */}
          <button
          //   onClick={googleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-3"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
     );
};

export default Login;

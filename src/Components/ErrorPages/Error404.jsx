import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lottie404 from '../../assets/lottie/blood-err.json';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <div className="w-full max-w-lg">
        <Lottie animationData={lottie404} loop={true} className="w-full h-72 lg:h-80" />
      </div>

      <h1 className="text-6xl font-bold text-red-500 mt-8">404</h1>
      <p className="text-xl text-gray-700 mt-4">
        Oops! Page not found.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-red-500/80 text-white font-semibold rounded-md hover:bg-red-500/85 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error404;

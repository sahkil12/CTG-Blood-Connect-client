import { Link } from "react-router-dom";
import heroImg from "../../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-base-100">
      <div className="my-10 rounded-xl px-6 md:px-8 py-10 md:py-20 xl:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Donate <span className="text-red-600">Blood</span>, Save Lives in Chittagong
          </h1>
          <p className="mt-7 text-gray-600 font-medium max-w-md">
            CTG Blood Connect helps people in Chittagong find blood donors quickly
            and easily. Join as a donor and make a real impact in your community.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to={'/be-a-donor'} className="cursor-pointer px-6 font-medium py-2.5 bg-red-400 text-gray-100 rounded-lg">
              Become a Donor
            </Link>
            <Link to={'/donors'} className="transition-all duration-300 cursor-pointer px-6 font-medium py-2.5 bg-white border-2 border-red-400 text-black hover:bg-red-400 hover:text-gray-100 rounded-lg">
              Find a Donor
            </Link>
          </div>
        </div>
        {/* Right image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Blood Donation"
            className="max-w-md lg:max-w-xl w-full rounded-l-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

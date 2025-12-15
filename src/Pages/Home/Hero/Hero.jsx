import heroImg from "../../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-base-100">
      <div className="my-10 border rounded-lg border-neutral-300 px-4 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Donate Blood, Save Lives in Chittagong
          </h1>
          <p className="mt-7 text-gray-600 font-medium max-w-md">
            CTG Blood Connect helps people in Chittagong find blood donors quickly
            and easily. Join as a donor and make a real impact in your community.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn btn-primary rounded-full">
              Become a Donor
            </button>
            <button className="btn btn-outline btn-primary rounded-full">
              Find a Donor
            </button>
          </div>
        </div>
        {/* Right image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Blood Donation"
            className="max-w-md lg:max-w-xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

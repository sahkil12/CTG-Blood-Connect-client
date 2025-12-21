import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import donorImage from '../../assets/images/about-donor.jpg'
const About = () => {
  return (
    <section className="bg-base-100">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 space-y-20 md:space-y-28">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            About CTG <span className="text-red-500">Blood</span> Connect
          </h1>
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            CTG Blood Connect is a dedicated blood donor platform for the people of
            Chittagong, designed to help patients find the right donor at the right
            time without delay or confusion.
          </p>
        </div>
        {/* Why Chittagong */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl xl:text-[42px] font-bold text-gray-900 mb-6">
              Why Chittagong Focused?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              During emergencies, time matters the most. Searching donors across
              the entire country often causes delays and confusion.
            </p>
            <ul className="space-y-2.5 text-gray-600 text-sm lg:text-[15px]">
              <li>• Faster access to nearby donors</li>
              <li>• Area-based filtering within Chittagong</li>
              <li>• Simple and reliable donor connection</li>
            </ul>
          </div>
          <img
            src={donorImage}
            alt="Blood Donation"
            className="rounded-2xl shadow-lg border border-neutral-200"
          />
        </div>
        {/* CTA */}
        <div className="bg-red-50 p-8 md:p-14 rounded-2xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Want to Help Save Lives?
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Becoming a blood donor takes only a few minutes, but it can save a life
            when someone needs it the most.
          </p>
          <Link
            to="/be-a-donor"
            className="inline-block mt-8 bg-red-400 hover:bg-red-500/80 transition text-white px-10 py-3 rounded-lg font-semibold"
          >
            Become a Donor
          </Link>
        </div>
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-sm">
            <h3 className="text-4xl font-bold text-red-500">200+</h3>
            <p className="text-gray-600 mt-2">Registered Donors</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-sm">
            <h3 className="text-4xl font-bold text-red-500">100+</h3>
            <p className="text-gray-600 mt-2">Successful Matches</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-sm">
            <h3 className="text-4xl font-bold text-red-500">24/7</h3>
            <p className="text-gray-600 mt-2">Platform Availability</p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
            Contact Us
          </h2>

          <div className="space-y-4 text-gray-600 md:text-lg">
            <p className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-red-500" />
              ctgbloodconnect@gmail.com
            </p>
            <p className="flex items-center justify-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              +880 1834557412
            </p>
            <p className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              Chittagong, Bangladesh
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

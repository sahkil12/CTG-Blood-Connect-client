import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const NewsletterContact = () => {
     return (
          <section className="bg-red-50 py-16 px-6 rounded-lg mb-5">
               <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-5">Stay Connected</h2>
                    <p className="text-gray-700 mb-6">
                         Subscribe to get updates about blood donations, campaigns, and latest donors in Chittagong.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                         <input
                              type="email"
                              placeholder="Enter your email"
                              className="input w-full sm:w-80 border-2 border-gray-300 py-5 px-4 rounded-md outline-none focus:border-red-300"
                         />
                         <button
                              type="button"
                              className="bg-red-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-500/80 transition"
                         >
                              Subscribe
                         </button>
                    </form>

                    <div className="mt-8 text-red-500">
                         <p className="mb-4 flex justify-center items-center gap-3"> <FaEnvelope size={22}/> <a href="mailto:ctgbloodconnect@gmail.com" className="text-gray-700">ctgbloodconnect@gmail.com</a></p>
                         <p className="flex justify-center items-center gap-3"><FaPhoneAlt className="" /> <a href="tel:+8801234567890" className="text-gray-700">+880 1834557412</a></p>
                    </div>
               </div>
          </section>
     );
};

export default NewsletterContact;
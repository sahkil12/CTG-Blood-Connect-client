import { Link } from "react-router-dom";

const About = () => {
     return (
          <section className="bg-base-100">
               <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14 space-y-24">
                    {/* Intro */}
                    <div className="text-center max-w-3xl mx-auto">
                         <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                              About CTG <span className="text-red-500">Blood</span> Connect
                         </h1>
                         <p className="mt-5 text-gray-600 text-base md:text-lg">
                              CTG Blood Connect is a blood donor platform built specially for the people of Chittagong,
                              making it easier to find the right blood donor at the right time.
                         </p>
                    </div>
                    {/* Why CTG */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                         {/* left text */}
                         <div>
                              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Why Chittagong Focused?
                              </h2>
                              <p className="text-gray-600 leading-relaxed">
                                   Finding blood on time can be difficult. CTG Blood Connect focuses only on
                                   Chittagong areas so that users can quickly find nearby donors based on
                                   blood group and location without confusion.
                              </p>
                         </div>
                         {/* right image */}
                         <img
                              src="https://i.ibb.co.com/gZ5KGnkM/World-Blood-Donor-Day-2022.jpg"
                              alt="Blood Donation"
                              className="rounded-xl shadow-lg border border-neutral-300"
                         />
                    </div>
                    {/* Be a Donor */}
                    <div className="bg-red-50 p-6 md:p-12 rounded-xl text-center">
                         <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                              Want to Help Save Lives?
                         </h2>
                         <p className="mt-5 text-sm md:text-base text-gray-600">
                              You can become a blood donor by filling out our simple donor registration form.
                         </p>
                         <Link
                              to={"/be-a-donor"}
                              className="inline-block mt-8 bg-red-400 text-white px-10 py-2.5 rounded-md font-semibold"
                         >
                              Be a Donor
                         </Link>
                    </div>
                    {/* Contact */}
                    <div className="text-center">
                         <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                              Contact Us
                         </h2>
                         <div className="space-y-3 text-gray-600 md:text-lg">
                              <p>📧 Email: ctgbloodconnect@gmail.com</p>
                              <p>📞 Phone: +880 1834557412</p>
                              <p>📍 Location: Chittagong, Bangladesh</p>
                         </div>
                    </div>

               </div>
          </section>
     );
};

export default About;











// ----------------------------------

// const About = () => {
//   return (
//     <section className="bg-base-100">
//       <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

//         {/* Intro */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
//             About Our Blood Donor Platform
//           </h1>
//           <p className="mt-4 text-gray-600 text-lg">
//             We connect blood donors with people in need, making blood donation
//             faster, easier, and more reliable across Chittagong.
//           </p>
//         </div>

//         {/* Mission */}
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Mission
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Our mission is to save lives by creating a trusted and simple
//               platform where blood donors and patients can connect instantly.
//               Every donation matters, and every second counts.
//             </p>
//           </div>
//           <img
//             src="https://i.ibb.co.com/gZ5KGnkM/World-Blood-Donor-Day-2022.jpg"
//             alt="Blood Donation"
//             className="rounded-xl shadow-md"
//           />
//         </div>

//         {/* How it works */}
//         <div>
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-10">
//             How It Works
//           </h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//             <div className="p-6 bg-white rounded-xl shadow">
//               <h3 className="text-xl font-semibold mb-2">Register</h3>
//               <p className="text-gray-600">
//                 Create an account and register as a blood donor with your details.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-xl shadow">
//               <h3 className="text-xl font-semibold mb-2">Search</h3>
//               <p className="text-gray-600">
//                 Find donors easily by blood group and area.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-xl shadow">
//               <h3 className="text-xl font-semibold mb-2">Connect</h3>
//               <p className="text-gray-600">
//                 Contact donors directly and get help when it matters most.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid sm:grid-cols-3 gap-8 text-center">
//           <div>
//             <h3 className="text-4xl font-bold text-red-500">500+</h3>
//             <p className="text-gray-600 mt-2">Registered Donors</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold text-red-500">1000+</h3>
//             <p className="text-gray-600 mt-2">Successful Matches</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold text-red-500">24/7</h3>
//             <p className="text-gray-600 mt-2">Availability</p>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center bg-red-50 p-10 rounded-xl">
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
//             Become a Life Saver Today
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Join our community and help save lives by donating blood.
//           </p>
//           <a
//             href="/be-a-donor"
//             className="inline-block mt-6 bg-red-400 text-white px-8 py-3 rounded-md font-semibold"
//           >
//             Become a Donor
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

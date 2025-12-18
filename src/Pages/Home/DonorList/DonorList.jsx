import { Link } from "react-router-dom";
import DonorSkeleton from "../../../Components/DonorSkeleton/DonorSkeleton";
import DonorCard from "./DonorCard";
import DonorDetailsModal from "./DonorDetailsModal";
import { useState } from "react";

const DonorList = ({ donors, loading }) => {
     const [selectedDonor, setSelectedDonor] = useState(null);

     return (
          <section className="bg-base-100">
               <div className="mx-auto px-4 py-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                         Available Donors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {loading &&
                              Array.from({ length: 9 }).map((_, i) => (
                                   <DonorSkeleton key={i} />
                              ))}

                         {!loading &&
                              donors.map((donor) => (
                                   <DonorCard key={donor._id} donor={donor} setSelectedDonor={setSelectedDonor} />
                              ))}
                         {!loading && donors.length === 0 && (
                              <p className="text-center text-xl py-10 lg:py-16 text-gray-500 col-span-full">
                                   No donors found for this search.
                              </p>
                         )}
                    </div>
                    <div className="text-center mt-10 lg:mt-16">
                         <Link
                              to="/donors"
                              className="btn bg-red-400 text-white px-8"
                         >
                              More Donors
                         </Link>
                    </div>
               </div>
               {/* Modal */}
               {selectedDonor && (
                    <DonorDetailsModal
                         donor={selectedDonor}
                         onClose={() => setSelectedDonor(null)}
                    />
               )}
          </section>
     );
};

export default DonorList;
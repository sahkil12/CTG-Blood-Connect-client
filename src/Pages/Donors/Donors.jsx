import { useState } from "react";
import SearchSection from "../Home/SearchSection/SearchSection";
import DonorCard from "../Home/DonorList/DonorCard";
import DonorSkeleton from "../../Components/DonorSkeleton/DonorSkeleton";
import DonorDetailsModal from "../Home/DonorList/DonorDetailsModal";
import useDonors from '../../Hooks/useDonors';

const Donors = () => {
     const [page, setPage] = useState(1);
     const [filters, setFilters] = useState({});
     const [selectedDonor, setSelectedDonor] = useState(null);
     const { data, isLoading } = useDonors({
          ...filters,
          page,
          limit: 12
     })
     const donors = data?.donors || [];
     const totalPages = data?.totalPages || 1;

     const handleSearch = (query) => {
          setFilters(query);
          setPage(1);
     };

     return (
          <section className="bg-base-100 min-h-screen my-10 lg:my-14">
               {/* Search */}
               <SearchSection onSearch={handleSearch} />
               {/* Cards */}
               <div className="mx-auto px-4 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {/* loading skeleton show */}
                         {isLoading &&
                              Array.from({ length: 12 }).map((_, i) => (
                                   <DonorSkeleton key={i} />
                              ))}
                         {/* Donors card */}
                         {!isLoading &&
                              donors?.map((donor) => (
                                   <DonorCard
                                        key={donor._id}
                                        donor={donor}
                                        setSelectedDonor={setSelectedDonor}
                                   />
                              ))}

                         {!isLoading && donors?.length === 0 && (
                              <p className="text-center col-span-full text-lg md:text-2xl text-gray-500">
                                   No donors found.
                              </p>
                         )}
                    </div>
                    {/* Pagination */}
                    {totalPages > 1 && (
                         <div className="flex justify-center mt-12 lg:mt-20">
                              <div className="flex gap-1">
                                   <button
                                        className="btn border border-gray-300 px-7 mr-3"
                                        disabled={page === 1}
                                        onClick={() => setPage((p) => p - 1)}
                                   >
                                        Prev
                                   </button>

                                   {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                             key={i}
                                             className={`btn border border-gray-200 ${page === i + 1 ? "btn-active border border-gray-300" : ""
                                                  }`}
                                             onClick={() => setPage(i + 1)}
                                        >
                                             {i + 1}
                                        </button>
                                   ))}

                                   <button
                                        className="btn border border-gray-300 px-7 ml-3"
                                        disabled={page === totalPages}
                                        onClick={() => setPage((p) => p + 1)}
                                   >
                                        Next
                                   </button>
                              </div>
                         </div>
                    )}
               </div>
               {/* donor details modal */}
               {selectedDonor && (
                    <DonorDetailsModal
                         donor={selectedDonor}
                         onClose={() => setSelectedDonor(null)}
                    />
               )}
          </section>
     );
};

export default Donors;

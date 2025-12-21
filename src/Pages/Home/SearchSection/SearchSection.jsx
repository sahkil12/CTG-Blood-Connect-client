import { useState } from "react";
import { bloodGroups, areas } from "../../../Utility/blood-info";

const SearchSection = ({ onSearch }) => {
     const [bloodGroup, setBloodGroup] = useState("");
     const [area, setArea] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();
          onSearch({ bloodGroup, area });
     };
     const handleReset = () => {
          setBloodGroup("");
          setArea("");
          onSearch({});
     };
     return (
          <section className="bg-base-100">
               <div className="mx-auto max-w-7xl px-4 pt-14 xl:pt-2 pb-5">
                    <div className="text-center mb-10">
                         <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                              Find <span className="text-red-500">Blood</span> Donors in Chittagong
                         </h2>
                         <p className="mt-4 text-gray-600">
                              Search donors by blood group and area
                         </p>
                    </div>
                    {/* search form */}
                    <form
                         onSubmit={handleSubmit}
                         className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                    >
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                              <select
                                   className="select border-2 px-4 rounded-md text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                                   value={bloodGroup}
                                   onChange={(e) => setBloodGroup(e.target.value)}
                              >
                                   <option value="" disabled>
                                        Select Blood Group
                                   </option>
                                   {bloodGroups.map((b) => (
                                        <option key={b} value={b}>
                                             {b}
                                        </option>
                                   ))}
                              </select>
                              {/* area select */}
                              <select
                                   className="select rounded-md border-2 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                                   value={area}
                                   onChange={(e) => setArea(e.target.value)}
                              >
                                   <option value="" disabled>
                                        Select Area
                                   </option>
                                   {areas.map((area) => (
                                        <option key={area} value={area}>
                                             {area}
                                        </option>
                                   ))}
                              </select>
                              {/* action button */}
                              <div className="flex gap-3">
                                   <button type="submit" className="btn flex-3 rounded-md bg-red-400 text-base text-white w-full">
                                        Search Donors
                                   </button>
                                   <button
                                        type="button"
                                        onClick={handleReset}
                                        className="btn w-full flex-1 rounded-md bg-white text-black border-2 border-red-400 hover:bg-red-400 hover:text-white">
                                        Reset
                                   </button>
                              </div>
                         </div>
                    </form>
               </div>
          </section>
     );
};

export default SearchSection;

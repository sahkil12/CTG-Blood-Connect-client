import { bloodGroups, areas } from "../../../Utility/blood-info";

const SearchSection = ({ onSearch }) => {

     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          onSearch({
               bloodGroup: form.bloodGroup.value,
               area: form.area.value,
          });
     };

     return (
          <section className="bg-base-100">
               <div className="mx-auto max-w-7xl px-4 pt-14 pb-5">
                    <div className="text-center mb-10">
                         <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                              Find Blood Donors in Chittagong
                         </h2>
                         <p className="mt-3 text-gray-600">
                              Search donors by blood group and area
                         </p>
                    </div>
                    {/* search form */}
                    <form
                         onSubmit={handleSubmit}
                         className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                    >
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <select
                                   name="bloodGroup"
                                   className="select border-2 px-4 rounded-md text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                                   defaultValue=""
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
                                   name="area"
                                   className="select rounded-md border-2 px-4 text-base border-gray-300 placeholder-neutral-600 w-full outline-none focus:border-gray-400"
                                   defaultValue=""
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
                              {/*  */}
                              <button className="btn rounded-md bg-red-400 text-base text-white w-full">
                                   Search Donors
                              </button>
                         </div>
                    </form>
               </div>
          </section>
     );
};

export default SearchSection;

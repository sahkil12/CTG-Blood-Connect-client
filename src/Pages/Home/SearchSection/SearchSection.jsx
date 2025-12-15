const SearchSection = () => {
     return (
          <section className="bg-base-100">
               <div className="mx-auto max-w-7xl px-4 py-16">

                    <div className="text-center mb-10">
                         <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
                              Find Blood Donors in Chittagong
                         </h2>
                         <p className="mt-3 text-gray-600">
                              Search donors by blood group and area
                         </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {/* Blood Group */}
                              <select className="select select-bordered w-full text-lg">
                                   <option disabled selected>
                                        Select Your Blood Group
                                   </option>
                                   <option>A+</option>
                                   <option>A-</option>
                                   <option>B+</option>
                                   <option>B-</option>
                                   <option>AB+</option>
                                   <option>AB-</option>
                                   <option>O+</option>
                                   <option>O-</option>
                              </select>
                              {/* Area */}
                              <select className="select select-bordered w-full text-lg">
                                   <option disabled selected>
                                        Select Your Area
                                   </option>
                                   <option>Anwara</option>
                                   <option>Banshkhali</option>
                                   <option>Boalkhali</option>
                                   <option>Chandanaish</option>
                                   <option>Fatikchhari</option>
                                   <option>Hathazari</option>
                                   <option>Lohagara</option>
                                   <option>Mirsharai</option>
                                   <option>Patiya</option>
                                   <option>Rangunia</option>
                                   <option>Raozan</option>
                                   <option>Sandwip</option>
                                   <option>Satkania</option>
                                   <option>Sitakunda</option>
                                   <option>Karnaphuli</option>
                              </select>
                              {/* Search Button */}
                              <button className="btn btn-primary text-lg w-full">
                                   Search Donors
                              </button>

                         </div>
                    </div>

               </div>
          </section>
     );
};

export default SearchSection;

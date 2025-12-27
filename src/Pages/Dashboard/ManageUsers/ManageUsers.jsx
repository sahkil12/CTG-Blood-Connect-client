import { useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import UserRow from "./UserRow";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
     const axiosSecure = useAxiosSecure();
     const [searchText, setSearchText] = useState("");
     const [searchEmail, setSearchEmail] = useState("");

     const { data, isLoading } = useQuery({
          queryKey: ["users", searchEmail],
          queryFn: async () => {
               const res = await axiosSecure.get(`/admin/users?email=${searchEmail}&limit=15`)
               return res.data.users
          },
          enabled: !!searchEmail
     })
     
     const handleSearch = () => {
          setSearchEmail(searchText);
     };

     if (isLoading) return <Loader />;

     return (
          <div className="mr-3">
               <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>

               {/* Search Bar */}
               <div className="flex gap-1 max-w-lg mb-10">
                    <input
                         type="text"
                         placeholder="Search users by email"
                         className="input outline-none border-2 border-neutral-300 rounded-sm w-full focus:border-red-300 py-5 lg:py-6 pl-5"
                         value={searchText}
                         onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                         onClick={handleSearch}
                         className="px-6 cursor-pointer py-1.5 text-sm rounded-md text-white font-semibold bg-red-400 "
                    >
                         Search
                    </button>
               </div>

               {/* Table */}
               <div className="overflow-x-auto bg-white rounded-md shadow">
                    <table className="table">
                         <thead className="bg-gray-200/80">
                              <tr>
                                   <th>#</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Role</th>
                                   <th className="text-center">Actions</th>
                              </tr>
                         </thead>
                         <tbody>
                              {data?.length > 0 ? (
                                   data?.map((user, index) => (
                                        <UserRow
                                             key={user._id}
                                             user={user}
                                             index={index}
                                        />
                                   ))
                              ) : (
                                   <tr>
                                        <td colSpan="5" className="text-center py-10 text-lg text-gray-400">
                                             No users found
                                        </td>
                                   </tr>
                              )}
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ManageUsers;

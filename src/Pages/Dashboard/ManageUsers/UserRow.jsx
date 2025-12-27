import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UserRow = ({ user, index, setSelectedUser }) => {
     const axiosSecure = useAxiosSecure();
     const queryClient = useQueryClient();
     // make admin
     const handleMakeAdmin = async () => {
          const res = await Swal.fire({
               title: "Make admin?",
               text: `${user?.email} will become admin`,
               icon: "warning",
               showCancelButton: true,
               confirmButtonText: "Yes",
          });

          if (res.isConfirmed) {
               const res = await axiosSecure.patch(`/admin/users/make-admin/${user._id}`);
               // make admin success modal
               await Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.data.message || "User is now an admin",
                    timer: 1500,
                    showConfirmButton: false,
               });

               queryClient.invalidateQueries(["users"]);
          }
     };
     // remove admin
     const handleRemoveAdmin = async () => {
          const res = await Swal.fire({
               title: "Remove admin?",
               icon: "warning",
               showCancelButton: true,
          });
          if (res.isConfirmed) {
               try {
                    const res = await axiosSecure.patch(`/admin/users/remove-admin/${user._id}`);
                    // success modal
                    await Swal.fire({
                         icon: "success",
                         title: "Success",
                         text: res.data.message || "Admin role removed",
                         timer: 1500,
                         showConfirmButton: false,
                    });
                    queryClient.invalidateQueries(["users"]);
               } catch (error) {
                    await Swal.fire({
                         icon: "error",
                         title: "Error",
                         text: error.response?.data?.message || "Something went wrong",
                         timer: 2000,
                         showConfirmButton: false,
                    });
               }
          }
     };

     return (
          <>
               <tr className="hover:bg-gray-100 transition">
                    <td>{index + 1}</td>
                    <td>{user.name || "N/A"}</td>
                    <td>{user.email}</td>
                    <td>
                         <span className={`px-3.5 py-1.5 text-xs rounded-full font-semibold
                                  ${user.role === "admin"
                                   ? "bg-green-100 text-green-600"
                                   : "bg-orange-100 text-orange-600"}`}
                         >
                              {user.role}
                         </span>
                    </td>
                    <td className="flex flex-wrap justify-center gap-2">
                         <button
                              onClick={() => setSelectedUser(user)}
                              className="btn btn-sm border border-gray-300/90 text-gray-700"
                         >
                              View
                         </button>

                         {user.role === "admin" ? (
                              <button
                                   onClick={handleRemoveAdmin}
                                   className="btn btn-xs py-4 btn-error text-black"
                              >
                                   Remove Admin
                              </button>
                         ) : (
                              <button
                                   onClick={handleMakeAdmin}
                                   className="btn btn-sm btn-success text-black/85"
                              >
                                   Make Admin
                              </button>
                         )}
                    </td>
               </tr>

          </>
     );
};

export default UserRow;
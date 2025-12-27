import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UserRow = ({ user, index }) => {
     const axiosSecure = useAxiosSecure();
     const queryClient = useQueryClient();
     const [open, setOpen] = useState(false);
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
               await axiosSecure.patch(`/admin/users/make-admin/${user._id}`);
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
               await axiosSecure.patch(`/admin/users/remove-admin/${user._id}`);
               queryClient.invalidateQueries(["users"]);
          }
     };

     return (
          <>
               <tr>
                    <td>{index + 1}</td>
                    <td>{user.name || "N/A"}</td>
                    <td>{user.email}</td>
                    <td>
                         <span className={`border px-3.5 py-1 rounded-full capitalize font-medium  ${user.role === 'admin' ? 'bg-green-50/80 text-green-500' : 'bg-orange-50/80 text-orange-500'}`}>
                              {user.role}
                         </span>
                    </td>
                    <td className="flex text-center gap-2">
                         <button
                              onClick={() => setOpen(true)}
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
               {/* Modal */}
               {open && (
                    <dialog open className="modal">
                         <div className="modal-box modal-middle">
                              <h3 className="font-bold text-xl mb-6">User Details</h3>
                              <img src={user.photo} className="w-16 h-16 lg:w-20 rounded-full lg:h-20 mb-3" alt="user photo" />
                              <section className="space-y-2">
                                   <p><b>Name:</b> {user.name}</p>
                                   <p><b>Email:</b> {user.email}</p>
                                   <p><b>Role:</b> {user.role}</p>
                              </section>

                              <div className="modal-action">
                                   <button
                                        onClick={() => setOpen(false)}
                                        className="btn"
                                   >
                                        Close
                                   </button>
                              </div>
                         </div>
                    </dialog>
               )}
          </>
     );
};

export default UserRow;
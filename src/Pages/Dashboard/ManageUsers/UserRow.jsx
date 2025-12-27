import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";

const UserRow = ({ user, index }) => {
     const axiosSecure = useAxiosSecure();
     const queryClient = useQueryClient();
     const [open, setOpen] = useState(false);
     console.log(user);

     const handleMakeAdmin = async () => {
          await axiosSecure.patch(`/admin/users/make-admin/${user._id}`);
          queryClient.invalidateQueries(["users"]);
     };

     const handleRemoveAdmin = async () => {
          await axiosSecure.patch(`/admin/users/remove-admin/${user._id}`);
          queryClient.invalidateQueries(["users"]);
     };

     return (
          <>
               <tr>
                    <td>{index + 1}</td>
                    <td>{user.name || "N/A"}</td>
                    <td>{user.email}</td>
                    <td>
                         <span className="badge badge-outline capitalize">
                              {user.role}
                         </span>
                    </td>
                    <td className="text-center space-x-2">
                         <button
                              onClick={() => setOpen(true)}
                              className="btn btn-xs"
                         >
                              View
                         </button>

                         {user.role === "admin" ? (
                              <button
                                   onClick={handleRemoveAdmin}
                                   className="btn btn-xs btn-error"
                              >
                                   Remove Admin
                              </button>
                         ) : (
                              <button
                                   onClick={handleMakeAdmin}
                                   className="btn btn-xs btn-success"
                              >
                                   Make Admin
                              </button>
                         )}
                    </td>
               </tr>
               {/* Modal */}
               {open && (
                    <dialog open className="modal">
                         <div className="modal-box">
                              <h3 className="font-bold text-lg mb-3">User Details</h3>
                              <p><b>Name:</b> {user.name}</p>
                              <p><b>Email:</b> {user.email}</p>
                              <p><b>Role:</b> {user.role}</p>

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




















// import { useQueryClient } from "@tanstack/react-query";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// const UserRow = ({ user, index }) => {
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();

//   const handleMakeAdmin = async () => {
//     const res = await Swal.fire({
//       title: "Make admin?",
//       text: `${user.email} will become admin`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes",
//     });

// //     if (res.isConfirmed) {
// //       await axiosSecure.patch(`/admin/users/make-admin/${user._id}`);
// //       queryClient.invalidateQueries(["users"]);
// //     }
//   };

//   const handleRemoveAdmin = async () => {
//     const res = await Swal.fire({
//       title: "Remove admin?",
//       icon: "warning",
//       showCancelButton: true,
//     });

//     if (res.isConfirmed) {
//      //  await axiosSecure.patch(`/admin/users/remove-admin/${user._id}`);
//      //  queryClient.invalidateQueries(["users"]);
//     }
//   };

//   return (
//     <tr>
//       <td>{index + 1}</td>
//       <td>{user.name || "N/A"}</td>
//       <td>{user.email}</td>
//       <td>
//         <span className="badge badge-outline capitalize">
//           {user.role}
//         </span>
//       </td>
//       <td className="text-center space-x-2">
//         {user.role !== "admin" ? (
//           <button
//             onClick={handleMakeAdmin}
//             className="btn btn-xs btn-success"
//           >
//             Make Admin
//           </button>
//         ) : (
//           <button
//             onClick={handleRemoveAdmin}
//             className="btn btn-xs btn-error"
//           >
//             Remove Admin
//           </button>
//         )}
//       </td>
//     </tr>
//   );
// };

// export default UserRow;

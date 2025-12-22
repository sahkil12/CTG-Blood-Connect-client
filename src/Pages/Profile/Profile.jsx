import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import useAxios from "../../Hooks/useAxios";
import ProfileCard from "./ProfileCard";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";
import { useState } from "react";
import EditDonorModal from "./EditDonorModal";

const Profile = () => {
     const { user } = useAuth();
     const { role, roleLoading } = useRole();
     const [isEditOpen, setIsEditOpen] = useState(false);
     const axiosPublic = useAxios();
     const navigate = useNavigate();
     // redirect normal user
     if (!roleLoading && role === "user") {
          <Loader></Loader>
          navigate("/be-a-donor");
     }
     const {
          data: donor,
          isLoading,
          isError,
     } = useQuery({
          queryKey: ["donor-profile", user?.email],
          enabled: !!user?.email && (role === "donor" || role === "admin"),
          queryFn: async () => {
               const res = await axiosPublic.get(`/donors/${user.email}`);
               return res.data;
          },
     });
     // const handleEdit = () => {
     //      // navigate("/profile/edit");
     //      navigate("/profile");
     //      toast.success("Donor profile edited");
     // };
     // delete profile
     const handleDelete = async () => {
          const result = await Swal.fire({
               title: "Are you sure?",
               text: "Your donor profile will be removed!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#ef4444",
               cancelButtonColor: "#6b7280",
               confirmButtonText: "Yes, delete it",
          });

          if (result.isConfirmed) {
               try {
                    // await axiosPublic.delete(`/donors/${user.email}`);
                    Swal.fire("Deleted!", "Your profile is removed.", "success");
                    // navigate("/");
               } catch (err) {
                    Swal.fire("Error", "Something went wrong", "error");
               }
          }
     };

     if (roleLoading || isLoading) {
          return <Loader></Loader>
     }
     if (isError) {
          return <div className="text-center py-20 text-red-500">Failed to load profile</div>;
     }

     return (
          <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20">
               <h2 className="text-3xl font-bold mb-8">My Profile</h2>

               {donor ? (
                    <ProfileCard
                         donor={{ ...donor, role }}
                         onDelete={handleDelete}
                         setIsEditOpen={setIsEditOpen}
                    />
               ) : (
                    <p className="text-gray-500">No donor information found.</p>
               )}
               {
                    isEditOpen && (
                         <EditDonorModal
                              donor={donor}
                              closeModal={() => setIsEditOpen(false)}
                         />
                    )
               }
          </div>
     );
};

export default Profile;

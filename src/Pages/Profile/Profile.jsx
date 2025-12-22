import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
     const queryClient = useQueryClient();
     // redirect normal user
     if (!roleLoading && role === "user") {
          <Loader></Loader>
          navigate("/be-a-donor");
     }
     const {
          data: donor,
          isLoading,
          isError,
          refetch
     } = useQuery({
          queryKey: ["donor-profile", user?.email],
          enabled: !!user?.email && (role === "donor" || role === "admin"),
          queryFn: async () => {
               const res = await axiosPublic.get(`/donors/${user.email}`);
               return res.data;
          },
     });
     // delete mutation function
     const deleteMutation = useMutation({
          mutationFn: async () => {
               const res = await axiosPublic.delete(`/donors/${user.email}`);
               return res.data;
          },
          onSuccess: () => {
               queryClient.invalidateQueries(["donor-profile", user?.email]);
               Swal.fire("Deleted!", "Your profile is removed.", "success");
               refetch()
               navigate("/");
          },
          onError: () => Swal.fire("Error", "Something went wrong", "error"),
     });
     // confirm sweet alert modal 
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
               deleteMutation.mutate()
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
                              refetch={refetch}
                         />
                    )
               }
          </div>
     );
};

export default Profile;

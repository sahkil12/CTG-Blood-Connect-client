import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import useAxios from "../../Hooks/useAxios";
import ProfileCard from "./ProfileCard";
import Loader from "../../Components/Loader/Loader";

const Profile = () => {
     const { user } = useAuth();
     const { role, roleLoading } = useRole();
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

     if (roleLoading || isLoading) {
          return <Loader></Loader>
     }
     if (isError) {
          return <div className="text-center py-20 text-red-500">Failed to load profile</div>;
     }

     return (
          <div className="max-w-6xl mx-auto px-4 py-16">
               <h2 className="text-3xl font-bold mb-8">My Profile</h2>

               {donor ? (
                    <ProfileCard donor={donor} />
               ) : (
                    <p className="text-gray-500">No donor information found.</p>
               )}
          </div>
     );
};

export default Profile;

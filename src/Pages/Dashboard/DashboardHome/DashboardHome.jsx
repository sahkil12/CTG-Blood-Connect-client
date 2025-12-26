import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import StatCard from "./StatCard";
import { FaUsers, FaTint, FaUserShield, FaHeartbeat } from "react-icons/fa";
import Loader from '../../../Components/Loader/Loader'
const DashboardHome = () => {
     const axiosSecure = useAxiosSecure();

     const { data: stats, isLoading } = useQuery({
          queryKey: ["dashboard-stats"],
          queryFn: async () => {
               const res = await axiosSecure.get('/admin/dashboard-stats')
               return res.data
          }
     })
     console.log(stats, isLoading);
     if(isLoading){
          return <Loader></Loader>
     }
     const { availableDonors, last7DaysDonors, last7DaysUsers, totalAdmins, totalDonors, totalUsers } = stats
     return (
          <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        <StatCard
          icon={<FaUsers />}
          title="Total Users"
          value={totalUsers}
          subtitle={`+${last7DaysUsers} last 7 days`}
        />

        <StatCard
          icon={<FaTint />}
          title="Total Donors"
          value={totalDonors}
          subtitle={`+${last7DaysDonors} last 7 days`}
        />

        <StatCard
          icon={<FaHeartbeat />}
          title="Available Donors"
          value={availableDonors}
        />

        <StatCard
          icon={<FaUserShield />}
          title="Total Admins"
          value={totalAdmins}
        />
      </div>
    </div>
     );
};

export default DashboardHome;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import StatCard from "./StatCard";
import { FaUsers, FaTint, FaUserShield, FaHeartbeat } from "react-icons/fa";
import Loader from '../../../Components/Loader/Loader'
import DashboardUsersBarChart from "./DashboardUsersBarChart";
import DashboardDonorPieChart from "./DashboardDonorPieChart";

const DashboardHome = () => {
     const axiosSecure = useAxiosSecure();

     const { data: stats, isLoading } = useQuery({
          queryKey: ["dashboard-stats"],
          queryFn: async () => {
               const res = await axiosSecure.get('/admin/dashboard-stats')
               return res.data
          }
     })
     if (isLoading) {
          return <Loader></Loader>
     }
     const { availableDonors, last7DaysDonors, last7DaysUsers, totalAdmins, totalDonors, totalUsers } = stats
     const unavailableDonors = totalDonors - availableDonors;
     const donorAvailabilityRate = Math.round((availableDonors / totalDonors) * 100);
     return (
          <div>
               <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
               {/* Stats Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10 mr-4">
                    <StatCard
                         icon={<FaUsers />}
                         title="Total Users"
                         value={totalUsers}
                    />
                    <StatCard
                         icon={<FaTint />}
                         title="Total Donors"
                         value={totalDonors}
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
               <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Activity</h3>

               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mr-4 mb-10">
                    <StatCard
                         title="New Users"
                         value={last7DaysUsers}
                         subtitle="Last 7 days"
                    />
                    <StatCard
                         title="New Donors"
                         value={last7DaysDonors}
                         subtitle="Last 7 days"
                    />
                    <StatCard
                         title="Unavailable Donors"
                         value={unavailableDonors}
                    />
                    <StatCard
                         title="Availability Rate"
                         value={`${donorAvailabilityRate}%`}
                    />
               </div>

               {/* Charts */}
               <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    Platform Insights
               </h3>

               <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mr-4">
                    <DashboardUsersBarChart
                         totalUsers={totalUsers}
                         totalDonors={totalDonors}
                         availableDonors={availableDonors}
                    />

                    <DashboardDonorPieChart
                         availableDonors={availableDonors}
                         unavailableDonors={unavailableDonors}
                    />
               </div>

          </div>
     );
};

export default DashboardHome;
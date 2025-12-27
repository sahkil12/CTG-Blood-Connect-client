import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const DashboardUsersBarChart = ({ totalUsers, totalDonors, availableDonors }) => {
  const data = [
    { name: "Users", value: totalUsers },
    { name: "Donors", value: totalDonors },
    { name: "Available", value: availableDonors },
  ];

  return (
    <div className="bg-gray-100/50 p-4 rounded-xl shadow border border-neutral-200">
      <h3 className="font-semibold mb-5 text-gray-700">
        Users & Donors Overview
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#f87171" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardUsersBarChart;

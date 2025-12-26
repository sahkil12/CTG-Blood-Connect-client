import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4ade80", "#f87171"];

const DashboardDonorPieChart = ({ availableDonors, unavailableDonors }) => {
  const data = [
    { name: "Available", value: availableDonors },
    { name: "Unavailable", value: unavailableDonors },
  ];

  return (
    <div className="bg-gray-100/50 p-5 rounded-xl shadow border border-neutral-200">
      <h3 className="font-semibold mb-5 text-gray-700">
        Donor Availability
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-8 mt-4 text-sm">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          Available
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          Unavailable
        </span>
      </div>
    </div>
  );
};

export default DashboardDonorPieChart;

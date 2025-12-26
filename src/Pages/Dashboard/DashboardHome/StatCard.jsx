
const StatCard = ({ icon, title, value, subtitle }) => {
     return (
          <div className="bg-white border rounded-xl p-5 shadow-sm">
               <div className="flex items-center gap-4">
                    <div className="text-3xl text-red-400">{icon}</div>
                    <div>
                         <h3 className="text-gray-600 text-sm">{title}</h3>
                         <p className="text-2xl font-bold">{value}</p>
                         {subtitle && (
                              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default StatCard;
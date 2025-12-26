
const StatCard = ({ icon, title, value, subtitle }) => {
     return (
          <div className="bg-white outline outline-neutral-300 border-l-[5px] border-red-400  rounded-xl p-5 shadow-sm hover:shadow-md transition">
               <div className="flex items-center gap-5">
                    <div className="text-4xl text-red-400">{icon}</div>
                    <div>
                         <h3 className="text-gray-700 mb-1">{title}</h3>
                         <p className="text-3xl font-bold">{value}</p>
                         {subtitle && (
                              <p className="text-sm text-gray-500 mt-1.5">{subtitle}</p>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default StatCard;
import Loader from "../../../Components/Loader/Loader";
import DonorCard from "./DonorCard";

const DonorList = ({ donors, loading }) => {

     if (loading) {
          return <Loader></Loader>
     }

     return (
          <section className="bg-base-100">
               <div className="mx-auto px-4 py-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                         Available Donors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {donors.map((donor) => (
                              <DonorCard key={donor._id} donor={donor} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default DonorList;
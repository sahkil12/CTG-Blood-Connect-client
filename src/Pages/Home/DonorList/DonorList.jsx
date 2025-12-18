import DonorCard from "./DonorCard";

const donors = [
     {
          id: 1,
          name: "Md Rahim",
          bloodGroup: "A+",
          area: "Panchlaish",
          phone: "01712345678",
     },
     {
          id: 2,
          name: "Sadia Akter",
          bloodGroup: "O+",
          area: "Halishahar",
          phone: "01898765432",
     },
     {
          id: 3,
          name: "Tanvir Hasan",
          bloodGroup: "B+",
          area: "Agrabad",
          phone: "01911223344",
     },
];

const DonorList = () => {
     return (
          <section className="bg-base-100">
               <div className="mx-auto px-4 py-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                         Available Donors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {donors.map((donor) => (
                              <DonorCard key={donor.id} donor={donor} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default DonorList;
import { useState } from "react";
import DonorList from "./DonorList/DonorList";
import Hero from "./Hero/Hero";
import SearchSection from "./SearchSection/SearchSection";
import useDonors from "../../Hooks/useDonors";
import HowItWorks from "../HowItWorks/HowItWorks";
import NewsletterContact from "./NewsletterContact/NewsletterContact";

const Home = () => {
     const [filters, setFilters] = useState({
          bloodGroup: "",
          area: "",
     });
     const { data: donors = [], isLoading } = useDonors({
          ...filters,
          limit: 9,
     });
     const handleSearch = (searchData) => {
          setFilters(searchData);
     };

     return (
          <div>
               <Hero></Hero>
               <SearchSection onSearch={handleSearch}></SearchSection>
               <DonorList donors={donors.donors} loading={isLoading}></DonorList>
               <HowItWorks></HowItWorks>
               <NewsletterContact></NewsletterContact>
{/* 
               <section className="bg-red-400 text-white py-16 px-6 rounded-lg mt-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                         Become a Hero Today
                    </h2>
                    <p className="text-lg mb-6">
                         Join CTG Blood Connect and help save lives in Chittagong by registering as a donor.
                    </p>
                    <a
                         href="/be-a-donor"
                         className="inline-block bg-white text-red-500 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
                    >
                         Register as Donor
                    </a>
               </section> */}
          </div>
     );
};

export default Home;
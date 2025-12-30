import { useState } from "react";
import DonorList from "./DonorList/DonorList";
import Hero from "./Hero/Hero";
import SearchSection from "./SearchSection/SearchSection";
import useDonors from "../../Hooks/useDonors";
import HowItWorks from "../HowItWorks/HowItWorks";
import { Helmet } from "react-helmet";

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
               <Helmet>
                    <title>Home | CTG Blood Connect</title>
               </Helmet>
               <Hero></Hero>
               <SearchSection onSearch={handleSearch}></SearchSection>
               <DonorList donors={donors.donors} loading={isLoading}></DonorList>
               <HowItWorks></HowItWorks>
          </div>
     );
};

export default Home;
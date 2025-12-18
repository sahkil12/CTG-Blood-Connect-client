import { useState } from "react";
import DonorList from "./DonorList/DonorList";
import Hero from "./Hero/Hero";
import SearchSection from "./SearchSection/SearchSection";
import useDonors from "../../Hooks/useDonors";

const Home = () => {
     const [filters, setFilters] = useState({
          bloodGroup: "",
          area: "",
     });
     // console.log(filters);
     const { data: donors = [], isLoading } = useDonors({
          ...filters,
          limit: 9,
     });
     // console.log(donors);
     const handleSearch = (searchData) => {
          setFilters(searchData);
     };

     return (
          <div>
               <Hero></Hero>
               <SearchSection onSearch={handleSearch}></SearchSection>
               <DonorList donors={donors} loading={isLoading}></DonorList>
          </div>
     );
};

export default Home;
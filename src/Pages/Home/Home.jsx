import DonorList from "./DonorList/DonorList";
import Hero from "./Hero/Hero";
import SearchSection from "./SearchSection/SearchSection";

const Home = () => {
     return (
          <div>
               <Hero></Hero>
               <SearchSection></SearchSection>
               <DonorList></DonorList>
          </div>
     );
};

export default Home;
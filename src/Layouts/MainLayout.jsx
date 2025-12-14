import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
     return (
          <div>
               <header>
                    <Navbar></Navbar>
               </header>
               <main className="min-h-screen">
                    <Outlet></Outlet>
               </main>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";
import Navber from "../Pages/Home/Navber/Navber";



const Main = () => {
    return (
        <div>

            <Navber></Navber>

            <Outlet></Outlet>
             
            <div className="mt-40 ">
               
                          <Footer></Footer>
                         
            </div>

        </div>
    );
};

export default Main;
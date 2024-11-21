import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";
import Navber from "../Pages/Home/Navber/Navber";
import Products from "../Pages/Home/Home/Products/Products";


const Main = () => {
    return (
        <div>

            <Navber></Navber>

            <Outlet></Outlet>
             <div>
                    <Products></Products>
                </div>
            <div className="mt-40 ">
               
                          <Footer></Footer>
                         
            </div>

        </div>
    );
};

export default Main;
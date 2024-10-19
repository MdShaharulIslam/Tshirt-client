import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";
import Navber from "../Pages/Home/Navber/Navber";
import SubFooter from "../Pages/Home/Footer/SubFooter";

const Main = () => {
    return (
        <div>

            <Navber></Navber>

            <Outlet></Outlet>
            <div className="mt-10 ">
                          <Footer></Footer>
                         
            </div>

        </div>
    );
};

export default Main;
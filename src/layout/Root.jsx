
import {Outlet} from "react-router-dom";
import DaisyNav from "../Pages/Home/DaisyNav/DaisyNav";
import Footer from "../Pages/Home/Footer/Footer";
const Root = () => {
    return (
        <div>
            <DaisyNav></DaisyNav>
            
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
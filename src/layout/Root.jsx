
import {Outlet} from "react-router-dom";
import DaisyNav from "../Pages/Home/DaisyNav/DaisyNav";
const Root = () => {
    return (
        <div>
            <DaisyNav></DaisyNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
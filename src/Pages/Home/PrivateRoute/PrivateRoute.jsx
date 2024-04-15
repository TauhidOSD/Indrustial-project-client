import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user} =UseAuth();
    const location =useLocation();
    console.log(location);
    if(!user){
        return <Navigate to='/Login' state={location?.pathname || '/'}></Navigate>
    }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
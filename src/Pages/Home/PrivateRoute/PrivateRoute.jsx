import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";


const PrivateRoute = ({children}) => {
    
    const {user} =UseAuth();
    const location =useLocation();
    console.log(location);
    const from =location.state?.from?.pathname || "/";
    console.log(from)
    if(!user){
        return <Navigate to='/login' state={{from: location }}></Navigate>
    }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
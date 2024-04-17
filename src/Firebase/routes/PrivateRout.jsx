
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";


const PrivateRout = ({children}) => {
    const {loader,user} =useContext(AuthContext)
    const location = useLocation();
   
 if(loader){
            return <div className='flex  justify-center mt-5 mb-5'><progress className="progress w-56"></progress></div>
        }
        
          if (user) {
            return children;
          }else{
            Swal.fire({
                title: 'error!',
                text: 'You have to log in first to go this page',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
          }
    
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
   
};

export default PrivateRout;
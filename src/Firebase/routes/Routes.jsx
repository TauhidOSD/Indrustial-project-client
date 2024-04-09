import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../../Pages/Home/Home";
import DaisyNav from "../../Pages/Home/DaisyNav/DaisyNav";
import Login from "../../Pages/Home/Login/Login";
import Register from "../../Pages/Home/Register/Register";
import Card from "../../Pages/Home/Card/Card";
import CardDetails from "../../Pages/Home/CardDetails/CardDetails";
import Update from "../../Pages/Home/Update/Update";
import User from "../../Pages/Home/User/User";



const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/DaisyNav',
                element:<DaisyNav></DaisyNav>
            },
            {
                path:'/Login',
                element:<Login></Login>
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
            {
                path:'/Card',
                element:<Card></Card>,
                
            },
            {
                path:'/:id',
                element:<CardDetails></CardDetails>,
                loader : ()=> fetch(`/FakeData.json`)
            },
            {
                path:'Update',
                element:<Update></Update>
            },
            {
                path:'User',
                element:<User></User>
            }
           
          
        ]
    }
]);
export default router;
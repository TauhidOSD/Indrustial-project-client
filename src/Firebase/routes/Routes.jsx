import {createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Home from "../../Pages/Home/Home";
import DaisyNav from "../../Pages/Home/DaisyNav/DaisyNav";
import Login from "../../Pages/Home/Login/Login";
import Register from "../../Pages/Home/Register/Register";
import Card from "../../Pages/Home/Card/Card";
import CardDetails from "../../Pages/Home/CardDetails/CardDetails";
import User from "../../Pages/Home/Contact/Contact";
import Banner from "../../Pages/Home/Banner/Banner";
import Footer from "../../Pages/Home/Footer/Footer";
import Slider from "../../Pages/Home/Slider/Slider";
import NotFound from "../../Pages/Home/NotFound/NotFound";
import FirebaseProvider from "../../FirebaseProvider/FirebaseProvider";
import SocialLogin from "../../Pages/Home/SocialLogin/SocialLogin";
//
import AOS from 'aos';
import 'aos/dist/aos.css';
import Profile from "../../Pages/Home/Profile/Profile";
import PrivateRout from "./PrivateRout";
import UpdateProfile from "../../Pages/Home/UpdateProfile/UpdateProfile";
import GoogleMap from "../../Pages/Home/GooleMap/GoogleMap";

AOS.init();

 


const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<NotFound></NotFound>,
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
                element:<PrivateRout>
                    <CardDetails/>
                </PrivateRout>,
                loader : ()=> fetch(`/FakeData.json`)
            },
            // {
            //     path:'Update',
            //     element:<Update></Update>
            // },
            {
                path:'User',
                element:<User></User>
            },
            {
                path:'banner',
                element:<Banner></Banner>
            },
            {
                path:'footer',
                element:<Footer></Footer>
            },
            {
                path:'slider',
                element:<Slider></Slider>
            },
            {
                path:'firebase',
                element:<FirebaseProvider></FirebaseProvider>
            },
            {
                path:'socialLogin',
                element:<SocialLogin></SocialLogin>
            },
           {
            path:'profile',
            element:<PrivateRout>
                <Profile></Profile>
            </PrivateRout>
           },
           {
            path:"updateProfile",
            element:<UpdateProfile></UpdateProfile>
           },
           {
            path:"GoogleMap",
            element:<GoogleMap></GoogleMap>
           }
           
          
        ]
    }
]);

export default router;
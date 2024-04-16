
 
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Firebase/routes/Routes.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

AOS.init();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> 
    <FirebaseProvider>
    <RouterProvider   router={router}/>
    </FirebaseProvider>
    </HelmetProvider>
   
    
  
  </React.StrictMode>
);

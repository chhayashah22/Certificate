import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Error from './components/Error';
import SignIn from './components/SignIn';
import Forgotpassword from './components/Forgotpassword';
import ResetPassword from './components/Resetpassword';

import Admin from './components/Admin';
import App from './App';
import Welcome from './components/Welcome';

// Import Router components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CertificateGenerator from './components/Batch';
import Register from './components/Login';
import Home from './components/Home';
import PlanDetails from './components/PlanDetails';
import ProPlan from './components/Pro';
import BasePlan from './components/Base';
import FreePlan from './components/Free';

import Certificates from './components/Certificates';

import VerifyEmail from './components/Verifymail';

// Define routes
const router = createBrowserRouter([
  {
    path: "/PlanDetails",
    element: <PlanDetails />,
  },
  {
    path: "/pro",
    element: <ProPlan />
  },
  {
    path: "/base",
    element: <BasePlan />
  },
  {
    path: "/free",
    element: <FreePlan />
  },
  {
    path: "/certificates",
    element: <Certificates />
  },


  {
    path: "/", // Home route
    element: <Welcome />,
  },
    {
        path: "/Register",
        element: <Register />},
       
          {
            path: "/signin",
            element: <SignIn />
          },
        
      
      
     
      
     
      {
        path: "Forgotpassword",
        element: <Forgotpassword />
      },
      {
        path: "Resetpassword/:userId/:resetToken",
        element: <ResetPassword />
      },

      {
        path: "batch",
        element: <CertificateGenerator />
      },


      {
        path: "Admin", // Admin route
        element: <Admin />,

      },

      {
        path: "Home",
        element: <Home />
      },
      {
        path:"verify/:token",
        element:<VerifyEmail/>

      }

    ]
  


)






// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <RouterProvider router={router} />



  </React.StrictMode>
);
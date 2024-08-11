// PlanDetails.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PlanDetails.css';
import Navbar from './Navbar';
import Sidebar from './SideBar';
import Footer from './Footer';

const PlanDetails = () => {
  return (
    <>
   <Navbar/>
   <div className='page'>
    <div><Sidebar/></div>
   
    
    <div className="plan-details">
    
   
      <div><ul>
        <li>
          <h3>Base Plan</h3>
          <p>$9.99 / month</p>
          <Link to="/base">
            <button>Choose Base Plan</button>
          </Link>
        </li>
        </ul></div>
      <div><ul><li>
          <h3>Pro Plan</h3>
          <p>$19.99 / month</p>
          <Link to="/pro">
            <button>Choose Pro Plan</button>
          </Link>
        </li>
        </ul></div>
        <div><ul><li>
          <h3>Free Plan</h3>
          <p>$0 / month</p>
          <Link to="/free">
            <button>Choose Free Plan</button>
          </Link>
        </li></ul></div>
        
      
    </div>
    </div>
    <Footer/>
    
    </>
  );
};

export default PlanDetails;

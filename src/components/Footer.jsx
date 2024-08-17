import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

export default function(){
    return(
        <>
       <div className="footer-section">
        <div className='footer'> 
          <div>
          <ul>
            <li>
              <Link to="/Admin">
          <span>Dashboard</span>
                 </Link>
            </li>
            <li>
              <Link to="/certificates">
           
                <span>Certificates</span>
              </Link>
            </li>
            <li>
              <Link to="/Home">            
                <span>Editor</span>
                
              </Link>
            </li>
            </ul>
         </div>
         <div>
          <li>
         <Link to="/Batch">             
             <span>Batch</span>
           </Link>
         </li>
         <Link to="/plandetails">
         <span>Upgrade</span></Link>
         <Link to="/About us"><span>About us</span></Link>
                            
          
            </div> 
          
         
          </div>
          <div><h6>Feedback</h6>
          <span class="star-rating">
    <span class="star">&#9733;</span>
    <span class="star">&#9733;</span>
    <span class="star">&#9733;</span>
    <span class="star">&#9733;</span>
    <span class="star">&#9733;</span>
  </span></div>
  <h6 className="feedback">&copy; 2024 Certify. All rights reserved.</h6>
          
        </div>
      
</>
    )
}
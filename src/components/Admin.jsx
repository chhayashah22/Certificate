// Sidebar.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Box from './Box';
import MyChart from './Chart';
import { MdEdit } from "react-icons/md";
import Sidebar from './SideBar';
import './Admin.css';
import {plugins,Chart} from 'chart.js/auto';
import { Link } from 'react-router-dom';
import Update from './update';
import VisitorChart from './Visitors';
import Footer from './Footer';
import { logout } from './Logout';
import MyCalendar from './Calendar';
import Navbar from './Navbar';
import { reqUrl } from './Constant';

const Admin = () => {  
  const cookies= new Cookies()
  const [certificates, setCertificates] = useState([]);
  const token=cookies.get('token');
  const [subscription, setSubscription] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [select,setSelect]=useState('')
    const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('user');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);
 
 const handleClick=async(id)=>{
 
    try{
     
const response= await axios.get(`${reqUrl}/certificates/${id}`);
console.log(response.data);

setSelect(response.data);
setIsFormVisible(true);
console.log(select)
}
catch(err){
  console.log(err);
}
    
  }
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${reqUrl}/get-subscription`, {
          headers: {
            'Authorization': token
          }
        });
        setSubscription(response.data.subscription);
      } catch (err) {
        console.error('Error fetching subscription:', err);
      }
    };

    const token=cookies.get('token');
      
    const fetchCertificates = async () => {
      try {
        const response = await axios.get(`${reqUrl}/certificates`, {
          headers: {
            'Authorization': token  
                     
          }
        });
        setCertificates(response.data.certificates || []); // Fallback to an empty array if no certificates

     
        // console.log(certificates[0].id)

        
      } catch (err) {
       
        console.error('Error fetching certificates:', err);
      }
    };
   fetchUserData();
    fetchCertificates();
  }, []);
  
  const count=certificates.length; 





  
  

  const hideUpdateForm = () => {
    setIsFormVisible(false);
    setSelectedCertificate(null);
  };
  
  

  return (
    <> 
      <Navbar/> 
    
    

    
    
    
    
   
       
        
        <div className='page'> 
      <div><Sidebar/></div>
      <div>
          <div className='username'>
          {userName ? (
        <span className='myname'>Welcome, {userName}</span>
      ) : (
        <span className='myname'>Welcome, Guest</span>
      )}
            <span className='subscription'> Plan : {subscription.plan} /</span>
            <span> Status: {subscription.status}</span>
           
                
            
            
          </div>
        
        <Box name="Generated"/>
        <Box name="Sent"/>
        <Box name="verified"/>
        <Box name="Liked"/>
        <div className='chart-data'>
        <div className='chart'>
        <h2>List of certificates created by you</h2>
        <ul><li>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Created on</th>
                  <th>Edit</th>
                  
                </tr>
              </thead>
              <tbody>
                {certificates.length > 0 ? (
                  certificates.map((cert, index) => (
                    <tr key={index}>
                      <td>{cert.name}</td>
                      <td>{cert.date}</td>
                      <td>
                        <MdEdit onClick={() => handleClick(cert.id)} style={{ cursor: 'pointer' }} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No certificates created</td>
                  </tr>
                )}
              </tbody>
            </table>
          </li>
        </ul>
    
    

        
      </div>
        <div><MyChart count={count}/></div> 
        </div> </div>
        
        </div>  
        
        
        
        
        <div>
        
      
        {isFormVisible  && (
        <Update selected={select} onclose={hideUpdateForm} />
       
      )}
      <div className='charts-data'>
        <div className=''><MyCalendar/></div>
        <div className=''>      
        <VisitorChart/></div>
      </div>

<Footer/>
              
        </div>
        
        
      
        
        
       
        
        
         
    
   
    
    </>
  );
}

export default Admin;

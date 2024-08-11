import React from "react";


import Card from './CertificateEditor'
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import certificateImage from '../assets/certificate.png';
import Footer from "./Footer";
export default function Certificates(){
    return(
        <>  <Navbar/>
        <div className="page">
            <div><Sidebar/></div>
            <div>
            <div className="card-flex"><Card title="Design 1" image={certificateImage}  content="This is some content inside the card." />
            <Card title="Design 2" image={certificateImage}  content="This is some content inside the card."  />
            <Card title="Design 2" image={certificateImage}  content="This is some content inside the card."  />
        </div>
        
            </div>
            








</div>
<Footer/>
      
      
        
       
        
        </>
    )
}
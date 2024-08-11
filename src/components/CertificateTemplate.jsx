
import React ,{useState}from 'react';

import { MdEdit } from "react-icons/md";

const CertificateTemplate = ({  name, course, date, file, signature, certificateId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [universityName, setUniversityName] = useState('RIMT University');
  const [type,setType]=useState('Certificate of achievement')
  const [description,setdescription]=useState('This certificate is awarded to');
  const[subdescription,setSubdescription]=useState('for outstanding performance in');
  const handleEditClick = () => {
    setIsEditing(true);
  };

  
  

  
  const handleSaveClick = () => {
    setIsEditing(false);
      
        
  };

 
  return (
    <>
     <button className='edit-icon' onClick={handleEditClick}><MdEdit/></button>
    {isEditing&&
    <div className='box'>
    <form>
       <input 
          
            type='text' 
            value={universityName}
            onChange={(e) => setUniversityName(e.target.value)}
            
         
          />
          <br/>
          <br/>
          <input 
          
            type='text' 
            value={type}
            onChange={(e) => setType(e.target.value)}
          
            />
            <br/>
            <br/>
            <input 
            type='text' 
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            />
          
          <br/>
          <br/>
          <input 
          
            type='text' 
            value={subdescription}
            onChange={(e) => setSubdescription(e.target.value)}
            
          /><br/>
          <br/>

          <button  
          type="button" onClick={handleSaveClick}>Save</button>
        </form>
        </div>

    }
             
    
    <div className="certificate" id='certificate'>
      <div className="header">
        <h1 className='text'>
          
            
              {universityName}
              
            
          
        </h1>
        <h1>{type}</h1>
        {file && <img className="img"src={URL.createObjectURL(file)} width={60} alt="Uploaded" />}
      </div>
      <div className="content">
        <p>{description}</p>
        <h2>{name}</h2>
        <p>{subdescription} </p>
        <h2>{course}</h2>
        <p>Issued on</p>
        <p>{date}</p>
      </div>
     <div className='container2'>
      <div className='CID'>

        
        <p >Certificate No. {certificateId}</p>
        
        </div>
        <div className='sine'>        {signature && <img src={URL.createObjectURL(signature)} width={60} alt="Signature" />}
        <p>______________________</p> <p>Signature</p></div>
      
        </div>
    </div>
    
  </>
  );
};

export default CertificateTemplate;

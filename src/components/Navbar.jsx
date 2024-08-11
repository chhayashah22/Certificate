import React,{useState,useEffect} from "react";
import { CgProfile } from "react-icons/cg";
import { logout } from "./Logout";

export default function Navbar(){
    
    const[visible,setvisible]=useState(false);
    const [userName, setUserName] = useState('');
    useEffect(() => {
      const storedUserName = localStorage.getItem('user');
      if (storedUserName) {
        setUserName(storedUserName);
      }
    }, []);
  
   
      const icon=()=>{
        setvisible(!visible);
      }
    return(
      <>
      <div className='Header '>
      <div className='logo'><h2 className='logo-text'>.Certify<span >Xpert</span>
      </h2></div>
      <div className="profile" onClick={icon}><CgProfile style={{fontSize:40}}/>
     
        {visible &&
          <ul className='dropdown'>
            <li>{userName}</li>
            <li onClick={logout}>Logout</li>
            
          </ul>
}
</div>
</div>
  
    

</>
);

}

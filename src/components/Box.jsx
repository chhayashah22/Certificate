import React ,{useState,useEffect} from "react";
import './Box.css';
function Box(props){
   


  const [count, setCount] = useState(1);

  
  useEffect(() => {setInterval(() => {      
      setCount((prevCount) => (prevCount >= 100 ? 1 : prevCount + 1));
    }, 1000); 

    
   
  }, []); 

    return(
        <>
        
    <div className="data">        
            <h4>{props.name}</h4>
            <h5>{count}</h5>
        
      
</div>

        
        </>
    )
}
export default Box;
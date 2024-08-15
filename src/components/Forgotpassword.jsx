import React, { useState } from 'react';
import axios from 'axios';
import { reqUrl } from './Constant';
export default function Forgotpassword(){
    
    
    const[email,setEmail]=useState('');
    const [message,setmessage]=useState('')

    const Reset = async (event)=>{
        event.preventDefault();
        const response= await axios.post(`${reqUrl}/resetPassword`,{
            email
         })
         if(response){
            console.log("success");
            setmessage("You get Link on registered email")
         }
        setEmail('');
        

    }
    return(
        <>
        <div className="container">
        <form method="post" onSubmit={Reset}>
            <label htmlFor="email">
                <input type="email" name="email" value={email}
              placeholder="Enter your Email address"  onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <button id="Btn"type="submit">Reset </button>
            <p>{message}</p>
        </form>
        </div>
        </>
    )
}
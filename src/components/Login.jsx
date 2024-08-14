
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

import { Link } from 'react-router-dom';



const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
   const handleSubmit = async (e) => {
    e.preventDefault();
    // setMessage(''); 
    if ( password.length < 8) {
     setMessage('Password is at least 8 characters long.');
     return;
      
    }
    try {
      const response = await axios.post('https://api-ruddy-nine.vercel.app/form', {
        name,
        email,
        password,
      });
      if(response){
      setMessage('Registration successful! You got a verification link on registered email');
      // login(response.data.token);                     // Log the user in

      // Reset input fields
      setName('');
      setEmail('');
      setPassword('');
      } 

    } catch (error) {
      console.error('There was an error', error);
      if ( error.response.status === 409) {
        setMessage('Email already registered');
      } else {
        setMessage('Invalid Email');
      }
      //hidemsg
      
  };
}

  return (
    <>
  
    <div className='container-fluid'>
      
      
      <form className="form" method='POST' onSubmit={handleSubmit}>
        <h2>Register Yourself</h2>
        
        <label htmlFor='name'>
          
          <input type='text' name='name' placeholder='Enter Your Name'  id='name' value={name} onChange={(e) => setName(e.target.value)} />
        
        </label>
        
        <label htmlFor='email'>
          <input type='email' name='email' placeholder='Enter Your Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor='password'>
          <input name='password' type='password' id='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className='Button' type='submit'>Register</button>
        <Link to="/signin"><p>If already Registered then</p></Link>
        <p className='message'>{message}</p>
        
      </form>
      
      
      
   
     
    
    
    </div>
    </>
  );
};

export default Register;

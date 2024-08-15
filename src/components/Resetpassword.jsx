import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { reqUrl } from './Constant';
function ResetPassword() {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( newPassword.length < 8) {
      setMessage('Password is at least 8 characters long.');
      return;
    } 
    try {
      const response = await axios.post(`${reqUrl}/Updatepassword`, {
        resetToken,
        newPassword,
      });

      setMessage(response.data);
    //   navigate('/login'); // Redirect to login page after successful password reset
    } catch (error) {
      console.error('Error updating password:', error);
      setMessage('Error updating password.');
    }
  };

  return (
    <div className='container'>      
      <form onSubmit={handleSubmit}>
      <h1>Reset Password</h1>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button id='Btn' type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;

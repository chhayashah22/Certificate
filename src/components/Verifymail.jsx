import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Errormail from './Errormail';
import Verified from './Verified';

const VerifyEmail = () => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const token = new URLSearchParams(window.location.search).get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`/api/verify?token=${token}`);
        setStatus('success');
        setMessage(response.data.message);
      } catch (error) {
        setStatus('error');
        setMessage(error.response ? error.response.data.message : 'An error occurred');
      }
    };

    verifyEmail();
  }, [token]);
  if (status === 'success') {
    return <Verified />;
  } else if (status === 'error') {
    return <Errormail message={message} />;
  }
  
};

export default VerifyEmail;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import Errormail from './Errormail';
import Verified from './Verified';
import { reqUrl } from './Constant';

const VerifyEmail = () => {
  const { token } = useParams(); 
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus('error');
        setMessage('Verification token is missing.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${reqUrl}/verify/${token}`);
        setStatus('success');
        setMessage(response.data.message);
      } catch (error) {
        setStatus('error');
        setMessage(error.response ? error.response.data.message : 'An error occurred during verification.');
        console.log(error);
      } finally {
        setLoading(false); 
      }
    };

    verifyEmail();
  }, [token]);

  if (loading) {
    return <p>Loading.</p>;
  }

 
  if (status === 'success') {
    return <Verified message={message} />;
  } else if (status === 'error') {
    return <Errormail message={message} />;
  }


};

export default VerifyEmail;


import React from 'react';

const Errormail = ({message}) => {
  return (
    <div className="verification-container">
      <div className="message-box">
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default Errormail;

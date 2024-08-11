import React from 'react';
import './Card.css'; // Importing CSS for styling

const Card = ({ title, image, content, footer }) => {
  return (
    <>
    <div className="cards">
       <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-contents">{content}</p>
      </div>
     
    </div>
    </>
  );
};

export default Card;

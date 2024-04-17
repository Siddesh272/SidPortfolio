// Card.js
import React from 'react'; 
import poster1 from '../assets/case-1/poster1.png';
import poster2 from '../assets/case-2/poster2.png';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate=useNavigate();

const handleClick1 = () => {
  navigate('/case-study-1'); 
};
const handleClick2 = () => {
  navigate('/case-study-2'); 
};
  return (
    <div>
    <div className="card" onClick={handleClick1}>
      <div className="image">
        <img src={poster1} alt="Card" />
      </div>
      <div className="text">
        <p>ARTIFY</p>
        <p>2022</p>
      </div>
    </div>
    <div className="card" onClick={handleClick2}>
    <div className="text">
        <p>CHEFZ</p>
        <p>2023</p>
      </div>
      <div className="image">
        <img src={poster2} alt="Card" />
      </div>
    </div>
    </div>
  );
};

export default Card;

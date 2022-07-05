import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img src={card.src} classname="front" alt="card front" />
        <img src="/img/cover.png" classname="back" alt="card back" />
      </div>
    </div>
  );
};

export default SingleCard;

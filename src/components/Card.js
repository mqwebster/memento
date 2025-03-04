import React from "react";

const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className={selected && "selected"}>
        <img alt="" src={image} className="card-face" />

        <img alt="" src="/assets/fireship.png" className="card-back" />
      </div>
    </div>
  );
};

export default Card;

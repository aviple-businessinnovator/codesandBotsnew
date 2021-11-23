import React from "react";
import "./Schoolcards.css";

const Schoolcards = (props) => {
  return (
    <div>
      <div className="school_cards">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default Schoolcards;

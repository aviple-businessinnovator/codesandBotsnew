import React from "react";
import "./Topstories.css";

export const Topstories = (props) => {
  return (
    <div>
      <div className="top_stories_cards">
        <img src={props.image} />
        <p>{props.para}</p>
      </div>
    </div>
  );
};

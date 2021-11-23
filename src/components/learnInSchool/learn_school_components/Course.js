import React from "react";
import { useHistory } from "react-router";
import "./Course.css";

const Course = (props) => {
  const history = useHistory();

  const handlecoursepage = (name) => {
    localStorage.setItem("course", name);
    let arr = ['robotics', 'coding', "rubik's cube", 'iot'];
    arr.forEach(element => {
      if (element.toLowerCase() == name.toLowerCase()) {
        history.push(`/content-page/${name}`);
      }
    });
  };
  return (
    <div className="course_card">
      <h3 className={props.color}>{props.title}</h3>
      <img src={props.image} alt="loading" />
      <button onClick={() => handlecoursepage(props.title)}>Explore</button>
    </div>
  );
};

export default Course;
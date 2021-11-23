import React, { Component, useEffect, useState } from "react";
import Card from "../similarCourseCard/similarCourseCard";
import "./section.css";
import robotics from "../images/robotics.jpg";
import coding from "../images/coding.jpeg";
import rubic_cube from "../images/rubic cube.jpg";
import Iot from "../images/iot.jpg";

export default function Section({ image, name, description }) {
  let courses = ["iot", "coding", "rubik's cubes", "robotics", "vedic maths"];
  const [Similar_courses, setSimilar_courses] = useState([]);
  useEffect(() => {
    let sim = [];
    let current_course = name.toLowerCase();
    courses.forEach((element) => {
      let elem = element.toLowerCase();
      if (elem == current_course) {
        // continue;
      } else {
        let img;
        if (elem == "robotics") img = robotics;
        else if (elem == "iot") img = Iot;
        else if (elem == "coding") img = coding;
        else if (elem == "rubix cubes" || elem == "rubik's cubes") img = rubic_cube;
        else {
          img = null;
        }
        if (img !== null) sim.push(<Card name={elem} image={img} />);
      }
    });
    setSimilar_courses(sim);
  }, []);
  // name, description, Similar_courses
  return (
    <div className="what-build-section">
      <div className="what-build-section-text">
        <h1 className="what-build-title">What will you build?</h1>
        <p className="what-build-text-description">{description}</p>
      </div>
      <video className="what-build-video" style={{ backgroundImage: `url(${image})` }}></video>
      <div className="what-build-similar-courses">
        <h1>Similar Courses</h1>
        <div className="what-build-cards">
          {Similar_courses.map((elem) => elem)}
        </div>
      </div>
    </div>
  );
}

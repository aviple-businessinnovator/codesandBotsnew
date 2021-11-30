import React from "react";
import "./programSection.css";
import robotic from "../../asserts/robotics.svg";
import coding from "../../asserts/coding.svg";
import iot from "../../asserts/iot.svg";
import rubic from "../../asserts/rubic-cubes.svg";
import { useHistory } from "react-router";
import girl from "../../asserts/program-girl.svg";

export default function ProgramSection() {
  function LowerCard(name, para, image, last) {
    let history = useHistory();

    const handleCoursepage = (name) => {
      localStorage.setItem("course", name);
      history.push(`/content-page/${name}`);
    };

    return (
      <div className="lower-card">
        <div
          className="image lc-img"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="content">
          <div className="lc-text">
            <h3>{name}</h3>
            <p>{para}</p>
            <div className="learnbtn" onClick={() => handleCoursepage(name)}>
              Learn More
            </div>
            {/* <div className="learnbtn" onClick={() => { history.push(`${localStorage.getItem('Token') ? `/content-page/${name}` : '/sign-in'}`) }}>Learn More</div> */}
          </div>
          {last ? null : <div className="image line-lower-card"></div>}
        </div>
      </div>
    );
  }
  return (
    <div className="program-sec">
      <div className="ps-upper">
        <div className="ps-upper-text">
          <h2>Programs</h2>
          <p>
            Our programs are designed to develop children and bring out their
            talents for amazing future.
          </p>
        </div>
        <div className="image line-lower-card"></div>
        <div
          className="image ps-upper-image"
          style={{ backgroundImage: `url('${girl}')` }}
        >
          {/* <div className="image ps-inside-image"></div> */}
        </div>
        <div className="image line-lower-card onlymobile"></div>
      </div>
      <div className="ps-lower">
        {LowerCard(
          "Robotics",
          "We take students from zero knowledge and we help the students to build a deep understanding of real world robotics.",
          robotic,
          0
        )}
        {LowerCard(
          "Coding",
          "When children learn to code, it helps them to develop essential skills such as problem solving, logical and critical thinking.",
          coding,
          0
        )}
        {LowerCard(
          "IOT",
          "Kids today can learn fast faster than ever before iot can create information about the connected objects,  analyse it, and make decisions.",
          iot,
          0
        )}
        {LowerCard(
          "Rubik's Cubes",
          "Rubik's cubes can be learned by kids. It also helps them in improving their reflexes, keeping the mind active and becoming problem solvers.",
          rubic,
          1
        )}
      </div>
    </div>
  );
}

import React from "react";
import "./learnInSchool.css";
import { Topstories } from "./learn_school_components/Topstories";
import LearnSchool from "./learn_school_img/learnSchool_1.svg";
import Learntop1 from "./learn_school_img/learn_top_1.svg";
import Learntop2 from "./learn_school_img/learn_top_2.svg";
import Learntop3 from "./learn_school_img/learn_top_3.svg";
import learngraph from "./learn_school_img/learn_graph.svg";
import learnarrow2 from "./learn_school_img/learnschool_arrow2.png";
import learnarrow1 from "./learn_school_img/learnschool_arrow1.png";
import Course from "./learn_school_components/Course";
import iot from "./learn_school_img/iot.jpg";
import robotics from "./learn_school_img/robot.jpg";
import AI from "./learn_school_img/block.JPG";
import coding from "./learn_school_img/laptop.jpg";
import Schoolcards from "./learn_school_components/Schoolcards";
import zeroinvestment from "./learn_school_img/zero_investment.jpg";
import futristic from "./learn_school_img/futristic_technologies.JPG";
import quality_promise from "./learn_school_img/quality_promise.JPG";
import zero_investment from "./learn_school_img/zero_investment_plan_new.JPG";
import teacher from "./learn_school_img/teacher.jpg";
import course from "./learn_school_img/course.jpg";
import inovation from "./learn_school_img/inovation.jpg";
import digital from "./learn_school_img/digitalMarket.jpg";
import tutorial from "./learn_school_img/tutorial.jpg";
import google from "./learn_school_img/google.png";
import microsoft from "./learn_school_img/microsoft.jpg";
import intel from "./learn_school_img/Intel.png";
import feature from "./learn_school_img/features.svg";
import Footer from "./learn_school_components/Footer";
import { useHistory } from "react-router-dom";

export const LearnInSchool = () => {
  let his = useHistory();
  return (
    <>
      {/* <Header /> */}
      <div className="main_container">
        <div className="Intro_part">
          <div className="Intro_left_part">
            <h1 className="Intro_heading">
              Open for free collaboration with Schools
            </h1>
            <br />
            <h3 className="Intro_subheading">
              Finest Industry Experts to deliver the course in your School
              Classrooms.
            </h3>
            <br />
            <p className="Intro_para">
              Now School Students can also join the pursuit of future by getting
              hands-on experience on the world's most latest technologies like
              Robotics, Artificial Intelligence, Coding and Internet of Things.
            </p>
            <button
              className="explore_btn"
              onClick={() => {
                his.push("/content-page/robotics");
              }}
            >
              Explore
            </button>
            <div className="left_arrow">
              <img src={learnarrow1} alt="loading" />
            </div>
          </div>
          <div className="Intro_right_part intro_img">
            <img src={LearnSchool} alt="loading" />
          </div>
          <div className="right_arrow">
            <img src={learnarrow2} alt="loading" />
          </div>
        </div>
        <div className="graph_section">
          <h1> Top Stories</h1>
          <div className="collaboration">
            <Topstories
              image={Learntop1}
              para="Google hires 16-year-old Chandigarh boy from government school at annual salary of Rs 1.44 crore"
            />
            <Topstories
              image={Learntop2}
              para="12-year-old Hyderabad boy becomes data scientist inspired by 13-year-old Google employee Tanmay"
            />
            <Topstories
              image={Learntop3}
              para="Google hires a 12-year-old boy as a Programmer."
            />
          </div>
        </div>
        <div className="graph_section">
          <h1>School Going Students have superior Intelligence</h1>
          <div className="Intro_part">
            <div className="Intro_left_part">
              <br />
              <br />
              <p className="graph_para">
                George Land & Beth Jarman's landmark NASA study identified that
                kids peak in creativity at age 6, followed by a gradual decline
                as they grow up. <br />
                <br />
                The real promise of Codesandbots is to bring out the best out of
                your kid. Coding, Robotics, IOT and AI are a fun tool for kids
                to exercise their desire to build, curiosity to question,
                imagination to explore - the traits that will serve any child
                well in nearly any career, in every hobby, and in life.
              </p>
              <button className="explore_btn">
                <a className="explore_btn" href="#footer">
                  Contact Now
                </a>
              </button>
            </div>
            <div className="Intro_right_part">
              <img src={learngraph} alt="loading" />
            </div>
          </div>
        </div>
        <div className="graph_section">
          <h1>Students will build up</h1>
          <div className="skills_section">
            <div className="skill">
              <span>Logic</span>
            </div>
            <div className="skill">
              <span>Problem Solving</span>
            </div>
            <div className="skill">
              <span>Structure</span>
            </div>
          </div>
          <div className="skills_section">
            <div className="skill">
              <span>Creative Thinking</span>
            </div>
            <div className="skill">
              <span>Sequencing</span>
            </div>
            <div className="skill">
              <span>Algorithmic Thinking</span>
            </div>
          </div>
        </div>
        <div className="graph_section">
          <h1>We Train In</h1>
          <div className="subjects_section">
            <div className="course_section">
              <Course color="AI" title="Artificial Intelligence" image={AI} />
              <Course color="Coding" title="Coding" image={coding} />
              <Course color="robotics" title="Robotics" image={robotics} />
              <Course color="iot" title="Internet of Things" image={iot} />
            </div>
          </div>
        </div>
        <div className="graph_section">
          <h1>We work in collaboration with schools</h1>
          <div className="collaboration">
            <Schoolcards
              image={futristic}
              para="Our talented Engineers will teach your students how to code and how to make almost anything smart. We have Best Curriculum and which follows less theoretical and more practical approach."
              title="Now teach futuristic technologies to your students with us"
            />
            <Schoolcards
              image={zero_investment}
              para="Schools doesn't have to care about a thing. We take care of everthing from providing highly talented professors to all the tools and kits needed to build amazing projects during the course."
              title="Zero Investment Plan"
            />
            <Schoolcards
              image={quality_promise}
              para="We highly take care of Quality Control. We hire the Highly Talented Teachers Who have not just theoretical but Hands on experience on each of the technologies.We Provide world class study material to build the students future ready."
              title="Quality Our Promise"
            />
          </div>
        </div>
        <div className="graph_section">
          <h1>Now Teaching Innovation in Schools is Easy</h1>
          <div className="collaboration">
            <Schoolcards
              title="We Provide Highly Skilled Teachers"
              image={teacher}
              para="We have the best Faculty from the finest colleges of India."
            />
            <Schoolcards
              title="Best Course Curriculum"
              image={course}
              para="Course Curriculum has been set flexible to make sure sutdents learn the best pieces of current Technology."
            />
            <Schoolcards
              title="Zero Investment for School"
              image={zeroinvestment}
              para="School doesn't neet to Invest on a thing. We provide all the tools needed to train students on latest tech."
            />
          </div>
        </div>
        <div className="graph_section">
          <h1>Why collaborate with us?</h1>
          <div className="collaboration">
            <Schoolcards
              title="You are Innvating"
              image={inovation}
              para="So You will have a different Impact on the lives of students. School Grows as their students do better and Unique things."
            />
            <Schoolcards
              title="Stand Out in the Competition"
              image={tutorial}
              para="As your school students will learn the technologies of future and build amazing projects with it. You will get an edge over Competition."
            />
            <Schoolcards
              title="We will digitally market your School"
              image={digital}
              para="To increase the awareness for this program. We will advertise you on the Internet on your location."
            />
          </div>
        </div>
        <div className="graph_section">
          <h1>
            Roadmap to Various Student Programs and Contests Organised by Big
            Tech Companies.
          </h1>
          <div className="collaboration">
            <Schoolcards
              title="Google"
              image={google}
              para="Google is Highly encouraging students to learn to code.Google has launched learn to code especially for indian school students. Students can participate and win exciting prizes."
            />
            <Schoolcards
              title="Microsoft"
              image={microsoft}
              para="You might find yourself helping fellow students build their coding skills online with Microsoft Learn,organizing a virtual hackathon to solve real-world challenges,earning certifications,or building digital communities--it's all up to you."
            />
            <Schoolcards
              title="Intel"
              image={intel}
              para="Gail acces to Intel's latest software,oneAPI.Simplify programming,improve efficiency,and aid innovation on the latest Intel CPUs,GPUs and FPGAs using Intel oneAPI Toolkits."
            />
          </div>
        </div>
        <div className="graph_section">
          <div className="feature">
            <img src={feature} alt="loading" />
          </div>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};
export default LearnInSchool;

import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import pic from './Robotics-amico 1.png';

const Homepage = () => {
    return (<div>
        <h1 className="hea">Robotics</h1>
        <img alt="" className="immg" src={pic}></img>
        <p className="content">
            <h1 className="h1">TOPICS COVERED</h1>
            <p className="para"> Voice control car, Obstacle avoiding car Smart car, Self balancing robot, etc.
                <h1 className="h2">TOOLS</h1>
                <p className="pp">Software       -  Arduino IDE<br />
                    Hardware      -  Arduino board

                </p>
            </p>
        </p>
        <button className="btnn">READ MORE</button>
        <Link to="/coding" className="left1"> ←</Link>
        <Link to="/coding" className="right1">→</Link>



    </div>
    )
}

export default Homepage;

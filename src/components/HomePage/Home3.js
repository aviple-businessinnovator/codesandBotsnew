import React from 'react'
import './App.css';
import pic from './iot.jpg';
import { Link } from 'react-router-dom';

const Home3 = () => {
    return (
        <div>
            <h1 className="hea">IOT</h1>
            <img alt="" className="immgc" src={pic}></img>
            <p className="content">
                <h1 className="h1">TOPICS COVERED</h1>
                <p className="para"> Smart home, Gas leakage detector, Smart alarm clock, Face recognition system, etc.
                    <h1 className="h2">TOOLS</h1>
                    <p className="pp">Hardware     Node MCU,  GSM module software       arduino IDE. </p>
                </p>
            </p>
            <button className="btnn">READ MORE</button>
            <Link to="/coding" className="left1"> ←</Link>
            <Link to="/rubix" className="right1">→</Link>



        </div>
    )
}

export default Home3;

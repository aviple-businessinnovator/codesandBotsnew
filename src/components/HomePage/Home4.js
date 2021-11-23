import React from 'react'
import './App.css';
import pic from './rubixc.jpg';
import { Link } from 'react-router-dom';

const Home4 = () => {
    return (
        <div>
            <h1 className="hea">Rubix Cubes</h1>
            <img alt="" className="immgc" src={pic}></img>
            <p className="content">
                <h1 className="h1">TOPICS COVERED</h1>
                <p className="para"> You can learn how to solve 3by3 Rubik’s cube easily layer by layer method (beginners method) You will also learn the 2*2 and pyramix cube(beginners method).

                    <h1 className="h2">TOOLS</h1>
                    <p className="pp">3*3 cube <br />
                        2*2 cube <br />
                        Pyramix cube </p>
                </p>
            </p>
            <button className="btnn">READ MORE</button>
            <Link to="/iot" className="left1"> ←</Link>
            <Link to="/" className="right1">→</Link>



        </div>
    )
}

export default Home4;

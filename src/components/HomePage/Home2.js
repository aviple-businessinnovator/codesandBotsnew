import React from 'react'
import './App.css';
import pic from './Coding-cuate (1) 1.png'
import { Link } from 'react-router-dom';

const Home2 = () => {
    return (
        <div>
            <h1 className="hea">Coding</h1>
            <img alt="" className="immg" src={pic}></img>
            <p className="content">
                <h1 className="h1">TOPICS COVERED</h1>
                <p className="para"> Learning basics of Coding, HTML, CSS, building your own google. 
.
                <h1 className="h2">TOOLS</h1>
                <p className="pp">Laptop, Visual Studio IDE. </p>
                </p>
            </p>
            <button className="btnn">READ MORE</button>
            <Link to="/" className="left1"> ←</Link>
            <Link to="/iot" className="right1">→</Link>



        </div>
    )
}

export default Home2;

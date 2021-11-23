import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import "./intro.css"
export default function Intro({ heading, videoLink }) {
   let history = useHistory();
   function Video() {
      var video = document.getElementById("video");
      if (!localStorage.getItem("Token")) {
         video.pause();
         history.push('/sign-in')
      }
   }
   return (
      <div className="intro-sect">
         <video onPlay={() => Video()} id="video" onClick={() => Video()} className="intro-video" controls poster={videoLink} autoPlay={localStorage.getItem("Token") ? true : false} >
            <source src={videoLink} type="video/mp4" />
            {/* <source src="movie.ogg" type="video/ogg"> */}
         </video>
         <div className="intro-right">
            <h1>{`${heading?.mainTitle}`}</h1>
            <div className="intro-right-h4">{heading?.h2[0]?.title}</div>
            <div className="intro-points">
               {
                  heading?.h2[0]?.topics.map(points =>
                     <p><span style={{ color: 'green' }}>✔ </span> {points}</p>
                  )
               }
            </div>
            <div className="commingsoon-btn">Coming Soon</div>
         </div>
      </div>
   )
}

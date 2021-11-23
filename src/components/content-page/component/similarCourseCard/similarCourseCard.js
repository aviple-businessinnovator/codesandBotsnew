import React from 'react'
import { useHistory } from 'react-router';
import "./similarCourseCard.css"

export default function Card({ image, name }) {
   const history = useHistory();
   function onClickCard(name) {
      localStorage.setItem("course", name);
      history.push(`/content-page/${name}`);
      window.location.reload();
   }
   return (
      <div className="similar-course-card" onClick={() => { onClickCard(name) }} style={{ backgroundImage: `url("${image}")` }}>
         <h2>{name}</h2>
      </div>
   )
}

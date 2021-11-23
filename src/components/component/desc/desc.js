import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./desc.css"
export default function Desc({ content, ContentPageTopic, rating }) {
   let stars = [];
   for (let index = 0; index < Math.floor(rating); index++) {
      stars.push(
         <StarIcon />
      )
   }
   return (
      <div className="desc">
         <div className="desc-heading">
            <h1>{ContentPageTopic}</h1>
            <div className="rating">
               <p>{rating}</p>
               <div className="star">{
                  stars.map(elem => elem)
               }
               </div>
            </div>
         </div>
         <div className="desc-body">
            <h2>Course Description</h2>
            <p>
               {content?.map(para => <p>{para}</p>)}
            </p>
            {/* <p>Your will be learning basics of Internet, Computer Networks and Arduino IDE. What is internet? How computers communicates with each other through internet? What is arduino IDE? </p>
            <p>
               Introduction to Internet of things and NodeMCU(ESP8266) Board. What is internet of things? What is NodeMCU Board?
            </p>
            <p>
               Connecting through google assistant and blynk app
            </p>
            <p>
               Finally, Setting up blynk app and IFTTT. And saying “Okay google! turn on my room light!”.
            </p> */}
         </div>
      </div >
   )
}

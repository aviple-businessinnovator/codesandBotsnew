import React from 'react'
import "./learnindCard.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useHistory } from 'react-router';

// topics=["","",""]
export default function LearningCard({ content }) {
   // console.log(content);
   function onClick(id) {
      let elem = document.getElementById(id);
      if (elem.style.display !== 'none') {
         elem.style.display = "none"
      }
      else {
         elem.style.display = "flex"
      }
   }

   const Cards = (id, heading, topics, para) => {
      // console.log("ss", para);
      return (
         <div className="learningCard-card" >
            <div className="learningCard-heading">
               <h2>{heading}</h2>
               <div className="learnc-heading-right">
                  {topics?.length == 0 ? null : <p>{topics?.length + ' topics'}</p>}
                  <KeyboardArrowDownIcon onClick={() => onClick(id)} className="learning-icon" fontSize="large"></KeyboardArrowDownIcon>
                  {/* <KeyboardArrowDownIcon onClick={() => onClick(id)} className="icon" fontSize="large"></KeyboardArrowDownIcon> */}
               </div>
            </div>
            <div id={id} className="learningCardBody">
               {topics?.length == 0 ? null : topics?.map((elem, i) => <div className="learningCardTopic">
                  <div className="yellowdot"></div>
                  {/* <div className={`${i === topics.length - 1 ? ' yellow-line last-yellow-line' : 'yellow-line'}`}></div> */}
                  <p>{elem}</p>
               </div>)}
               {
                  para?.length == 0 ? null : para?.map(elem => <div className="learningCardTopic">
                     <p>{elem}</p>
                  </div>)
               }
            </div>
         </div >
      );
   }
   return (
      <div className="learningCard">
         <h1>What will you be learning?</h1>
         {content?.h3.map(elem => <p className="learningCard-para">{elem}</p>)}

         <div className="learingCard-container">
            {
               content?.h2.map((topics, index) => {
                  return Cards(index + 1, topics.title, topics.topics, topics.paragraph)
               })
            }
            {/* {Cards(1, 'Introduction to Internet of things and NodeMCU(ESP8266) Board', ['What is internet of things?', 'What is NodeMCU Board?'])} */}
            {/* {Cards(2, 'Basics of Internet, Computer Networks and Arduino IDE', ['What is internet of things?', 'How computers communicates with each other through internet?', 'What is arduino IDE?'])} */}
            {/* {Cards(3, 'Building Smart Home ', ['Making connections', 'Setting up wifi username and password for your board', 'Uploading code', 'Connecting board through internet'])} */}

         </div>
      </div>
   )
}

import React, { useEffect, useState } from "react";
import { axioss, FetchContentData } from "../../api/api";
import Desc from "./desc/desc";
import LearningCard from "./learningCard/learningCard";
import "./main.css";
import Section from "./section/section";

export default function Main({ heading1, heading2, heading3, imageLink, ContentPageTopic, courseRating }) {
  return (
    <div className="main">
      <Desc content={heading1?.h3} ContentPageTopic={ContentPageTopic} rating={courseRating} />
      <LearningCard content={heading2} />
      <Section
        image={imageLink}
        name={ContentPageTopic}
        description={heading3?.h3[0]}
      />
    </div>
  );
}

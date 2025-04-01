import React from "react";
import { ReactComponent as WorkIcon } from "../../assets/img/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/img/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import timelineElements, { ITimeLineElements } from "./timelineElements";

import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div id="timeline">
      <h2 className="title">My Story</h2>
      <VerticalTimeline>
        {timelineElements.map((element: ITimeLineElements) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <p className="vertical-timeline-element-subtitle" >
                {element.location}
              </p>
              <img alt={element.alt} src={element.image} className="timeline-image"></img>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

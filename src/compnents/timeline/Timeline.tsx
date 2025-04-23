import React from "react";
import { ReactComponent as WorkIcon } from "../../assets/img/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/img/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import timelineElements, {  } from "./timelineElements";

import "react-vertical-timeline-component/style.min.css";
import { ITimeLineElements } from "../../utils/interfaces";

export default function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <section id="timeline">
      <h2 className="title">My Timeline</h2>
      <p>Steps along the way</p>
      <VerticalTimeline>
        {timelineElements.map((element: ITimeLineElements) => {
          let isWorkIcon = element.icon === "work";
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
              <div>
                <p className="vertical-timeline-element-subtitle">
                  {element.location}
                </p>
                <img
                  alt={element.alt}
                  src={element.image}
                  className="timeline-image"
                ></img>
              </div>
              <p id="description" className="timeline-p">{element.description}</p>
                <a
                  target={isWorkIcon ? "_self" : "_blank" }
                  rel="noopener noreferrer"
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.href}
                >
                  {element.buttonText}
                </a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

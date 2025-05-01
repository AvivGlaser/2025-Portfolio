import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { activities } from "./whatNowData";

export default function WhatNow() {
  return (
    <section className="what-now" id="what-now">
      <Container fluid className="what-now py-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="what-now-title">So what now?</h2>
            <p className="what-now-subtitle">
              what do I do to find a job while working full time?
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="activity-grid">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="activity-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="activity-content">
                    <div className="activity-icon">{activity.icon}</div>
                    <h3 className="activity-title">{activity.title}</h3>
                    <p className="activity-description">
                      {activity.description}
                    </p>
                    {activity.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="activity-link"
                      >
                        {activity.short ? "Let's Connect" : "Check it"}
                        <span className="screen-reader-element">
                          &nbsp; {activity.hiddenText}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

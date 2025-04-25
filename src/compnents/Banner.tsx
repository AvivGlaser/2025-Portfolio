import { useState, useEffect } from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { Linkedin } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 20);

  const period = 1000;

  useEffect(
    function () {
      const toRotate = [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ];

      const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
          setDelta((prev) => prev / 2);
        }

        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setDelta(500);
        }
      };

      const ticker = setInterval(tick, delta);

      return function () {
        clearInterval(ticker);
      };
    },
    [text, delta, isDeleting, loopNum]
  );

  function openLinkedInMessage() {
    const linkedInUrl =
      "https://www.linkedin.com/messaging/compose/?recipient=aviv-glaser-226656202";
    window.open(linkedInUrl, "_blank");
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {function ({ isVisible }) {
                return (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi! I'm Aviv, A `}
                      <span
                        className="txt-rotate"
                        data-period="100"
                        data-rotate='[ "Full-Stack Developer", "Frontend Developer", "Backend Developer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Web Developer with 2.5 years of hands-on experience in an
                      agile, fast-paced startup environment. Proficient in
                      JavaScript, React, Node, state management, automated
                      testing, RESTful APIs. Looking for Development or Solution
                      Engineer roles in Central District
                    </p>
                    <OverlayTrigger
                      overlay={<Tooltip>Message me in Linkedin</Tooltip>}
                    >
                      <button
                        onClick={openLinkedInMessage}
                        aria-label="Message me on Linkedin - External link"
                      >
                        Let’s Connect <Linkedin size={20} />
                      </button>
                    </OverlayTrigger>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {function ({ isVisible }) {
                return (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

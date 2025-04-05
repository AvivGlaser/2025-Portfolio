import { useState, useEffect } from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { Linkedin } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 20);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const openLinkedInMessage = () => {
    const linkedInUrl = `https://www.linkedin.com/messaging/compose/?recipient=aviv-glaser-226656202`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Aviv, A `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="100"
                      data-rotate='[ "Full-Stack Developer", "Frontend Developer", "Backend Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Web Developer with 2 years of experience from a fast-paced
                    agile startup. Skilled in JavaScript, React, TypeScript,
                    Node.js, Express.js, Material-UI. Seeking a development role
                    in Central Israel
                  </p>
                  <OverlayTrigger
                    children={
                      <button onClick={() => openLinkedInMessage()}>
                        Let’s Connect  <Linkedin size={20}/>
                      </button>
                    }
                    overlay={<Tooltip>Message me in Linkedin</Tooltip>}
                  ></OverlayTrigger>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import { useState, useEffect } from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { Linkedin } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../App.css";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 20);
  const darkBannerBg = process.env.PUBLIC_URL + "/banner-bg.webp";
  const lightBannerBg = process.env.PUBLIC_URL + "/white-banner-bg.webp";
  const [bgImage, setBgImage] = useState(darkBannerBg);
  useEffect(() => {
    [darkBannerBg, lightBannerBg].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [darkBannerBg, lightBannerBg]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("whiteContrast")) {
        setBgImage(lightBannerBg);
      } else if (document.body.classList.contains("blackContrast")) {
        setBgImage(darkBannerBg);
      }
      else {
      setBgImage(darkBannerBg);
    }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });


    if (document.body.classList.contains("whiteContrast")) {
      setBgImage(lightBannerBg);
    } else if (document.body.classList.contains("blackContrast")) {
      setBgImage(darkBannerBg);

    } else {
      setBgImage(darkBannerBg);


    }

    return () => observer.disconnect();
  }, [darkBannerBg, lightBannerBg]);

  const period = 1000;


  useEffect(() => {
    const toRotate = [

      "Project Manager",
      "Customer Success Manager",
      "JavaScript Developer",

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

      if (isDeleting) setDelta((prev) => prev / 2);

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
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  function openLinkedInMessage() {
    const linkedInUrl =
      "https://www.linkedin.com/messaging/compose/?recipient=aviv-glaser-226656202";
    window.open(linkedInUrl, "_blank");
  }

  return (
    <section
      className="banner"
      id="home"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
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
                  <h1 className="main-header">
                    {`Hi! I'm Aviv, A `}
                    <span
                      className="txt-rotate"
                      data-period="100"
                      data-rotate='[ "JavaScript Developer", "Customer Success Manager", "Project Manager" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="">
Project Manager & former Web Developer with 3+ years of experience in a fast-paced agile startup. Skilled in end-to-end customer onboarding, SaaS implementation, and project workflow optimization. Proficient in prioritizing urgent tasks, building lasting and successful customer relationships, and bridging communication between all departments. Seeking a Project Manager or Customer Success role in Israel’s Central District.
                  </p>
     
                  <OverlayTrigger
                    overlay={<Tooltip>Message me in Linkedin</Tooltip>}
                  >
                    <button
                      role="link"
                      onClick={openLinkedInMessage}
                      aria-label="Message me on Linkedin - External link"
                    >
                      Let’s Connect <Linkedin size={20} />
                    </button>
                  </OverlayTrigger>
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
}

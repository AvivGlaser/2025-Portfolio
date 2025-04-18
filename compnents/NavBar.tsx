import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Accessibility from "../assets/img/accessibility.png";
import logo from "../assets/img/aviv-glaser.svg";
import { Github, Linkedin, Google } from "react-bootstrap-icons";

import AccessibilityMenu from "./AccessibilityMenu";
import { Navbar, Nav, Container, Tooltip, OverlayTrigger } from "react-bootstrap";

export function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onUpdateActiveLink(value: string) {
    setActiveLink(value);
  }

  const linksData = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#timeline", label: "Timeline" },
    { href: "#projects", label: "Projects" },
    { href: "#recommendations", label: "Recommendations" },
    { href: "#offline", label: "Offline" },
  ];

  return (
    <Router>
      <header>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/" className="logo">
              <img
                src={logo}
                alt="Aviv Glaser Web Dev Logo"
                className="logo-img"
              />
            </Navbar.Brand>
            <div className="social-icon">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="accessibility-logo">Open accessibility menu</Tooltip>}
              >
                <img
                  onClick={toggleVisibility}
                  src={Accessibility}
                  alt="Accessibility logo"
                  className="accessibility-logo"
                />
              </OverlayTrigger>
            </div>
            <AccessibilityMenu isVisible={isVisible} setIsVisible={setIsVisible} />
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                {linksData.map(({ href, label }) => (
                  <Nav.Link
                    key={href}
                    href={href}
                    className={activeLink === label.toLowerCase() ? "active navbar-link" : "navbar-link"}
                    onClick={() => onUpdateActiveLink(label.toLowerCase())}
                  >
                    {label}
                  </Nav.Link>
                ))}
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <OverlayTrigger overlay={<Tooltip>Email Me</Tooltip>}>
                    <button
                      className="email-me"
                      onClick={() => {
                        window.open(
                          "https://mail.google.com/mail/?view=cm&fs=1&to=wcwaviv@gmail.com&su=Hey%20Aviv%2C%20I%20have%20an%20open%20role%20that%20might%20fit%20for%20you!&body=Hi%20Aviv%2C%0A%0AI%20came%20across%20your%20profile%20and%20wanted%20to%20reach%20out%20about%20an%20exciting%20opportunity.%20Let%20me%20know%20if%20you%27re%20interested!%0A%0ABest%2C%0A[Your%20Name]",
                          "_blank"
                        );
                      }}
                    >
                      <span>
                        Let’s Chat <Google size={20} className="gmail-icon" />
                      </span>
                    </button>
                  </OverlayTrigger>
                </div>
              </span>
            </Navbar.Collapse>
            <div className="social-icon">
              <OverlayTrigger overlay={<Tooltip>My Linkedin</Tooltip>}>
                <a
                  href="https://www.linkedin.com/in/aviv-glaser-226656202/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
              </OverlayTrigger>
            </div>
            <div className="social-icon">
              <OverlayTrigger overlay={<Tooltip>My GitHub</Tooltip>}>
                <a
                  href="https://github.com/AvivGlaser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              </OverlayTrigger>
            </div>
          </Container>
        </Navbar>
      </header>
    </Router>
  );
}

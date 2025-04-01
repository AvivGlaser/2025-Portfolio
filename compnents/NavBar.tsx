import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import logo from "../assets/img/ag-logo.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import Accessibility from "../assets/img/Accessibility.svg.png";
import { Linkedin } from "react-bootstrap-icons";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  const linksData = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#timeline", label: "Timeline" },
    { href: "#projects", label: "Projects" },
    { href: "#recommendations ", label: "Recommendations  " },
    { href: "#offline ", label: "Offline  " },
  ];

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="logo">
            <img
              src={logo}
              alt="Aviv Glaser Web Dev Logo"
              className="logo-img"
            />
          </Navbar.Brand>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="accessibility-logo">
                This site is accessible for users with disabilities
              </Tooltip>
            }
          >
            <div className="social-icon">
              <img
                src={Accessibility}
                alt="This site is accessible for users with disabilities"
                className="accessibility-logo"
              ></img>
            </div>
          </OverlayTrigger>
       
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {linksData.map(({ href, label }) => (
                <Nav.Link
                  key={href}
                  href={href}
                  className={
                    activeLink === label.toLowerCase()
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink(label.toLowerCase())}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon"></div>
              <HashLink to="#connect">
                <button
                  className="vvd"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=wcwaviv@gmail.com&su=Hey%20Aviv%2C%20I%20have%20an%20open%20role%20that%20might%20fit%20for%20you!&body=Hi%20Aviv%2C%0A%0AI%20came%20across%20your%20profile%20and%20wanted%20to%20reach%20out%20about%20an%20exciting%20opportunity.%20Let%20me%20know%20if%20you%27re%20interested!%0A%0ABest%2C%0A[Your%20Name]",
                      "_blank"
                    )
                  }
                >
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
          <div className="social-icon">
            <Linkedin/>
            </div>
        </Container>
      </Navbar>
    </Router>
  );
};

import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Accessibility from "../assets/img/accessibility.png";
import logo from "../assets/img/aviv-glaser.png";
import { Github, Linkedin, Google } from "react-bootstrap-icons";
import AccessibilityMenu from "./accessibility/AccessibilityMenu";
import {
  Navbar,
  Nav,
  Container,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import { handleFocusInDialog, handleMainMenu } from "../utils/screenReader";
import { handleResize } from "../utils/view";

export function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  handleResize();
  function toggleVisibility() {
    setIsVisible((prev) => !prev);
    setTimeout(() => {
      document
        .querySelector(".accessibility-menu-dialog")
        ?.classList.contains("show");
      handleFocusInDialog();
    }, 1000);
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
    { href: "#what-now", label: "Current" },
    { href: "#recommendations", label: "Recommendations" },
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
            <Button
              className="social-icon accessibility-button"
              onClick={() => toggleVisibility()}
              aria-haspopup="dialog"
              aria-label={
                isVisible
                  ? "Close accessibility menu"
                  : "Open accessibility menu"
              }
            >
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="accessibility-logo">Accessibility menu</Tooltip>
                }
              >
                <img
                  src={Accessibility}
                  alt="Accessibility logo"
                  className="accessibility-logo"
                />
              </OverlayTrigger>
            </Button>
            <AccessibilityMenu
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
            <div className="social-icon linkedin-icon">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>My Linkedin</Tooltip>}
              >
                <a
                  aria-label="My Linkedin - External link"
                  href="https://www.linkedin.com/in/aviv-glaser-226656202/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
              </OverlayTrigger>
            </div>
            <div className="social-icon github-icon">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>My GitHub</Tooltip>}
              >
                <a
                  aria-label="My GitHub - External link"
                  href="https://github.com/AvivGlaser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              </OverlayTrigger>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav role="menu">
                {linksData.map((link) => (
                  <Nav.Link
                    role={"menuitem"}
                    key={link.href}
                    href={link.href}
                    className={
                      activeLink === link.label.toLowerCase()
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => {
                      onUpdateActiveLink(link.label.toLowerCase());
                    }}
                    onKeyDown={(e) => {
                      handleMainMenu(e);
                    }}
                  >
                    {link.label}
                  </Nav.Link>
                ))}
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Email Me</Tooltip>}
                  >
                    <button
                      role="link"
                      aria-label="Emain me on Gmail - External link"
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
          </Container>
        </Navbar>
      </header>
    </Router>
  );
}

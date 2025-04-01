import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import logo from "../assets/img/ag-logo.svg";
import linkedin from "../assets/img/linkedin.svg";
import certificate from "../assets/img/certificate.svg";
import cvIcon from "../assets/img/cvIcon.png";
import github from "../assets/img/github.svg";
// import { MailchimpForm } from "./MailChimpForm";
//@ts-ignore
import pdfFile from "../assets/files/cv.pdf";

export const Footer = () => {
  interface ILinks {
    href: string;
    img: string;
    alt: string;
    className?: string;
  }

  const links: Array<ILinks> = [
    {
      href: "https://www.linkedin.com/in/aviv-glaser-226656202/",
      img: linkedin,
      alt: "My Linkedin",
    },
    {
      href: "https://www.linkedin.com/in/aviv-glaser-226656202/overlay/1734883343928/single-media-viewer/?profileId=ACoAADO1pr4Bbcy48f40WijHAWsNVbKCfphKkW8",
      img: certificate,
      alt: "Full-Stack Web Development course Certificate",
    },
    {
      href: "https://github.com/AvivGlaser",
      img: github,
      alt: "My Github",
    },
    {
      href: pdfFile,
      img: cvIcon,
      alt: "My CV",
      className: "cv",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img
              src={logo}
              alt="Aviv Glaser Web Dev Logo"
              className="logo-img"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {links.map((link: ILinks) => (
                <OverlayTrigger
                  key={link.alt}
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${link.alt}`}>{link.alt}</Tooltip>
                  }
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={
                      link.className === "cv" ? handleDownload : undefined
                    }
                  >
                    <img
                      src={link.img}
                      alt={link.alt}
                      className={link.className}
                    />
                  </a>
                </OverlayTrigger>
              ))}
            </div>
            <p>Aviv Glaser Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import logo from "../assets/img/aviv-glaser.png";
import { FileEarmarkPersonFill, AwardFill } from "react-bootstrap-icons";
//@ts-ignore
import pdfFile from "../assets/files/cv.pdf";
import { ILinks } from "../utils/interfaces";

export function Footer() {
  const links: Array<ILinks> = [
    {
      href: "https://www.linkedin.com/in/aviv-glaser-226656202/overlay/1734883343928/single-media-viewer/?profileId=ACoAADO1pr4Bbcy48f40WijHAWsNVbKCfphKkW8",
      icon: <AwardFill size={25} />,
      alt: "Full-Stack Web Development course Certificate",
    },
    {
      href: pdfFile,
      icon: <FileEarmarkPersonFill size={25} />,
      alt: "My CV",
      className: "cv",
    },
  ];

  function handleDownload() {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "cv.pdf";
    link.click();
  }

  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img
              src={logo}
              alt="Aviv Glaser Web Dev Logo"
              className="logo-img"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {links.map(function (link) {
                return (
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
                      className={link.className}
                    >
                      {link.icon}
                    </a>
                  </OverlayTrigger>
                );
              })}
            </div>
            <p>Aviv Glaser Copyright 2025. All Rights Reserved ©</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export const AccessibilityMenu: React.FC = () => {
  return (
    <Container className="d-flex flex-column align-items-center p-3" style={{ maxWidth: "300px", backgroundColor: "#f3e5f5", borderRadius: "1em" }}>
      <Row className="w-100 mb-2">
        <Col>
          <Button className="w-100" style={{ backgroundColor: "black", color: "white", border: "none" }}>
            Black Contrast
          </Button>
        </Col>
        <Col>
          <Button className="w-100" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}>
            White Contrast
          </Button>
        </Col>
      </Row>
      <Row className="w-100">
        <Col>
          <Button className="w-100 mb-2" style={{ backgroundColor: "black", color: "white", border: "none" }}>
            Screen Reader
          </Button>
        </Col>
        <Col>
          <Button className="w-100" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }}>
            Large Font
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AccessibilityMenu;

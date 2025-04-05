import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

interface IAccessibilityMenu {
  isVisible: boolean;
  setIsVisible: Function;
}

export default function AccessibilityMenu(props: IAccessibilityMenu) {
  const { isVisible, setIsVisible } = props;
  const [contrastMode, setContrastMode] = useState<"none" | "black" | "white">(
    "none"
  );
  const [isScreenReader, setIsScreenReader] = useState(false);
  const [isLargeFont, setIsLargeFont] = useState(false);

  const contrastButtons = [
    { label: "Black Contrast", type: "black", class: "black-button" },
    { label: "White Contrast", type: "white", class: "white-button" },
  ];

  const accessibilityButtons = [
    { label: "Screen Reader", type: "reader", class: "black-button" },
    { label: "Large Font", type: "large", class: "white-button" },
  ];

  function handleContrastToggle(mode: "black" | "white") {
    if (contrastMode === mode) {
      document.body.classList.remove(mode + "Contrast");
      setContrastMode("none");
    } else {
      document.body.classList.remove(contrastMode + "Contrast");
      document.body.classList.add(mode + "Contrast");
      setContrastMode(mode);
    }
  }

  function toggleAccessibility(type: string) {
    if (type === "reader") {
      var enableReader = !isScreenReader;
      document.body.classList.toggle("screenReader", enableReader);
      setIsScreenReader(enableReader);
    }
    if (type === "large") {
      var enableLarge = !isLargeFont;
      document.body.classList.toggle("largeFont", enableLarge);
      setIsLargeFont(enableLarge);
    }
  }
  

  function handleCancelClick() {
    document.body.classList.remove(
      "blackContrast",
      "whiteContrast",
      "screenReader",
      "largeFont"
    );
    setContrastMode("none");
    setIsScreenReader(false);
    setIsLargeFont(false);
    setIsVisible(false);
  }

  return (
    <Container className={`toggle-container ${isVisible ? "show" : "hide"}`}>
      <Row className="w-100 mb-2">
        {contrastButtons.map(function (btn) {
          return (
            <Col key={btn.type}>
              <Button
                className={btn.class + " w-100"}
                onClick={function () {
                  handleContrastToggle(btn.type as "black" | "white");
                }}
              >
                {btn.label}
              </Button>
            </Col>
          );
        })}
      </Row>
      <Row className="w-100">
        {accessibilityButtons.map(function (btn) {
          return (
            <Col key={btn.type}>
              <Button
                className={btn.class + " w-100 mb-2"}
                onClick={function () {
                  toggleAccessibility(btn.type);
                }}
              >
                {btn.label}
              </Button>
            </Col>
          );
        })}
      </Row>
      <Button className="cancel-button" onClick={handleCancelClick}>
        Cancel
      </Button>
    </Container>
  );
}

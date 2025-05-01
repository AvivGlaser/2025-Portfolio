import { Container, Row, Col, Button } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import { IAccessibilityMenu } from "../../utils/interfaces";
import {
  accessibilityButtons,
  handleAccessibilityClasses,
  giveFocusToFocusableElements,
  handleActive,
  setLogo,
} from "../../utils/screenReader";
import "./Accessibility.css";

export default function AccessibilityMenu(props: IAccessibilityMenu) {
  return (
    <Container
      className={`accessibility-menu-dialog ${
        props.isVisible ? "show" : "hide"
      }`}
      role="dialog"
    >
      <Row>
        <Col>
          <CloseButton
            aria-label="Close accessibility menu dialog"
            className="close dialog-close dialog-button"
            onClick={() => {
              props.setIsVisible();
              giveFocusToFocusableElements();
            }}
          />
        </Col>
      </Row>
      <Container>
        {accessibilityButtons.map((btn) => {
          return (
            <Button
              key={btn.label}
              aria-pressed={false}
              aria-label={btn.ariaLabel}
              className={`${btn.class} dialog-button`}
              onClick={(e) => {
                handleAccessibilityClasses(btn.type);
                handleActive(e);
                setLogo(btn.type);
              }}
            >
              {btn.label}
            </Button>
          );
        })}
      </Container>
      <Row>
        <Button
          className="cancel-button dialog-button"
          aria-label="Turn off accessibility menu"
          onClick={() => handleAccessibilityClasses("turnOff")}
        >
          Turn Off
        </Button>
      </Row>
    </Container>
  );
}

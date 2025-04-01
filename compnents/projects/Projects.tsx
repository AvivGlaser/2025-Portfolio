import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectsData, { IProjectsData } from "./projectsData";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const sections = ["Deployed", "GitHub", "Future"];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore my diverse projects, ranging from full-stack
                    applications to e-commerce sites, with a mix of live demos
                    and GitHub repos. Stay tuned for future projects that
                    showcase my growing skills in React, TypeScript, and backend
                    development.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="deployed">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {sections.map((section, i) => (
                        <Nav.Item key={i}>
                          <Nav.Link eventKey={section}>
                            {section === "GitHub"
                              ? "GitHub Projects"
                              : section === "Deployed"
                              ? "Deployed Projects"
                              : "Future Projects"}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {sections.map((section, i) => (
                        <Tab.Pane eventKey={section} key={i}>
                          <Row>
                            {projectsData
                              .filter(
                                (project: IProjectsData) =>
                                  project.section === section
                              )
                              .map((project: IProjectsData, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="purple background"
      />
    </section>
  );
};

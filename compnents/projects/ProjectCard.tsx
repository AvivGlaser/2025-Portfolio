import { Col } from "react-bootstrap";
import { IProjectsData } from "./projectsData";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  alt,
  section,
}: IProjectsData) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={alt} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
          <br />
          {section !== "Future" && (
            <a
              href={link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {section === "GitHub" ? "Link to GitHub repo" : "Live demo"}
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};

import reactLogo from "../assets/img/reactIcon.png";
import javascriptLogo from "../assets/img/javascript.png";
import typescriptLogo from "../assets/img/typescript.png";
import reduxLogo from "../assets/img/redux.png";
import expressJS from "../assets/img/express.png";
import nodeJS from "../assets/img/nodejs.png";
import docker from "../assets/img/docker.png";
import materialuUI from "../assets/img/m-ui.png";
import mySQL from "../assets/img/mysql.png";
import Git from "../assets/img/git.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  interface ILogoArray {
    img: string;
    title: string;
    alt: string;
    className?: string;
  }

  const items: Array<ILogoArray> = [
    { img: reactLogo, title: "React", alt: "react-logo" },
    { img: javascriptLogo, title: "Javascript", alt: "javascript-logo" },
    { img: typescriptLogo, title: "Typescript ", alt: "Typescript-logo" },
    { img: reduxLogo, title: "Redux", alt: "Redux-logo" },
    {
      img: expressJS,
      title: "Express.JS",
      alt: "express.js-logo",
      className: "express-js-logo",
    },
    { img: materialuUI, title: "Material-UI", alt: "material-ui-logo" },
    { img: nodeJS, title: "Node.JS", alt: "node-js-logo" },
    { img: docker, title: "Docker", alt: "docker-logo" },
    { img: mySQL, title: "MySQL", alt: "mySQL-logo" },
    { img: Git, title: "Git", alt: "Git-logo", className: "git-logo" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>My go-to tech stack for web development</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true} // Enable auto sliding
                autoPlaySpeed={2000} // Set slide interval (2000ms = 2 seconds)
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} // Remove navigation arrows
                className="owl-carousel owl-theme skill-slider"
              >
                {items.map((item: ILogoArray) => (
                  <div className="item" key={item.alt}>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className={item.className}
                    />
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Purple background"
      />
    </section>
  );
};

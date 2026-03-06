import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import { ILogo } from "../../utils/interfaces";
import { responsive, techSkills } from "./skillsData";


export function Skills() {

  function ButtonGroup({ next, previous }: any) {
    return (
      <div className="carousel-button-group">
        <button onClick={previous} className="carousel-arrow left" aria-label="Previous slide">
          <ChevronLeft size={28} />
        </button>
        <button onClick={next} className="carousel-arrow right" aria-label="Next slide">
          <ChevronRight size={28} />
        </button>
      </div>
    );
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>My tech stack toolbox</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                customButtonGroup={<ButtonGroup />}
                renderButtonGroupOutside={true}
                arrows={false}
                className="owl-carousel owl-theme skill-slider"
              >
                {techSkills.map((skill: ILogo) => (
                  <div className="skill-container" key={skill.alt}>
                    <img
                      src={skill.img}
                      alt={skill.alt}
                      className={skill.className}
                    />
                    <h3>{skill.title}</h3>
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
}

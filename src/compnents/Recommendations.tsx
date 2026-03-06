import { Container, Row, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ron from "../assets/img/ron.jpeg";
import naor from "../assets/img/naor.jpeg";
import alona from "../assets/img/alona.jpeg";
import fabian from "../assets/img/fabian.png";
import alona_rec from "../assets/img/rec-letter-alona.jpeg";
import { IRecommendation } from "../utils/interfaces";

export function Recommendations() {
  const recommendations: Array<IRecommendation> = [
    {
      name: "Ron Elli",
      role: "Senior Project Manager at EqualWeb",
      text: "Besides being very thorough and responsible, Aviv makes me laugh a lot — my days are so much more enjoyable with him around.",
      img: ron,
      letter: "/rec-letter-ron.docx",
      hiddenText: "by Ron  - download word document",
    },
    {
      name: "Naor Bacharlia",
      role: "Project Manager at EqualWeb",
      text: "Aviv communicates client-side issues to our customers with detailed documentation, as well as resolving urgent accessibility matters on the spot.",
      img: naor,
      letter: "/rec-letter-naor.docx",
      hiddenText: "by Naor  - download word document",
    },
    {
      name: "Alona Elazari",
      role: "Head of Education at Kibbutz Sa'ar",
      text: "During his work, Aviv built personal and meaningful connections with his apprentices, showing responsibility, dedication, and initiative.",
      img: alona,
      letter: alona_rec,
      hiddenText: "By Alona - download image ",
    },
    {
      name: "Fabian Bensik",
      role: "Head of Education at Kibbutz Shoval",
      text: "Aviv led by example serving children and their parents needs. He did so with warmth, calmness, attentive listening, and genuine care.",
      img: fabian,
      letter: "/rec-letter-fabian.doc",
      hiddenText: "By Fabian - download word document",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="recommendations " id="recommendations">
      <Container>
        <Row className="align-items-center">
          <h2 className="recommendations-header">Recommendations</h2>
          <p className="recommendations-p">My co-workers would say that...</p>
        </Row>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          className="max-w-xl mx-auto recommendations-carousel"
        >
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center"
            >
              <h3 className="rec-text">"{rec.text}"</h3>
              <p className="mt-3 font-semibold text-lg text-gray-900 dark:text-white">
                {rec.name}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{rec.role}</p>
              <img
                src={rec.img}
                alt={rec.name}
                className="co-workers-image"
              ></img>{" "}
              <br />
              <Button
                className="recommendation-letter"
                aria-label={`Contact ${rec.name} & watch full letter`}
                tabIndex={-1}
              >
                <a href={rec.letter} download>
                  Full Letter & Contact Info
                  <span className="screen-reader-element">
                    {" "}
                    &nbsp; {rec.hiddenText}
                  </span>
                </a>
              </Button>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

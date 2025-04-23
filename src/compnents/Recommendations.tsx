import { Container, Row, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ron from "../assets/img/ron.jpeg";
import naor from "../assets/img/naor.jpeg";
import { IRecommendation } from "../utils/interfaces";

export function Recommendations() {
  const recommendations: Array<IRecommendation> = [
    {
      name: "Ron Elli",
      role: "Senior Project Manager at EqualWeb",
      text: "Besides being very thorough and responsible, Aviv makes me laugh a lot — my days are so much more enjoyable with him around.",
      img: ron,
    },
    {
      name: "Naor Bacharlia",
      role: "Project Manager at EqualWeb",
      text: "I know I can count on Aviv with every task I give him. Just be careful and don't move anything on his desk — he can't function otherwise!",
      img: naor,
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
          autoPlaySpeed={4500}
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
              <Button className="contact-reco">
                <a href="/rec-letter-ron.docx" download>
                  Full Letter & Contact Info
                </a>
              </Button>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

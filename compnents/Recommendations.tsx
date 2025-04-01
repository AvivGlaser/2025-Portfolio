import { Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Recommendations = () => {

  interface Recommendation {
    name: string;
    role: string;
    text: string;
  }
  
  const recommendations: Recommendation[] = [
    {
      name: "John Doe",
      role: "Senior Developer at TechCorp",
      text: "Aviv is a fantastic developer with great attention to detail. A pleasure to work with!",
    },
    {
      name: "Jane Smith",
      role: "Project Manager at WebSolutions",
      text: "Professional, efficient, and highly skilled. Highly recommended!",
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
          <h2>Recommendations</h2>
        </Row>
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} className="max-w-xl mx-auto">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center"
          >
            <p className="text-gray-700 dark:text-gray-300 italic">"{rec.text}"</p>
            <h3 className="mt-3 font-semibold text-lg text-gray-900 dark:text-white">
              {rec.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{rec.role}</p>
          </div>
        ))}
      </Carousel>
      
      </Container>
    </section>
  );
};

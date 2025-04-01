import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
// import "./HobbySection.css";

export default function Offline() {
  const hobbies = [
    { title: "Hobby 1", description: "Brief description of hobby 1." },
    { title: "Hobby 2", description: "Brief description of hobby 2." },
    { title: "Hobby 3", description: "Brief description of hobby 3." },
    { title: "Hobby 4", description: "Brief description of hobby 4." },
  ];

  return (
    <section className="hobby-section" id="offline">
      <h2>Offline Life</h2>
      <p>A glimpse into what I love doing outside of coding.</p>
      <div className="hobby-carousel-wrapper">
        <Carousel className="hobby-carousel" interval={3000} pause={false} fade>
          {hobbies.map((hobby, index) => (
            <Carousel.Item key={index}>
              <motion.div
                className="hobby-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>{hobby.title}</h3>
                <p>{hobby.description}</p>
              </motion.div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

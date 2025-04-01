import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./compnents/NavBar";
import { Banner } from "./compnents/Banner";
import { Skills } from "./compnents/Skills";
import { Projects } from "./compnents/projects/Projects";
import { Recommendations  } from "./compnents/Recommendations";
import { Footer } from "./compnents/Footer";
import CareerTimeline from "./compnents/timeline/Timeline";
import AccessibilityMenu from "./compnents/AccessibilityMenu";
import Offline from "./compnents/Offline";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <AccessibilityMenu /> */}
      <Banner />
      <Skills />
      <CareerTimeline />
      <Projects />
      <Recommendations />
      <Offline/>
      <Footer />
    </div>
  );
}

export default App;

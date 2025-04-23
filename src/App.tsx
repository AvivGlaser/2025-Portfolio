import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./compnents/NavBar";
import { Banner } from "./compnents/Banner";
import { Recommendations } from "./compnents/Recommendations";
import { Footer } from "./compnents/Footer";
import CareerTimeline from "./compnents/timeline/Timeline";
import { Skills } from "./compnents/skills/Skills";
import Projects from "./compnents/projects/Projects";
import WhatNow from "./compnents/what-now/WhatNow";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <main>
        <Skills />
        <CareerTimeline />
        <Projects />
        <WhatNow />
        <Recommendations />
        <Footer />
      </main>
    </div>
  );
}

export default App;

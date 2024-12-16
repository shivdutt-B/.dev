import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";
import DSA from "./Components/DSA";
import { StatsContextData } from "./Context/StatsContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <StatsContextData>
      <Navbar />
      <Intro />
      <TechStack />
      <DSA />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </StatsContextData>
    </>
  );
}

export default App;

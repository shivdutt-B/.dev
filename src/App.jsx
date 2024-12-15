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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <div className="max-w-[1000px] w-[100%] m-auto  px-[3vw]"> */}
      <Intro />
      <TechStack />
      <DSA />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;

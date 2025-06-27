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

  return (
    <>
        <Navbar />
        <Intro />
        <TechStack />
        {/* <AboutMe /> */}
        <DSA />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}

export default App;

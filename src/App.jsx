import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Toolkit from "./components/Toolkit";
import GithubSection from "./components/GithubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Toolkit />
        <GithubSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

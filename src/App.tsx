import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

       {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
export default App;
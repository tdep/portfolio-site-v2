import SectionConstruction from "../components/SectionConstruction"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import trevor from '../assets/portfolio-name-trevor.png'
import depew from '../assets/portfolio-name-depew.png'
import software from '../assets/portfolio-title-software.png'
import engineer from '../assets/portfolio-title-engineer.png'

import '../styling/App.css'
import '../styling/landingPage.css'

function LandingPage() {
  return (
    <div id="window">
      <div id="home" className="content-container">
        <div id="header">
          <div id="name" className="title-name-container">
            <img id="name-first" className="title-name" src={trevor} alt="Trevor" />
            <img id="name-last" className="title-name" src={depew} alt="DePew" />
          </div>
          <div className="title-name-container">
            <img id="title-software" className="title-name" src={software} alt="Software" />
            <img id="title-engineer" className="title-name" src={engineer} alt="Engineer" />
          </div>
        </div>
        <div id="links">
          <a id="about-link" href="#about">About</a>
          <p>|</p>
          <a id="experience-link" href="#experience">Experience</a>
          <p>|</p>
          <a id="projects-link" href="#projects">Projects</a>
          <p>|</p>
          <a id="contact-link" href="#contact">Contact</a>
        </div>
      </div>
      <hr className="solid"></hr>
      <div id="about" className="page-container">
        <h2 className="section-title">About</h2>
        <div className="content-container">
          <About />
        </div>
      </div>
      <hr className="solid"></hr>
      <div id="experience" className="page-container">
        <h2 className="section-title">Experience</h2>
        <div className="content-container">
          <Experience />
        </div>
      </div>
      <hr className="solid"></hr>
      <div id="projects" className="page-container">
        <h2 className="section-title">Projects</h2>
        <div id="project-content-container" className="content-container">
          <Projects />
        </div>
      </div>
      <hr className="solid"></hr>
        <div id="contact" className="page-container">
          <h2 className="section-title">Contact</h2>
          <Contact />
      </div>
      <hr className="solid"></hr>
      {/* <div id="footer">
        <div className="contentContainer">
          <Footer />
        </div>
      </div> */}

    </div>
  )

}

export default LandingPage
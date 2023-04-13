import SectionConstruction from "../components/SectionConstruction"
import '../styling/App.css'
import '../styling/landingPage.css'

function LandingPage() {
  return (
    <div id="window">
      <div id="home" className="content-container">
        <div id="header">
          <div id="name" className="title-name">
            <img id="name-first" className="title-name-svg" src="./public/assets/images/portfolio-name-trevor.png" alt="Trevor" />
            {/* <img id="name-last" className="title-name-svg" src={LastName} alt="DePew" /> */}
          </div>
          <div id="title" className="title-name">
            <img id="title-software" className="title-name-svg" src="public/assets/images/portfolio-title-software.png" alt="Software" />
            <img id="title-engineer" className="title-name-svg" src="public/assets/images/engineer.svg" alt="Engineer" />
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
          {/* <About /> */}
          <SectionConstruction />
        </div>
      </div>
      <hr className="solid"></hr>
      {/* <div id="experience" className="page-container">
          <h2 className="section-title">Experience</h2>
          <div className="content-container"> */}
      {/* <Experience /> */}
      {/* </div> */}
      {/* </div>
        <hr className="solid"></hr>
        <div id="projects" className="page-container">
          <h2 className="section-title">Projects</h2>
          <div className="content-container"> */}
      {/* <Projects /> */}
      {/* </div> */}
      {/* </div>
        <hr className="solid"></hr>
        <div id="contact" className="page-container">
          <h2 className="section-title">Contact</h2> */}
      {/* <Contact /> */}
      {/* </div> */}
      {/* <hr className="solid"></hr>
        <div id="footer">
          <div className="contentContainer"> */}
      {/* <Footer /> */}
      {/* </div> */}
      {/* </div> */}

    </div>
  )

}

export default LandingPage
import trevor_profile from '../assets/profile_trevor.png'
import '../styling/about.css'

const About = () => {
  return (
    <div id="about-container">
      <div id="bio-photo">
        <img id="photo" src={trevor_profile} alt="profile" />
        <div id="about-text-container">
          <div id="about-text">
            <p>I am a Software Engineer with a passion for solving problems about human
              behavior and its relationship with the natural and urban environments
              from infrastructure to climate and points between.<br /><br />

              I have a core belief that truth and honesty with ourselves and
              each other is the best way to create an environment filled with
              meaningful and productive relationships. My previous career
              pursuits have led me through a healthy number of varied
              experiences which have in turn given me a well-rounded set
              of skills.<br /><br />

              Apart from my academic pursuits in classical composition and
              performance, I have worked as a technical support agent, piano
              technician, theater technician, and farmer.
            </p>
          </div>
        </div>
      </div>
      <div id="tech-container">
        <p>Here are some of the technologies I've been working in:</p>
        <ul id="techs">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>React Redux</li>
          <li>SQL</li>
          <li>Flask</li>
        </ul>
      </div>
    </div>
  )
}

export default About
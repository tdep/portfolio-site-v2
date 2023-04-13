import '../styling/experience.css'

const Experience = () => {

  const handleCard = (e, tabname) => {
    let i, cards, tablinks
    cards = document.getElementsByClassName("experience-cards")
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById(tabname).style.display = "inherit"
    e.target.className += " active"
  }

  return (
    <div id="experience-container">
      <div id="side-menu">
        <a className="tablinks active" onClick={(e) => handleCard(e, "flatiron")}>Flatiron School</a>
        <a className="tablinks" onClick={(e) => handleCard(e, "piano")}>Piano Technician</a>
        <a className="tablinks" onClick={(e) => handleCard(e, "masters")}>CUNY Brooklyn College</a>
        <a className="tablinks" onClick={(e) => handleCard(e, "roli")}>ROLI</a>
      </div>
      <div id="experience-text">
        <div id="flatiron" className="experience-cards">
          <div className="photo-blurb">
            <img id="flatiron-logo"></img>
            <p id="flatiron-blurb" className="experience-blurbs"> As a student, studied front and back-end development in
              <span className="languages"> JavaScript</span>, <span className="languages">React</span>,
              <span className="languages"> Ruby on Rails</span>, and <span className="languages">Python / Flask</span>.
              Designed, wireframed, and developed several applications both individually and as part of a team using
              combinations of the aforementioned languages and existing or custom APIs.<br /><br />

              Assisted other students with their studies and projects helping to ensure the class as a whole was able to
              achieve the most out of the time on and off campus. This included leading study and review sessions outside
              of normal class hours.<br /><br />

              Independantly learned additional tools such as <span id="languages">React Redux</span> and more advanced
              <span id="languages"> CSS</span> concepts.
              Demonstrated and presented applications in front of audiences of students and teachers giving user scenarios
              and explinations of code as well as expereinces thereof.

            </p>
          </div>
        </div>
        <div id="piano" className="experience-cards">
          <div className="photo-blurb">
            <img id="piano-logo"></img>
            <p id="piano-blurb" className="experience-blurbs"> Provided piano tuning, regulation and repair services
              to an average of 10 clients a week using electronic and ear techniques with
              standard piano tuning and repair tools in order to bring their instrument
              to its designed specs, allowing it to sound its best, and resolve or prevent
              performance issues in client pianos.<br /><br />

              Maintained a database of clients as well as payment and invoicing tooling using
              Google Sheets, Xero invoicing, and Square payments in order keep track of client
              service records, payments, and future service needs.
            </p>
          </div>
        </div>
        <div id="masters" className="experience-cards">
          <div className="photo-blurb">
            <img id="bc-logo"></img>
            <p id="masters-blurb" className="experience-blurbs">Earned a Master's in Music (MM) degree in Composition
              with a focus on orchestral and experimental playback. Performed original and existing music in small
              ensembles for live audiences.<br /><br />

              Presented research projects on historical subjects and created reports on analytical topics in traditional
              western music theory as well as Shenkerian analysis.<br /><br />

              Designed and built a handful of electronic music instruments using resistor-capacitor circuits, Arduino,
              and integrated circuits.<br /><br />

              As a final thesis, composed a 27 minute, multi-movement symphony for 60-piece orchestra.

            </p>
          </div>
        </div>
        <div id="roli" className="experience-cards">
          <div className="photo-blurb">
            <p id="roli-blurb" className="experience-blurbs">Designed and implemented a system to track and catalog
              product shipments and returns using Google Sheets and Google Docs significantly
              reducing the turnover period of returns from 5 weeks to 2 weeks and reducing lost
              shipments from 4% to 1%.<br /><br />

              Coordinated between Tech Support, Sales, Logistics, and Package Carriers in order
              to provide a smooth transaction for customers by providing accurate updates using
              the aforementioned cataloging system and reducing interdepartmental lead times
              from 5 to 2 business days.<br /><br />

              Created documentation and project description outlining the returns process and
              how it should continue to expand in order to provide a guideline for a future RMA
              system and returns department.<br /><br />

              Initiated and performed repairs of MIDI instruments in New York reducing the
              turnaround for faulty products within the US and Canada from 8 weeks to 2 weeks.
            </p>
          </div>
          <img id="roli-logo"></img>
        </div>
      </div>
    </div>
  )
}

export default Experience
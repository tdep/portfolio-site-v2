import { useEffect, useState } from "react"
import { db } from "../utils/firebase"
import { onValue, ref } from "firebase/database"
import tadlab from "../assets/tadlab_demo.gif"
import sequinzer from "../assets/sequinzer_demo_4.gif"
import cheekers from "../assets/cheekers_demo.png"
import webaudio from "../assets/webaudio_demo.gif"

import "../styling/projects.css"
import "../styling/viewer.css"
import "../styling/projectData.css"
import "../styling/buttons.css"

const Projects = () => {
  const auto = document.getElementById("auto-scroll")
  let channels = [
    { ch: "1" }, { ch: "2" }, { ch: "3" }, { ch: "4" }, { ch: "" },
    { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" },
    { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" },
    { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" }, { ch: "" }
  ]
  const images = [ tadlab, sequinzer, cheekers, webaudio ];
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [power, setPower] = useState(true)
  const [sound, setSound] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)

  // fetch projects from the db

  useEffect(() => {
    const query = ref(db, "projects");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projects) => [...projects, project])
        setLoading(false);
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   getProjectData()
  // }, [])

  // const getProjectData = async () => {
  //   const request = await fetch('https://portfolio-website-3f5af-default-rtdb.firebaseio.com/projects')
  //     .then((request => request.json()))
  //     .then((data) => {
  //       setProjects(data)
  //       setLoading(false)
  //     })
  //     .catch(err => console.log(err))
  // }

  // handle power button
  function powerOnOff(e) {
    let on = document.getElementById("on-btn")
    let inactiveElements = document.getElementsByClassName(" off")
    let activeElements = document.getElementsByClassName(" pwr-on")
    if (e.target.id === "on-btn") {
      if (on.className !== "button power-toggle pwr-on") {
        on.className = "button power-toggle pwr-on"
        setPower(true)
        powerUp(inactiveElements)
        // add tv on effect for screen
      } else {
        return
      }
    } else if (e.target.id === "off-btn") {
      if (on.className === "button power-toggle pwr-on") {
        on.className = "button power-toggle";
        setPower(false)
        powerDown(activeElements)
        // add tv off effect for screen
      }
    }
  }

  // handle power-up of viewer
  function powerUp(inactiveElements) {
    for (let element of inactiveElements) {
      // console.log(element)
      element.className = "button pwr-on"
    }
    if (auto.className === "button pwr-on") {
      setAutoScroll(true)
    }
  }

  // handle power-down of viewer
  function powerDown(activeElements) {
    for (let element of activeElements) {
      // console.log(element)
      element.className = "button off"
    }
    if (autoScroll) {
      setAutoScroll(false)
    }
  }

  // handle sound button
  function soundOnOff() {
    let sound = document.getElementById("sound-btn")
    if (power) {
      if (sound.className !== "button power-toggle pwr-on") {
        sound.className = "button power-toggle pwr-on"
        setSound(true)
        // add sound unmute for video
      } else {
        sound.className = "button power-toggle"
        setSound(false)
        // add sound mute for video
      }
    } else {
      return
    }
  }

  // handle iterating through projects
  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = projects.length - 1;
    } else if (newIndex >= projects.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex)
  }

  // handle auto scroll timing for projects
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll) {
        updateIndex(activeIndex + 1);
        // console.log(projects[activeIndex])
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // handle auto-scroll toggle
  function handleAutoScroll() {
    // let auto = document.getElementById("auto-scroll")
    if (power) {
      if (auto.className !== "button pwr-on") {
        setAutoScroll(true)
        auto.className = "button pwr-on"
      } else {
        setAutoScroll(false)
        auto.className = "button"
      }
    } else {
      return
    }
  }

  // iteration handler
  function handleIteration(direction) {
    if (direction === "prev") {
      updateIndex(activeIndex - 1)
    } else if (direction === "next") {
      updateIndex(activeIndex + 1)
    }
  }

  // handle iterator buttons
  function handlePrevNext(e) {
    // let auto = document.getElementById("auto-scroll")
    let direction = e.target.id
    if (power) {
      if (auto.className === "button pwr-on") {
        auto.className = "button"
        setAutoScroll(false)
        handleIteration(direction)
      } else {
        handleIteration(direction)
      }
      // console.log(activeIndex)
    }
  }

  // handle project matrix buttons
  function handleSelected(e) {
    let selectedIndex = parseInt((e.target.id).slice(3))
    if (selectedIndex >= projects.length) {
      return
    } else {
      setAutoScroll(false)
      auto.className = "button"
      setActiveIndex(selectedIndex)
      // console.log(selectedIndex)
    }
    // change classname to omit "matrix" and allow buttons to be depressed
  }

  // handle images
  function handleImages(index) {
    return images[index]
  }

  if (loading) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div id="projects-container">
        <div id="chasis" className="external-container-shadows">
          <div id="screen-container">
            <div id="bar-top" className="black-bar">
              <div id="screen">
                <img
                  id="project-img"
                  src={handleImages(activeIndex)}
                  alt="projects"
                />
                <div id="image-efx"></div>
                <div id="screen-efx"></div>
                <div id="screen-flare"></div>
              </div>
            </div>
          </div>
          <div id="control-panel-container" className="internal-container-shadows">
            <div id="control-panel" className="panel-shadows">
              <div id="selector-indicator-container">
                {/* <h1 id="selector-label">Ch.</h1> */}
                <div id="selector-container">
                  <div id="channel-btn-container">
                    <span id="prev" className="button" onClick={(e) => handlePrevNext(e)}>Prev</span>
                    <span id="auto-scroll" className="button pwr-on" onClick={() => handleAutoScroll()}>Auto</span>
                    <span id="next" className="button" onClick={(e) => handlePrevNext(e)}>Next</span>
                  </div>
                  <div id="indicator-container">
                    <div id="indicators">
                      {channels.map((channel, index) => {
                        return (
                          <span
                            id={`pos${index}`}
                            className={`button matrix ${power ? (index === activeIndex ? "pwr-on" : "") : (index === activeIndex ? "off" : "")}`}
                            onClick={(e) => handleSelected(e)}
                          >{channel.ch}</span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div id="power-control-container">
                <div id="switch-light-container">
                  <div id="power-switch-container">
                    <span id="on-btn" className="button power-toggle pwr-on" onClick={(e) => powerOnOff(e)}>I</span>
                    <span id="off-btn" className="button power-toggle" onClick={(e) => powerOnOff(e)}>O</span>
                    <span id="sound-btn" className={`${sound ? (power ? "button power-toggle pwr-on" : "button power-toggle off") : "button power-toggle"}`} onClick={() => soundOnOff()}>🕪</span>
                  </div>
                  <div id="power-light-container">
                    <div id="power-light" className={power ? "pwr-on" : ""}>
                      <div id="middle-ring">
                        <div id="inner-ring"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="text-container" className="panel-shadows text-container-shadows text-styling">
              <div id="description-container">
                <div id="title" className="internal-text-container-shadows">
                  <h2 className={projects[activeIndex].title.length > 14 ? "animate-title" : ""}>
                    {projects[activeIndex].title}
                  </h2>
                </div>
                <div id="text" className="internal-text-container-shadows">
                  <p>{projects[activeIndex].description}</p>
                </div>
              </div>
              <div id="tool-link-container">
                <div id="tool-link-1" className="tool-link">
                  <p className={projects[activeIndex].tools.length > 2 ? "animate-tool" : ""}>
                    {projects[activeIndex].tools.map((tool, i) => {
                    if (i === (projects[activeIndex].tools.length) - 1) {
                      return (tool)
                    } else {
                      return (`${tool}, `)
                    }
                  })}</p>
                </div>
                <div id="tool-link-2" className="tool-link">
                  <a href={`${projects[activeIndex].links[0].url}`}>{projects[activeIndex].links[0].type}</a>
                </div>
                <div id="tool-link-3" className="tool-link">
                  <a href={`${projects[activeIndex].links[1].url}`}>{projects[activeIndex].links[1].type}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
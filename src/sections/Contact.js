import { useEffect, useState } from "react"
import { db } from "../utils/firebase"
import { onValue, ref } from "firebase/database"
import "../styling/contact.css"

const Contact = () => {

  const [contactData, setContactData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = ref(db, "contact");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((contact) => {
          setContactData((contactLinks) => [...contactLinks, contact])
          setLoading(false);
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   getContactData()
  // }, [])

  // const getContactData = async () => {
  //   const request = await fetch('http://localhost:3000/contact')
  //     .then((request => request.json()))
  //     .then((data) => {
  //       setContactData(data)
  //       setLoading(false)
  //     })
  //     .catch(err => console.log(err))
  // }

  // handle link redirect

  if (loading) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div id="contact-content-container">
        <div id="contact-container">
          <div id="links-container">
            <div id="link-1" className="sign-panel">
              <a
                href={`${contactData[0].github}`} 
                target="_blank" 
                rel="noreferrer" 
                id="github-link"
                className="contact-link"
              >
                GitHub
              </a>


            </div>
            <div id="link-2" className="sign-panel">
              <a 
                href={`${contactData[1].linkedin}`} 
                target="_blank" 
                rel="noreferrer" 
                id="linkedin-link"
                className="contact-link"
              >
                Linked-In
              </a>
            </div>
            <div id="link-3" className="sign-panel">
              <a 
                href={`${contactData[2].huntr}`} 
                target="_blank" 
                rel="noreferrer" 
                id="huntr-link"
                className="contact-link"
              >
                Huntr
              </a>
            </div>
            <div id="link-4" className="sign-panel">
              <a 
                href={`${contactData[3].musicsite}`} 
                target="_blank" 
                rel="noreferrer" 
                id="musicsite-link"
                className="contact-link"
              >
                Music Composition
              </a>
            </div>
            <div id="link-5" className="sign-panel">
              <a 
                href={`${contactData[4].craftsite}`} 
                target="_blank" 
                rel="noreferrer" 
                id="craftsite-link"
                className="contact-link"
              >
                Woodworking & Art
              </a>
            </div>
            <div id="link-6" className="sign-panel">
              <a 
                href={`${contactData[5].youtube}`} 
                target="_blank" 
                rel="noreferrer" 
                id="youtube-link"
                className="contact-link"
              >
                YouTube
              </a>
            </div>
          </div>          
        </div>
      </div>

    )
  }
}

export default Contact
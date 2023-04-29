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

  if (loading) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div id="contact-container">
        <div id="sign-container">
          <div id="links-container">
            <div id="link-1">
              <div id="github-link" className="contact-link">
                <a href={`${contactData[0].github}`}>GitHub</a>
              </div>
            </div>
            <div id="link-2">
              <div id="linkedin-link" className="contact-link">
                <a href={`${contactData[1].linkedin}`}>Linked-In</a>
              </div>
            </div>
            <div id="link-3">
              <div id="huntr-link" className="contact-link">
                <a href={`${contactData[2].huntr}`}>Huntr</a>
              </div>
            </div>
            <div id="link4">
              <div id="musicsite-link" className="contact-link">
                <a href={`${contactData[3].musicsite}`}>Music Composition</a>
              </div>
            </div>
            <div id="link-5">
              <div id="craftsite-link" className="contact-link">
                <a href={`${contactData[4].craftsite}`}>Woodworking & Art</a>
              </div>
            </div>
            <div id="link-6">
              <div id="youtube-link"className="contact-link">
                <a href={`${contactData[5].youtube}`}>YouTube</a>
              </div>
            </div>
          </div>          
        </div>
      </div>

    )
  }
}

export default Contact
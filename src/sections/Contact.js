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
        Object.values(data).map((project) => {
          setContactData((contacts) => [...contactData, contacts])
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
          <div className="screw-container">
            <div className="screw"></div>
          </div>
          <div id="links-container">
            <div id="left-space"></div>
            <div id="center-space">
              <div id="contact-links">
                <div className="contact-link"><a href={`${contactData.github}`}>GITHUB</a><p>⬈</p></div>
                <div className="contact-link"><p>⬅</p><a href={`${contactData.linkedin}`}>LINKEDIN</a></div>
                <div className="contact-link"><p>⬅</p><a href={`${contactData.huntr}`}>HUNTR</a></div>
                <div className="contact-link"><a href={`${contactData.musicsite}`}>T.A.DEPEWMUSIC</a><p>⬊</p></div>
                <div className="contact-link"><a href={`#`}>YOUTUBE</a><p>⟲</p></div>
              </div>
            </div>
            <div id="right-space"></div>
          </div>
          <div className="screw-container">
            <div className="screw"></div>
          </div>
        </div>
        <div id="post-container">
          <div id="sign-post"></div>
        </div>
      </div>

    )
  }
}

export default Contact
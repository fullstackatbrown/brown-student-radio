import React from "react";
import { useEffect, useState } from "react";
import "./About.css"; // Ensure you import the CSS
import { queryObjects } from "../cosmic";

const About: React.FC = () => {
  const [eboard, setEboard] = useState([]);

  useEffect(() => {
    (async () => {
        setEboard(await queryObjects({type: "eboard-members"}));
    })();
}, []);
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About</h1>
        <p>
          “The Brown Network” began in 1936 as the first student-run radio
          station in the country. It was a carrier-current AM station
          broadcasting to Brown dorms. Eventually the station’s name was changed
          to “WBRU-AM.” In 1966, some of the station’s members secured a loan
          from the University and founded the radio station WBRU-FM (95.5),
          while others continued the student-oriented AM tradition. WBRU-FM
          became a commercial corporation, financially and legally separate from
          Brown University, while WBRU-AM continued to operate for the Brown
          community and surrounding areas in the college radio tradition. The AM
          signal in time became virtually inaudible. During the mid-1990s, a few
          students worked to find a new, more audible outlet for those still
          broadcasting in the older, experimental, student tradition. In 1997,
          WBRU-AM became “Brown Student Radio” (BSR) and started broadcasting on
          WELH-FM (88.1). WELH-FM, owned by the Wheeler School, was sold to
          another organization in 2010, leaving BSR to broadcast solely on
          bsrlive.com.
        </p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8VFOA9Vc9Uc?si=7sOkeDA992gQiYqJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          In 2018, BSR obtained a low-power FM license. As WBRU-FM had sold
          their signal the year prior, BSR obtained the call signal WBRU-LP. BSR
          is now broadcasting on 101.1 FM, online, and through an upcoming
          mobile app.​​ Today, we are the only FM radio station on campus,
          staying true to our roots in traditional freeform college radio.
          Students, faculty, and community members all host cross-genre music
          shows, podcasts, and talk shows, allowing for a truly free creative
          outlet for the Providence community. We are officially partnered with
          PCR and AS220.
        </p>
      </div>

      <div className="eboard-container">
        <h2>E-Board 24-25</h2>
        <div className="eboard-members">
          {eboard.map(eboardm => EboardMember({eboard}))}
        </div>
      </div>

      <div className="eboard-container">
        <h2>Station Managers</h2>
        <div className="eboard-members">
          <div className="eboard-member">
            <img src="" alt="" />
          </div>
          <div className="eboard-member">
            <img src="" alt="" />
          </div>
          <div className="eboard-member">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};


function EboardMember({ eboard }) {
  return (
    <div className="eboard-member">
    <img
      src= {eboard.metadata.eboardpicture.url}
      alt= {eboard.metadata.title}
    />
  </div>
  );
}

export default About;


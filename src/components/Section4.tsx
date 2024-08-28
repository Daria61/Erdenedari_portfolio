import React from "react";
import { Box } from "@mui/material";

export default function Section4() {
  return (
    <section className="third-section section left">
      <div className="progress-wrapper progress-bar-wrapper-left">
        <div className="progress-bar green-background"></div>
      </div>

      <div className="section-intro-wrapper green-text green-border">
        <h1 className="section-title green-text green-border">
          <span className="section-title-text green-text">Work Experience</span>
          <div className="section-title-decoration styleOne green-border"></div>
          <div className="section-title-decoration styleTwo green-border"></div>
          <div className="section-title-decoration styleThree green-background green-border"></div>
        </h1>
        <span className="section-number green-text">03</span>
      </div>

      <div className="section-detail-wrapper">
        <p>
          {/* <img
                    src="https://media.licdn.com/dms/image/C4D0BAQHRrdtx0zZ4VQ/company-logo_100_100/0/1660064387614?e=2147483647&amp;v=beta&amp;t=saO3MpAFB1eCulaEOsll2EuDA2ziohWuANz1HJcvPaI"
                    alt="Cyber Intelligence Solutions Graphic"
                  /> */}
        </p>
        <br />
        <br />
        <h4 id="-cyber-intelligence-solutions-https-www-linkedin-com-company-official-cis-trk-public_profile_experience-item_profile-section-card_subtitle-click-">
          <a href="https://cyberintelligencesolution.com">
            Cyber Intelligence Solutions
          </a>
        </h4>
        <br />
        <p>
          <strong>Ethical Hacker Intern</strong> [ Oct 2022 - Dec 2022 ]
        </p>
        <p>
          <strong>Junior Cybersecurity Trainee</strong> [ Jan 2023 - Present ]
        </p>
        <br />
        <p>
          • Performing Web Application Penetration Testing.
          <br />• Conducting Seminar at Colleges.
          <br />• Performing Black box, Grey box &amp; White box Pentests.
          <br />• Creating reports, detailing assessment findings &amp; blog
          writing.
        </p>
        <br />
        <br />
        <picture>
          {/* <img
                    img
                    src="https://media.licdn.com/dms/image/D5622AQHxeijgQwXRlA/feedshare-shrink_800/0/1680503845504?e=1684972800&v=beta&t=0eWuE7XO-sy3b_WyWphDPJpo1GEsve87Cs8U6UTui2w"
                    width="200"
                  /> */}
        </picture>

        <picture>
          {/* <img
                    img
                    src="https://media.licdn.com/dms/image/C562DAQH95qId0yOFRw/profile-treasury-image-shrink_160_160/0/1676288307104?e=1683892800&v=beta&t=i5ELsoMvDcq0fjg9TITmgyYfJCco0MuFD_FwLZN0Br0"
                    width="170"
                  /> */}
        </picture>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 id="recommendation-letter">Recommendation Letter</h2>
        <br />
        <br />
        <p>
          {/* <img
                    src="https://github.com/MdAmiruddin/mdamiruddin-3dportfolio/raw/main/public/social/credly.jpg"
                    width="500"
                    alt=""
                  /> */}
        </p>
      </div>
    </section>
  );
}

import React from "react";
import { Box } from "@mui/material";

export default function Section2() {
  return (
    <section className="first-section section left">
      <div className="progress-wrapper progress-bar-wrapper-left">
        <div className="progress-bar"></div>
      </div>

      <div className="section-intro-wrapper">
        <h1 className="section-title">
          <span className="section-title-text">About Me</span>
          <div className="section-title-decoration styleOne"></div>
          <div className="section-title-decoration styleTwo"></div>
          <div className="section-title-decoration styleThree"></div>
        </h1>
        <span className="section-number">01</span>
      </div>

      <div className="section-detail-wrapper">
        {/* <!-- <h3 className="section-heading">Hello!</h3> --> */}
        <p className="section-text">
          My name is Md Amiruddin and Im currently learning from Hack the Box &
          TryHackMe. My passion lies in identifying, preventing, and resolving
          computer security issues and I am actively seeking internships or
          entry-level positions within the field.
        </p>
        <p className="section-text">
          I have a deep foundational understanding of Web application
          penetration testing, classNameic encryption and cryptography, as well
          as operating system and network security such as intrusion
          detection/prevention systems. I am well-versed in not only the
          application of modern defense solutions, but also the development and
          testing of custom security protocols.
        </p>
        <p className="section-text">
          I am always looking for an opportunity to demonstrate my knowledge of
          cyber security and to collaborate with others in the field. I am eager
          to make a contribution to any computer security initiatives, and I
          believe my technical expertise combined with my willingness to learn
          and act quickly make me an excellent candidate for any cyber-security
          related positions.
        </p>
        <p className="section-text">
          I love creating CTF Machines and love doing Machines From
          HackTheBox!✌️.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="education">EDUCATION</h1>
        <br />
        <br />
        <br />
        <p>
          {/* <img
                    src="https://media.licdn.com/dms/image/C4D0BAQEiSLeqbBsKZQ/company-logo_100_100/0/1648793910725?e=2147483647&amp;v=beta&amp;t=rtSH8mQ2u-JyD2ocfTUV7kEyHGxkkAjF_kNm1DRCBZc"
                    alt="Government College of Engineering and Leather Technology Graphic"
                  /> */}
        </p>
        <br />
        <br />
        <h3 id="-government-college-of-engineering-and-leather-technology-https-www-linkedin-com-school-gcelt-trk-public_profile_school-">
          <a href="https://www.linkedin.com/school/gcelt/?trk=public_profile_school">
            Government College of Engineering and Leather Technology
          </a>
        </h3>
        <br />
        <br />
        <h4 id="bachelor-of-technology-in-leather-technology">
          Bachelor of Technology In Leather Technology
        </h4>
        <br />
        <br />
        <p>CGPA - 9.0</p>
        <br />
        <p>[ 2020 - 2024 ]</p>
      </div>
    </section>
  );
}

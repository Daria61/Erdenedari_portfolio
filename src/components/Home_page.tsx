import React from "react";

export default function Home_page() {
  return (
    <body className="dark-theme">
      {/* <!-- Preloader --> */}
      {/* <div className="preloader">
        <div className="preloader-wrapper">
          <div className="loading">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div> */}
      <div className="page">
        <div className="page-wrapper">
          <section className="hero">
            <div className="hero-wrapper">
              {/* <!-- Intro Stuff --> */}
              <div className="intro-text">Welcome to my portfolio!</div>
              <div className="arrow-svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path
                    fill="currentColor"
                    d="M12 14.95q-.2 0-.375-.063-.175-.062-.325-.212L6.675 10.05q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.925-3.925q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z"
                  />
                </svg>
              </div>

              <div className="hero-main">
                <h1 className="hero-main-title">Erdenedari Ch</h1>
                <p className="hero-main-description">
                  Senior engineer at ECM Billing Center
                </p>
              </div>

              <div className="hero-second">
                <p className="hero-second-subheading first-sub">
                  Erdenedari Ch
                </p>
                <p className="hero-second-subheading second-sub">Portfolio</p>
              </div>
            </div>
          </section>

          <div className="first-move section-margin"></div>

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
                My name is Md Amiruddin and Im currently learning from Hack the
                Box & TryHackMe. My passion lies in identifying, preventing, and
                resolving computer security issues and I am actively seeking
                internships or entry-level positions within the field.
              </p>
              <p className="section-text">
                I have a deep foundational understanding of Web application
                penetration testing, classNameic encryption and cryptography, as
                well as operating system and network security such as intrusion
                detection/prevention systems. I am well-versed in not only the
                application of modern defense solutions, but also the
                development and testing of custom security protocols.
              </p>
              <p className="section-text">
                I am always looking for an opportunity to demonstrate my
                knowledge of cyber security and to collaborate with others in
                the field. I am eager to make a contribution to any computer
                security initiatives, and I believe my technical expertise
                combined with my willingness to learn and act quickly make me an
                excellent candidate for any cyber-security related positions.
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

          <div className="second-move section-margin"></div>

          <section className="second-section section right">
            <div className="progress-wrapper progress-bar-wrapper-right">
              <div className="progress-bar blue-background"></div>
            </div>

            <div className="section-intro-wrapper blue-text blue-border">
              <h1 className="section-title blue-text blue-border">
                <span className="section-title-text blue-text">
                  My Projects
                </span>
                <div className="section-title-decoration styleOne blue-border"></div>
                <div className="section-title-decoration styleTwo blue-border"></div>
                <div className="section-title-decoration styleThree blue-background blue-border"></div>
              </h1>
              <span className="section-number blue-text">02</span>
            </div>

            <div className="section-detail-wrapper">
              <h3 className="section-heading">CTF BLOG WRITEUP</h3>
              <p className="section-text">
                This project is a website dedicated to CTF (Capture The Flag)
                writeups. The website was designed with the goal of providing
                detailed and comprehensive analysis on the various challenges
                from a wide variety of CTF events.
              </p>
              <p className="section-text">
                The website consists of a landing page which contains a list of
                all the CTF events with links to the write-ups. Each write-up
                contains a detailed review and explanation of the challenge, an
                overview of the techniques used to solve it, and a list of key
                points that were learned throughout the experience.
              </p>
              <br />
              <p>
                <picture>
                  {/* <img
                      src="https://github.com/MdAmiruddin/MdAmiruddin.github.io/raw/main/images/blog.gif"
                      width="500"
                    /> */}
                </picture>
              </p>
              <br />
              <p>
                <a
                  href="https://mdamiruddin.github.io/"
                  title="CTF Blog Writeup"
                >
                  See Project
                  {/* <img
                      src="https://static.licdn.com/aero-v1/sc/h/8w0vew433o9nluoruq9k5eqy"
                      alt="External link"
                    /> */}
                </a>
              </p>

              <h3 className="section-heading">
                Website Vulnerability Analyzer
              </h3>
              <p className="section-text">
                This project is a web vulnerability analyzer written in Python.
                It aims to scan websites for potential security flaws and report
                them to the user. The program will first assess the target site
                for missing patches and outdated software, and then proceed to
                analyze any links associated with the page for malicious
                content.
              </p>
              <p className="section-text">
                Once this task is complete, the program will then alert the user
                of any discovered vulnerabilities in a detailed report. The
                report will provide information on the discovered
                vulnerabilities, and suggest remedies to address the issue.
                Additionally, the program will allow users to set specific
                parameters and customize their security scans.
              </p>
              <br />
              <p>
                <a href="https://github.com/MdAmiruddin/Website-Vulnerability-Analyzer">
                  See Project
                  {/* <img
                      src="https://static.licdn.com/aero-v1/sc/h/8w0vew433o9nluoruq9k5eqy"
                      alt="External link"
                    /> */}
                </a>
              </p>

              <h3 className="section-heading">WhatsApp Automation bot</h3>
              <p className="section-text">
                This project is about the development of an automated chatbot
                for Whatsapp that can be used to manage appointments and orders
                for any store or service. The chatbot will be able to handle
                incoming messages, notify customers about availability, confirm
                and schedule appointments, take orders, process and keep track
                of issues.
              </p>
              <p className="section-text">
                This powerful tool improves productivity and communication with
                customers and frees up business owners’ time to focus on other
                areas. The bot will be integrated with WhatsApp, allowing
                businesses to easily reach their customers and provide a
                superior customer experience. You can also add custom features
                to the bot for unique business needs.
              </p>
              <br />
              <video controls width="500">
                <source
                  src="https://user-images.githubusercontent.com/86834649/233000022-1cfbabd8-15f5-449b-b409-b5ab44849cc9.mp4"
                  type="video/webm"
                />
              </video>
              <br />
              <br />
              <p>
                <a
                  href="https://github.com/MdAmiruddin/whatsapp-automation"
                  title="WhatsApp Automation bot"
                >
                  See Project
                  {/* <img
                      src="https://static.licdn.com/aero-v1/sc/h/8w0vew433o9nluoruq9k5eqy"
                      alt="External link"
                    /> */}
                </a>
              </p>
              <h3 className="section-heading">
                CTF - Valentine Special Challenge
              </h3>
              <p className="section-text">
                In this project, I create a Capture The Flag (CTF) challenge
                based on cryptography and hash cracking.
              </p>
              <p className="section-text">
                I implemented a multitude of cryptography algorithms such as
                AES256-CBC, BASE-256, which had to be cracked or decrypted in
                order to reveal the flag. The challenge required the user to
                gain enough background knowledge on cryptography and hash
                cracking principles in order to solve the Flag.
              </p>
              <br />
              <picture>
                {/* <img
                    src="https://raw.githubusercontent.com/MdAmiruddin/valentine-special-tryhackme/main/Assets/vsc.png"
                    width="500"
                  /> */}
              </picture>
              <br />
              <br />
              <p>
                <a
                  href="https://tryhackme.com/jr/valentinespecialchallenge"
                  title="CTF ROOM"
                >
                  See Project
                  {/* <img
                      src="https://static.licdn.com/aero-v1/sc/h/8w0vew433o9nluoruq9k5eqy"
                      alt="External link"
                    /> */}
                </a>
              </p>
              <h3 className="section-heading">CTF Machine - Crypton</h3>
              <p className="section-text">
                In this project, I created a Capture the Flag (CTF) challenge
                based on cryptography. The challenge involved a series of
                cryptography-related puzzles that had to be solved by players.
                The puzzles were designed to test the players’ understanding of
                core cryptographic concepts, such as hashing, symmetric and
                asymmetric encryption, digital signatures, and more.
              </p>
              <p className="section-text">
                Additionally, the puzzles featured a variety of hash-cracking
                activities, including brute-force and dictionary attacks. The
                challenge was designed to increase players familiarity with the
                fundamentals of cryptography. The puzzle-solving challenges were
                designed to be both fun and educational, so that players can
                learn cryptography by putting their skills to the test in a
                simulated CTF setting.
              </p>
              <br />
              <picture>
                {/* <img
                    src="https://raw.githubusercontent.com/MdAmiruddin/valentine-special-tryhackme/main/Assets/crypton.png"
                    width="500"
                  /> */}
              </picture>
              <br />
              <br />
              <p>
                <a href="https://tryhackme.com/jr/crypton" title="CTF ROOM">
                  See Project
                  {/* <img
                      src="https://static.licdn.com/aero-v1/sc/h/8w0vew433o9nluoruq9k5eqy"
                      alt="External link"
                    /> */}
                </a>
              </p>
            </div>
          </section>

          <div className="third-move section-margin"></div>

          <section className="third-section section left">
            <div className="progress-wrapper progress-bar-wrapper-left">
              <div className="progress-bar green-background"></div>
            </div>

            <div className="section-intro-wrapper green-text green-border">
              <h1 className="section-title green-text green-border">
                <span className="section-title-text green-text">
                  Work Experience
                </span>
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
                <strong>Junior Cybersecurity Trainee</strong> [ Jan 2023 -
                Present ]
              </p>
              <br />
              <p>
                • Performing Web Application Penetration Testing.
                <br />• Conducting Seminar at Colleges.
                <br />• Performing Black box, Grey box &amp; White box Pentests.
                <br />• Creating reports, detailing assessment findings &amp;
                blog writing.
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

          <div className="second-move section-margin"></div>

          <section className="second-section section right">
            <div className="progress-wrapper progress-bar-wrapper-right">
              <div className="progress-bar blue-background"></div>
            </div>

            <div className="section-intro-wrapper blue-text blue-border">
              <h1 className="section-title blue-text blue-border">
                <span className="section-title-text blue-text">CONTACT</span>
                <div className="section-title-decoration styleOne blue-border"></div>
                <div className="section-title-decoration styleTwo blue-border"></div>
                <div className="section-title-decoration styleThree blue-background blue-border"></div>
              </h1>
              <span className="section-number blue-text">04</span>
            </div>

            <div className="section-detail-wrapper">
              <h3 className="section-heading">Linkedin</h3>
              <p className="section-text">
                If youd like to get in touch, please feel free to connect with
                me on LinkedIn. On LinkedIn, I am active in discussions about
                network security, data privacy, and vulnerability management. I
                am available for interviews and I look forward to connecting
                with other professionals in the cybersecurity field.
              </p>
              <br />
              <p>
                <a href="https://www.linkedin.com/in/mdamiruddin">
                  {/* <img
                      src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&amp;logoColor=white"
                      alt="LinkedIn"
                    /> */}
                </a>
              </p>
              <h3 className="section-heading">Github</h3>
              <p className="section-text">
                I am an aspiring cybersecurity student and avid tech enthusiast.
                I can be found on Github, where I participate in the open source
                community. I am always searching for different ways to learn and
                share knowledge pertaining to cyber security. I stay up to date
                with the newest technology, vulnerabilities, trends, and cyber
                security advancements. If you are looking to collaborate with
                someone who has a passion for learning and innovation, then
                youve come to the right place!
              </p>
              <br />
              <p>
                <a href="https://github.com/mdamiruddin">
                  {/* <img
                      src="https://img.shields.io/badge/Github-12100E?logo=github&amp;logoColor=white"
                      alt="Medium"
                    /> */}
                </a>
              </p>
              <h3 className="section-heading">Medium</h3>
              <p className="section-text">
                Im a cybersecurity enthusiast who enjoys writing CTF writeups on
                Medium. I share my experience, insights and lessons to help
                others learn. As I continue to work in this field, I aim to help
                build a global community where enthusiasts join forces and
                engage in meaningful conversations.
              </p>
              <br />
              <p>
                <a href="https://mdamiruddin.medium.com">
                  {/* <img
                      src="https://img.shields.io/badge/Medium-12100E?logo=medium&amp;logoColor=white"
                      alt="Medium"
                    /> */}
                </a>
              </p>
              <h3 className="section-heading">CTF Profiles</h3>
              <br />
              <p>
                <a href="https://app.hackthebox.com/profile/1188714">
                  {/* <img
                      src="https://www.hackthebox.com/badge/image/1188714"
                      alt="HackTheBox"
                    /> */}
                </a>
              </p>
              <br />
              <br />
              <p>
                <a href="https://tryhackme.com/p/lordofficial">
                  {/* <img
                      src="https://tryhackme-badges.s3.amazonaws.com/lordofficial.png"
                      alt="TryHackMe"
                    /> */}
                </a>
              </p>
            </div>
          </section>

          <footer className="footer">
            <span className="footer__copyright">
              Copyright &copy; 2024 - Erdenedari Ch
            </span>
          </footer>
          <br />
          <br />
        </div>
      </div>
    </body>
  );
}

import React from "react";
import { Box } from "@mui/material";

export default function Section3() {
  return (
    <section className="second-section section right">
      <div className="progress-wrapper progress-bar-wrapper-right">
        <div className="progress-bar blue-background"></div>
      </div>

      <div className="section-intro-wrapper blue-text blue-border">
        <h1 className="section-title blue-text blue-border">
          <span className="section-title-text blue-text">My Projects</span>
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
          writeups. The website was designed with the goal of providing detailed
          and comprehensive analysis on the various challenges from a wide
          variety of CTF events.
        </p>
        <p className="section-text">
          The website consists of a landing page which contains a list of all
          the CTF events with links to the write-ups. Each write-up contains a
          detailed review and explanation of the challenge, an overview of the
          techniques used to solve it, and a list of key points that were
          learned throughout the experience.
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
          <a href="https://mdamiruddin.github.io/" title="CTF Blog Writeup">
            See Project
            {/* <img
                      src="https://static.licdn.com/aero-v1/sc/h/8w0vew433o9nluoruq9k5eqy"
                      alt="External link"
                    /> */}
          </a>
        </p>

        <h3 className="section-heading">Website Vulnerability Analyzer</h3>
        <p className="section-text">
          This project is a web vulnerability analyzer written in Python. It
          aims to scan websites for potential security flaws and report them to
          the user. The program will first assess the target site for missing
          patches and outdated software, and then proceed to analyze any links
          associated with the page for malicious content.
        </p>
        <p className="section-text">
          Once this task is complete, the program will then alert the user of
          any discovered vulnerabilities in a detailed report. The report will
          provide information on the discovered vulnerabilities, and suggest
          remedies to address the issue. Additionally, the program will allow
          users to set specific parameters and customize their security scans.
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
          This project is about the development of an automated chatbot for
          Whatsapp that can be used to manage appointments and orders for any
          store or service. The chatbot will be able to handle incoming
          messages, notify customers about availability, confirm and schedule
          appointments, take orders, process and keep track of issues.
        </p>
        <p className="section-text">
          This powerful tool improves productivity and communication with
          customers and frees up business owners’ time to focus on other areas.
          The bot will be integrated with WhatsApp, allowing businesses to
          easily reach their customers and provide a superior customer
          experience. You can also add custom features to the bot for unique
          business needs.
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
        <h3 className="section-heading">CTF - Valentine Special Challenge</h3>
        <p className="section-text">
          In this project, I create a Capture The Flag (CTF) challenge based on
          cryptography and hash cracking.
        </p>
        <p className="section-text">
          I implemented a multitude of cryptography algorithms such as
          AES256-CBC, BASE-256, which had to be cracked or decrypted in order to
          reveal the flag. The challenge required the user to gain enough
          background knowledge on cryptography and hash cracking principles in
          order to solve the Flag.
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
          In this project, I created a Capture the Flag (CTF) challenge based on
          cryptography. The challenge involved a series of cryptography-related
          puzzles that had to be solved by players. The puzzles were designed to
          test the players’ understanding of core cryptographic concepts, such
          as hashing, symmetric and asymmetric encryption, digital signatures,
          and more.
        </p>
        <p className="section-text">
          Additionally, the puzzles featured a variety of hash-cracking
          activities, including brute-force and dictionary attacks. The
          challenge was designed to increase players familiarity with the
          fundamentals of cryptography. The puzzle-solving challenges were
          designed to be both fun and educational, so that players can learn
          cryptography by putting their skills to the test in a simulated CTF
          setting.
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
  );
}

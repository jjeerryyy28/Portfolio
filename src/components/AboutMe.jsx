import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../asset/img/myImg.jpg";
import cvResume from "../asset/resume/Prajwal_Nikhar_Resume.pdf";
import backgroundMusic from "../asset/music/calm.mp3";
import "bootstrap-icons/font/bootstrap-icons.css";

import myImg from "../asset/img/myImage.png";

export const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAlternateImage, setIsAlternateImage] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleImage = () => {
    setIsAlternateImage(!isAlternateImage); // Toggle the state on image click
  };

  return (
    <div>
      <section className="about" id="about-me">
        <audio
          ref={audioRef}
          src={backgroundMusic}
          loop
          style={{ display: "none" }}
        />
        <Container>
          <Row>
            <Col md={6}>
              <div className="about-image" onClick={toggleImage}>
                {/* <img src={myImage} alt="About Me" /> */}
                <img src={isAlternateImage ? myImg : myImage} alt="About Me" />
              </div>
            </Col>
            <Col md={6}>
              <div className="about-content">
                <h2 style={{ fontFamily: "Raleway, serif" }}>
                  Know Who <span style={{ color: "#c770f0" }}>I am</span>
                </h2>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    width: "650px",
                  }}
                >
                  Hi Everyone, I am{" "}
                  <span style={{ color: "#c770f0" }}>Prajwal Nikhar</span> from{" "}
                  <span style={{ color: "#c770f0" }}>
                    Nagpur, Maharashtra, India
                  </span>
                  . <br />I am currently pursuing a{" "}
                  <span style={{ color: "#c770f0" }}>
                    Full Stack Development
                  </span>{" "}
                  Course through distance learning at{" "}
                  <span style={{ color: "#c770f0" }}>IIT Roorkee</span>. <br />
                  Additionally I am currently employes as a System Engineer at{" "}
                  <span style={{ color: "#c770f0" }}>
                    Tata Consultancy Services
                  </span>
                  .
                  <br />
                  <br />
                  Apart from coding, some other activities that I love to do!
                  <ol>
                    <li>Playing Games</li>
                    <li>Writing Tech Blogs</li>
                    <li>Travelling</li>
                  </ol>
                  <p style={{ color: "#9b7eac", textAlign: "right" }}>
                    "Strive to build things that make a difference!"
                  </p>
                  <br />
                  <br />
                </p>
                <a href={cvResume} download>
                  Download CV
                </a>
                <button
                  onClick={toggleAudio}
                  style={{
                    backgroundColor: "green",
                    marginLeft: "20px",
                    padding: "8px",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                >
                  {isPlaying ? "Pause Music" : "Play Music"}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
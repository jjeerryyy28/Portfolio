import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../asset/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const toRotate = ["Web Developer", "Web Designer", "Automation Tester"];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? text.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
    
      setText(updatedText);
    
      if (isDeleting) {
        setDelta((prevDelta) => (prevDelta >= 50 ? prevDelta - 20 : prevDelta));
      }
    
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setLoopNum(loopNum + 1);
        setDelta(300);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(300 - Math.random() * 100);
      }
    };
  
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => {
      clearInterval(ticker);
    };
  }, [text, loopNum, isDeleting, delta]);


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h3>LET ME <span style={{ color: "#c770f0" }}>INTRODUCE</span> MYSELF</h3>
                  <h1>
                    {`Hi! I'm Prajwal`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️ 
                    <br />
                    I am fluent in classics like <span style={{color: "#c770f0"}}> <i>Java, Javascript and Typescript</i></span>.
                    <br /><br />
                    My field of Interest's are building new <span style={{color: "#c770f0"}}> <i>Web Technologies and Products </i></span>and also in
                    areas related to <span style={{color: "#c770f0"}}> <i>Networking</i></span>.
                    <br />
                    Whenever possible, I also apply
                    my passion for developing products with <span style={{color: "#c770f0"}}> <i>Node.js</i></span>and <span style={{color: "#c770f0"}}> <i>Modern
                    Javascript Library</i></span> and <span style={{color: "#c770f0"}}> <i>Frameworks like React.js</i></span>
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

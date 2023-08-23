import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pharmacy from "../asset/img/pharmacy.png";
import resumeFinder from "../asset/img/resumeFinder.png";
import pizza from "../asset/img/main-pizza.jpg";
import movies from "../asset/img/movieReact.png";
import food from "../asset/img/FoodApp.png";
import editor from "../asset/img/markdownEditor.png";
import colorSharp2 from "../asset/img/color-sharp2.png";
import video from "../asset/img/starship_-_71654 (1080p).mp4";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Project_Food App",
      description: "A perfect recipe to make delicious food",
      imgUrl: food,
      url: "https://jjeerryyy28.github.io/react-useEffect-001/",
    },
    {
      title: "MarkDown Editor",
      description: "Code what you want with its preview",
      imgUrl: editor,
      url: "https://jjeerryyy28.github.io/react-states-002/",
    },
    {
      title: "Movie-useEffect",
      description: "Find your Favorite movie",
      imgUrl: movies,
      url: "https://jjeerryyy28.github.io/React-UseEffect-002/",
    },
    {
      title: "Project_Pizza App",
      description: "Delivery to the doorstep",
      imgUrl: pizza,
      url: "https://jjeerryyy28.github.io/Pizza_Ordering_App/Pizza-Ordering-Application/index.html",
    },
    {
      title: "Resume Finder",
      description: "Helps to find suitable resume",
      imgUrl: resumeFinder,
      url: "https://jjeerryyy28.github.io/G3-B3_JS_GradedProject2/html/index.html",
    },
    {
      title: "Pharmacy",
      description: "Covid Care Web Page",
      imgUrl: pharmacy,
      url: "https://jjeerryyy28.github.io/G3-B3_HTML-CSS_GradedProject1/G3-B3/index.html",
    },
  ];

  const chunkProjects = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, (index + 1) * size)
    );
  };

  const projectsPerRow = 3;
  const chunkedProjects = chunkProjects(projects, projectsPerRow);

  return (
    <section className="project" id="project">
      <video autoPlay loop muted style={{position: "absolute", backgroundSize: "cover"}}>
        <source src={video} type="video/mp4"/>
      </video>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <br /><br />
                  <h2><span style={{color: "purple"}}>Projects</span></h2>
                  <p style={{textAlign: "left", color: "#fff"}}>
                    Welcome to my Projects section, where I showcase a diverse
                    collection of web applications that I've built. Each project
                    represents my passion for creating innovative solutions and
                    bringing ideas to life through code.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {chunkedProjects.map((rowProjects, rowIndex) => (
                          <Row key={rowIndex} className="rows">
                            {rowProjects.map((project, index) => (
                              <Col
                                key={index}
                                md={4}
                                style={{ marginBottom: "30px" }}
                              >
                                <Link to={project.url}>
                                  <ProjectCard {...project} />
                                </Link>
                              </Col>
                            ))}
                          </Row>
                        ))}
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>Updating soon...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Updating soon...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

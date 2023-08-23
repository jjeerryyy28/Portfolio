import "react-multi-carousel/lib/styles.css";
import videoBg from "../asset/img/asteroids.mp4";
import js from "../asset/img/js.png";
import java from "../asset/img/java.png";
import cplusplus from "../asset/img/c++.png";
import html from "../asset/img/html.png";
import css from "../asset/img/css.png";
import nodejs from "../asset/img/node-js.png";
import react from "../asset/img/react.png";
import git from "../asset/img/git.png";
import figma from "../asset/img/figma.png";
import mySQL from "../asset/img/mysql.png";
import typeScript from "../asset/img/typescript.png";
import jira from "../asset/img/jira.png"
import github from "../asset/img/github.png"
import vscode from "../asset/img/vscode.png"
import intellij from "../asset/img/intellij.png"

export const Skills = () => {
  const skillsData = [
    { image: cplusplus },
    { image: java },
    { image: html },
    { image: css },
    { image: js },
    { image: typeScript },
    { image: react },
    { image: nodejs },
    { image: git },
    { image: mySQL },
    { image: figma },
  ];
  
  const toolData= [ 
    {image: vscode},
    {image: jira},
    {image: github},
    {image: intellij}
  ]
  return (
    <section className="skill" id="skills">
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <div>
          <div>
            <div className="main">
              <h2>
                Professional <span className="color-span">Skillset</span>
              </h2>
              <div className="cards">
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.image} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </div>
              <br /><br /><br />
              <p className="tools-p">Tools <span style={{color: "purple"}}>I Use</span></p>
              <div className="tools">
                {toolData.map((tools, index) => (
                  <div className="item" key={index}>
                    <img src={tools.image} alt={tools.name} />
                    <h5>{tools.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};

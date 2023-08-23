import React, { useState } from "react";
import { Col } from "react-bootstrap";
import videoSource from '../asset/img/clickme.mp4'

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => setShowVideo(false)}
      >
        <img src={imgUrl} alt={title} />
        {showVideo && (
          <video autoPlay loop muted className="proj-video">
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

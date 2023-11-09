import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about_us">
      <hr></hr>
      <div className="about_left">
        <div className="about_title">
          <div className="about_subtitle">
            <p></p>
            <span>Our purpose</span>
          </div>
          <div className="about-title">
            <h1>Who we are</h1>
          </div>
          <div className="about_us_des">
            <p>
              Student Chapters provide unique opportunities for networking,
              mentoring and bonding over common interests. They provide support
              both within the student community and to local communities outside
              the institution.
            </p>
          </div>
        </div>
      </div>
      <div className="about_right">
        <img src="./images/we_1.svg" alt="we are" loading="lazy"/>
      </div>
    </div>
  );
};

export default About;

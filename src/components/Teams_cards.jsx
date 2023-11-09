import React from "react";
import "../styles/Teams.css";

const CardsTeam = (props) => {
  const handleEmailClick = (recipient) => {
    const subject = 'Hello from My ACM Student chapter webpage';
    const body = 'Hi,\n\nI hope you\'re doing well. I wanted to reach out and say...';
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };
  return (
    <div className="card_team">
      <div className="card_img_team">
        <img src={props.img} alt="team_img" loading="lazy"/>
      </div>
      <div className="card_team_foot">
        <div className="foot_content">
          <h4>{props.name}</h4>
          <p>{props.role}</p>
        </div>
        <div className="social_icons_team">
          <i class="fa-solid fa-envelope" onClick={() => handleEmailClick(props.mail)}></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-solid fa-phone"></i>
        </div>
      </div>
    </div>
  );
};

export default CardsTeam;

import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    let OpenSocialIcons = (link) => {
        console.log("working")
        window.open(link , "_blank")
      }
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="newsletter_container">
          <div className="newsletter_title">
            <div className="sub_title_news">
                <p></p>
              <span>Be in update</span>
            </div>
            <div className="news_title">
              <h1>
                Add Interest to get regular update
              </h1>
            </div>
          </div>
          <div className="add_interest">
            <button>Interested!</button>
          </div>
        </div>
      </div>
      <div className="footer_social">
        <div className="follow_us">
          <p>follow us</p>
        </div>
        <div className="social_icons_footer">
          <i class="fa-brands fa-linkedin" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
          <i class="fa-solid fa-envelope" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
          <i class="fa-brands fa-x-twitter" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
          <i class="fa-brands fa-instagram" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
          <i class="fa-brands fa-facebook" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;

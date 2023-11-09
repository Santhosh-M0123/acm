import React from 'react'
import "../styles/Navbar.css";

const Navbar = () => {
  let OpenSocialIcons = (link) => {
    console.log("working")
    window.open(link , "_blank")
  }
  return (
    <div className='navbar'>
        <div className="nav_left">
            <img src="./images/logo.png" alt="acm_logo" />
        </div>
        <div className="nav_center">
          {/* <div className="dropdown_icons">
          <i class="fa-solid fa-chevron-down"></i>
          </div> */}
        <div className="icons_nav">
        <i class="fa-brands fa-linkedin" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
        <i class="fa-solid fa-envelope" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
        <i class="fa-brands fa-x-twitter" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
        <i class="fa-brands fa-instagram" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
        <i class="fa-brands fa-facebook" onClick={() => OpenSocialIcons("https://www.linkedin.com/company/snsceacm")}></i>
        </div>
        </div>
        <div className="nav_right">
            <img src="./images/sns_logo.png" alt="sns_logo" />
        </div>
    </div>
  )
}

export default Navbar
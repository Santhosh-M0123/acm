import React, { useState, useEffect } from "react";
import "../styles/Upcoming.css";
import UpcomingCards from "../components/UpcomingCards";
import { UpcomingData } from "../Data/Upcoming";
import Timer from "../components/Timer";
const Upcoming = () => {
    const targetDate = new Date(UpcomingData[0].date).getTime();
    let d = UpcomingData.length;
    console.log(UpcomingData.length)
    return(
        <div className="upcoming">
          <hr></hr>
          <div className="upcoming_title">
            <div className="upcoming_subtitle">
              <p></p>
              <span>Let's meet</span>
            </div>
            <div className="upcoming_title_des">
              <h1>Upcoming exposures</h1>
              <p>Have an new exposure with an industrial experts</p>
            </div>
            <div className="timing">
              <div>
                <Timer targetDate={targetDate}/>
              </div>
            </div>
          </div>
          <div className="brouchers">
            {UpcomingData.map((i, index) => {
              return <UpcomingCards img={i.img} link={i.link} key = {index}/>;
            })}
          </div>
          <div className="download">
            <a href={UpcomingData[0].img} download><button>Download Broucher <i class="fa-solid fa-arrow-down"></i></button></a>
          </div>
        </div>
    )
};

export default Upcoming;

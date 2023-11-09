import "../styles/Teams.css";
import CardsTeam from "../components/Teams_cards";
import {Team} from "../Data/Team";
import { useState } from "react";
// import { useState,useEffect } from "react";

const Teams = () => {
    let [toggle,setToggle] = useState(false);
    let ToggleContainer = () => {
        toggle == true ? setToggle(false) : setToggle(true);
    }
    let OpenSocial = (Url) => {
        window.open(Url,"_blank");
    }
  return (
    <div className='teams'>
        <hr></hr>
        <div className="teams_title">
            <div className="side_title">
            <p></p>
            <span>Our Team</span>
            </div>
            <h1>Meet our team of creators,<br></br>designers, problem solvers<br></br> and design thinkers</h1>
            <button onClick={() => ToggleContainer()}>Visit us</button>
            {toggle ? (
                <div className="hidden_links" style={{transition:"0.5s"}}>
                <div className="links_container_hidden">
                    {Team.map((i,index)=>{
                        return(
                            <div key={index}><img src={i.img[0]} loading="lazy" onClick={()=> OpenSocial("https://youtube.com")}/></div>
                        )
                    })}
                </div>
            </div>
            ): ""}
        </div>
        <div className="teams_cards">
            {Team.map((i,index) => {
                return(
                    <CardsTeam name={i.name} role={i.role} key={index} img={i.img[0]} mail={i.mail}/>
                );
            })}
        </div>
    </div>
  )
}

export default Teams
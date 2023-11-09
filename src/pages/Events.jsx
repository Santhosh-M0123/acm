import "../styles/Events.css";
import Eventcards from "../components/Eventcards";
import { PastEvents } from "../Data/Pastevents";
const Events = () => {
  return (
    <div className="past_events">
      <hr></hr>
      <div className="event_title">
        <div className="short_title_event">
          <p></p>
          <span>Industrial exposure</span>
        </div>
        <h1>Our events memorials</h1>
      </div>
      <div className="container_event">
            {PastEvents.map((i,index)=>{
              return(
                <Eventcards img={i.img} title={i.title} description={i.description} key={index}/>
              );
            })}
      </div>
    </div>
  );
};

export default Events;

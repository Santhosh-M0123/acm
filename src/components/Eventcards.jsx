
const Eventcards = (props) => {
  return (
    <div>
      <div className="event_container">
        <div className="event_img">
          <img src={props.img} alt="image" loading="lazy"/>
        </div>
        <div className="event_">
          <div className="event_overlay">
            <div className="event_des">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventcards;

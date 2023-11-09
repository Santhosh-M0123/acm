import "../styles/Vision.css";

const Vision = () => {
  return (
    <div className="vision">
      <hr></hr>
      <div className="vision_title">
        <div className="vision_subtitle">
          <p></p>
          <span>What we do</span>
        </div>
        <div className="vision_title_des">
          <h1>Our vision</h1>
        </div>
      </div>
      <div className="vision_content">
        {/* <div className="moto">
                <h1>Redesigning common mind towards excellence</h1>
            </div> */}
        <div className="svg_vision">
          <img src="./images/vision.svg" alt="vision" loading="lazy"/>
        </div>
        <div className="moto">
          <h1>
            <span style={{ color: "#F5EE3E" }}>"</span> Redesigning common mind
            towards excellence! <span style={{ color: "#F5EE3E" }}>"</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Vision;

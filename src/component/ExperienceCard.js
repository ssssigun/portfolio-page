import "../css/ExperienceCard.css";

import { GoBook } from "react-icons/go";
function ExperienceCard({color, title, period, detail, picture}) {
  const headColor ={
    backgroundColor : color
  }
    return (
      <div className="experienceCard">
        <div className="sideBar">
          <div className="verticalBar"/>
          <div className="verticalBarHead">
            <div className="verticalBarHeadIcon" style={headColor}>
              <GoBook className="reactIcon" size={25} color="white"/>
            </div>
          </div>

        </div>
        <div className="speehBubble">
          <div className="speehBubbleTittle">
            <span className="speehBubbleName commonTittle">{title}</span>
            <span className="commonSubTittle">{period}</span>
          </div>
          <div className="speehBubbleComment">
            <p className="speehBubbleText commonDetail">
              {detail}
            </p>
            <div className="speehBubbleImageWrap">
              <img src = {`${process.env.PUBLIC_URL}/img/${picture}`} className="speehBubbleImage"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ExperienceCard;
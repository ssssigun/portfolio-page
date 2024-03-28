import "../css/Experience.css";
import ExperienceCard from "../component/ExperienceCard.js";
import Title from "../component/Title.js";
import { forwardRef } from "react";
const Experience = forwardRef((props, ref) => {
 const exp = require("../json/experienceList.json");
    return (
      <ul className="experience" ref={experienceRef => (ref.current[3] = experienceRef)}>
        <Title title ={"Experience"} />
        {
          exp.map((ele =>{
            return(
              <li><ExperienceCard color={ele.color} title={ele.title} period={ele.period} detail={ele.detail} picture={ele.picture}/></li>
            )
          }))
        }
        <li className="endCard">
          <div className="sideBar">
            <div className="verticalBarHead">
              <div className="verticalBarEndPoint"/>
            </div>
          </div>
          <div className="blank"/>
        </li>
      </ul>
    );
  }) 
  
  export default Experience;
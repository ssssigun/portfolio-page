import "../css/Experience.css";
import ExperienceCard from "../component/ExperienceCard.js";
import Tittle
 from "../component/Tittle.js";
function Experience() {
  /*
    경험 카드 props
    color : skyblue,
    title : "신한 ds 금융 SW 아카데미",
    period :"2023.02 ~ 2023.08",
    detail :"저는 이렇게이렇게 해서 이걸 할 수 있습니다........."
  */
    return (
      <ul className="experience">
        <Tittle tittle ={"Experience"}/>
        <li><ExperienceCard/></li>
        <li><ExperienceCard/></li>
        <li><ExperienceCard/></li>
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
  }
  
  export default Experience;
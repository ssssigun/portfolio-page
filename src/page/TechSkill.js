import SkillCard from "../component/SkillCard.js";
import "../css/TechSkill.css";
import Tittle from "../component/Tittle.js";
import { forwardRef } from "react";

const TechSkill = forwardRef((props,ref) =>{
  const skills = require("../json/skillList.json");
    return (
      <div className="techSkill" ref={techSkillRef => (ref.current[1] = techSkillRef)}>
        <div className="techSkillDetail">
          <Tittle tittle ={"Tech Skill"}/>
          <div>
            <p className="commonDetail">
              저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
              저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
            </p>
          </div>
        </div>
        <ul className="skills">
          {
            skills.map((ele) => {
                return(
                  <li><SkillCard skillName={ele.skillName} color={ele.color} bar={ele.bar} detail={ele.details}/></li>
                )
            })
          }
        </ul>
      </div>
    );
  }); 
  
  export default TechSkill;
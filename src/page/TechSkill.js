import SkillCard from "../component/SkillCard.js";
import "../css/TechSkill.css";

function TechSkill() {
    return (
      <div className="techSkill">
        <div className="techSkillDetail">
          <div>
            <p>Tech Skill</p>
            <p>저는 지금 이걸 할 수 있습니다.</p>
          </div>
          <div>
            <p>저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다   </p>
          </div>
        </div>
        <ul className="skills">
          <li><SkillCard/></li>
        </ul>
      </div>
    );
  }
  
  export default TechSkill;
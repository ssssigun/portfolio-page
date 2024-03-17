import SkillCard from "../component/SkillCard.js";
import "../css/TechSkill.css";
import Tittle from "../component/Tittle.js";
function TechSkill() {
  /*
    스킬 props ex
    skillName : "Java",
    color : green,
    bar : 70,
    detail : "저는 이렇게이렇게 해서 이걸 할 수 있습니다. ";
  */
    return (
      <div className="techSkill">
        <div className="techSkillDetail">
          <Tittle tittle ={"Tech Skill"}/>
          <div>
            <p>
              저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
              저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
              저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
              저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
            </p>
          </div>
        </div>
        <ul className="skills">
          <li><SkillCard/></li>
          <li><SkillCard/></li>
          <li><SkillCard/></li>
          <li><SkillCard/></li>
          <li><SkillCard/></li>
        </ul>
      </div>
    );
  }
  
  export default TechSkill;
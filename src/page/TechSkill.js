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
              바로 사용 가능한 기술들입니다. Java를 메인 언어로 자료 구조 및 알고리즘 공부를 하고 있습니다. 웹 프로젝트를 진행할 때는 Spring 프레임 워크를 활용하고 있습니다. 원하는 서비스를 제작하기 위해서는
              분야에 국한되지 않고 공부하고 있습니다. React를 이용한 프론트엔드 작업도 가능합니다. 뿐만 아니라 최신 트렌드인 AI 기술도 어느정도 활용 가능합니다. 학부 연구생 시절 Python을 활용하여
              데이터를 원하는 모습으로 전처리하고 시각화하는 것을 연습하였습니다. 그리고 데이터를 활용하여 머신러닝, 딥러닝의 입력 데이터로 활용하였습니다. 또한 필요한 인공지능 모델이 있다면 논문을 찾아보고
              fine-turning을 활용하여 원하는 방식으로 모델을 다루는 방법을 공부했습니다.
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
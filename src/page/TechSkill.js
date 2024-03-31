import SkillCard from "../component/SkillCard.js";
import "../css/TechSkill.css";
import Title from "../component/Title.js";
import { forwardRef } from "react";

const TechSkill = forwardRef((props,ref) =>{
  const skills = require("../json/skillList.json");
    return (
      <div className="techSkill" ref={techSkillRef => (ref.current[1] = techSkillRef)}>
        <div className="techSkillDetail">
          <Title title ={"Tech Skill"}/>
          <div>
            {/* <p className="commonDetail">
            다양한 기술을 활용하여 바로 사용 가능한 역량을 갖추고 있습니다. Java를 주 언어로 하여 자료 구조 및 알고리즘을 꾸준히 공부하고 있으며, 웹 프로젝트 진행 시에는 Spring 프레임워크를 적극 활용합니다. 또한, React를 이용한 프론트엔드 개발도 가능하며, AI 기술에 대한 이해와 활용 능력도 보유하고 있습니다. 학부 연구생 시절에는 Python을 사용하여 데이터 전처리 및 시각화, 머신러닝 및 딥러닝 입력 데이터로의 활용 경험을 쌓았고, 필요한 인공지능 모델을 fine-tuning하여 원하는 방식으로 다루는 방법을 습득했습니다. 이처럼 다양한 분야에 걸쳐 깊이 있는 학습과 실제 프로젝트 경험을 통해 유연하게 기술을 적용할 수 있는 능력을 갖추고 있습니다.
            </p> */}
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
import "../css/ProjectCard.css";
import { FaCheck } from "react-icons/fa";

function ProjectCard() {
    return (
      <div className="projectCard">
        <div className="projectCardTittle">
          <p> 웹 오목 </p>
          <p> 2023.05.01 ~ 2023.06.01 (6인 팀 프로젝트)</p>
        </div>
        <div className="projectCardBody">
          <img src = {`${process.env.PUBLIC_URL}/img/omokMain.png`} className="projectCardBodyImage"></img>
          <div className="projectCardBodyDetail">
            <div className="projectCardBodyDetailContext">
              <p>
                저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
                저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
              </p>
              <p>
                저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
                저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
              </p>
            </div>
            <ul className="projectCardBodyDetailFunction">
              <li> <FaCheck/>저는 이렇게이렇게 해서 이걸 할 수 있습니다.</li>
              <li> <FaCheck/>저는 이렇게이렇게 해서 이걸 할 수 있습니다.</li>
              <li> <FaCheck/>저는 이렇게이렇게 해서 이걸 할 수 있습니다.</li>
              <li> <FaCheck/>저는 이렇게이렇게 해서 이걸 할 수 있습니다.</li>
              <li> <FaCheck/>저는 이렇게이렇게 해서 이걸 할 수 있습니다.</li>
              <li> <FaCheck/>저는 이렇게이렇게 해서 이걸 할 수 있습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
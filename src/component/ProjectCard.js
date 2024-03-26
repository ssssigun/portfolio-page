import "../css/ProjectCard.css";
import { FaCheck } from "react-icons/fa";
// import modal from "../component/modal.js"

function ProjectCard({tittle, period, img, detail1, detail2, environment}) {

    return (
      <div className="projectCard">
        <div className="projectCardTittle">
          <p className="projectCardTittleMain">{tittle}</p>
          <p className="projectCardTittleSub"> {period}</p>
        </div>
        <div className="projectCardBody">
          <img src = {`${process.env.PUBLIC_URL}/img/${img}`} className="projectCardBodyImage"></img>
          <div className="projectCardBodyDetail">
            <div className="projectCardBodyDetailContext">
              <p className="commonDetail">
                {detail1}
              </p>
              <p className="commonDetail">
                {detail2}
              </p>
            </div>
            <ul className="projectCardBodyDetailFunction">
              {
                environment.map((ele, idx) => (
                  ele[0] === "URL" || ele[0] === "Github" ? 
                    <li key={idx} className="detailFunction commonDetail">
                      <div className="detailFunctionCategory">
                        <FaCheck/> <span>{ ele[0] } </span>
                      </div>
                      <span className="detailFunctionExplain"> <a href={ ele[1] }>{ ele[1] } </a></span>
                    </li>
                  :
                    <li key={idx} className="detailFunction commonDetail">
                      <div className="detailFunctionCategory">
                        <FaCheck/> <span>{ ele[0] } </span>
                      </div>
                      <span className="detailFunctionExplain">{ ele[1] }</span>
                    </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
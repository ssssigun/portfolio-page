import "../css/ProjectCard.css";
import { FaCheck } from "react-icons/fa";

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
                environment.map((ele) => {
                  { console.log(ele[0])}
                    <li className="detailFunction commonDetail">
                      <div className="detailFunctionCategory">
                        <FaCheck/> <span>{  ele[0] } </span>
                      </div>
                      <span className="detailFunctionExplain">{ ele[1] }</span>
                    </li>
                })
              }
              {/* <li className="detailFunction commonDetail">
                <div className="detailFunctionCategory">
                  <FaCheck/> <span>주요 기능</span>
                </div>
                <span className="detailFunctionExplain">저는 이렇게이렇게 해서 이걸 할 수 있습니다.</span>
              </li>
              <li className="detailFunction commonDetail">
                <div className="detailFunctionCategory">
                  <FaCheck/> <span>Frontend</span>
                </div>
                <span className="detailFunctionExplain">저는 이렇게이렇게 해서 이걸 할 수 있습니다.</span>
              </li>
              <li className="detailFunction commonDetail">
                <div className="detailFunctionCategory">
                  <FaCheck/> <span>Backend</span>
                </div>
                <span className="detailFunctionExplain">저는 이렇게이렇게 해서 이걸 할 수 있습니다.</span>
              </li>
              <li className="detailFunction commonDetail">
                <div className="detailFunctionCategory">
                  <FaCheck/> <span>Database</span>
                </div>
                <span className="detailFunctionExplain">저는 이렇게이렇게 해서 이걸 할 수 있습니다.</span>
              </li>
              <li className="detailFunction commonDetail">
                <div className="detailFunctionCategory">
                  <FaCheck/> <span>Github</span>
                </div>
                <span className="detailFunctionExplain">저는 이렇게이렇게 해서 이걸 할 수 있습니다.</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
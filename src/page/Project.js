import "../css/Project.css";
import ProjectCard from "../component/ProjectCard.js";
import Title from "../component/Title.js";
import { forwardRef } from "react";

const Project = forwardRef((props,ref) =>{
  const pr = require("../json/projectList.json");
    return (
      <ul className="project" ref={projectRef => (ref.current[2] = projectRef)}>
        <Title title ={"Project"}/>
        {
          pr.map((ele =>{
            return(
              <li> <ProjectCard pIdx={ele.idx} title={ele.tittle} period={ele.period} img={ele.img} width={ele.width} detail1={ele.detail1} detail2={ele.detail2} environment={ele.environment} gitLink={ele.Github}/> </li> 
            )
          }))
        }
      </ul>
    );
  }); 
  
  export default Project;
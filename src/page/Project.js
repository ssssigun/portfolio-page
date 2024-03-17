import "../css/Project.css";
import ProjectCard from "../component/ProjectCard.js";
import Tittle from "../component/Tittle.js";
function Project() {
    return (
      <ul>
        <Tittle tittle ={"Project"}/>
        <li> <ProjectCard/> </li>
        <li> <ProjectCard/> </li>
        <li> <ProjectCard/> </li>
      </ul>
    );
  }
  
  export default Project;
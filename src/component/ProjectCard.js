import "../css/ProjectCard.css";
import { FaCheck } from "react-icons/fa";
import {useEffect, useState} from "react";
import Modal from "./Modal.js";

function ProjectCard({title, period, img, detail1, detail2, environment}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData,setModalData] = useState(null);
  const [temp,setTemp] = useState(false);
  const handleClick = (data) => {
    setIsOpen(true);
    setModalData(data);
  };
  const closeModal = () => {
    setTemp(true);
  };
  useEffect(()=>{
    setIsOpen(false);
    setTemp(false);
  },[temp])
    return (
      <div className="projectCard" onClick={()=>handleClick({subtitle : title})}>
        <div className="projectCardTitle">
          <p className="projectCardTitleMain">{title}</p>
          <p className="projectCardTitleSub"> {period}</p>
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
        <Modal isOpen={isOpen} closeModal={closeModal} data={modalData}/>
      </div>
    );
  }
  
  export default ProjectCard;
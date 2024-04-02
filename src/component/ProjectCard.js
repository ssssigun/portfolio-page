import "../css/ProjectCard.css";
import { FaCheck } from "react-icons/fa";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { PiGearDuotone } from "react-icons/pi";
import {useEffect, useState} from "react";
import Modal from "./Modal.js";

function ProjectCard({title, period, img, width, detail1, detail2, environment, modal}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData,setModalData] = useState(null);
  const [temp,setTemp] = useState(false);
  if (isOpen) { // 모달시 스크롤 이벤트 막기
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  const imgWidth = {
    "width" : width
  }
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

  const [isVisible, setIsVisible] = useState(false); // 상자의 가시성 상태를 관리
    const iconSize = 22;
    return (
      <div className="projectCard" onClick={()=>handleClick({subtitle : title, modal : modal})} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        <div className="projectCardTitle">
          <p className="projectCardTitleMain">{title}</p>
          <p className="projectCardTitleSub"> {period}</p>
        </div>
        <div className="projectCardBody">
          <div className="projectCardBodyImageArea">
            <img src = {`${process.env.PUBLIC_URL}/img/${img}`} className="projectCardBodyImage" style={imgWidth}/>
            <div className={`eventBox ${isVisible ? 'visible' : 'unVisible'}`}> 자세히 보려면 클릭해주세요 </div>
          </div>
          <div className="projectCardBodyDetail">
            <div className="projectCardBodyDetailContext">
              <div className="projectCardBodySubtitle"><AiTwotoneThunderbolt size={iconSize} className="projectIcon"/> <span>요약</span></div>
              <p className="commonDetail">
                {detail1}
              </p>
              <div className="projectCardBodySubtitle"><PiGearDuotone size={iconSize} className="projectIcon"/> <span>기획 의도</span></div>
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
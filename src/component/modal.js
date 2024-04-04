import ReactModal from "react-modal";
import styled from "styled-components";
import ModalTittle from "./ModalTittle.js";
import ModalFooter from "./ModalFooter.js";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import "../css/Modal.css"
import Project_1 from "./projectExplain/Project_1.js";
import Project_2 from "./projectExplain/Project_2.js";
import Project_3 from "./projectExplain/Project_3.js";
import Project_4 from "./projectExplain/Project_4.js";
const customModalStyles = styled.div = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "9991",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "85%",
    height: "85%",
    zIndex: "9991",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
  modalContent :{
    width : "100%"
  }
};
const ArrowStyle = styled(RxCross2)`
  position: absolute;
  right: 1%;
  font-size: 25px;
  cursor: pointer;
  z-index: 9992;
`
const Modal = ({ isOpen, closeModal, data }) => {
  const [number, setNumber] = useState(1);
  const titleList = [
    {
      titleMain : "개요",
      titleSub1 : "핵심 기능",
      titleSub2 : "아키텍처",
    },
    {
      titleMain : "기획 및 설계",
      titleSub1 : "기획",
      titleSub2 : "ERD 설계"
    },
    {
      titleMain : "디자인 및 개발",
      titleSub1 : "디자인",
      titleSub2 : "개발"
    },
    {
      titleMain : "위기 상황",
      titleSub1 : "갈등 원인",
      titleSub2 : "해결"
    },
    {
      titleMain : "배우고 느낀점",
      titleSub1 : "1",
      titleSub2 : "2"
    },
    {
      titleMain : "전체 화면 구성",
      titleSub1 : "1",
      titleSub2 : "2"
    }
  ]
  // 번호마다 제목 변경
  var titleMain = titleList[number-1].titleMain;
  var titleSub1 = titleList[number-1].titleSub1;
  var titleSub2 = titleList[number-1].titleSub2;

  // 프로젝트 내용 리스트
  const proejctList = [
    <Project_1 number = {number} titleSub1 ={titleSub1} titleSub2 ={titleSub2}/>,
    <Project_2 number = {number} titleSub1 ={titleSub1} titleSub2 ={titleSub2}/>,
    <Project_3 number = {number} titleSub1 ={titleSub1} titleSub2 ={titleSub2}/>,
    <Project_4 number = {number} titleSub1 ={titleSub1} titleSub2 ={titleSub2}/>
  ]
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={()=>{closeModal(); setNumber(1)}}
      style={customModalStyles}
      shouldCloseOnOverlayClick={true} 
      contentLabel="display project detail"
      >
      <div className="ModalWrap">
        <ArrowStyle onClick={()=>{closeModal(); setNumber(1)}}/>
        {
          data &&
            <ModalTittle title={titleMain} subtitle={data.subtitle}/>
        }
        <div className='modalContent'>
            {/* 임시 설정 */}
          <div className='modalContentDetail'>
            죄송해요 ㅠㅜ 프로젝트의 매력을 어필하기 위해서 열심히 제작하고 있어요!<br/> 4월 7일까지 조금만 기다려주세요!
          </div>
          {/* {
            data &&
            proejctList[data.pIdx-1]
          } */}
        </div>
        <ModalFooter number={number} setNumber={setNumber}/>
      </div>
    </ReactModal>
  );
};
export default Modal;

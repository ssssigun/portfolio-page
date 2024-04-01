import ReactModal from "react-modal";
import styled from "styled-components";
import ModalTittle from "./ModalTittle.js";
import ModalFooter from "./ModalFooter.js";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import "../css/Modal.css"
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
  var t = "";
  if(number ===1){
    t = "개요"
  }else if(number === 2){
    t = "기획"
  }else if(number === 3){
    t = "디자인"
  }else if(number === 4){
    t = "개발 과정"
  }else if(number === 5){
    t = "전체 화면"
  }
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
            <ModalTittle title={t} subtitle={data.subtitle}/>
        }
        <div className='modalContent'>
          <div className='modalContentDetail'>
            {/* 임시 설정 */}
            죄송해요 ㅠㅜ 프로젝트의 매력을 어필하기 위해서 열심히 제작하고 있어요!<br/> 4월 3일까지 조금만 기다려주세요!
          </div>
        </div>
        <ModalFooter number={number} setNumber={setNumber}/>
      </div>
    </ReactModal>
  );
};
export default Modal;

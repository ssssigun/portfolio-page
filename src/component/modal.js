import ReactModal from "react-modal";
import styled from "styled-components";
import ModalTittle from "./ModalTittle.js";
import ModalFooter from "./ModalFooter.js";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

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
    t = "소개"
  }else if(number === 2){
    t = "기획"
  }else if(number === 3){
    t = "개발"
  }else if(number === 4){
    t = "마무리"
  }
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={()=>{closeModal(); setNumber(1)}}
      style={customModalStyles}
      shouldCloseOnOverlayClick={true} 
      contentLabel="display project detail"
      >
      <div>
        <ArrowStyle onClick={()=>{closeModal(); setNumber(1)}}/>
        {
          data &&
            <ModalTittle title={t} subtitle={data.subtitle}/>
        }
        <div className='modalContent'>
          <div className='modalContentDetail1'>

          </div>
          <div className='modalContentDetail2'>

          </div>
        </div>
        <ModalFooter number={number} setNumber={setNumber}/>
      </div>
    </ReactModal>
  );
};
export default Modal;

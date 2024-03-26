import ReactModal from 'react-modal';
import styled from "styled-components";

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
    width: "1500px",
    height: "800px",
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
};
const Modal = ({ isOpen, setOpen }) => {
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={()=>setOpen(false)}
      style={customModalStyles}
      contentLabel="display project detail"
      shouldCloseOnOverlayClick={true}
      >
      <div>프로젝트 상세 내역 적기</div>
    </ReactModal>
  );
};
export default Modal;

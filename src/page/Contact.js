import "../css/Contact.css";
import Title from "../component/Title.js";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) =>{

  return (
    <div className="contact" ref={contactRef => (ref.current[4] = contactRef)}>
      <Title title ={"Contact"}/>
      <div className="contactArea">
        <div className="contactTextArea">
          <div className="contactComment">
            <p> <b>피드백</b>은 언제나 환영합니다!</p>
            <p> 끝까지 봐주셔서 감사합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
});   
  
  export default Contact;
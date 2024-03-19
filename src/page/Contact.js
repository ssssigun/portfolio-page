import "../css/Contact.css";
import Tittle from "../component/Tittle";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) =>{
  return (
    <div className="contact" ref={contactRef => (ref.current[4] = contactRef)}>
      <Tittle tittle ={"Contact"}/>
      <h1>감사합니다</h1>
      <p>
        감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다
        감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다감사합니다
      </p>
    </div>
  );
}); 
  
  export default Contact;
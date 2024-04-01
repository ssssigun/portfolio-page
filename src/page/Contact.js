import "../css/Contact.css";
import Title from "../component/Title.js";
import { forwardRef } from "react";
import { IoCall } from "react-icons/io5";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";


const Contact = forwardRef((props, ref) =>{
  const phoneNum = "010-6787-0432";
  const email = "hoo2389@gmail.com";
  const kakaoTalk = "sigun";
  const copyText = (textToCopy) => {
    // 텍스트를 클립보드에 복사
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('텍스트가 복사되었습니다.');
      })
      .catch((error) => {
        console.error('텍스트를 복사하는 중 오류가 발생했습니다:', error);
      });
  };

  return (
    <div className="contact" ref={contactRef => (ref.current[4] = contactRef)}>
      <Title title ={"Contact"}/>
      <div className="contactArea">
        <div className="contactTextArea">
          <div className="contactComment">
            <p> <b>피드백</b>은 언제나 환영합니다!</p>
            <p> 끝까지 봐주셔서 감사합니다.</p>
          </div>
          <ul className="contactList">
            <li onClick={() => copyText(phoneNum)}> <IoCall className="contactIcon"/> <p className="contactText">{phoneNum}</p></li>
            <li onClick={() => copyText(email)}> <IoIosMail className="contactIcon"/> <p className="contactText">{email}</p></li>
            <li onClick={() => copyText(kakaoTalk)}> <RiKakaoTalkFill className="contactIcon"/> <p className="contactText">{kakaoTalk}</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
});   
  
  export default Contact;
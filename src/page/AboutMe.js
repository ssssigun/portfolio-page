import "../css/AboutMe.css";
import { IoPerson } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import Title from "../component/Title.js";
import Introduce from "./Introduce.js";
import { forwardRef } from "react";

const AboutMe = forwardRef((props, ref) => {
  const infoSize = 25;
  const snsSize = 30;
    return (
      <div className="aboutMe" ref={aboutMeRef => (ref.current[0] = aboutMeRef)}>
        <Introduce/>
        <Title title ={"ABOUT ME"}/>
        <div className="aboutMeBody">
          <div className="pictureArea">
            <img className="aboutMePhoto" src = {`${process.env.PUBLIC_URL}/img/profile.jpg`}></img>
          </div>
          <div className="textArea">
            <ul>
              <li className="info">
                <IoPerson size={infoSize} className="infoIcon"/>
                <p className="commonDetail"> 이시권 </p>
              </li>
              <li className="info">
                <FaBirthdayCake size={infoSize} className="infoIcon"/>
                <p className="commonDetail"> 1999.01.17  ( 만 25세 )</p>
              </li>
              <li className="info">
                <FaHome size={infoSize} className="infoIcon"/>
                <p className="commonDetail"> 대전광역시 유성구 </p>
              </li>
              {/* <li className="info">
                <IoIosMail size={infoSize} className="infoIcon"/>
                <p className="commonDetail"> hoo2389@gmail.com </p>
              </li> */}
              <li className="info">
                <FaGraduationCap size={infoSize} className="infoIcon"/>
                <p className="commonDetail"> 한남대학교  ( 전기전자공학과 ) </p>
              </li>
            </ul>
            <ul className="sns">
              <li>
                <a href="https://github.com/ssssigun">
                  <FaGithub size={snsSize} />
                  <p className="commonDetail add">GITHUB</p>
                </a>
              </li>
              <li>
                <a href="https://velog.io/@poemgun/posts">
                <SiBloglovin size={snsSize}/>
                <p className="commonDetail add">BLOG</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }); 
  
  export default AboutMe;
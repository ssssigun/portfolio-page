import "../css/AboutMe.css";
import { IoPerson } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";

function AboutMe() {
    return (
      <div className="aboutMe">
        <div className="aboutMeTittle">
          <p>ABOUT ME</p>
        </div>
        <div className="aboutMeBody">
          <div className="pictureArea">
            <img className="aboutMePhoto" src = {`${process.env.PUBLIC_URL}/img/profile.jpg`}></img>
          </div>
          <div className="textArea">
            <ul>
              <li>
                <IoPerson/>
                <p> 이시권 </p>
              </li>
              <li>
                <FaBirthdayCake/>
                <p> 1999.01.17 </p>
              </li>
              <li>
                <FaHome/>
                <p> 대전광역시 유성구 </p>
              </li>
              <li>
                <IoIosMail/>
                <p> hoo2389@gmail.com </p>
              </li>
              <li>
                <FaGraduationCap/>
                <p> 한남대학교 (전기전자공학과) </p>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://github.com/ssssigun">
                  <FaGithub/>
                  <p>GITHUB</p>
                </a>
              </li>
              <li>
                <a href="https://velog.io/@poemgun/posts">
                <SiBloglovin/>
                <p>BLOG</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutMe;
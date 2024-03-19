import "../css/Experience.css";
import ExperienceCard from "../component/ExperienceCard.js";
import Tittle from "../component/Tittle.js";
import { forwardRef } from "react";
const Experience = forwardRef((props, ref) => {
 const exp = [
    {
      color : "pink",
      title : "인공지능 소재 연구실",
      period :"2021.12 ~ 2023.02",
      detail :`저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 
      저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 
      저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다`
    },
    {
      color : "skyblue",
      title : "신한 ds 금융 SW 아카데미",
      period :"2023.02 ~ 2023.08",
      detail :`저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 
      저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다. 
      저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 
      저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 
      저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 
      저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다 저는 이렇게이렇게 해서 이걸 할 수 있습니다`
    }
 ]
    return (
      <ul className="experience" ref={experienceRef => (ref.current[3] = experienceRef)}>
        <Tittle tittle ={"Experience"} />
        {
          exp.map((ele =>{
            return(
              <li><ExperienceCard color={ele.color} title={ele.title} period={ele.period} detail={ele.detail}/></li>
            )
          }))
        }
        <li className="endCard">
          <div className="sideBar">
            <div className="verticalBarHead">
              <div className="verticalBarEndPoint"/>
            </div>
          </div>
          <div className="blank"/>
        </li>
      </ul>
    );
  }) 
  
  export default Experience;
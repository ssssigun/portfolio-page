import "../css/Header.css";
import { useState, useEffect, useRef } from "react";
function Haeder({scrollRef}) {
  const category = [
    {
        idx: 0,
        name: "About Me" 
    },
    {
        idx: 1,
        name: "Tech Skill" 
    },
    {
        idx: 2,
        name: "Projects" 
    },
    {
        idx: 3,
        name: "Experience" 
    },
    {
        idx: 4,
        name: "Contact" 
    }
  ];
  const [cIdx, setCidx] = useState(null);
  const cRef = useRef([]); // 이동할 각각의 컴포넌트에 대응하는 목차 버튼을 저장할 ref 배열

  useEffect(() => {
    scrollRef.current[cIdx]?.scrollIntoView({ behavior: 'smooth' });
  }, [cIdx]);

  // useEffect(() => {
  //   let options ={
  //     threshold: 1.0
  //   }
  //   const observer = new IntersectionObserver(setCidx, options);
  // }, []);

    return (
      <div className="header">
        <div className="logo">
          <p>시권's Portfolio</p>
        </div>
        <ul className="menu">
          {
            category.map(({idx, name}) =>(
              cIdx === idx ? ( // 클릭한 카테고리면 클래스 추가
                <li className="checked">
                  <span className="menuText"  
                    key={idx}
                    ref={ref => (cRef.current[idx] = ref)}
                    onClick={() => {
                      setCidx(idx);
                    }}> 
                    {name} 
                  </span>
                </li>
                )
                :
                (
                <li>
                <span className="menuText"  
                  key={idx}
                  ref={ref => (cRef.current[idx] = ref)}
                  onClick={() => {
                    setCidx(idx);
                  }}> 
                  {name} 
                </span>
              </li>
              )
            ))
          }
        </ul>
      </div>
    );
  }
  
  export default Haeder;
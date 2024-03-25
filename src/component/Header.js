import "../css/Header.css";
import { useState, useEffect, useRef } from "react";
function Haeder({scrollRef, headerIdx}) {
  const category = require('../json/category.json');
  const [cIdx, setCidx] = useState(0);
  useEffect(()=>{
    setCidx(headerIdx);
  },[headerIdx])
  const cRef = useRef([]); // 이동할 각각의 컴포넌트에 대응하는 목차 버튼을 저장할 ref 배열
    return (
      <div className="header">
        <div className="logo">
          <p onClick={ ()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}>시권's Portfolio</p>
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
                      scrollRef.current[idx]?.scrollIntoView({ behavior: 'smooth' });
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
                    scrollRef.current[idx]?.scrollIntoView({ behavior: 'smooth' });
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
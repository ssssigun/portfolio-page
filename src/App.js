import './App.css';
import "./css/reset.css";
import Header from "./component/Header.js"
import Introduce from "./page/Introduce.js";
import AboutMe from "./page/AboutMe.js";
import TechSkill from "./page/TechSkill.js";
import Projects from './page/Project.js';
import Experience from './page/Experience.js';
import Contact from './page/Contact.js';
import { useRef, useEffect, useState } from 'react';
function App() {
  const scrollRef = useRef([]);
  const [headerIdx, setHeaderIdx] = useState(1);
  const category = require('./json/category.json');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 해당 요소가 뷰포트에 들어올 때의 동작
            category.map(({idx, name, className})=>(
              entry.target.className === className ? setHeaderIdx(idx) : 0
              ))
          }
        });
      },
      {threshold : [0.7]} // 뷰포트와 교차하는 비율이 70% 이상일 때 동작
    );
      // 프로젝트만 너무 커서 따로 설정
    const observer2 = new IntersectionObserver(
      (entries2) => {
        entries2.forEach((entry2) => {
          if (entry2.isIntersecting) {
            // 해당 요소가 뷰포트에 들어올 때의 동작
              setHeaderIdx(2);
          }
        });
      },
      {threshold : [0.3]} // 뷰포트와 교차하는 비율이 20% 이상일 때 동작
    );
    observer2.observe(scrollRef.current[2]);

      scrollRef.current.map((ele, idx)=>{
        observer.observe(scrollRef.current[idx])
      })
        return () => {
      scrollRef.current.map((ele, idx)=>{
        observer.unobserve(scrollRef.current[idx]);
      })
      observer2.unobserve(scrollRef.current[2]);
    };
  }, [headerIdx]);
  return (
    <div className="App">
      <Header scrollRef={scrollRef} headerIdx ={headerIdx}/>
      <div className="main">
        {/* <Introduce/> */}
        <AboutMe ref={scrollRef}/>
        <TechSkill ref={scrollRef}/>
        <Projects ref={scrollRef}/>
        <Experience ref={scrollRef}/>
        <Contact ref={scrollRef}/>
      </div>
    </div>
  );
}

export default App;

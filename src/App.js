import './App.css';
import "./css/reset.css";
import Header from "./component/Header.js"
import Introduce from "./page/Introduce.js";
import AboutMe from "./page/AboutMe.js";
import TechSkill from "./page/TechSkill.js";
import Projects from './page/Project.js';
import Experience from './page/Experience.js';
import Contact from './page/Contact.js';
import { useRef } from 'react';
function App() {
  const scrollRef = useRef([]);
  return (
    <div className="App">
      <Header scrollRef={scrollRef}/>
      <div className="main">
        <Introduce/>
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

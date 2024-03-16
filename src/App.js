import './App.css';
import "./css/reset.css";
import Header from "./component/Header.js"
import Introduce from "./page/Introduce.js";
import AboutMe from "./page/AboutMe.js";
import TechSkill from "./page/TechSkill.js";
import Projects from './page/Project.js';
import Experience from './page/Experience.js';
import Contact from './page/Contact.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Introduce/>
        <AboutMe/>
        <TechSkill/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

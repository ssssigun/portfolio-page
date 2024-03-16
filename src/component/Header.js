import "../css/Header.css";

function Haeder() {
    return (
      <div className="header">
        <div className="tittle">
          <p><a>시권's Portfolio</a></p>
        </div>
        <ul className="menu">
          <li>
            <p> About Me </p>
          </li>
          <li>
            <p> Tech Skill </p>
          </li>
          <li>
            <p> Projects </p>
          </li>
          <li>
            <p> Experience </p>
          </li>
          <li>
            <p> Contact </p>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Haeder;
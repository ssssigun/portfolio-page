import "../css/Header.css";

function Haeder() {
    return (
      <div className="header">
        <div className="logo">
          <p><a href="#">시권's Portfolio</a></p>
        </div>
        <ul className="menu">
          <li>
            <p className="menuText"> About Me </p>
          </li>
          <li>
            <p className="menuText"> Tech Skill </p>
          </li>
          <li>
            <p className="menuText"> Projects </p>
          </li>
          <li>
            <p className="menuText"> Experience </p>
          </li>
          <li>
            <p className="menuText"> Contact </p>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Haeder;
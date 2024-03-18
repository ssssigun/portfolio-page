import "../css/SkillCard.css"
function SkillCard({skillName, color, bar, detail}) {
  const style = {
    backgroundColor : color
  }
  const barStyle = {
    backgroundColor : color,
    width : bar +"%"
  }
  const per = {
    color : color
  }
    return (
      <div className="skillCard">
        <p className="commonTittle">{skillName}</p>
        <div className="progressBar">
          <div className="currentBar" style={barStyle}>
            <div className="barCircul" style={style}>
            <div className="barPercent" style={per}> {bar}% </div>
            </div>
          </div>
        </div>
        <p className="commonDetail">
          {detail}
        </p>
      </div>
    );
  }
  
  export default SkillCard;

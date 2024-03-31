import "../css/SkillCard.css"
function SkillCard({skillName, color, detail}) {
  const line = {
    "border-bottom": "2px solid" + color,
    "padding-bottom" : "10px"
  }
    return (
      <div className="skillCard">
        <p className="commonTittle" style={line}>{skillName}</p>
        <p className="commonDetail skillDetail">
          {detail}
        </p>
      </div>
    );
  }
  
  export default SkillCard;

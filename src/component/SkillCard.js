import "../css/SkillCard.css"
function SkillCard() {
    return (
      <div className="skillCard">
        <p className="skillName">Java</p>
        <div className="progressBar">
          <div className="currentBar">
            <div className="barCircul">
            <div className="barPercent"> 70% </div>
            </div>
          </div>
        </div>
        <p>
          저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
          저는 이렇게이렇게 해서 이걸 할 수 있습니다. 저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다  저는 이렇게이렇게 해서 이걸 할 수 있습니다
        </p>
      </div>
    );
  }
  
  export default SkillCard;

import "../css/Title.css";

function Title({title}){
    return(
        <div className="title">
            <p className="titleText">{title}</p>
        </div>
    );
}

export default Title;
import "../css/ModalTittle.css";

function ModalTitle({title, subtitle}){
    return(
        <div className="modalTitle">
            <div className="modalTitleText">
                <span >{title}</span>
                <span className="modalTitleSub"> {subtitle} </span>
            </div>
        </div>
    );
}

export default ModalTitle;
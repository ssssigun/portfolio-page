import { useState } from "react";
import "../css/ModalFooter.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function ModalFooter(){
    const [number, setNumber] = useState(1);
    const prevNumber = () => {
        if(number > 1){
            setNumber(number-1);
        }
    }
    const nextNumber = () => {
        if(number < 4){
            setNumber(number+1);
        }
    }
    return(
        <div className="modalFooter">
            <IoIosArrowBack className="pageArrow" onClick={prevNumber}/>
            <p className="ModalFooterNumber">{number}</p>
            <IoIosArrowForward className="pageArrow" onClick={nextNumber}/>
        </div>
    );
}

export default ModalFooter;
import "../css/ModalFooter.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function ModalFooter({number, setNumber}){
    const prevNumber = () => {
        if(number > 1){
            setNumber(number-1);
        }else{
            setNumber(4);
        }
    }
    const nextNumber = () => {
        if(number < 4){
            setNumber(number+1);
        }else{
            setNumber(1);
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
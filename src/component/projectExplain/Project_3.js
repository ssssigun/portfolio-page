
const Project_1 = ({number, data, titleSub1, titleSub2}) => {
    if(number === 1 ){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                    <img src={`${process.env.PUBLIC_URL}/img/donationArchitecture.png`} className="modalHalfSideImage"></img>
                </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <img src={`${process.env.PUBLIC_URL}/img/`} className="modalHalfSideImage"></img>
                </div>
            </div> 
        )
    }else if(number === 2){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                    <img src={`${process.env.PUBLIC_URL}/img/donationERD.png`} className="modalHalfSideImage"></img>
                </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <img src={`${process.env.PUBLIC_URL}/img/donationDesign.png`} className="modalHalfSideImage"></img>
                </div>
            </div> 
        )
    }else if(number === 3){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                {
                    data &&
                    <img src={`${process.env.PUBLIC_URL}/img/`} className="modalHalfSideImage"></img>
                }
                </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <img src={`${process.env.PUBLIC_URL}/img/`} className="modalHalfSideImage"></img>
                </div>
            </div> 
        )
    }else if(number === 4){
        return(
            <div>4</div>
        )
    }else if(number === 5){
        return(
            <div>5</div>
        )
    }else if(number === 6){
        return(
            <div>6</div>
        )
    }

    return(
        <div></div>
    )
}

export default Project_1;
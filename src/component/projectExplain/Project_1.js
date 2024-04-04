import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Project_1 = ({number, titleSub1, titleSub2}) => {
    const screen = require("../../json/screen.json");
    if(number === 1 ){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                    <div className="modalHalfSideImageArea">
                        <img src={`${process.env.PUBLIC_URL}/img/omokPlay.png`} className="modalHalfSideImage"></img>
                        <p className="modalHalfSideText">플레이어 두명에서 턴을 돌아가면서 오목돌을 두고 5개가 연속으로 이어지면 승리하고 전적을 저장합니다.</p>
                    </div>
                </div>
                <div className="modalHalfSide">
                    <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <img src={`${process.env.PUBLIC_URL}/img/omokArchitecture.png`} className="modalHalfSideImage"></img>
                </div>
            </div> 
        )
    }else if(number === 2){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <div className="modalHalfSideImageArea">
                        <img src={`${process.env.PUBLIC_URL}/img/omokERD.png`} className="modalHalfSideImage"></img>
                        <p className="modalHalfSideText"> 로그인을 위해서 기본적인 정보를 저장합니다. 게임을 진행할 때 보여줄 닉네임도 저장합니다. 추가로, 랭킹을 표시해야하므로 전적과 승리수를 저장합니다. </p>
                    </div>    
                </div>
            </div> 
        )
    }else if(number === 3){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                    <div className="modalHalfSideImageArea">
                        <img src={`${process.env.PUBLIC_URL}/img/omokDesign.png`} className="modalHalfSideImage"></img>
                        <p className="modalHalfSideText"> Figma를 통해서 세세한 화면 설계를 진행하였습니다. </p>
                    </div>    
                </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <img src={`${process.env.PUBLIC_URL}/img/`} className="modalHalfSideImage"></img>
                </div>
            </div> 
        )
    }else if(number === 4){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                    <div className="modalHalfSideImageArea">
                        <p className="modalHalfSideText"> Git에 익숙한 팀원이 없어서 수기로 직접 합치면서 시간이 생각보다 오래 걸렸다. </p>
                        <p className="modalHalfSideText"> 소켓이 아니라 http를 활용하다보니 상대가 오목 돌을 놓았을 때 바로 보이지 않았다. </p>
                        </div>    
                    </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <div className="modalHalfSideImageArea">
                        <p className="modalHalfSideText"> 다음 프로젝트때 부터 git을 활용하기로 했다. 익숙하지 않으므로 GUI tool인 Github Desktop 활용 </p>
                        <p className="modalHalfSideText"> 1초마다 리렌더링하면서 게임 진행 </p>
                    </div>
                </div>
            </div> 
        )
    }else if(number === 5){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                    <div className="modalHalfSideImageArea">
                        <p className="modalHalfSideText"> 팀원들과 소통하면서 프로젝트를 처음 진행해 보았다.</p>
                        <p className="modalHalfSideText"> 게임은 소켓을 활용하는 것이 좋은 것 같다. 하지만 http로도 구현 가능하며, 통신 방법마다 장단점이 있는 것 같다.</p>
                        </div>    
                    </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <div className="modalHalfSideImageArea">
                        <p className="modalHalfSideText"> spring 프레임워크를 활용하여 처음으로 데이터를 불러오고 쓰는 것을 익혔다. </p>
                        <p className="modalHalfSideText"> 또한 JSP를 사용하는 방법을 배웠다. </p>
                    </div>
                </div>
            </div> 
        )
    }else if(number === 6){
        return(
            <div className='modalDetail'>
                <Swiper
                    centeredSlides={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                      }}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    style={{
                        "--swiper-pagination-color": "#000",
                        "--swiper-navigation-color": "#000",
                      }}
                    className='swiper'
                    >
                        {
                            screen.map((ele =>{
                                return(
                                    <SwiperSlide>
                                        <p className="modalHalfSideTitle"> {ele.name} </p>
                                        <img src={`${process.env.PUBLIC_URL}/img/${ele.img}`} className="modalImage"></img>
                                        <p className="modalHalfSideText"> {ele.explan} </p>
                                    </SwiperSlide>
                                )
                              }))
                        }
                </Swiper>

            </div>
    
        )
    }

    return(
        <div></div>
    )
}

export default Project_1;
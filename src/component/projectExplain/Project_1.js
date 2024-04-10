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
                    <div className="modalHalfSideImageArea">
                        <img src={`${process.env.PUBLIC_URL}/img/omokPlan.png`} className="modalHalfSideImage"></img>
                        <p className="modalHalfSideText"> 필요한 기능들을 정의하였습니다. 우선 순위를 정하여 먼저 중요한 기능을 구현하고 부가적인 기능은 추후 회의를 통해 정하여 개발하기로 하였습니다.</p>
                    </div>    
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
                        <p className="modalHalfSideText"> Figma를 통해서 세세한 화면 설계를 진행하였습니다. 처음에는 UI이만 설계를 하고 모코코 캐릭터를 사용한 것에서 여감을 받아 전체적인 테마를 로스트아크 게임의 이미지들을 활용하였습니다.</p>
                    </div>    
                </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <div className="modalHalfSideImageArea">
                        <img src={`${process.env.PUBLIC_URL}/img/omokScreen1.png`} className="modalHalfSideImage"></img>
                        <p className="modalHalfSideText"> 로그인 및 회원가입을 개발하였습니다. 회원 가입에서는 비동기로 데이터를 확인하여 사용자에게 정해진 포맷에 맞게 입력 받도록 하였고 로그인 화면에서는 비동기로 로그인을 확인하여 틀리면 경고 메세지를 출력하고 맞으면 로비 화면으로 넘어가도록 만들었습니다.</p>
                    </div>    
                </div>
            </div> 
        )
    }else if(number === 4){
        return(
            <div className="modalDetail">
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub1} </p>
                    <div className="modalHalfSideImageArea">
                        <img src={`${process.env.PUBLIC_URL}/img/omokRisk.png`} className="modalHalfSideImage"></img>
                        <p className="modalHalfSideText"> Git을 사용하지 않고 수기로 직접 합치면서 시간이 생각보다 오래 걸렸습니다. 또한 소켓이 아니라 http를 활용하다보니 상대가 오목 돌을 놓았을 때 바로 보이지 않았다.</p>
                        </div>    
                    </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <div className="modalHalfSideImageArea">
                        <p className="modalHalfSideText"> 다음 프로젝트때 부터 git을 활용하기로 했습니다. 익숙하지 않으므로 GUI tool인 Github Desktop 활용해서 진행하기로 하였습니다. </p>
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
                        <p className="modalHalfSideText"> 팀원들과 소통하면서 프로젝트를 처음 진행해 보았습니다. 개발은 여러명의 사람들과 진행하는 것이므로 회의를 효율적으로 하는 것과 협업 툴을 이용하여 의사소통 하는 방법을 배웠습니다. </p>
                        <p className="modalHalfSideText"> HTTP 방법으로 오목 게임이 구현 가능하지만 게임이라는 특성상 Sorket 통신이 좀 더 적합하다는 것을 느꼈습니다.</p>
                        </div>    
                    </div>
                <div className="modalHalfSide">
                <p className="modalHalfSideTitle"> {titleSub2} </p>
                    <div className="modalHalfSideImageArea">
                        <p className="modalHalfSideText"> spring 프레임워크를 활용하여 처음으로 데이터를 불러오고 쓰는 것을 익혔고 화면을 위한 html, css, javascript을 사용하는 방법을 익혔습니다. </p>
                        <p className="modalHalfSideText"> JSP를 사용하는 방법을 배웠습니다. </p>
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
                            screen[0].map((ele =>{
                                return(
                                    <SwiperSlide id='slideWrap'>
                                        <div className='slideScreen'>
                                            <p className="modalHalfSideTitle"> {ele.name} </p>
                                            <img src={`${process.env.PUBLIC_URL}/img/${ele.img}`} className="modalImage"></img>
                                            <p className="modalHalfSideText"> {ele.explan} </p>
                                        </div>
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
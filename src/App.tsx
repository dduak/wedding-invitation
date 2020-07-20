import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <WelcomeMessage/>
      <Gallery/>
      <LocationInfo/>
      <GiftMoney/>
      <Footer/>
    </div>
  );
}


const Header: React.FC = props => {
  return (
    <div>
      Jinwoo & Hyesook
      오진우 그리고 양혜숙

      2020.09.27 SUN PM 02:00
      아르테스웨딩
    </div>
  )
}

const WelcomeMessage: React.FC = props => {
  return (
    <div>

      사랑은 소유가 아니라 동행임을 아는 두 사람은
      잡은 손을 놓지 않되 함부로 잡아 끌지 않을 것이며
      서로의 두 눈을 고요히 바라보아
      말하지 않아도 같은 쪽으로 걸어가리라
      - 박미라 "아름다운 날에 부치다" 중


      2020. 09. 27
      초대합니다

      곁에 있을 때 가장 나다운 모습이 되게 하는 한 사람
      꿈을 펼칠 수 있도록 서로에게 날개가 되어줄 한 사람
      그 사람과 삶의 여행을 함께 떠나려 합니다.
      저희 여행의 출발점에 여러분을 초대하오니
      오셔서 많이 축복해주시면 큰 기쁨이겠습니다.


      오인화 윤숙자 의 장남 진우
      양성추 임미연 의 장녀 혜숙


    </div>
  )
}

const Gallery: React.FC = props => {
  return (
    <div>
      gallery
    </div>
  )
}

const LocationInfo: React.FC = props => {
  return (
    <div>

      Location
      아르테스웨딩
      서울 동작구 동작대로 59 쌍립빌딩 2층 (사당 교보타워 2층)

      지도

      지하철 SUBWAY
      버스 BUS
      자차 CAR
      주차 PARKING


    </div>
  )
}

const GiftMoney: React.FC = props => {
  return (
    <div>
      마음 전하는 곳
      신랑
      신랑측 부
      신랑측 모

      신부
      신부측 부
      신부측 모

    </div>
  )
}

const Footer: React.FC = props => {
  return (
    <footer>
      footer
    </footer>
  )
}

export default App;

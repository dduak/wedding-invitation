import React, {useEffect} from 'react';
import './App.css';
import Gallery from "./Gallery";


const App: React.FC = () => {
  return (
    <div className="app">
      <Hero/>
      <Summary/>
      <Poet/>
      <InviteMessage/>
      <Gallery/>
      <LocationInfo/>
      <GiftMoney/>
      <Footer/>
    </div>
  );
}

const Hero: React.FC = props => {
  return (
    <div className="hero">
      <div className="hero-text">
        <em>J</em>inwoo<br/>
        <span className="amp">&</span>
        <em>H</em>yesook
      </div>
    </div>
  )
}

const Summary: React.FC = props => {
  return (
    <div className="summary">
      <div className="summary-text">
        오진우 <span className="amp">그리고</span> 양혜숙
      </div>
      <div className="summary-meta">
        2020.09.27 SUN PM 02:00<br/>
        아르테스웨딩
      </div>
    </div>
  )
}

const Poet: React.FC = props => {
  return (
    <div className="poet">
      <p className="poet-text">
        사랑은 소유가 아니라 동행임을 아는 두 사람은<br/>
        잡은 손을 놓지 않되 함부로 잡아 끌지 않을 것이며<br/>
        서로의 두 눈을 고요히 바라보아<br/>
        말하지 않아도 같은 쪽으로 걸어가리라
      </p>
      <p className="poet-ref">- 박미라 "아름다운 날에 부치다" 중</p>

    </div>
  )
}

const InviteMessage: React.FC = props => {
  return (
    <div className="invite">
      <div className="invite-welcome">
        2020. 09. 27<br/>
        <span className="invite-welcome-han">초대합니다</span>
      </div>

      <p className="invite-message">
        곁에 있을 때 가장 나다운 모습이 되게 하는 한 사람<br/>
        꿈을 펼칠 수 있도록 서로에게 날개가 되어줄 한 사람<br/>
        그 사람과 삶의 여행을 함께 떠나려 합니다.<br/>
        저희 여행의 출발점에 여러분을 초대하오니<br/>
        오셔서 많이 축복해주시면 큰 기쁨이겠습니다.
      </p>

      <div className="invite-party">
        <div>
          <b>오인화</b>・<b>윤숙자</b> 의 장남 <b>진우</b>
        </div>
        <div>
          <b>양성추</b>・<b>임미연</b> 의 장녀 <b>혜숙</b>
        </div>
      </div>


    </div>
  )
}

const LocationInfo: React.FC = props => {
  useEffect(() => {
    // @ts-ignore
    const maps = window.naver.maps
    const weddingHallLatLng = new maps.LatLng(37.4820097, 126.9814984)
    const map = new maps.Map(document.getElementById('map'), {
      center: new maps.LatLng(37.4805097, 126.9814984), // 사당역 보이게 슬쩍 위치조정6함
      zoom: 15,
      scaleControl: true,
      logoControl: false,
      logoControlOptions: {
        position: maps.Position.LEFT_BOTTOM,
      },
      mapDataControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: maps.ZoomControlStyle.SMALL,
        position: maps.Position.RIGHT_TOP,
      },
    });
    // const marker = new maps.Marker({
    //   position: weddingHallLatLng,
    //   map: map
    // });
    const info = new maps.InfoWindow({
      content: '<span style="font-size: 2em; pointer-events: none">❣️</span>',
      borderWidth: 0,
      backgroundColor: 'transparent',
      disableAnchor: true,
      // pixelOffset: new maps.Point(0, 20),
    })
    info.open(map, weddingHallLatLng)
  }, [])
  return (
    <section className="location">
      <div className="location-title">오시는 길</div>
      <div
        id="map"
        style={{ width: '100%', height: '50vh' }}
      />
      <div className="location-content">
        <strong className="location-artes">아르테스웨딩</strong>
        <div className="location-address">서울 동작구 동작대로 59 쌍립빌딩 2층 (사당 교보타워 2층)</div>

        <dl>
          <dt>지하철</dt>
          <dd>사당역과 이수역 중간</dd>
          <dd>2・4호선 사당역 10번 출구 한국전력 방면</dd>
          <dd>7호선 이수역 7번 출구 사당우체국 방면</dd>
        </dl>

        <dl>
          <dt>버스</dt>
          <dd>방배경찰서, 이수역, 사당동우체국 하차</dd>
          <dd>중앙차로: 350, 502, 540, 643, 4212, 4318, 4319, 5524, 8541, 서초06, 서초16</dd>
          <dd>가변차로: 동작07, 동작09, 동작16, 동작18</dd>
          <dd>경기버스: 11-1, 11-2, 11-5, 7007-1</dd>
          <dd>공항버스: 6016</dd>
        </dl>
      </div>
    </section>
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

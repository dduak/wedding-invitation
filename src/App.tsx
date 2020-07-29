import React from "react";
import {AppProvider, useAppContext} from "./context";
import Gallery from "./Gallery";
import Greeting from "./Greeting";
import LocationInfo from "./LocationInfo";
import GiftMoney from "./GiftMoney";
import "./App.css";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Layout>
        <Hero/>
        <Summary/>
        <Poet/>
        <Greeting/>
        <Gallery/>
        <LocationInfo/>
        <GiftMoney/>
        <Footer/>
      </Layout>
    </AppProvider>
  );
}

const Layout: React.FC = props => {
  const { pageType } = useAppContext()

  return (
    <div className={`app ${pageType}`}>
      {props.children}
    </div>
  )
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

const Footer: React.FC = props => {
  return (
    <footer>
      footer
    </footer>
  )
}

export default App;

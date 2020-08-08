import "./App.css";
import React, {useEffect} from "react";
import {AppProvider, Location, useAppContext} from "./context";
import {trackPageView} from "./tracking";
import Gallery from "./Gallery";
import Greeting from "./Greeting";
import LocationInfo from "./LocationInfo";
import GiftMoney from "./GiftMoney";
import Hero from "./Hero";
import Poet from "./Poet";

const App: React.FC = () => {
  useEffect(() => {
    trackPageView();
  }, [])

  return (
    <AppProvider>
      <ToggleLocationButton/>
      <Hero/>
      <Layout>
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

const ToggleLocationButton: React.FC = props => {
  const {location, toggleLocation} = useAppContext()
  const nextTarget = location === Location.JEJU ? '서울본식💒' : '제주잔치🎊'

  return (
    <button
      className="toggle-location-button"
      onClick={() => {
        toggleLocation()
      }}
    >
      {nextTarget}
      <span className="br-on-mobile"> 정보로 보기</span>
    </button>
  )
}
const Layout: React.FC = props => {
  const {target} = useAppContext()

  return (
    <div className={`app ${target}`}>
      {props.children}
    </div>
  )
}

const Footer: React.FC = props => {
  return (
    <footer className="footer">
      &copy; Jinwoo&amp;Hyesook
    </footer>
  )
}

export default App;

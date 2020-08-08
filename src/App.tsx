import "./App.css";
import React from "react";
import {AppProvider, Location, useAppContext} from "./context";
import Gallery from "./Gallery";
import Greeting from "./Greeting";
import LocationInfo from "./LocationInfo";
import GiftMoney from "./GiftMoney";
import Hero from "./Hero";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Hero/>
      <Layout>
        <Poet/>
        <Greeting/>
        <Gallery/>
        <LocationInfo/>
        <GiftMoney/>
        <Footer/>
        <ToggleLocationButton/>
      </Layout>
    </AppProvider>
  );
}

const ToggleLocationButton: React.FC = props => {
  const { location, toggleLocation } = useAppContext()
  const nextTarget = location === Location.JEJU ? 'Seoul' : 'Jeju'

  return (
    <button
      className="toggle-location-button"
      onClick={() => {
        toggleLocation()
      }}
    >
      {nextTarget} &rarr;
    </button>
  )
}
const Layout: React.FC = props => {
  const { target } = useAppContext()

  return (
    <div className={`app ${target}`}>
      {props.children}
    </div>
  )
}

const Poet: React.FC = props => {
  return (
    <div className="poet">
      <Feather/>
      <div className="poet-content">
        <p className="poet-text">
          사랑은 소유가 아니라 동행임을 아는 두 사람은<br/>
          잡은 손을 놓지 않되 함부로 잡아 끌지 않을 것이며<br/>
          서로의 두 눈을 고요히 바라보아<br/>
          말하지 않아도 같은 쪽으로 걸어가리라
        </p>
        <p className="poet-ref">- 박미라 "아름다운 날에 부치다" 중</p>
      </div>
    </div>
  )
}

const Feather: React.FC = props => {
  return (
    <svg
      className="poet-feather"
      version="1.1"
      viewBox="0 0 121.24 122.88"
    >
      <g><path className="st0" d="M10.05,96.6C6.38,105.51,1.42,113.97,0,122.88l5.13-0.44c8.1-23.56,15.4-39.4,31.23-59.21 C48.24,48.39,61.13,36.58,77.66,27.2c8.8-5,20.07-10.47,30.21-11.85c2.77-0.38,5.58-0.49,8.46-0.24 c-31.4,7.19-56.26,23.84-76.12,48.8C32.1,74.09,25.05,85.4,18.57,97.32l11.94,2.18l-4.97-2.47l17.78-2.83 c-6.6-2.33-13.12-1.55-15.21-4.06c18.3-0.83,33.34-4.78,43.9-12.45c-3.93-0.55-8.46-1.04-10.82-2.17 c17.69-5.98,27.92-16.73,40.9-26.27c-16.87,3.54-32.48,2.96-37-0.25c29.77,2.21,49-6.02,55.59-26.77c0.57-2.24,0.73-4.5,0.37-6.78 C118.74,0.62,92.49-4.39,83.95,7.77c-1.71,2.43-4.12,4.66-6.11,7.48L85.97,0c-21.88,7.39-23.68,15.54-35,40.09 c0.9-7.47,2.97-14.24,5.66-20.63c-27.34,10.55-36.45,37.11-37.91,59.7c-0.79-7.88,0.67-17.78,3.49-28.9 c-7.98,8-13.41,17.39-11.47,30.79l-3.65-1.63l1.92,7.19l-5.46-2.59L10.05,96.6L10.05,96.6z"/></g>
    </svg>
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

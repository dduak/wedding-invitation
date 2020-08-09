import "./App.css";
import React, {useEffect} from "react";
import {AppProvider, useAppContext} from "./context";
import {trackPageView} from "./tracking";
import Gallery from "./Gallery";
import Greeting from "./Greeting";
import LocationInfo from "./LocationInfo";
import GiftMoney from "./GiftMoney";
import Hero from "./Hero";
import Poet from "./Poet";
import SpecialGuest from "./SpecialGuest";
import ToggleLocationButton from "./ToggleLocationButton";

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
        <SpecialGuest/>
        <LocationInfo/>
        <GiftMoney/>
        <Footer/>
      </Layout>
    </AppProvider>
  );
}

const Layout: React.FC = props => {
  const {type} = useAppContext()

  return (
    <div className={`app ${type}`}>
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

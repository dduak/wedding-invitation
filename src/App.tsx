import "./App.css";
import React, {useEffect} from "react";
import {AppProvider, useAppContext} from "./context";
import {trackPageView} from "./tracking";
import Gallery from "./Gallery";
import Greeting from "./Greeting";
import LocationInfo from "./LocationInfo";
import ContactInfo from "./ContactInfo";
import GiftMoney from "./GiftMoney";
import Hero from "./Hero";
import Poet from "./Poet";
import SpecialGuest from "./SpecialGuest";
import ToggleLocationButton from "./ToggleLocationButton";

const App: React.FC = () => {
  useEffect(() => {
    trackPageView();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        const target = event.currentTarget

        // @ts-ignore
        document.querySelector(target?.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
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
        <ContactInfo/>
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
      {` `}
      <br/>
      <small>
        (<a href="https://github.com/dduak/wedding-invitation">GitHub</a>)
      </small>
    </footer>
  )
}

export default App;

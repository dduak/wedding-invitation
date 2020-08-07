import "./Hero.css"
import React from "react";
import {Location, useAppContext} from "./context";

const Hero: React.FC = props => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img
          src="/photos/1_2048.jpg"
          width="100%"
          alt=""
        />
      </div>
      <div className="hero-text">
        <span className="hero-text-jinwoo">
          <em>J</em>inwoo<br/>
        </span>
        <span className="hero-text-amp">&</span>
        <span className="hero-text-hyesook">
          <em>H</em>yesook
        </span>
      </div>
      <Summary/>
    </div>
  )
}

const Summary: React.FC = props => {
  const { location } = useAppContext()
  const isJeju = location === Location.JEJU
  const datetime = isJeju ? '2020.10.03(토)' : '2020.09.27(일) 오후 2시'
  const place = isJeju ? ' 애플컨벤션' : '아르테스웨딩'

  return (
    <div className="summary">
      <div className="summary-text">
        오진우 <span className="amp">그리고</span> 양혜숙
      </div>
      <div className="summary-meta">
        {datetime}<br/>
        {place}
      </div>
    </div>
  )
}

export default Hero

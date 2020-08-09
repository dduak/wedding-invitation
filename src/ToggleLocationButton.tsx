import "./ToggleLocationButton.css";
import Tippy from "@tippyjs/react";
import React from "react";
import {Location, useAppContext} from "./context";

const ToggleLocationButton: React.FC = props => {
  const {location, toggleLocation} = useAppContext()
  const nextTarget = location === Location.JEJU ? '서울본식 💒' : '제주잔치 🎊'

  return (
    <Tippy
      content="장소/날짜 정보가 변경되었습니다"
      trigger="click"
      onShown={instance => {
        setTimeout(() => {
          instance.hide()
        }, 700)
      }}
      duration={[300, 300]}
    >
      <button
        className="toggle-location-button"
        onClick={() => {
          toggleLocation()
        }}
      >
        {nextTarget}
        <span className="br-on-mobile"> 정보로 보기 &rarr;</span>
      </button>
    </Tippy>

  )
}

export default ToggleLocationButton

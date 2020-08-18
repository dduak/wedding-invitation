import "./SpecialGuest.css";
import React from "react";
import {useIsJejuParents} from "./context";


type Props = {}

const SpecialGuest: React.FC<Props> = props => {
  const isJejuParents = useIsJejuParents()
  if (isJejuParents) {
    return null
  }

  return (
    <section className="section special">
      <div className="container">
        <h1 className="section-title">도움주신 분들</h1>
        <p>
          결혼식 진행에 도움을 주시는,
          <span className="br-on-mobile"> </span>
          고마운 손님들을 소개합니다.
        </p>
        <div className="special-guests">
          <Guest
            photo="/guests/oshuni.jpg"
            name="오승훈"
            role="진행"
          >
            신랑의 6촌 동생으로,<br/>
            블로거 제주꾼으로도 활동하고 있는 재주많은 제주 출신 청년 입니다.<br/>
            사회를 부탁한다는 말에 자신외에 누가 하겠느냐며 흔쾌히 수락해 주었습니다 💪
          </Guest>
          <Guest
            photo="/guests/gg2.png"
            name="규홍&기은"
            role="축가"
          >
            신랑의 기타동호회 기타 스승님과 그의 연인입니다.<br/>
            곧 입대를 앞두고 있어 정신이 없을텐데도 쿨하게, 심지어 듀엣으로 축가를 준비해주었습니다 🥺
          </Guest>
          <Guest
            photo="/guests/halle9484.png"
            name="최항석"
            role="축가"
          >
            블루스의 거장, <a href="https://www.facebook.com/boogiehalle/">최항석과 부기몬스터</a>의 최항석님입니다.<br/>
            지난 19년도 겨울, 공연에서 팬과 뮤지션으로 만나서 CD에 싸인을 해주시던 중 '둘이 결혼하면 축가를 해 주겠다'고 해주셨었는데,<br/>
            진짜로 해 주시기로 하셨습니다 🙏
          </Guest>
        </div>
        <p>...그리고 바로 당신! <span role="img" aria-label="chu">😘</span></p>
      </div>
    </section>
  )
}

const Guest: React.FC<{
  photo: string
  name: string
  role: string
}> = props => {
  return (
    <div className="special-guest">
      <div className="special-guest-photo">
        <img src={props.photo} alt=""/>
      </div>
      <div className="special-guest-content">
        <div className="special-guest-header">
          <span className="special-guest-name">{props.name}</span>
          <small className="special-guest-role">{props.role}</small>
        </div>
        <div className="special-guest-desc">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default SpecialGuest

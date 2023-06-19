import "./SpecialGuest.css";
import {FC, ReactNode} from "react";
import {useIsJejuParents} from "./context";


type Props = {}

const SpecialGuest: FC<Props> = props => {
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
            photo="/guests/ddj.png"
            name="김다정"
            role="축사"
          >
            신부의 전 동거인.<br/>
            신부와 함께 평화로운 삶을 살아가다 그녀의 결혼으로 인해
            변화된 삶에 차차 적응해 나가고 있는 독립성 강한 십년지기 친구입니다.
          </Guest>
          <Guest
            photo="/guests/gg2.png"
            name="규홍&기은"
            role="축가"
          >
            신랑의 기타동호회 <b>Basement Chord</b>의 기타 스승님과 그의 연인입니다.<br/>
            곧 입대를 앞두고 있어 정신이 없을텐데도 쿨하게, 심지어 듀엣으로 축가를 준비해주었습니다 🥺
            <hr/>
            ..하지만 코로나 시국으로 인해 결혼식이 10/25로 미뤄지게 되어서, <br/>
            그사이 규홍이는 군대로 떠나버리고 아쉽게도 준비했던 무대를 보여드릴 수 없게 되었습니다. 😭<br/>
            잘 다녀와 규홍아 👋
          </Guest>
          <Guest
            photo="/guests/johnny.png"
            name="최주환"
            role="축가"
          >
            바쁜 일상에 치이면서도 웃음과 음악을 잃지 않는 성실한 형님으로,<br/>
            규홍&기은과 마찬가지로 기타동호회 <b>Basement Chord</b>에서의 인연입니다.<br/>
            촉박한 일정에도 군대로 떠난 규홍이를 대신해 축가 구원투수로 등판해주셨습니다 🔥
          </Guest>
          <Guest
            photo="/guests/halle9484.png"
            name="최항석"
            role="축가"
          >
            블루스의 거장, <b><a href="https://www.facebook.com/boogiehalle/">최항석과 부기몬스터</a></b>의 최항석님입니다.<br/>
            지난 19년도 겨울, 공연에서 팬과 뮤지션으로 만나서 CD에 싸인을 해주시던 중 '둘이 결혼하면 축가를 해 주겠다'고 해주셨었는데,<br/>
            진짜로 해 주시기로 하셨습니다 🙏
          </Guest>
        </div>
        <p>...그리고 바로 당신! <span role="img" aria-label="chu">😘</span></p>
      </div>
    </section>
  )
}

const Guest: FC<{
  photo: string
  name: string
  role: string
  children: ReactNode
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

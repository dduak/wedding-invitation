import "./Greeting.css"
import React from "react";
import {Location, Type, useAppContext} from "./context";

const Greeting: React.FC = props => {
  const {location} = useAppContext()
  const isJejuParents = useIsJejuParents()
  const date = location === Location.JEJU ? '2020. 10. 03.' : '2020. 09. 27.'

  return (
    <section className="section greeting">
      <div className="container">
        <header className="section-title">
          <span className="number">{date}</span><br/>
          {isJejuParents && (
            <>
              신랑측 피로연에
              <span className="br-on-mobile"> </span>
            </>
          )}
          초대합니다
        </header>

        <GreetingMessage/>

        <div className="greeting-party">
          <div>
            <b>오인화</b>・<b>윤숙자</b> 의 장남 <b>진우</b>
          </div>
          <div>
            <b>양성추</b>・<b>임미연</b> 의 장녀 <b>혜숙</b>
          </div>
        </div>
      </div>
    </section>
  )
}

const GreetingMessage: React.FC = props => {
  const {type} = useAppContext()
  const isJejuParents = useIsJejuParents()
  const target = isJejuParents ? '저희 장남이 아름다운 신부와 함께' : '저희 아들과 딸이'

  if (type === Type.PARENTS) {
    return (
      <p className="greeting-message">
        {target}<br/>
        사랑과 믿음으로 한 가정을 이루고자<br/>
        혼인의 예를 올립니다.<br/>
        귀한 걸음 하시어<br/>
        두 집안의 경사를 축하해 주시고<br/>
        첫 걸음을 내딛는 이들의 출발을<br/>
        함께 축복하고 격려해주시면<br/>
        더 없는 기쁨이겠습니다.
      </p>
    )
  }

  return (
    <p className="greeting-message">
      곁에 있을 때
      <span className="br-on-small-mobile"> </span>
      가장 나다운 모습이 되게 하는 한 사람<br/>
      꿈을 펼칠 수 있도록 서로에게
      <span className="br-on-small-mobile"> </span>
      날개가 되어줄 한 사람<br/>
      그 사람과 삶의 여행을 함께 떠나려 합니다.<br/>
      저희 여행의 출발점에 여러분을 초대하오니<br/>
      오셔서 많이 축복해주시면
      <span className="br-on-small-mobile"> </span>
      큰 기쁨이겠습니다.
    </p>
  )
}

function useIsJejuParents() {
  const {location, type} = useAppContext()
  const isJeju = location === Location.JEJU
  const isParentsType = type === Type.PARENTS

  return isJeju && isParentsType
}


export default Greeting

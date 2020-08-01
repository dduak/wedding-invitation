import React from "react";
import {Target, useAppContext} from "./context";

enum Person {
  Ark,
  Ddugi,
}

const GiftMoney: React.FC = props => {
  const {target} = useAppContext()
  const isTargetingParents = target === Target.PARENTS

  return (
    <section>
      <h1>마음 전하는 곳</h1>

      신랑
      <KakaoPayButton type={Person.Ark}/>
      <br/>
      {isTargetingParents && (
        <>
          <b>부:</b>
          농협 250-12-029838 오인화
          <br/>
          <b>모:</b>
          제주 230-21-03470 윤숙자
        </>
      )}

      <br/>
      <br/>
      신부
      <KakaoPayButton type={Person.Ddugi}/>
      <br/>
      {isTargetingParents && (
        <>
          <b>부:</b>
          국민 215-240-458241 양성추
          <br/>
          <b>모:</b>
          하나 164-192-60871 임미연
        </>
      )}

    </section>
  )
}

const KakaoPayButton: React.FC<{ type: Person }> = props => {
  const mapping = {
    [Person.Ark]: '281006011000000743345432',
    [Person.Ddugi]: '281006011000081348447563',
  }

  return (
    <a className="gift-button" href={`https://qr.kakaopay.com/${mapping[props.type]}`}>
      <img
        src="/kakaopay_200_100.png"
        alt="카카오페이로 축의금 보내기"
        height={25}
      />
    </a>
  )
}

export default GiftMoney

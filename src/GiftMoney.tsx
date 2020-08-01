import React from "react";

enum Person {
  Ark,
  Ddugi,
}

const GiftMoney: React.FC = props => {
  return (
    <section>
      <h1>마음 전하는 곳</h1>
      신랑<br/>
      <KakaoPayButton type={Person.Ark}/>
      {/*신랑측 부*/}
      {/*신랑측 모*/}

      <br/>
      신부<br/>
      <KakaoPayButton type={Person.Ddugi}/>
      {/*신부측 부*/}
      {/*신부측 모*/}

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

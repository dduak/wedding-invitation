import 'tippy.js/dist/tippy.css';
import './GiftMoney.css';
import React, {useEffect, useRef} from "react";
import ClipboardJS from "clipboard";
import {Target, useAppContext} from "./context";
import Tippy from '@tippyjs/react';
import {trackPressAccountNumber, trackPressGiftMoneyButton} from "./tracking";


enum Person {
  Aki= 'Aki',
  Ddugi = 'Ddugi',
}

const GiftMoney: React.FC = props => {
  const {target} = useAppContext()
  const isTargetingParents = target === Target.PARENTS

  return (
    <div className="container">
      <section className="section">
        <h1 className="section-title">마음 전하는 곳</h1>

        신랑
        <KakaoPayButton type={Person.Aki}/>
        <br/>
        {isTargetingParents && (
          <>
            <b>부:</b>
            <CopyToClipboard text="25012029838">
              농협 250-12-029838 오인화
            </CopyToClipboard>
            <br/>
            <b>모:</b>
            <CopyToClipboard text="2302103470">
              제주 230-21-03470 윤숙자
            </CopyToClipboard>
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
            <CopyToClipboard text="215240458241">
              국민 215-240-458241 양성추
            </CopyToClipboard>
            <br/>
            <b>모:</b>
            <CopyToClipboard text="16419260871">
              하나 164-192-60871 임미연
            </CopyToClipboard>
          </>
        )}
      </section>
    </div>
  )
}

const CopyToClipboard: React.FC<{
  text: string
}> = props => {
  const elRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!elRef.current) {
      return;
    }

    const clipboard = new ClipboardJS(elRef.current, {
      text: elem => props.text
    })

    clipboard.on('success', e => {
      trackPressAccountNumber(props.text)
    })

    return () => {
      clipboard.destroy()
    }
  }, [elRef, props.text])

  return (
    <Tippy
      content="계좌번호가 복사되었습니다!"
      trigger="click"
      onShown={instance => {
        setTimeout(() => {
          instance.hide()
        }, 700)
      }}
      duration={[300, 300]}
    >
      <span ref={elRef} className="clipboard">
        {props.children}
      </span>
    </Tippy>
  )
}

const KakaoPayButton: React.FC<{ type: Person }> = props => {
  const mapping = {
    [Person.Aki]: '281006011000000743345432',
    [Person.Ddugi]: '281006011000081348447563',
  }
  const href = `https://qr.kakaopay.com/${mapping[props.type]}`

  return (
    <a
      className="gift-button"
      href={href}
      onClick={event => {
        event.preventDefault()
        trackPressGiftMoneyButton(props.type)
        window.location.href = href
      }}
    >
      <img
        src="/kakaopay_200_100.png"
        alt="카카오페이로 축의금 보내기"
        height={25}
      />
    </a>
  )
}

export default GiftMoney

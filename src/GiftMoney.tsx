import 'tippy.js/dist/tippy.css';
import './GiftMoney.css';
import {FC, ReactNode, useEffect, useRef} from "react";
import ClipboardJS from "clipboard";
import {getSearchParam, Type, useAppContext} from "./context";
import Tippy from '@tippyjs/react';
import {trackPressAccountNumber, trackPressGiftMoneyButton} from "./tracking";


enum Person {
  Aki= 'Aki',
  Ddugi = 'Ddugi',
}

const GiftMoney: FC = props => {
  const {type} = useAppContext()
  const isTargetingParents = type === Type.PARENTS
  const searchParam = getSearchParam()

  if (Boolean(searchParam.formal)) {
    return null
  }

  return (
    <section className="section gift">
      <div className="container">
        <h1 className="section-title">마음 전하는 곳</h1>
        <p>
          사회적 거리두기의 시기에
          <span className="br-on-mobile"> </span>
          초대를 드리게 되어 송구합니다.<br/>
          참석은 어렵지만 축의는 해주실 분들을 위해
          <span className="br-on-mobile"> </span>
          준비했습니다.<br/>
          <small>계좌번호는 누르면 복사됩니다.</small>
        </p>

        <div className="gift-container">
          <div className="gift-box">
            <div className="gift-box-title">
              <span role="img" aria-label="groom">🤵🏻</span>
              신랑측 축의하기
            </div>
            <KakaoPayButton type={Person.Aki}/>
            <br/>
            <small>
              <CopyToClipboard text="3333016525108">
                카카오뱅크 3333-01-6525108 오진우
              </CopyToClipboard>
            </small>
            <br/>
            {isTargetingParents && (
              <div className="gift-box-parents">
                <b>부: </b>
                <CopyToClipboard text="25012029838">
                  농협 250-12-029838 오인화
                </CopyToClipboard>
                <br/>
                <b>모: </b>
                <CopyToClipboard text="3020921901411">
                  농협 302-0921-9014-11 윤숙자
                </CopyToClipboard>
              </div>
            )}
          </div>
          <div className="gift-box">
            <div className="gift-box-title">
              <span role="img" aria-label="bride">👰🏻</span>
              신부측 축의하기
            </div>
            <KakaoPayButton type={Person.Ddugi}/>
            <br/>
            <small>
              <CopyToClipboard text="110318061030">
                신한 110-318-061030 양혜숙
              </CopyToClipboard>
            </small>
            <br/>
            {isTargetingParents && (
              <div className="gift-box-parents">
                <b>부: </b>
                <CopyToClipboard text="215240458241">
                  국민 215-24-0458241 양성추
                </CopyToClipboard>
                <br/>
                <b>모: </b>
                <CopyToClipboard text="21520104193857">
                  국민 215201-04-193857 임미연
                </CopyToClipboard>
              </div>
            )}
          </div>
        </div>
        <p className="gift-thx">
          감사합니다.
          {!isTargetingParents && (
            <>
              <br/>
              잘살겠습니다! 👩‍❤️‍💋‍👨
            </>
          )}
        </p>
      </div>
    </section>
  )
}

const CopyToClipboard: FC<{
  text: string
  children: ReactNode
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

const KakaoPayButton: FC<{ type: Person }> = props => {
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

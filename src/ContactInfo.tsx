import {FC} from 'react'
import './ContactInfo.css'

type Props = {}

const ContactInfo: FC<Props> = props => {
  return (
    <section className="section contact">
      <div className="container">
        <div className="section-title">연락처</div>

        <div className="contact-container">
          <div className="contact-box">
            <div className="contact-box-title">
              <span role="img" aria-label="groom">🤵🏻</span>
              신랑
            </div>
            <b>오진우</b>
            <a href="tel:010-9660-8865">010-9660-8865</a>
            <br/>
            <div className="contact-box-parents">
              부: <b>오인화</b>
              <a href="tel:010-3699-2300">010-3699-2300</a>
              <br/>
              모: <b>윤숙자</b>
              <a href="tel:010-5781-3303">010-5781-3303</a>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-title">
              <span role="img" aria-label="bride">👰🏻</span>
              신부
            </div>
            <b>양혜숙</b>
            <a href="tel:010-5093-5247">010-5093-5247</a>
            <br/>
            <div className="contact-box-parents">
              부: <b>양성추</b>
              <a href="tel:010-5317-0475">010-5317-0475</a>
              <br/>
              모: <b>임미연</b>
              <a href="tel:010-9972-5249">010-9972-5249</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo

import "./Hero.css"
import {FC, useMemo} from "react";
import {getSearchParam, Location, useAppContext} from "./context";

const Hero: FC = props => {
  const {location} = useAppContext()
  const isFormal = useMemo(() => {
    const searchParam = getSearchParam();
    return Boolean(searchParam.formal);
  }, [])
  const img = useMainImage(isFormal)
  const containerClass = [
    'hero',
    isFormal ? '' : location
  ].join(' ')

  return (
    <div className={containerClass}>
      <div className="hero-image">
        <img
          src={`${process.env.REACT_APP_PHOTO_PATH}/${img}`}
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

function useMainImage(isFormal: boolean) {
  const {location} = useAppContext();

  if (isFormal) {
    return 'main_2048.jpg';
  }

  return location === Location.SEOUL ? 'main_2048.jpg' : 'main2_2048.jpg'
}

const Summary: FC = props => {
  const { location } = useAppContext()
  const isJeju = location === Location.JEJU
  const datetime = isJeju ? '2020년 10월 03일 (토) 오전 10시~오후 7시' : '2020년 10월 25일 (일) 오후 1시'
  const place = isJeju ? ' 애플컨벤션 in 제주' : '아르테스웨딩 in 서울'

  return (
    <div className="summary">
      <div className="summary-text">
        오진우 <span className="amp">그리고</span> 양혜숙
      </div>
      <div className="summary-meta">
        {datetime}<br/>
        {place}
        <span className="summary-link-to-location">
          (<a href="#location-info">오시는 길↓</a>)
        </span>
      </div>
    </div>
  )
}

export default Hero

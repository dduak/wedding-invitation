import "./LocationInfo.css"
import React, {useEffect} from "react";
import {Location, useAppContext} from "./context";
import { locationSVG, centerDirectionSVG } from "./svgIcons";


enum MapAppType {
  NAVER = 'naver',
  KAKAO = 'kakao'
}

enum Spot {
  ARTES = '아르테스웨딩홀',
  APPLE = '애플컨벤션'
}

const mapWebUrl = {
  [Spot.ARTES]: {
    [MapAppType.NAVER]: 'https://map.naver.com/v5/search/%EC%95%84%EB%A5%B4%ED%85%8C%EC%8A%A4%EC%9B%A8%EB%94%A9/place/11864028',
    [MapAppType.KAKAO]: 'https://map.kakao.com/?itemId=22869439',
  },
  [Spot.APPLE]: {
    [MapAppType.NAVER]: 'https://map.naver.com/v5/search/%EC%95%A0%ED%94%8C%EC%BB%A8%EB%B2%A4%EC%85%98/place/1323655643',
    [MapAppType.KAKAO]: 'https://map.kakao.com/?itemId=1742853888',
  }
}

const LocationInfo: React.FC = props => {
  const {location} = useAppContext()

  if (location === Location.SEOUL) {
    return <SeoulLocationInfo/>
  }

  return <JejuLocationInfo/>
}

const JejuLocationInfo: React.FC = props => {
  const point = {
    lat: 33.2539426,
    lng: 126.5494984
  };

  useEffect(() => {
    initMap({
      point,
      zoom: 16,
    })
  }, [point])
  return (
    <LocationInfoLayout>
      <strong className="location-place">애플컨벤션</strong>
      <span className="location-place-tel">
          (<span role="img" aria-label="tel">☎️</span>️ <a href="tel:064-732-7750">064-732-7750</a>)
      </span>
      <div className="location-address">제주 서귀포시 일주동로 8796 (서귀여중 근처)</div>
      <MapAppArea
        name={Spot.APPLE}
        point={point}
      />
    </LocationInfoLayout>
  )
}


const SeoulLocationInfo: React.FC = props => {
  const point = {
    lat: 37.4820097,
    lng: 126.9814984
  }

  useEffect(() => {
    initMap({
      point,
      zoom: 13,
    })
  }, [point])

  return (
    <LocationInfoLayout>
      <strong className="location-place">아르테스웨딩</strong>
      <span className="location-place-tel">
          (<span role="img" aria-label="tel">☎️</span>️ <a href="tel:02-525-3388">02-525-3388</a>)
      </span>
      <div className="location-address">서울 동작구 동작대로 59 쌍립빌딩 2층 (사당 교보타워 2층)</div>
      <MapAppArea
        name={Spot.ARTES}
        point={point}
      />
      <dl>
        <dt>지하철</dt>
        <dd>사당역과 이수역 중간</dd>
        <dd>2・4호선 사당역 10번 출구 한국전력 방면</dd>
        <dd>7호선 이수역 7번 출구 사당우체국 방면</dd>
      </dl>

      <dl>
        <dt>버스</dt>
        <dd>방배경찰서, 이수역, 사당동우체국 하차</dd>
        <dd>중앙차로: 350, 502, 540, 643, 4212, 4318, 4319, 5524, 8541, 서초06, 서초16</dd>
        <dd>가변차로: 동작07, 동작09, 동작16, 동작18</dd>
        <dd>경기버스: 11-1, 11-2, 11-5, 7007-1</dd>
        <dd>공항버스: 6016</dd>
      </dl>
    </LocationInfoLayout>
  )
}

const MapAppArea: React.FC<{
  name: Spot
  point: {
    lat: number
    lng: number
  }
}> = props => {
  const { name, point } = props

  return (
    <div className="location-mapapp">
      <MapButton
        name={name}
        point={point}
        type={MapAppType.NAVER}
      />
      <MapButton
        name={name}
        point={point}
        type={MapAppType.KAKAO}
      />
    </div>
  )
}

const MapButton: React.FC<{
  type: MapAppType
  name: Spot
  point: {
    lat: number
    lng: number
  }
}> = props => {
  const { name, type, point } = props
  const { lat, lng } = point
  const isNaverMap = type === MapAppType.NAVER
  const appText = isNaverMap ? '네이버맵' : '카카오맵'
  const handleClick = () => {

    if (isAppSupportedPlatform()) {
      if (isNaverMap) {
        const params = [
          `dlat=${lat}`,
          `dlng=${lng}`,
          `dname=${encodeURI(name)}`,
          `appname=https://jinwoohyesook.xyz`
        ].join('&');
        window.location.href = `nmap://route/car?${params}`;
      } else {
        window.location.href = `kakaomap://route?ep=${lat},${lng}&by=CAR`;
      }

      setTimeout(() => {
        if (window.confirm('지도 웹페이지를 여시겠습니까?')) {
          window.location.href = mapWebUrl[name][type]
        }
      }, 600)
    } else {
      window.open(mapWebUrl[name][type], '_blank')
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`location-mapbutton ${type}`}
    >
      {appText}으로 길찾기
    </button>
  )
}

const LocationInfoLayout: React.FC = props => {
  return (
    <section className="section location" id="location-info">
      <div className="container">
        <div className="section-title">오시는 길</div>
        <div
          id="map"
          style={{width: '100%', height: '40vh'}}
        />
        <div className="location-content">
          {props.children}
        </div>
      </div>
    </section>
  )
}
type MapOptions = {
  point: {
    lat: number
    lng: number
  }
  zoom: number
}

function initMap(options: MapOptions) {
  const {point, zoom} = options

  // @ts-ignore
  const maps = window.naver.maps
  const weddingHallLatLng = new maps.LatLng(point.lat, point.lng)
  const map = new maps.Map(document.getElementById('map'), {
    zoom,
    center: weddingHallLatLng,
    scaleControl: true,
    logoControl: false,
    logoControlOptions: {
      position: maps.Position.LEFT_BOTTOM,
    },
    mapDataControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: maps.ZoomControlStyle.SMALL,
      position: maps.Position.RIGHT_TOP,
    },
  });
  // const marker = new maps.Marker({
  //   position: weddingHallLatLng,
  //   map: map
  // });
  const info = new maps.InfoWindow({
    content: `<span class="location-point" style="pointer-events: none">${locationSVG}</span>`,
    borderWidth: 0,
    backgroundColor: 'transparent',
    disableAnchor: true,
    // pixelOffset: new maps.Point(0, 20),
  })
  info.open(map, weddingHallLatLng)

  maps.Event.once(map, 'init_stylemap', function () {
    const locationBtnHtml = `<button class="location-button" type="button">${centerDirectionSVG}</button>`;
    const customControl = new maps.CustomControl(locationBtnHtml, {
      position: maps.Position.TOP_RIGHT
    });

    customControl.setMap(map);

    maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
      map.setCenter(weddingHallLatLng);
    });
  });
}

function isAppSupportedPlatform() {
  const userAgent = navigator.userAgent.toLowerCase()
  const isIphone = userAgent.indexOf('iphone') > -1
  const isAndroid = userAgent.indexOf('android') > -1

  return  isIphone || isAndroid
}

export default LocationInfo

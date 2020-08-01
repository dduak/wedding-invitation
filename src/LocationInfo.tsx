import React, {useEffect} from "react";
import {Location, useAppContext} from "./context";


const LocationInfo: React.FC = props => {
  const { location } = useAppContext()

  if (location === Location.SEOUL) {
    return <SeoulLocationInfo/>
  }

  return <JejuLocationInfo/>
}

const centerDirectionSVG =
`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    enable-background="new 0 0 24 24"
>
  <path d="M 11 1 L 11 3.03125 C 6.7956596 3.4828018 3.4828018 6.7956596 3.03125 11 L 1 11 L 1 13 L 3.03125 13 C 3.4828018 17.20434 6.7956596 20.517198 11 20.96875 L 11 23 L 13 23 L 13 20.96875 C 17.20434 20.517198 20.517198 17.20434 20.96875 13 L 23 13 L 23 11 L 20.96875 11 C 20.517198 6.7956596 17.20434 3.4828018 13 3.03125 L 13 1 L 11 1 z M 12 5 C 15.9 5 19 8.1 19 12 C 19 15.9 15.9 19 12 19 C 8.1 19 5 15.9 5 12 C 5 8.1 8.1 5 12 5 z M 12 8 C 9.790861 8 8 9.790861 8 12 C 8 14.209139 9.790861 16 12 16 C 14.209139 16 16 14.209139 16 12 C 16 9.790861 14.209139 8 12 8 z"/>
</svg>`

const locationSVG =
`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="36"
    height="36"
    fill="currentColor"
  >
  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
`

const JejuLocationInfo: React.FC = props => {
  useEffect(() => {
    initMap({
      point: {
        lat: 33.2539426,
        lng: 126.5494984
      },
      zoom: 15,
    })
  }, [])
  return (
    <section className="location">
      <div className="location-title">오시는 길</div>
      <div
        id="map"
        style={{width: '100%', height: '50vh'}}
      />
      <div className="location-content">
        <strong className="location-artes">애플웨딩홀</strong>
        <div className="location-address">제주 서귀포시 일주동로 8796</div>
      </div>
    </section>
  )
}

const SeoulLocationInfo: React.FC = props => {
  useEffect(() => {
    initMap({
      point: {
        lat: 37.4820097,
        lng: 126.9814984
      },
      zoom: 12,
    })
  }, [])

  return (
    <section className="location">
      <div className="location-title">오시는 길</div>
      <div
        id="map"
        style={{width: '100%', height: '50vh'}}
      />
      <div className="location-content">
        <strong className="location-artes">아르테스웨딩</strong>
        <div className="location-address">서울 동작구 동작대로 59 쌍립빌딩 2층 (사당 교보타워 2층)</div>

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
  const { point, zoom } = options

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

  maps.Event.once(map, 'init_stylemap', function() {
    const locationBtnHtml = `<button class="location-button" type="button">${centerDirectionSVG}</button>`;
    const customControl = new maps.CustomControl(locationBtnHtml, {
      position: maps.Position.TOP_RIGHT
    });

    customControl.setMap(map);

    maps.Event.addDOMListener(customControl.getElement(), 'click', function() {
      map.setCenter(weddingHallLatLng);
    });
  });
}

export default LocationInfo

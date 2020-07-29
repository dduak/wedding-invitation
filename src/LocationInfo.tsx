import React, {useEffect} from "react";

const LocationInfo: React.FC = props => {
  useEffect(() => {
    // @ts-ignore
    const maps = window.naver.maps
    const weddingHallLatLng = new maps.LatLng(37.4820097, 126.9814984)
    const map = new maps.Map(document.getElementById('map'), {
      center: new maps.LatLng(37.4805097, 126.9814984), // 사당역 보이게 슬쩍 위치조정6함
      zoom: 15,
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
      content: '<span style="font-size: 2em; pointer-events: none">❣️</span>',
      borderWidth: 0,
      backgroundColor: 'transparent',
      disableAnchor: true,
      // pixelOffset: new maps.Point(0, 20),
    })
    info.open(map, weddingHallLatLng)
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

export default LocationInfo

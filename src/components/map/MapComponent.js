import React, { useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';

/*global kakao*/

const MapComponentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Map = styled.div`
  width: 70%;
  height: 800px;
  @media (max-width: 1500px) {
    height: 700px;
  }
  @media (max-width: 1000px) {
    height: 500px;
  }
`;

const InformationBlock = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    width: 50%;
  }
  height: 3rem;
  padding: 3rem 0;
  background: midnightblue;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lightgray;
  text-align: center;
`;

const InfoTitle = styled.span`
  padding: 0.5rem;
  color: white;
  font-size: 1.3rem;
`;

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=1545ef3febd85db868325d578f72baaf&libraries=LIBRARY";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(37.50644731844055, 126.66544160094764), //지도의 중심좌표.
          level: 3 //지도의 레벨(확대, 축소 정도)
        };
  
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  
        let markerPosition  = new kakao.maps.LatLng(37.50644731844055, 126.66544160094764); 
  
        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });
  
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    }
  }, []);

  return (
    <div>
      <MapComponentBlock>
        <Banner />
        <MapWrapper>
          <Map id="map" />
        </MapWrapper>
        <InformationBlock>
          <Information>
            <InfoTitle>ADDRESS</InfoTitle>
            인천광역시 서구 길주로 34<br />
            인천 서구 석남동 222-9
          </Information>
          |
          <Information>
            <InfoTitle>TEL</InfoTitle>
            032-572-2428
          </Information>
          |
          <Information>
            <InfoTitle>FAX</InfoTitle>
            032-574-5121
          </Information>
        </InformationBlock>
      </MapComponentBlock>
    </div>
  );
};

export default MapComponent;
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk"
import React, {useEffect, useState} from "react"

const Api = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const successHandler = (response) => {
    console.log(response);
    const {latitude, longitude} = response.coords;
    setLocation({latitude, longitude});
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  // const [level, setLevel] = useState(3);

  const locations = [
    {title : "카카오", latlng :{lat: 33.450750, lng: 126.570677}},
    {title : "생태연못", latlng :{lat: 33.450936, lng: 126.569477}},
    {title : "텃밭", latlng :{lat : 33.450879, lng : 126.56994}},
    {title : "근린공원", latlng : {lat : 33.451393, lng : 126.570738}},
  ];
  
  return (
    <>
      {location && (
        <Map 
          center={{ lat: location.latitude, lng: location.longitude }} 
          style={{ width: '800px', height: '600px' }} 
          level={3}
        >
          <MapMarker position={{ lat: location.latitude, lng: location.longitude }} />
        </Map>
      )}
    </>
  )
      /* {locations.map((loc, idx) => (
        <MapMarker
          key={`${loc.title}-${loc.latlng}`}
          position={loc.latlng}
          image={{
            src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
            size: {width: 24, height: 35},
          }}
          title={loc.title}
        ></MapMarker>
      ))}
      <CustomOverlayMap position={{lat:33.55635, lng:126.795841}}>
        <div className="Overlay">Here!</div>
      </CustomOverlayMap>
      <button onClick={() => setLevel(level + 1)}>-</button>
      <button onClick={() => setLevel(level - 1)}>+</button> */
}

export default Api
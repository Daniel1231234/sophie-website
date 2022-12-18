// import React from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

// export function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// function App() {
//   return (
//     <div>
//       <WrappedMap
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_API_KEY"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }


import {useState, useCallback, memo} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// projectid: sophie-portfolio-371710

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 32.216230,
  lng: 34.992840
};

const API_KEY = "AIzaSyCm3k2TRGfDGzfKtzPwlzG5BuzMGFXTgpQ"

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        defaultZoom={8}
      >
           <Marker position={center} />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default memo(Map)

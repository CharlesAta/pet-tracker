import React, {useState, useEffect} from 'react'
import "./Map.css"
import {
  GoogleMap,
  useJsApiLoader
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

// import useOnclickOutside from "react-cool-onclickoutside";

const containerStyle = {
  width: '800px',
  height: '400px'
};

// const center = {
//   lat: 43.651070,
//   lng: -79.347015
// };

// useEffect(() => {
  

//   if (props.location) {
//     const results = await getGeocode(props.location);
//     const { lat, lng } = await getLatLng(results[0]);
//     console.log(results)
//     console.log(lat)
//     console.log(lng)
//   }
// }, [props.location])

function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDPYgvsAsMFTg4IXuxDt_DYbNxyPalyl3Y"
  })

  const [map, setMap] = React.useState(null)
  const [center, setCenter] = useState({
    lat: 43.651070,
    lng: -79.347015
  })

  useEffect(() => {
    if (props.location) {
      console.log(props.location)
      const fetchLocation =  async () => {
       const results = await getGeocode(props.location);
       const { lat, lng } = await getLatLng(results[0]);
       console.log(results)
       console.log(lat)
       console.log(lng)
     }
   }
  }, [props.location])
  
  
  return isLoaded ? (
      <GoogleMap className="mt-3"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}

      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
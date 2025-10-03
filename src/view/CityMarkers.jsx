import React, { useEffect, useRef } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import cities from '../constants/cities';

export const CityMarkers = ({ mapZoom }) => {
  const map = useMap();  

  useEffect(() => {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        const city = cities.items.get(layer.options.cityId);
        const shouldShowPopup = (mapZoom > 8.5) || 
                                (mapZoom > 7.3 && city.size >= 20) || 
                                (mapZoom <= 7.3 && city.size >= 78);
        
        if (shouldShowPopup) {
          layer.openPopup();
        } else {
          layer.closePopup();
        }
      }
    });
  }, [mapZoom, map]);

  return (
    <>
      {Array.from(cities.items.values()).map((city, index) => {
        return (
          <Marker 
            key={index} 
            position={[city.lat, city.long]} 
            icon={new L.Icon({ 
              iconUrl: "../../assets/cities.svg", 
              iconSize: [3, 3]
            })}
            cityId={city.nameGr}  
          >
            <Popup
              className="custom-popup"
              closeButton={false}
              closeOnClick={false}
              autoClose={false}
              autoPan={false}
              permanent={true}
            >
              {city.nameGr}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};
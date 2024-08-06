/* Author: Sotiris Konstantis */

import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const MapEventHandler = ({ setMapCenter, setMapZoom }) => {

  const map = useMap(); 

  useEffect(() => {
    const updateCenter = () => {
      const center = map.getCenter();
      setMapCenter([center.lat, center.lng]);
    };

    const updateZoom = () => {
      const zoom = map.getZoom();
      setMapZoom(zoom);
    };

    map.on('moveend', updateCenter);
    map.on('zoomend', updateZoom); 

    return () => {
      map.off('moveend', updateCenter);
      map.off('zoomend', updateZoom); 
    };
  }, [map, setMapCenter, setMapZoom]);

  return null;
};
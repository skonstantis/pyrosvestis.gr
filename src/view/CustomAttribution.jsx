/* Author: Sotiris Konstantis */

import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

export const CustomAttribution = () => {
    const map = useMap(); 
  
    useEffect(() => {
      const attributionControl = L.control.attribution({ prefix: false }).addTo(map);
      
      attributionControl.addAttribution(
        '© 2024 - pyrosvestis.gr - All rights reserved - <a href="https://leafletjs.comm">Leaflet</a>'
      ); 
    }, [map]);
  
    return null;
  };
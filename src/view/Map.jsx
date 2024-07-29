/* Author: Sotiris Konstantis */

import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, useMap } from "react-leaflet";
import * as mapConfig from "../constants/mapConfig";
import { onEachGreeceFeature } from "../functions/onEachGreeceFeature";
import { setDataLoaded } from "../variables/dataLoaded";
import DateComponent from './DateComponent'; 
import Header from './Header'; 
import L from "leaflet";
import "./map.css";

const CustomAttribution = () => {
  const map = useMap(); 

  useEffect(() => {
    const attributionControl = L.control.attribution({ prefix: false }).addTo(map);
    
    attributionControl.addAttribution(
      '© 2024 - pyrosvestis.gr - All rights reserved - <a href="https://leafletjs.comm">Leaflet</a>'
    ); 
  }, [map]);

  return null;
};

const Map = () => {
  const [greeceData, setGreeceData] = useState(null);
  const [europeData, setEuropeData] = useState(null);
  const [dataLoaded, setDataLoadedState] = useState(false);

  useEffect(() => {
    const fetchGreeceData = fetch(mapConfig.greeceJSONPath)
      .then((response) => response.json())
      .then((data) => setGreeceData(data))
      .catch((error) => console.error("Error fetching Greece GeoJSON data:", error));

    const fetchEuropeData = fetch(mapConfig.europeJSONPath)
      .then((response) => response.json())
      .then((data) => setEuropeData(data))
      .catch((error) => console.error("Error fetching Europe GeoJSON data:", error));

    Promise.all([fetchGreeceData, fetchEuropeData]).then(() => {
      setDataLoaded(true);
      setDataLoadedState(true);
    });
  }, []);

  return (
    <div style={mapConfig.style}>
      {!dataLoaded && (
        <div style={mapConfig.overlayStyle}>
          Φόρτωση...
        </div>
      )}
      <MapContainer
        center={mapConfig.center}
        zoom={mapConfig.zoom}
        zoomSnap={mapConfig.zoomSnap}
        maxZoom={mapConfig.maxZoom}
        minZoom={mapConfig.minZoom}
        maxBounds={mapConfig.maxBounds}
        maxBoundsViscosity={mapConfig.maxBoundsViscosity}
        style={mapConfig.style}
        attributionControl={false}
        id="map"
      >
        {europeData && <GeoJSON data={europeData} style={mapConfig.europeStyle} />}
        {greeceData && <GeoJSON data={greeceData} style={mapConfig.greeceStyle} onEachFeature={onEachGreeceFeature} />}
        <CustomAttribution />
      </MapContainer>
      <DateComponent />
      <Header/>
    </div>
  );
};

export default Map;
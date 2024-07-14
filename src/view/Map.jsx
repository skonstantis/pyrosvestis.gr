/* Author: Sotiris Konstantis */

import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import * as mapConfig from "../constants/mapConfig";
import { onEachGreeceFeature } from "../functions/onEachGreeceFeature";
import { setDataLoaded } from "../variables/dataLoaded";
import DateComponent from './DateComponent'; 

const Map = () => {
  const [greeceData, setGreeceData] = useState(null);
  const [europeData, setEuropeData] = useState(null);

  useEffect(() => {
    const fetchGreeceData = fetch(mapConfig.greeceJSONPath)
      .then((response) => response.json())
      .then((data) => setGreeceData(data))
      .catch((error) => console.error("Error fetching Greece GeoJSON data:", error));

    const fetchEuropeData = fetch(mapConfig.europeJSONPath)
      .then((response) => response.json())
      .then((data) => setEuropeData(data))
      .catch((error) => console.error("Error fetching Europe GeoJSON data:", error));

    Promise.all([fetchGreeceData, fetchEuropeData]).then(() => setDataLoaded(true));
  }, [mapConfig.greeceJSONPath, mapConfig.europeJSONPath]);

  return (
    <div style={mapConfig.style}>
      <MapContainer
        center={mapConfig.center}
        zoom={mapConfig.zoom}
        zoomSnap={mapConfig.zoomSnap}
        maxZoom={mapConfig.maxZoom}
        minZoom={mapConfig.minZoom}
        maxBounds={mapConfig.maxBounds}
        maxBoundsViscosity={mapConfig.maxBoundsViscosity}
        style={mapConfig.style}
      >
        {europeData && <GeoJSON data={europeData} style={mapConfig.europeStyle} />}
        {greeceData && <GeoJSON data={greeceData} style={mapConfig.greeceStyle} onEachFeature={onEachGreeceFeature} />}
      </MapContainer>

      <DateComponent/>
    </div>
  );
};

export default Map;
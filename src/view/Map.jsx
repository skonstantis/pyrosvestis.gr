import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";

const Map = () => {
  const center = [38.4, 24];
  const zoom = 6.6;
  const [greeceData, setGreeceData] = useState(null);
  const [europeData, setEuropeData] = useState(null);

  const greeceStyle = {
        "color": "#FFFFFF",
        "weight": 1,
        "opacity": 0.5,
        "fillColor": "#1B2849",
        "fillOpacity": 1
  };

  const europeStyle = {
    "color": "#FFFFFF",
    "weight": 1,
    "opacity": 0.5,
    "fillColor": '#4A4F77',
    "fillOpacity": 1,
    "stroke": "TRUE"
};

  useEffect(() => {
    fetch("../../assets/dasarcheia-final.geojson")
      .then((response) => response.json())
      .then((data) => setGreeceData(data))
      .catch((error) => console.error("Error fetching Greece GeoJSON data:", error));
  }, []);

  useEffect(() => {
    fetch("../../assets/europe.geojson")
      .then((response) => response.json())
      .then((data) => setEuropeData(data))
      .catch((error) => console.error("Error fetching Europe GeoJSON data:", error));
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomSnap={0.7}
      maxZoom={18}
      minZoom={zoom}
      maxBounds={[
        [31.80495018157633, 11.295994098331422],
        [44.71497750316861, 38.10433099539361],
      ]}
      maxBoundsViscosity={1.0}
      style={{ height: "100vh", width: "100%", background: "grey" }}
    >
      {europeData && <GeoJSON data={europeData} style={europeStyle} />}
      {greeceData && <GeoJSON data={greeceData} style={greeceStyle} />}
    </MapContainer>
  );
};

export default Map;

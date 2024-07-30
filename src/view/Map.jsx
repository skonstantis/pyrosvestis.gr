/* Author: Sotiris Konstantis */

import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import * as mapConfig from "../constants/mapConfig";
import { onEachGreeceFeature } from "../functions/onEachGreeceFeature";
import { setDataLoaded } from "../variables/dataLoaded";
import DateComponent from './DateComponent'; 
import Header from './Header'; 
import "./map.css";
import RegionStats from "./RegionStats";
import moment from "moment";
import { CustomAttribution } from "./CustomAttribution";
import layers from "../constants/layers";
import levels from "../constants/levels";
import colors from "../constants/colors";
import locations from "../constants/locations";

const Map = () => {
  const [greeceData, setGreeceData] = useState(null);
  const [europeData, setEuropeData] = useState(null);
  const [dataLoaded, setDataLoadedState] = useState(false);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));
  const [selectedType, setSelectedType] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedDanger, setSelectedDanger] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if(isSelected)
    {
      locations.items.forEach((item) => {
        if(item.layer == selectedId.layer)
        {
          layers.forEach((layer) => {
            if(layer.feature.properties.OBJECTID == item.layer)
            {
                setSelectedDanger((levels.items.get(colors.getColorId(layer.options.fillColor))));
                setSelectedColor(colors.items.get(colors.getColorId(layer.options.fillColor)));
            }
          });
        }
      });      
    }
  }, [selectedDate]);

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
        {greeceData && <GeoJSON data={greeceData} style={mapConfig.greeceStyle} onEachFeature={onEachGreeceFeature(setIsSelected, setSelectedId, setSelectedType, setSelectedName, setSelectedDanger, setSelectedColor)} />}
        <CustomAttribution />
      </MapContainer>
      {isSelected && (
        <RegionStats 
          isSelected={isSelected}
          selectedDate={selectedDate}
          selectedType={selectedType}
          selectedName={selectedName}
          selectedDanger={selectedDanger}
          selectedColor={selectedColor}
        />
      )}
      <DateComponent date={selectedDate} setDate={setSelectedDate} setIsSelected={setIsSelected}/>
      <Header />
    </div>
  );
};

export default Map;
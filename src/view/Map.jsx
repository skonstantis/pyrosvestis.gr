/* Author: Sotiris Konstantis */

import "leaflet/dist/leaflet.css";
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import * as mapConfig from "../constants/mapConfig";
import { onEachGreeceFeature } from "../functions/onEachGreeceFeature";
import { setDataLoaded } from "../variables/dataLoaded";
import DateComponent from "./DateComponent";
import Header from "./Header";
import "./map.css";
import RegionStats from "./RegionStats";
import moment from "moment-timezone";
import { CustomAttribution } from "./CustomAttribution";
import layers from "../constants/layers";
import levels from "../constants/levels";
import colors from "../constants/colors";
import locations from "../constants/locations";
import { useSeason } from "../contexts/SeasonContext";
import riskFile from "../constants/riskFile";
import { useSessionStorage } from "../contexts/SessionStorageContext";
import types from "../constants/types";
import noOfLayers from "../constants/noOfLayers";
import initialFillColor from "../constants/initialFillColor";
import { Categories } from "./Categories";
import { CircleComponent } from "./CircleComponent";
import { MapEventHandler } from "./MapEventHandler";
import { isMobileDevice } from "../functions/isMobileDevice";
import { CityMarkers } from "./CityMarkers";
import { ControlPanel } from "./ControlPanel";

const Map = () => {
  const [greeceData, setGreeceData] = useState(null);
  const [europeData, setEuropeData] = useState(null);
  const [dataLoaded, setDataLoadedState] = useState(false);

  const [selectedType, setSelectedType] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedDanger, setSelectedDanger] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const {
    selectedDate,
    setSelectedDate,
    isSelected,
    setIsSelected,
    selectedId,
    setSelectedId,
    selectedLongitude,
    setSelectedLongitude,
    selectedLatitude,
    setSelectedLatitude,
    mapCenter,
    setMapCenter,
    mapZoom,
    setMapZoom,
    isCitiesSettingEnabled,
  } = useSessionStorage();

  const previousDateRef = useRef(
    moment().tz("Europe/Athens").format("YYYY-MM-DD")
  );

  const [riskData, setRiskData] = useState(null);
  const [currentRisk, setCurrentRisk] = useState(null);

  const { needsRefresh, setNeedsRefresh } = useSeason();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDate = moment().tz("Europe/Athens").format("YYYY-MM-DD");
      if (newDate !== previousDateRef.current) window.location.reload();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchRiskData = () => {
    fetch(riskFile)
      .then((response) => response.json())
      .then((data) => {
        setRiskData(data);
      })
      .catch((error) => {
        console.error("Error fetching risk data:", error);
      });
  };

  useEffect(() => {
    fetchRiskData();

    const fetchGreeceData = fetch(mapConfig.greeceJSONPath)
      .then((response) => response.json())
      .then((data) => setGreeceData(data))
      .catch((error) =>
        console.error("Error fetching Greece GeoJSON data:", error)
      );

    const fetchEuropeData = fetch(mapConfig.europeJSONPath)
      .then((response) => response.json())
      .then((data) => setEuropeData(data))
      .catch((error) =>
        console.error("Error fetching Europe GeoJSON data:", error)
      );

    Promise.all([fetchGreeceData, fetchEuropeData]).then(() => {
      setDataLoaded(true);
      setDataLoadedState(true);
    });
  }, []);

  useEffect(() => {
    const checkAndExecute = () => {
      if (layers.length < noOfLayers) {
        setTimeout(checkAndExecute, 10);
        return;
      }

      if (isSelected) {
        locations.items.forEach((item) => {
          if (selectedId && item.layer === selectedId.layer) {
            layers.forEach((layer) => {
              if (layer.feature.properties.OBJECTID === item.layer) {
                if (layer.options.fillColor == initialFillColor) {
                  setTimeout(checkAndExecute, 10);
                  return;
                }

                setSelectedName(locations.items.get(item.id).name);
                setSelectedType(
                  types.items.get(locations.items.get(item.id).type)
                );

                setSelectedDanger(
                  levels.items.get(colors.getColorId(layer.options.fillColor))
                );
                setSelectedColor(
                  colors.items.get(colors.getColorId(layer.options.fillColor))
                );
                if (riskData) setCurrentRisk(riskData[item.id] || null);
              }
            });
          }
        });
      }
    };

    checkAndExecute();
  }, [selectedDate, isSelected, riskData, selectedId, layers]);

  useEffect(() => {
    if (needsRefresh) {
      fetchRiskData();
      setNeedsRefresh(false);
      window.location.reload();
    }
  }, [needsRefresh]);

  return (
    <div style={mapConfig.style}>
      {!dataLoaded && <div style={mapConfig.overlayStyle}>Φόρτωση...</div>}
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        zoomSnap={mapConfig.zoomSnap}
        maxZoom={mapConfig.maxZoom}
        minZoom={isMobileDevice() ? 5.8 : 6.5}
        maxBounds={mapConfig.maxBounds}
        maxBoundsViscosity={mapConfig.maxBoundsViscosity}
        style={mapConfig.style}
        attributionControl={false}
        id="map"
      >
        <MapEventHandler setMapCenter={setMapCenter} setMapZoom={setMapZoom} />
        {europeData && (
          <GeoJSON data={europeData} style={mapConfig.europeStyle} />
        )}
        {greeceData && (
          <GeoJSON
            data={greeceData}
            style={mapConfig.greeceStyle}
            onEachFeature={onEachGreeceFeature(
              setIsSelected,
              setSelectedId,
              setSelectedType,
              setSelectedName,
              setSelectedDanger,
              setSelectedColor,
              setSelectedLongitude,
              setSelectedLatitude
            )}
          />
        )}
        {dataLoaded && isCitiesSettingEnabled && (
          <CityMarkers mapZoom={mapZoom} />
        )}
        <CustomAttribution />
        <CircleComponent
          center={{ lat: selectedLatitude, lng: selectedLongitude }}
        />
      </MapContainer>
      <RegionStats
        isSelected={isSelected}
        selectedDate={selectedDate}
        selectedType={selectedType}
        selectedName={selectedName}
        selectedDanger={selectedDanger}
        selectedColor={selectedColor}
        riskData={currentRisk}
      />

      <Categories />
      {dataLoaded && <ControlPanel />}
      <DateComponent
        date={selectedDate}
        setDate={setSelectedDate}
        setIsSelected={setIsSelected}
        setSelectedLongitude={setSelectedLongitude}
        setSelectedLatitude={setSelectedLatitude}
      />
      <Header />
    </div>
  );
};

export default Map;

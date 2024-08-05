/* Author: Sotiris Konstantis */

import layers from "../constants/layers";
import colors from "../constants/colors";
import levels from "../constants/levels";
import locations from "../constants/locations";
import types from "../constants/types";

export const onEachGreeceFeature = (setIsSelected, setSelectedId, setSelectedType, setSelectedName, setSelectedDanger, setSelectedColor, setSelectedLongitude, setSelectedLatitude) => (feature, layer) => {
  layers.push(layer);

  layer.on({
    mouseover: (e) => {
      e.target.setStyle({
        fillOpacity: 0.5,
      });
    },
    mouseout: (e) => {
      e.target.setStyle({
        fillOpacity: 1,
      });
    },
    click: (e) => {
      e.originalEvent.stopPropagation();

      const id = locations.items.get(feature.properties.CODE);
      const type = types.items.get(locations.items.get(feature.properties.CODE).type);
      const name = locations.items.get(feature.properties.CODE).name;
      const danger = levels.items.get(colors.getColorId(e.target.options.fillColor));
      const color = colors.items.get(colors.getColorId(e.target.options.fillColor));

      setIsSelected(true);
      setSelectedId(id);
      setSelectedType(type);
      setSelectedName(name);
      setSelectedDanger(danger);
      setSelectedColor(color);
      setSelectedLongitude(e.latlng.lng);
      setSelectedLatitude(e.latlng.lat);
    },
  });
};

import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { RootState } from "store";
import MapIcon from "@mui/icons-material/Map";

function WeatherMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const selectedLocation = useSelector((state: RootState) => state.location);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([selectedLocation.lat, selectedLocation.lon], 6);

      L.tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`).addTo(
        map
      );

      const precipitationLayer = L.tileLayer(
        `https://maps.openweathermap.org/maps/2.0/weather/PR0/{z}/{x}/{y}?appid=06d993a12ed23f678bfb54004bb0ad42`,
        {
          attribution: "Map data © OpenWeatherMap contributors",
        }
      );

      precipitationLayer.addTo(map);

      map.zoomControl.remove();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();

      return () => {
        map.remove();
      };
    }
  }, [selectedLocation]);

  return (
    <div className="mr-3 flex h-[47rem] w-full flex-col items-stretch gap-2 rounded-3xl">
      <div className="ml-2 flex flex-row">
        <div className="flex gap-1 items-center">
          <MapIcon className="text-dark-blue !w-5" />
          <span className="text-xs uppercase text-dark-blue font-semibold">Precipitation map</span>
        </div>
      </div>
      <div className="flex-1">
        <div
          ref={mapRef}
          className="z-0 h-full w-full rounded-3xl shadow-lg dark:hue-rotate-180 dark:invert"
        />
      </div>
    </div>
  );
}

export default WeatherMap;

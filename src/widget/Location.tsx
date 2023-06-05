import { useSelector } from "react-redux";
import { RootState } from "store";
import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "apis";
import { useDispatch } from "react-redux";
import { setLocation, setCountry } from "action";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Location = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state: RootState) => state.country);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const fetchData = async () => {
            try {
              const forecastData = await fetchWeatherData(
                position.coords.latitude,
                position.coords.longitude
              );
              dispatch(setCountry(forecastData.name));
            } catch (error) {
              console.error("Error fetching hourly forecast:", error);
            }
          };
          fetchData();
          dispatch(setLocation(position.coords.latitude, position.coords.longitude));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [navigator.geolocation]);

  return (
    <div className="flex items-center flex-wrap">
      <LocationOnOutlinedIcon className="text-dark-blue" />
      <span className="text-dark-blue font-semibold">{selectedCountry.country}</span>
    </div>
  );
};

export default Location;

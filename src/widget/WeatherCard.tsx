import React from "react";
import WeatherIcon from "components/WeatherIcon";
import DateAndTime from "components/DateAndTime";
import FeelsLike from "widget/FeelsLike";
import Humidity from "widget/Humidity";
import Visibility from "widget/Visibility";
import Pressure from "widget/Pressure";
import WindSpeed from "widget/WindSpeed";
import OtherCities from "widget/OtherCities";
import SunsetSunrise from "widget/SunsetSunrise";

interface WeatherData {
  wind: {
    speed: number;
    deg: number;
  };
  timezone: number;
  humidity: number;
  visibility: number;
  dt: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Weather[];
  name: string;
}

interface Weather {
  main: string;
  id: number;
  icon: string;
  description: string;
}

interface WeatherCardProps {
  data?: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const { name, weather, main, visibility, wind, timezone, sys, dt } = data;

  return (
    <div className="w-full grid gap-6">
      <div className="w-full bg-sky-blue rounded-md p-4">
        <div className="flex items-center justify-between w-full">
          <p className="text-dark-blue font-semibold">{name}</p>
          <DateAndTime />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-top text-8xl text-dark-blue">
            {Math.round(main.temp)} <span>°</span>
          </div>
          <div>
            <div className="flex flex-col items-end">
              <WeatherIcon size="w-28" iconType={weather[0].icon} id={weather[0].id} />
              <p className="text-dark-blue">
                {weather[0].main} - {weather[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap justify-start gap-4 w-full">
        <FeelsLike temp={main.temp} feels_like={main.feels_like} />
        <Humidity humidity={main.humidity} />
        <Visibility visibility={visibility} />
        <Pressure pressure={main.pressure} />
        <WindSpeed speed={wind.speed} deg={wind.deg} />
        <SunsetSunrise timezone={timezone} sunrise={sys.sunrise} dt={dt} sunset={sys.sunset} />
      </div>
      <OtherCities />
    </div>
  );
};

export default WeatherCard;

import WeatherIcon from "components/WeatherIcon";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { fetchHourlyForecast } from "apis";
import FormatHour from "components/FormatHour";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type WeatherData = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
    id: number;
  }[];
};

function HourlyForecast() {
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const selectedLocation = useSelector((state: RootState) => state.location);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const hourlyData = await fetchHourlyForecast(selectedLocation.lat, selectedLocation.lon, 6);
        setWeatherData(hourlyData.list);
      } catch (error) {
        console.log("Failed to fetch weather data. Please try again.", error);
      }
    };

    fetchWeatherData();
  }, [dispatch, selectedLocation]);

  return (
    <div className="w-full">
      <div className="flex gap-1 items-center mb-2">
        <AccessTimeIcon className="text-dark-blue !w-5" />
        <span className="text-xs uppercase text-dark-blue font-semibold">HOURLY FORECAST</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 justify-between w-full">
        {weatherData?.map((data) => (
          <div
            key={data.dt}
            className="bg-blue-100 rounded-md !min-w-[6rem] p-1 flex-col flex items-center h-fit rounded-md"
          >
            <FormatHour datetimeString={data.dt_txt} />
            <WeatherIcon size="w-12" iconType={data.weather[0].icon} id={data.weather[0].id} />
            <div className="text-sm font-semibold text-dark-blue">
              {Math.round(data.main.temp)}
              °C
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;

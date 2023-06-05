import { useEffect, useState } from "react";
import { fetchWeatherData } from "apis";
import CityContainer from "components/CityContainer";
import FlagIcon from "@mui/icons-material/Flag";

interface City {
  city: string;
  country: string;
  geolocation: {
    lat: number;
    lng: number;
  };
}

interface WeatherData {
  city: string;
  country: string;
  data: any;
}

const OtherCities = () => {
  const [data, setData] = useState<WeatherData[]>([]);

  const cities: City[] = [
    {
      city: "New York",
      country: "United States",
      geolocation: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
    {
      city: "London",
      country: "United Kingdom",
      geolocation: {
        lat: 51.5074,
        lng: -0.1278,
      },
    },
    {
      city: "Tokyo",
      country: "Japan",
      geolocation: {
        lat: 35.6895,
        lng: 139.6917,
      },
    },
    {
      city: "Paris",
      country: "France",
      geolocation: {
        lat: 48.8566,
        lng: 2.3522,
      },
    },
  ];

  const fetchData = async () => {
    const weatherData: WeatherData[] = await Promise.all(
      cities.map(async (city) => {
        const { geolocation, ...rest } = city;
        const forecastData = await fetchWeatherData(geolocation.lat, geolocation.lng);
        return {
          ...rest,
          data: forecastData,
        };
      })
    );
    setData(weatherData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex gap-1 items-center">
        <FlagIcon className="text-dark-blue !w-5" />
        <span className="text-xs uppercase text-dark-blue font-semibold">Other large cities</span>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {data.map((city, index) => (
          <CityContainer key={index} city={city.city} country={city.country} data={city.data} />
        ))}
      </div>
    </div>
  );
};

export default OtherCities;

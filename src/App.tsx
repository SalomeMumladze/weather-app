import { useSelector } from "react-redux";
import { RootState } from "store";
import "./styles/tailwind.generated.css";
import {
  useEffect,
  useState,
} from "react";
import SearchBar from "widget/SearchBar";
import { useDispatch } from "react-redux";
import Location from "widget/Location";
import { fetchWeatherData } from "apis";
import WeatherCard from "widget/WeatherCard";
import CircularProgress from "@mui/material/CircularProgress";
import HourlyForecast from "widget/HourlyForecast";
import WeatherMap from "widget/WeatherMap";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const selectedLocation = useSelector(
    (state: RootState) => state.location
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const forecastData =
          await fetchWeatherData(
            selectedLocation.lat,
            selectedLocation.lon
          );
        setData(forecastData);
      } catch (error) {
        console.error(
          "Error fetching hourly forecast:",
          error
        );
      }
    };

    fetchData();
  }, [dispatch, selectedLocation]);

  return (
    <div
      className={`w-full  bg-regal-blue flex m-auto justify-center items-center `}
    >
      <div className="lg:w-10/12 bg-white rounded-2xl px-18 p-5 m-5">
        <div className="w-full flex justify-between items-center mb-5">
          <Location />
          <SearchBar />
        </div>
        {!data ? (
          <div className="w-full flex justify-center w-full">
            <CircularProgress />
          </div>
        ) : (
          <div className="md:grid gap-10 grid-cols-2 items-start">
            <div className="flex items-center gap-4 justify-between mb-10">
              <WeatherCard
                data={data}
              />
            </div>
            <div className="grid gap-6">
              <HourlyForecast />
              <WeatherMap />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

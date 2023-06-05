import axios from "axios";

const API_KEY =
  "5d96dbb21b6e2d6b5c90764f5a964405";
const API_URL =
  "https://api.openweathermap.org/data/2.5/";

export async function fetchWeatherData(
  lat: number,
  lon: number
): Promise<any> {
  try {
    const response = await axios.get(
      `${API_URL}weather`,
      {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(
      "Failed to fetch weather data. Please try again."
    );
  }
}

export async function fetchName(
  query: string
): Promise<any> {
  try {
    const response = await axios.get(
      `${API_URL}forecast`,
      {
        params: {
          q: query,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(
      "Failed to fetch weather data. Please try again."
    );
  }
}

export async function fetchHourlyForecast(
  lat: number,
  lon: number,
  cnt: number
): Promise<any> {
  try {
    const response = await axios.get(
      `${API_URL}forecast`,
      {
        params: {
          lat,
          lon,
          cnt,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(
      "Failed to fetch weather data. Please try again."
    );
  }
}

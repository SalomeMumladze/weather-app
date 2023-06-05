export const SET_LOCATION = "SET_LOCATION";

export const setLocation = (lat: number, lon: number) => ({
  type: SET_LOCATION,
  payload: { lat, lon },
});

export const SET_COUNTRY = "SET_COUNTRY";

export const setCountry = (country: string) => ({
  type: SET_COUNTRY,
  payload: { country },
});

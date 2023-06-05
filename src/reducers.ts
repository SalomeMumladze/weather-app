import {
  SET_LOCATION,
  SET_COUNTRY,
} from "./action";

export interface LocationState {
  lat: number;
  lon: number;
}

export interface CountryState {
  country: string;
}

const initialLocationState: LocationState =
  {
    lat: 0,
    lon: 0,
  };

const initialCountryState: CountryState =
  {
    country: "",
  };

export const locationReducer = (
  state = initialLocationState,
  action: any
): LocationState => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    default:
      return state;
  }
};

export const countryReducer = (
  state = initialCountryState,
  action: any
): CountryState => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload.country,
      };
    default:
      return state;
  }
};

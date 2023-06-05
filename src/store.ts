import {
  createStore,
  combineReducers,
} from "redux";
import {
  locationReducer,
  LocationState,
  countryReducer,
  CountryState,
} from "./reducers";

export interface RootState {
  location: LocationState;
  country: CountryState;
}

const rootReducer =
  combineReducers<RootState>({
    location: locationReducer,
    country: countryReducer,
  });

export const store = createStore(
  rootReducer
);

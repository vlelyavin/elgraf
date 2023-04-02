import { SET_LOCALE } from "../constants/actionTypes";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const INITIAL_STATE = {
  locale: "ru",
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, mainReducer);

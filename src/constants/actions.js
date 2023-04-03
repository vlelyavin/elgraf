import { SET_LOCALE, TOGGLE_ORDER_FORM_VISIBILITY } from "./actionTypes";

export const toggleOrderFormVisibility = (status) => ({
  type: TOGGLE_ORDER_FORM_VISIBILITY,
  payload: status,
});

export const setLocale = (locale) => ({
  type: SET_LOCALE,
  payload: locale,
});

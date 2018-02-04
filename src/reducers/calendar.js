import {
  LOAD_COUNTRIES,
  LOAD_DELIVERY_DAYS,
  CHANGE_COUNTRY,
  SHOW_DELIVERY_DAYS,
  CHANGE_DELIVERY_DAY
} from '../constants';

import {
  getDaysWithProperties,
  updatetDaysWithDeliveryDays
} from '../utils/date';

const initState = {
  days: getDaysWithProperties(),
  countries: [],
  deliveryDays: [],
  selectedCountry: '',
  selectedDay: null
};

const calendar = (state = initState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };
    case LOAD_DELIVERY_DAYS:
      return {
        ...state,
        deliveryDays: action.deliveryDays
      };
    case CHANGE_COUNTRY:
      return {
        ...state,
        selectedCountry: action.country
      };
    case SHOW_DELIVERY_DAYS:
      return {
        ...state,
        days: updatetDaysWithDeliveryDays(
          state.days,
          state.deliveryDays,
          action.country
        )
      };
    case CHANGE_DELIVERY_DAY:
      return {
        ...state,
        selectedDay: action.selectedDay
      };
    default:
      return state;
  }
};

export default calendar;

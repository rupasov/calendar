import {
  LOAD_COUNTRIES,
  LOAD_DELIVERY_DAYS,
  CHANGE_COUNTRY,
  SHOW_DELIVERY_DAYS,
  CHANGE_DELIVERY_DAY,
  SHOW_UPDATED_DELIVERY_DAYS,
  SHOW_UPDATED_DELIVERY_DAYS_WITH_FREQUENCY
} from '../constants';

import {
  getDaysWithProperties,
  updatetDaysWithDeliveryDays,
  getDeliveryDaysOfACountry
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
        selectedCountry: action.country,
        selectedDay: null
      };
    case SHOW_DELIVERY_DAYS:
      return {
        ...state,
        days: updatetDaysWithDeliveryDays(
          getDeliveryDaysOfACountry(state.deliveryDays, action.country)
        )
      };
    case CHANGE_DELIVERY_DAY:
      return {
        ...state,
        selectedDay: action.selectedDay
      };
    case SHOW_UPDATED_DELIVERY_DAYS:
      return {
        ...state,
        days: updatetDaysWithDeliveryDays(action.selectedDay)
      };
    case SHOW_UPDATED_DELIVERY_DAYS_WITH_FREQUENCY:
      return {
        ...state,
        days: updatetDaysWithDeliveryDays(state.selectedDay, action.frequency)
      };
    default:
      return state;
  }
};

export default calendar;

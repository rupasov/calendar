import { LOAD_DAYS, LOAD_COUNTRIES, LOAD_DELIVERY_DAYS } from '../constants';

import { getDaysWithProperties } from '../utils/date';

const initState = {
  days: getDaysWithProperties(),
  countries: [],
  deliveryDays: []
};

const calendar = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default calendar;

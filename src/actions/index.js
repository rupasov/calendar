import { groupBy } from 'lodash';
import {
  LOAD_DELIVERY_DAYS,
  LOAD_COUNTRIES,
  CHANGE_COUNTRY,
  SHOW_DELIVERY_DAYS,
  CHANGE_DELIVERY_DAY,
  SHOW_UPDATED_DELIVERY_DAYS,
  SHOW_UPDATED_DELIVERY_DAYS_WITH_FREQUENCY
} from '../constants';
import { getCountries, getDeliveryMoments } from '../utils/requests';

export const fetchCountries = () => dispatch =>
  getCountries()
    .then(countries =>
      dispatch(loadCountries(countries.map(country => country.country)))
    )
    .catch(e => console.log(`Someting went wrong: ${e}`));

export const fetchDeliveryMoments = () => dispatch =>
  getDeliveryMoments()
    .then(moments => dispatch(loadDeliveryDays(groupBy(moments, 'country'))))
    .catch(e => console.log(`Someting went wrong: ${e}`));

export const loadCountries = countries => ({
  type: LOAD_COUNTRIES,
  countries
});

export const loadDeliveryDays = deliveryDays => ({
  type: LOAD_DELIVERY_DAYS,
  deliveryDays
});

export const changeCountry = country => dispatch => {
  dispatch({
    type: CHANGE_COUNTRY,
    country
  });
  dispatch({
    type: SHOW_DELIVERY_DAYS,
    country
  });
};

export const changeDeliveryDay = selectedDay => dispatch => {
  dispatch({
    type: CHANGE_DELIVERY_DAY,
    selectedDay
  });
  dispatch({
    type: SHOW_UPDATED_DELIVERY_DAYS,
    selectedDay
  });
};

export const changeFrequency = frequency => dispatch => {
  dispatch({
    type: SHOW_UPDATED_DELIVERY_DAYS_WITH_FREQUENCY,
    frequency
  });
};

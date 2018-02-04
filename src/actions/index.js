import { groupBy } from 'lodash';
import {
  LOAD_DELIVERY_DAYS,
  LOAD_COUNTRIES,
  CHANGE_COUNTRY,
  SHOW_DELIVERY_DAYS,
  CHANGE_DELIVERY_DAY
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

export const changeDeliveryDay = selectedDay => ({
  type: CHANGE_DELIVERY_DAY,
  selectedDay
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

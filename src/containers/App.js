import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Calendar from '../components/Calendar';
import CountrySelector from '../components/CountrySelector';
import DaySelector from '../components/DaySelector';
import FrequencySelector from '../components/FrequencySelector';

import {
  fetchCountries,
  fetchDeliveryMoments,
  changeCountry,
  changeDeliveryDay,
  changeFrequency
} from '../actions';

import { getDeliveryDaysOfACountry } from '../utils/date';

class App extends Component {
  componentDidMount() {
    const { fetchCountries, fetchDeliveryMoments } = this.props;
    fetchCountries();
    fetchDeliveryMoments();
  }
  render() {
    const {
      days,
      countries,
      changeCountry,
      selectedCountry,
      deliveryDays,
      changeDeliveryDay,
      selectedDay,
      changeFrequency
    } = this.props;
    return (
      <div className="App">
        <Calendar days={days} />
        <CountrySelector countries={countries} onChange={changeCountry} />
        {selectedCountry && (
          <DaySelector
            deliveryDays={getDeliveryDaysOfACountry(
              deliveryDays,
              selectedCountry
            )}
            changeDeliveryDay={changeDeliveryDay}
          />
        )}
        {selectedDay && <FrequencySelector changeFrequency={changeFrequency} />}
      </div>
    );
  }
}

const mapStateToProps = ({ calendar }) => ({
  days: calendar.days,
  countries: calendar.countries,
  deliveryDays: calendar.deliveryDays,
  selectedCountry: calendar.selectedCountry,
  selectedDay: calendar.selectedDay
});

const mapDispatchToProps = {
  fetchCountries,
  fetchDeliveryMoments,
  changeCountry,
  changeDeliveryDay,
  changeFrequency
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

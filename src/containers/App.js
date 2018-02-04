import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Calendar from '../components/Calendar';
import Countries from '../components/Countries';
import DaySelector from '../components/DaySelector';

import {
  fetchCountries,
  fetchDeliveryMoments,
  changeCountry,
  changeDeliveryDay
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
      deliveryDays
    } = this.props;
    return (
      <div className="App">
        <Calendar days={days} />
        <Countries countries={countries} onChange={changeCountry} />
        {selectedCountry && (
          <DaySelector
            deliveryDays={getDeliveryDaysOfACountry(
              deliveryDays,
              selectedCountry
            )}
            changeDeliveryDay={changeDeliveryDay}
          />
        )}
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
  changeDeliveryDay
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

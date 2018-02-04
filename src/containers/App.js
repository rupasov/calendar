import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Calendar from '../components/Calendar';
import Countries from '../components/Countries';
import {
  fetchCountries,
  fetchDeliveryMoments,
  changeCountry
} from '../actions';

class App extends Component {
  componentDidMount() {
    const { fetchCountries, fetchDeliveryMoments } = this.props;
    fetchCountries();
    fetchDeliveryMoments();
  }
  render() {
    const { days, countries, changeCountry } = this.props;
    return (
      <div className="App">
        <Calendar days={days} />
        <Countries countries={countries} onChange={changeCountry} />
      </div>
    );
  }
}

const mapStateToProps = ({ calendar }) => ({
  days: calendar.days,
  countries: calendar.countries,
  deliveryDays: calendar.deliveryDays
});

const mapDispatchToProps = {
  fetchCountries,
  fetchDeliveryMoments,
  changeCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

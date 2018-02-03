import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Calendar from '../components/Calendar';

class App extends Component {
  render() {
    const { days } = this.props;
    return (
      <div className="App">
        <Calendar days={days} />
      </div>
    );
  }
}

const mapStateToProps = ({ calendar }) => ({
  days: calendar.days
});

export default connect(mapStateToProps)(App);

import React from 'react';
import PropTypes from 'prop-types';
import { getTime } from 'date-fns';
import classNames from 'classnames';

import { DAYS_HEADER } from '../constants';

const weekBuilder = row =>
  row.map(day => (
    <td
      key={getTime(day.date)}
      className={classNames({
        'First-Day-Of-Month': day.firstDayOfMonth,
        'Current-Day': day.isToday,
        'Delivery-Day': day.delivery
      })}
    >
      {day.date.getDate()}
    </td>
  ));

const Calendar = ({ days }) => (
  <div className="Calendar-Wrapper">
    <table>
      <thead>
        <tr>
          {DAYS_HEADER.map(dayHeader => <td key={dayHeader}>{dayHeader}</td>)}
        </tr>
      </thead>
      <tbody>
        {days.map((week, index) => <tr key={index}>{weekBuilder(week)}</tr>)}
      </tbody>
    </table>
  </div>
);

Calendar.propTypes = {
  days: PropTypes.array
};

export default Calendar;

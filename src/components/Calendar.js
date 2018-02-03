import React from 'react';

import {
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  subDays,
  isSameDay,
  getTime
} from 'date-fns';
import { chunk } from 'lodash';
import classNames from 'classnames';

import { WEEKS_BEFORE, WEEKS_AFTER, DAYS_HEADER } from '../constants';

const getInitialDays = () =>
  chunk(
    eachDayOfInterval({
      start: new Date(
        subDays(startOfWeek(new Date(), { weekStartsOn: 1 }), WEEKS_BEFORE * 7)
      ),
      end: new Date(
        addDays(endOfWeek(new Date(), { weekStartsOn: 1 }), WEEKS_AFTER * 7)
      )
    }),
    7
  );

const addPropertiesToDays = () =>
  getInitialDays().map(week =>
    week.map(day => ({
      date: day,
      delivery: false,
      firstDayOfMonth: day.getDate() === 1,
      isToday: isSameDay(new Date(day), new Date())
    }))
  );

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

const Calendar = () => (
  <div className="Calendar-Wrapper">
    <table>
      <thead>
        <tr>
          {DAYS_HEADER.map(dayHeader => <td key={dayHeader}>{dayHeader}</td>)}
        </tr>
      </thead>
      <tbody>
        {addPropertiesToDays().map((week, index) => (
          <tr key={index}>{weekBuilder(week)}</tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Calendar;

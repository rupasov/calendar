import {
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  subDays,
  isSameDay,
  isAfter
} from 'date-fns';
import { chunk, includes } from 'lodash';

import { WEEKS_BEFORE, WEEKS_AFTER } from '../constants';

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

export const getDaysWithProperties = () =>
  getInitialDays().map(week =>
    week.map(day => ({
      date: day,
      delivery: false,
      firstDayOfMonth: day.getDate() === 1,
      isToday: isSameDay(new Date(day), new Date())
    }))
  );

const isDeliveryDayAfter = day =>
  isAfter(new Date(day.date), new Date())
    ? { ...day, delivery: true }
    : { ...day, delivery: false };

const changeDaysInAWeek = (week, deliveryDays) =>
  week.map(
    (day, index) =>
      includes(deliveryDays, index + 1) || deliveryDays === index + 1
        ? isDeliveryDayAfter(day)
        : { ...day, delivery: false }
  );

export const updatetDaysWithDeliveryDays = (deliveryDays, frequency = 2) =>
  getDaysWithProperties().map(
    (week, index) =>
      (index + 1) % frequency === 0
        ? changeDaysInAWeek(week, deliveryDays)
        : week
  );

export const getDeliveryDaysOfACountry = (deliveryDays, country) =>
  deliveryDays[country].map(day => day.weekday);

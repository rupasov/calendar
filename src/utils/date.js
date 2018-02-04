import {
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  subDays,
  isSameDay,
  isAfter
} from 'date-fns';
import { chunk } from 'lodash';

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

const isDeliveryDayAfter = date => isAfter(new Date(date), new Date());

const changeDaysInAWeek = (week, deliveryDays) =>
  week.map(
    (day, index) =>
      index === deliveryDays[0].weekday - 1 ||
      index === deliveryDays[1].weekday - 1
        ? isDeliveryDayAfter(day.date)
          ? { ...day, delivery: true }
          : { ...day, delivery: false }
        : { ...day, delivery: false }
  );

export const updatetDaysWithDeliveryDays = (
  days,
  deliveryDays,
  frequency = 2
) =>
  days.map(
    (week, index) =>
      (index + 1) % frequency === 0
        ? changeDaysInAWeek(week, deliveryDays)
        : week
  );

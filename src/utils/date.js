import {
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  subDays,
  isSameDay
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

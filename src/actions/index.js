import { LOAD_DAYS } from '../constants';
import { getDaysWithProperties } from '../utils/dateUtils';

export const loadDays = () => ({
  type: LOAD_DAYS,
  days: getDaysWithProperties()
});

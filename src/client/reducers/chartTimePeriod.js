import {
  SET_CHART_TO_DEFAULT_TIME_PERIOD,
  UPDATE_CHART_TIME_PERIOD
} from '../actions';
import { TIME_PERIOD_ONE_YEAR } from '../../constants';

const DEFAULT_TIME_PERIOD = TIME_PERIOD_ONE_YEAR;

export const reducer = (state = DEFAULT_TIME_PERIOD, action) => {
  switch (action.type) {
  case UPDATE_CHART_TIME_PERIOD:
    return action.timePeriod;
  case SET_CHART_TO_DEFAULT_TIME_PERIOD:
    return DEFAULT_TIME_PERIOD;
  default:
    return state;
  }
};
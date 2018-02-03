import {
  SET_CHART_TO_DEFAULT_TIME_PERIOD,
  UPDATE_CHART_TIME_PERIOD
} from '../actions';
import { INDEX_ONE_YEAR } from '../../constants';

const DEFAULT_TIME_PERIOD = INDEX_ONE_YEAR;

export const reducer = (state = DEFAULT_TIME_PERIOD, action) => {
  switch (action.type) {
  case UPDATE_CHART_TIME_PERIOD:
    return action.index;
  case SET_CHART_TO_DEFAULT_TIME_PERIOD:
    return DEFAULT_TIME_PERIOD;
  default:
    return state;
  }
};
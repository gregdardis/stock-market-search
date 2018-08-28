import {
  SET_CHART_TO_DEFAULT_TIME_PERIOD,
  UPDATE_CHART_TIME_PERIOD_INDEX
} from '../actions';
import { INDEX_ONE_YEAR } from '../../constants/formatting';

const DEFAULT_TIME_PERIOD_INDEX = INDEX_ONE_YEAR;

export const reducer = (state = DEFAULT_TIME_PERIOD_INDEX, action) => {
  switch (action.type) {
  case UPDATE_CHART_TIME_PERIOD_INDEX:
    return action.index;
  case SET_CHART_TO_DEFAULT_TIME_PERIOD:
    return DEFAULT_TIME_PERIOD_INDEX;
  default:
    return state;
  }
};
import {
  SET_CHART_TO_DEFAULT_TIME_PERIOD,
  UPDATE_CHART_TIME_PERIOD_INDEX
} from '../actions';
import { CHART_METADATA } from '../../constants/formatting';
import { LABEL_ONE_YEAR } from '../../constants/userFacingStrings';

const defaultTimePeriodIndex = CHART_METADATA.findIndex(element =>
  element.label === LABEL_ONE_YEAR
);

export const reducer = (state = defaultTimePeriodIndex, action) => {
  switch (action.type) {
  case UPDATE_CHART_TIME_PERIOD_INDEX:
    return action.index;
  case SET_CHART_TO_DEFAULT_TIME_PERIOD:
    return defaultTimePeriodIndex;
  default:
    return state;
  }
};
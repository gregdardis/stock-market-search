import { expect } from 'chai';

import { reducer } from './chartTimePeriodIndex';
import {
  SET_CHART_TO_DEFAULT_TIME_PERIOD,
  UPDATE_CHART_TIME_PERIOD_INDEX
} from '../actions/chart';
import { CHART_META_DATA } from '../../constants/formatting';
import { LABEL_ONE_YEAR } from '../../constants/userFacingStrings';

/* eslint-disable no-undefined */

// The index of the One Year label
const defaultTimePeriodIndex = CHART_META_DATA.findIndex(element =>
  element.label === LABEL_ONE_YEAR
);

describe('chartTimePeriodIndex reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.equal(defaultTimePeriodIndex);
  });
  it('should handle SET_CHART_TO_DEFAULT_TIME_PERIOD', () => {
    const startingIndex = defaultTimePeriodIndex + 1;

    expect(
      reducer(
        startingIndex,
        {
          type: SET_CHART_TO_DEFAULT_TIME_PERIOD
        }
      )
    ).to.equal(defaultTimePeriodIndex);
  });
  it('should handle UPDATE_CHART_TIME_PERIOD_INDEX', () => {
    const startingIndex = 0;
    const newIndex = 2;

    expect(
      reducer(
        startingIndex,
        {
          type: UPDATE_CHART_TIME_PERIOD_INDEX,
          index: newIndex
        }
      )
    ).to.equal(newIndex);
  });
});
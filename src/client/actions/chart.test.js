import { expect } from 'chai';

import * as chart from './chart';

describe('chart actions', () => {
  it('should create an action to set chart to default time period', () => {
    const expectedAction = {
      type: chart.SET_CHART_TO_DEFAULT_TIME_PERIOD
    };

    expect(chart.setChartToDefaultTimePeriod())
      .to
      .deep
      .equal(expectedAction);
  });
  it('should create an action to update the chart time period index', () => {
    const index = 3;
    const expectedAction = {
      type: chart.UPDATE_CHART_TIME_PERIOD_INDEX,
      index
    };

    expect(chart.updateChartTimePeriodIndex(index))
      .to
      .deep
      .equal(expectedAction);
  });
});
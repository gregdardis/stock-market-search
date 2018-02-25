export const SET_CHART_TO_DEFAULT_TIME_PERIOD
  = 'SET_CHART_TO_DEFAULT_TIME_PERIOD';
export const UPDATE_CHART_TIME_PERIOD_INDEX
  = 'UPDATE_CHART_TIME_PERIOD_INDEX';

export const setChartToDefaultTimePeriod = () => ({
  type: SET_CHART_TO_DEFAULT_TIME_PERIOD
});

export const updateChartTimePeriodIndex = index => ({
  type: UPDATE_CHART_TIME_PERIOD_INDEX,
  index
});
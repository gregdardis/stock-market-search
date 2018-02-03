export const SET_CHART_TO_DEFAULT_TIME_PERIOD = 'SET_CHART_TO_DEFAULT_TIME_PERIOD';
export const UPDATE_CHART_TIME_PERIOD = 'UPDATE_CHART_TIME_PERIOD';

export const setChartToDefaultTimePeriod = () => ({
  type: SET_CHART_TO_DEFAULT_TIME_PERIOD
});

export const updateChartTimePeriod = index => ({
  type: UPDATE_CHART_TIME_PERIOD,
  index
});
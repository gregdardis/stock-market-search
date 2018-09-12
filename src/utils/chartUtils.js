import { CHART_META_DATA } from '../constants/formatting';

export const getTooltipLabelFormatter = chartTimePeriodIndex => (
  CHART_META_DATA[chartTimePeriodIndex].getTooltipLabelFormatter
);
import {
  CHART_METADATA
} from '../constants/formatting';

function isNumberAndInChartMetaDataRange(number) {
  if (typeof number !== 'number'
      || number < 0
      || number >= CHART_METADATA.length) {
    return false;
  }
  return true;
}

export function getStockDataKey(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_METADATA[chartTimePeriodIndex].stockDataKey;
}

export function getTooltipLabelFormatter(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_METADATA[chartTimePeriodIndex].getTooltipLabelFormatter;
}

export function getXAxisDataKey(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_METADATA[chartTimePeriodIndex].xAxisDataKey;
}

export function getXAxisMinTickGap(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_METADATA[chartTimePeriodIndex].xAxisMinTickGap;
}

export function getXAxisTickFormatter(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_METADATA[chartTimePeriodIndex].getXAxisTickFormatter;
}
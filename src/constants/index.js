import {
  getStockDataForPreviousMonths,
  getStockDataForPreviousYears
} from '../utils/dateUtils';

import dateFormat from 'dateformat';

import { getSelectedStockValueForKey } from '../utils/stateGetters';

/* TODO: separate into files
- user-facing constants
- calculation constants
- formatting specifiers
*/

export const APP_NAME = 'Stock Market Search';

export const BLANK_FIELD = '--';

export const CHART_BUTTON_LABEL_COLOR_DEFAULT = '#000000';
export const CHART_BUTTON_LABEL_COLOR_SELECTED = '#3223ff';
export const CHART_HEIGHT = 400;
export const CHART_WIDTH = 1000;

export const CHART_META_DATA = [
  {
    xAxisDataKey: 'dateAndTime',
    label: '1 day',
    stockDataKey: 'oneDayStockData',
    xAxisMinTickGap: 100,
    getStockDataForTimePeriod: oneDayStockData => oneDayStockData,
    getTooltipLabelFormatter: dateAndTime => 'time: ' + dateAndTime,
    getXAxisTickFormatter: dateAndTime => dateAndTime
  },
  {
    xAxisDataKey: 'dateAndTime',
    label: '5 day',
    stockDataKey: 'fiveDayStockData',
    xAxisMinTickGap: 110,
    getStockDataForTimePeriod: fiveDayStockData => fiveDayStockData,
    getTooltipLabelFormatter: dateAndTime => dateFormat(dateAndTime, 'mmm d, h:MM TT'),
    getXAxisTickFormatter: dateAndTime => dateFormat(dateAndTime, 'mmm d, h:MM TT')
  },
  {
    xAxisDataKey: 'date',
    label: '1 month',
    stockDataKey: 'maxStockData',
    xAxisMinTickGap: 60,
    getStockDataForTimePeriod: maxStockData =>
      getStockDataForPreviousMonths(maxStockData, 1),
    getTooltipLabelFormatter: date => dateFormat(date, 'mmm d, yyyy'),
    getXAxisTickFormatter: date => dateFormat(date, 'mmm d')
  },
  {
    xAxisDataKey: 'date',
    label: '3 month',
    stockDataKey: 'maxStockData',
    xAxisMinTickGap: 100,
    getStockDataForTimePeriod: maxStockData =>
      getStockDataForPreviousMonths(maxStockData, 3),
    getTooltipLabelFormatter: date => dateFormat(date, 'mmm d, yyyy'),
    getXAxisTickFormatter: date => dateFormat(date, 'mmm d')
  },
  {
    xAxisDataKey: 'date',
    label: '1 year',
    stockDataKey: 'maxStockData',
    xAxisMinTickGap: 30,
    getStockDataForTimePeriod: maxStockData =>
      getStockDataForPreviousYears(maxStockData, 1),
    getTooltipLabelFormatter: date => dateFormat(date, 'mmm d, yyyy'),
    getXAxisTickFormatter: date => dateFormat(date, 'mmm d')
  },
  {
    xAxisDataKey: 'date',
    label: '5 year',
    stockDataKey: 'maxStockData',
    xAxisMinTickGap: 120,
    getStockDataForTimePeriod: maxStockData =>
      getStockDataForPreviousYears(maxStockData, 5),
    getTooltipLabelFormatter: date => dateFormat(date, 'mmm d, yyyy'),
    getXAxisTickFormatter: date => dateFormat(date, 'mmm yyyy')
  },
  {
    xAxisDataKey: 'date',
    label: 'max',
    stockDataKey: 'maxStockData',
    xAxisMinTickGap: 130,
    getStockDataForTimePeriod: maxStockData => maxStockData,
    getTooltipLabelFormatter: date => dateFormat(date, 'mmm d, yyyy'),
    getXAxisTickFormatter: date => dateFormat(date, 'mmm yyyy')
  }
];

// formatting dates within the state
export const DATE_FORMAT_FIVE_DAY = 'dddd, mmmm dd h:MM TT';
export const DATE_FORMAT_ONE_DAY = 'h:MM TT';

export const FIVE_DAYS = 5;
export const ONE_DAY = 1;

// these need to correspond to the CHART_META_DATA indices
export const INDEX_FIVE_DAY = 1;
export const INDEX_FIVE_YEAR = 5;
export const INDEX_MAX = 6;
export const INDEX_ONE_DAY = 0;
export const INDEX_ONE_MONTH = 2;
export const INDEX_ONE_YEAR = 4;
export const INDEX_THREE_MONTH = 3;

export const LABEL_AVERAGE = 'Avg';
export const LABEL_CURRENT_PRICE = 'Current Price';
export const LABEL_DIVIDEND = 'Div';
export const LABEL_FCFY = 'FCFY';
export const LABEL_HIGH = 'High';
export const LABEL_LOW = 'Low';
export const LABEL_MARKET_CAP = 'Mkt Cap';
export const LABEL_OPEN = 'Open';
export const LABEL_PE_RATIO = 'P/E Ratio';
export const LABEL_PREVIOUS_CLOSE = 'Previous Close';
export const LABEL_ROE = 'ROE';
export const LABEL_VOLUME = 'Volume';

export const MAX_DAYS = 5;
export const MILLISECONDS_PER_SECOND = 1000;
export const MONTHS_PER_YEAR = 12;

export const OPTIONAL_LABEL_DIVIDEND = '%';
export const OPTIONAL_LABEL_EPS = 'EPS';
export const OPTIONAL_VALUE_SUFFIX_DIVIDEND = '%';

export const TIME_PERIOD_FIVE_DAY = '5 day';
export const TIME_PERIOD_FIVE_YEAR = '5 year';
export const TIME_PERIOD_MAX = 'max';
export const TIME_PERIOD_ONE_DAY = '1 day';
export const TIME_PERIOD_ONE_MONTH = '1 month';
export const TIME_PERIOD_ONE_YEAR = '1 year';
export const TIME_PERIOD_THREE_MONTH = '3 month';

export const URL_GLOSSARY = '/glossary';
export const URL_HOME = '/';

export const VALID_DATE_NOT_FOUND = -1;
export const VALUE_PRECISION_CURRENT_PRICE = 2;
export const VALUE_PRECISION_DIVIDEND = 2;
export const VALUE_PRECISION_EPS = 2;
export const VALUE_PRECISION_FCFY = 1;
export const VALUE_PRECISION_HIGH = 2;
export const VALUE_PRECISION_LOW = 2;
export const VALUE_PRECISION_MARKET_CAP = 0;
export const VALUE_PRECISION_OPEN = 2;
export const VALUE_PRECISION_PE = 2;
export const VALUE_PRECISION_PRICE_CHANGE = 2;
export const VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE = 2;
export const VALUE_PRECISION_ROE = 1;
export const VALUE_PRECISION_VOLUME = 0;
export const VALUE_SUFFIX_FCFY = '%';
export const VALUE_SUFFIX_ROE = '%';
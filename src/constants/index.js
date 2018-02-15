import {
  getStockDataForPreviousMonths,
  getStockDataForPreviousYears
} from '../utils/dateUtils';

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

// 1 day and 5 day data don't have tooltip or x axis formats because
// they are formatted upon getting the data from the API
export const CHART_META_DATA = [
  {
    label: '1 day',
    xAxisMinTickGap: 100,
    tooltipFormat: 'time: ',
    getStockDataForTimePeriod: state =>
      getSelectedStockValueForKey(state, 'oneDayStockData')
  },
  {
    label: '5 day',
    xAxisMinTickGap: 100,
    tooltipFormat: 'mmm d, yyyy', // TODO: change
    xAxisFormat: 'mmm d', // TODO: change
    getStockDataForTimePeriod: state => {
      throw new Error('Not implemented');
    }
  },
  {
    label: '1 month',
    xAxisMinTickGap: 60,
    tooltipFormat: 'mmm d, yyyy',
    xAxisFormat: 'mmm d',
    getStockDataForTimePeriod: maxStockData =>
      getStockDataForPreviousMonths(maxStockData, 1)
  },
  {
    label: '3 month',
    xAxisMinTickGap: 100,
    tooltipFormat: 'mmm d, yyyy',
    xAxisFormat: 'mmm d',
    getStockDataForTimePeriod: maxStockData =>
      getStockDataForPreviousMonths(maxStockData, 3)
  },
  {
    label: '1 year',
    xAxisMinTickGap: 30,
    tooltipFormat: 'mmm d, yyyy',
    xAxisFormat: 'mmm d',
    getStockDataForTimePeriod: maxStockData =>
      getStockDataForPreviousYears(maxStockData, 1)
  },
  {
    label: '5 year',
    xAxisMinTickGap: 120,
    tooltipFormat: 'mmm d, yyyy',
    xAxisFormat: 'mmm yyyy',
    getStockDataForTimePeriod: maxStockData =>
      getStockDataForPreviousYears(maxStockData, 5)
  },
  {
    label: 'max',
    xAxisMinTickGap: 130,
    tooltipFormat: 'mmm d, yyyy',
    xAxisFormat: 'mmm yyyy',
    getStockDataForTimePeriod: maxStockData => maxStockData
  }
];

// these need to correspond to the CHART_META_DATA indexes
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
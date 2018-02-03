/* TODO: separate into files
- user-facing constants
- calculation constants
- formatting specifiers
*/
module.exports = Object.freeze({
  APP_NAME: 'Stock Market Search',

  BLANK_FIELD: '--',

  CHART_BUTTON_LABEL_COLOR_DEFAULT: '#000000',
  CHART_BUTTON_LABEL_COLOR_SELECTED: '#3223ff',
  CHART_HEIGHT: 400,
  CHART_WIDTH: 1000,

  // TODO: UPDATE tooltipFormat ONCE WE HAVE INFO BY EVERY 5 MIN
  // every 5 minutes for 1 day
  // every 30 minutes for 5 day
  // every day for 1 month and above

  // TODO: X axisFormat have what day it is for 5 day, and 2 hour intervals for 1 day
  CHART_META_DATA: [
    {
      label: '1 day',
      xAxisMinTickGap: 30,
      tooltipFormat: 'mmm d, yyyy', // TODO: change
      xAxisFormat: 'mmm d' // TODO: change
    },
    {
      label: '5 day',
      xAxisMinTickGap: 100,
      tooltipFormat: 'mmm d, yyyy', // TODO: change
      xAxisFormat: 'mmm d' // TODO: change
    },
    {
      label: '1 month',
      xAxisMinTickGap: 60,
      tooltipFormat: 'mmm d, yyyy',
      xAxisFormat: 'mmm d'
    },
    {
      label: '3 month',
      xAxisMinTickGap: 100,
      tooltipFormat: 'mmm d, yyyy',
      xAxisFormat: 'mmm d'
    },
    {
      label: '1 year',
      xAxisMinTickGap: 30,
      tooltipFormat: 'mmm d, yyyy',
      xAxisFormat: 'mmm d'
    },
    {
      label: '5 year',
      xAxisMinTickGap: 120,
      tooltipFormat: 'mmm d, yyyy',
      xAxisFormat: 'mmm yyyy'
    },
    {
      label: 'max',
      xAxisMinTickGap: 130,
      tooltipFormat: 'mmm d, yyyy',
      xAxisFormat: 'mmm yyyy'
    }
  ],

  INDEX_ONE_YEAR: 4,

  LABEL_AVERAGE: 'Avg',
  LABEL_CURRENT_PRICE: 'Current Price',
  LABEL_DIVIDEND: 'Div',
  LABEL_FCFY: 'FCFY',
  LABEL_HIGH: 'High',
  LABEL_LOW: 'Low',
  LABEL_MARKET_CAP: 'Mkt Cap',
  LABEL_OPEN: 'Open',
  LABEL_PE_RATIO: 'P/E Ratio',
  LABEL_PREVIOUS_CLOSE: 'Previous Close',
  LABEL_ROE: 'ROE',
  LABEL_VOLUME: 'Volume',

  MAX_DAYS: 5,
  MAX_YEARS: 60,
  MONTHS_PER_YEAR: 12,

  OPTIONAL_LABEL_DIVIDEND: '%',
  OPTIONAL_LABEL_EPS: 'EPS',
  OPTIONAL_VALUE_SUFFIX_DIVIDEND: '%',

  TIME_PERIOD_FIVE_DAY: '5 day',
  TIME_PERIOD_FIVE_YEAR: '5 year',
  TIME_PERIOD_MAX: 'max',
  TIME_PERIOD_ONE_DAY: '1 day',
  TIME_PERIOD_ONE_MONTH: '1 month',
  TIME_PERIOD_ONE_YEAR: '1 year',
  TIME_PERIOD_THREE_MONTH: '3 month',

  URL_GLOSSARY: '/glossary',
  URL_HOME: '/',

  VALID_DATE_NOT_FOUND: -1,
  VALUE_PRECISION_CURRENT_PRICE: 2,
  VALUE_PRECISION_DIVIDEND: 2,
  VALUE_PRECISION_EPS: 2,
  VALUE_PRECISION_FCFY: 1,
  VALUE_PRECISION_HIGH: 2,
  VALUE_PRECISION_LOW: 2,
  VALUE_PRECISION_MARKET_CAP: 0,
  VALUE_PRECISION_OPEN: 2,
  VALUE_PRECISION_PE: 2,
  VALUE_PRECISION_PRICE_CHANGE: 2,
  VALUE_PRECISION_PRICE_CHANGE_PERCENTAGE: 2,
  VALUE_PRECISION_ROE: 1,
  VALUE_PRECISION_VOLUME: 0,
  VALUE_SUFFIX_FCFY: '%',
  VALUE_SUFFIX_ROE: '%'
});
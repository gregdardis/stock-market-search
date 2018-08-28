import { tryFormatDate } from '../utils/dateUtils/dateFormatting';
import {
  getStockDataForPreviousMonths,
  getStockDataForPreviousYears
} from '../utils/dateUtils/historicalStockData';
import {
  LABEL_FIVE_DAY,
  LABEL_FIVE_YEAR,
  LABEL_MAX,
  LABEL_ONE_DAY,
  LABEL_ONE_MONTH,
  LABEL_ONE_YEAR,
  LABEL_THREE_MONTH
} from './userFacingStrings';

export const CHART_DATA_KEY_Y_AXIS = 'price';

export const CHART_META_DATA = [{
  label: LABEL_ONE_DAY,
  stockDataKey: 'oneDayStockData',
  xAxisDataKey: 'dateAndTime',
  xAxisMinTickGap: 100,
  getStockDataForTimePeriod: oneDayStockData => oneDayStockData,
  getTooltipLabelFormatter: dateAndTime =>
    'time: ' + dateAndTime,
  getXAxisTickFormatter: dateAndTime =>
    dateAndTime
},
{
  label: LABEL_FIVE_DAY,
  stockDataKey: 'fiveDayStockData',
  xAxisDataKey: 'dateAndTime',
  xAxisMinTickGap: 110,
  getStockDataForTimePeriod: fiveDayStockData => fiveDayStockData,
  getTooltipLabelFormatter: dateAndTime =>
    tryFormatDate(dateAndTime, 'mmm d, h:MM TT'),
  getXAxisTickFormatter: dateAndTime =>
    tryFormatDate(dateAndTime, 'mmm d, h:MM TT')
},
{
  label: LABEL_ONE_MONTH,
  stockDataKey: 'maxStockData',
  xAxisDataKey: 'date',
  xAxisMinTickGap: 60,
  getStockDataForTimePeriod: maxStockData =>
    getStockDataForPreviousMonths(maxStockData, 1),
  getTooltipLabelFormatter: date =>
    tryFormatDate(date, 'mmm d, yyyy'),
  getXAxisTickFormatter: date =>
    tryFormatDate(date, 'mmm d')
},
{
  label: LABEL_THREE_MONTH,
  stockDataKey: 'maxStockData',
  xAxisDataKey: 'date',
  xAxisMinTickGap: 100,
  getStockDataForTimePeriod: maxStockData =>
    getStockDataForPreviousMonths(maxStockData, 3),
  getTooltipLabelFormatter: date =>
    tryFormatDate(date, 'mmm d, yyyy'),
  getXAxisTickFormatter: date =>
    tryFormatDate(date, 'mmm d')
},
{
  label: LABEL_ONE_YEAR,
  stockDataKey: 'maxStockData',
  xAxisDataKey: 'date',
  xAxisMinTickGap: 30,
  getStockDataForTimePeriod: maxStockData =>
    getStockDataForPreviousYears(maxStockData, 1),
  getTooltipLabelFormatter: date =>
    tryFormatDate(date, 'mmm d, yyyy'),
  getXAxisTickFormatter: date =>
    tryFormatDate(date, 'mmm d')
},
{
  label: LABEL_FIVE_YEAR,
  stockDataKey: 'maxStockData',
  xAxisDataKey: 'date',
  xAxisMinTickGap: 120,
  getStockDataForTimePeriod: maxStockData =>
    getStockDataForPreviousYears(maxStockData, 5),
  getTooltipLabelFormatter: date =>
    tryFormatDate(date, 'mmm d, yyyy'),
  getXAxisTickFormatter: date =>
    tryFormatDate(date, 'mmm yyyy')
},
{
  label: LABEL_MAX,
  stockDataKey: 'maxStockData',
  xAxisDataKey: 'date',
  xAxisMinTickGap: 130,
  getStockDataForTimePeriod: maxStockData => maxStockData,
  getTooltipLabelFormatter: date =>
    tryFormatDate(date, 'mmm d, yyyy'),
  getXAxisTickFormatter: date =>
    tryFormatDate(date, 'mmm yyyy')
}];

// formatting dates within the state
export const DATE_FORMAT_FIVE_DAY = 'dddd, mmmm dd h:MM TT';
export const DATE_FORMAT_ONE_DAY = 'h:MM TT';

export const NUMBER_FORMAT_DEFAULT = '0,0.00';
export const NUMBER_FORMAT_PERCENT = '0.00%';
export const NUMBER_FORMAT_PRICE = '$0,0.00';
export const NUMBER_FORMAT_ROUNDED = '0,0.00';
export const NUMBER_FORMAT_SHORT_SUFFIXED = '0.00a';
/* eslint-disable quote-props */

const companyName = 'Linamar Corp';
const exchange = 'TSX';
const fiveDayStockData = [{
  dateAndTime: 'Friday, August 31 9:30 AM',
  price: 58.584999084472656
}, {
  dateAndTime: 'Friday, August 31 9:45 AM',
  price: 58.36000061035156
}];
const maxStockData = [{
  date: '1995-01-11',
  price: 6.25
}, {
  date: '1995-01-12',
  price: 6.12667
}];
const oneDayStockData = [{
  dateAndTime: '9:30 AM',
  price: 54.83000183105469
}, {
  dateAndTime: '9:35 AM',
  price: 54.630001068115234
}];
const stockOverviewData = {
  'Current Price': {
    value: 55,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  },
  'Div': {
    value: 0,
    optionalValue: 0,
    valueFormat: '0,0.00',
    optionalValueFormat: '0.00%'
  },
  'FCFY': {
    value: 0,
    valueFormat: '0.00%',
    optionalValueFormat: '0,0.00'
  },
  'High': {
    value: 55,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  },
  'Low': {
    value: 54,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  },
  'Mkt Cap': {
    value: 3604300800,
    valueFormat: '0.00a',
    optionalValueFormat: '0,0.00'
  },
  'Open': {
    value: 55,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  },
  'Previous Close': {
    value: 55,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  },
  'ROE': {
    value: 0,
    valueFormat: '0.00%',
    optionalValueFormat: '0,0.00'
  },
  'Trailing P/E': {
    value: 6,
    optionalValue: 9,
    valueFormat: '0,0.00',
    optionalValueFormat: '0,0.00'
  },
  'Volume': {
    value: 209789,
    optionalValue: 296115,
    valueFormat: '0.00a',
    optionalValueFormat: '0.00a'
  }
};
const symbol = 'LNR.TO';

export const mockStockData = {
  companyName,
  exchange,
  fiveDayStockData,
  maxStockData,
  oneDayStockData,
  stockOverviewData,
  symbol
};
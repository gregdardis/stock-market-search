import { expect } from 'chai';
import sinon from 'sinon';
import dateFormat from 'dateformat';


import * as typeChecking from '../typeChecking';
import {
  getAdjustedDateForTimestamp,
  getDatesAndPrices,
  getDateAndTime,
  getEndOfDayTimestampIndex,
  getStartOfDayTimestampIndex
} from './chartData';

/* eslint-disable no-undefined */

// describe('createStock', function() {
//   const STOCK_QUOTE = {
//     price: {
//       shortName: 'stockName',
//       symbol: 'SN',
//       exchangeName: 'NYSE'
//     },
//     summaryDetail: {},
//     financialData: {},
//     defaultKeyStatistics: {}
//   };
//   it('creates a stock given expected inputs', function() {
//     expect(createStock(STOCK_QUOTE))
//       .to
//       .deep
//       .equal({
//         companyName: 'stockName',
//         symbol: 'SN',
//         exchange: 'NYSE',
//         stockOverviewData: {}
//       });
//   });
// });

// describe('getDatesAndPrices', function() {
//   const DAILY_DATA_1 = [
//     {
//       date: 'date1',
//       close: 'price1'
//     },
//     {
//       date: 'date2',
//       close: 'price2'
//     }
//   ];
//   it('properly gets dates and prices for dailyData with 2 entries', function() {
//     expect(getDatesAndPrices(DAILY_DATA_1))
//       .to
//       .deep
//       .equal([
//         {
//           date: 'date!!',
//           price: 'price2'
//         },
//         {
//           date: 'date!!',
//           price: 'price1'
//         }
//       ]);
//   });
//   it('returns an empty array if dailyData is null', function() {
//     expect(getDatesAndPrices(null))
//       .to
//       .deep
//       .equal([]);
//   });
// });

describe('getAdjustedDateForTimestamp', function() {
  it('returns correct date for a timestamp and gmt offset', function() {
    expect(getAdjustedDateForTimestamp(1000, 2000))
      .to
      .deep
      .equal(new Date(3000000));
  });
});

describe('getDateAndTime', function() {
  it('gets date and time given proper inputs', function() {
    expect(getDateAndTime(1000, 2000, 'h:MM TT'))
      .to
      .equal(dateFormat(new Date(3000000), 'h:MM TT', true));
  });
});

describe('getStartOfDayTimestampIndex', function() {
  it('gets start of day timestamp index', function() {
    expect(getStartOfDayTimestampIndex(5, 24))
      .to
      .equal(120);
  });
});

describe('getEndOfDayTimestampIndex', function() {
  it('gets end of day timestamp index', function() {
    expect(getEndOfDayTimestampIndex(5, 24))
      .to
      .equal(144);
  });
});
import { expect } from 'chai';
import sinon from 'sinon';
import dateFormat from 'dateformat';

import {
  LABEL_PREVIOUS_CLOSE,
  LABEL_CURRENT_PRICE,
  LABEL_OPEN,
  LABEL_HIGH,
  LABEL_LOW,
  LABEL_DIVIDEND,
  LABEL_MARKET_CAP,
  LABEL_VOLUME,
  LABEL_PE_RATIO,
  LABEL_ROE,
  LABEL_FCFY
} from '../../constants/userFacingStrings';

import * as calculations from '../stockDataUtils/calculations';
import * as typeChecking from '../typeChecking';
import * as dataEntryCreation from '../stockDataUtils/dataEntryCreation';
import {
  createStock,
  createStockDataEntry,
  getAdjustedDateForTimestamp,
  getDatesAndPrices,
  getDateAndTime,
  getEndOfDayTimestampIndex,
  getStartOfDayTimestampIndex,
  processStockData
} from './chartData';

import {
  NUMBER_FORMAT_DEFAULT
} from '../../constants/formatting';

/* eslint-disable no-undefined */

describe('processStockData', () => {
  const VALUE_PREVIOUS_CLOSE = 1;
  const OPTIONAL_VALUE_PREVIOUS_CLOSE = 2;
  const VALUE_CURRENT_PRICE = 3;
  const OPTIONAL_VALUE_CURRENT_PRICE = 4;
  const VALUE_OPEN = 5;
  const OPTIONAL_VALUE_OPEN = 6;
  const VALUE_HIGH = 7;
  const OPTIONAL_VALUE_HIGH = 8;
  const VALUE_LOW = 9;
  const OPTIONAL_VALUE_LOW = 10;
  const VALUE_DIVIDEND = 11;
  const OPTIONAL_VALUE_DIVIDEND = 12;
  const VALUE_MARKET_CAP = 13;
  const OPTIONAL_VALUE_MARKET_CAP = 14;
  const VALUE_VOLUME = 15;
  const OPTIONAL_VALUE_VOLUME = 16;
  const VALUE_PE_RATIO = 17;
  const OPTIONAL_VALUE_PE_RATIO = 18;
  const VALUE_ROE = 19;
  const OPTIONAL_VALUE_ROE = 20;
  const VALUE_FCFY = 21;
  const OPTIONAL_VALUE_FCFY = 22;

  const PREVIOUS_CLOSE_STOCK_DATA_ENTRY = {
    value: VALUE_PREVIOUS_CLOSE,
    optionalValue: OPTIONAL_VALUE_PREVIOUS_CLOSE,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const CURRENT_PRICE_STOCK_DATA_ENTRY = {
    value: VALUE_CURRENT_PRICE,
    optionalValue: OPTIONAL_VALUE_CURRENT_PRICE,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const OPEN_STOCK_DATA_ENTRY = {
    value: VALUE_OPEN,
    optionalValue: OPTIONAL_VALUE_OPEN,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const HIGH_STOCK_DATA_ENTRY = {
    value: VALUE_HIGH,
    optionalValue: OPTIONAL_VALUE_HIGH,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const LOW_STOCK_DATA_ENTRY = {
    value: VALUE_LOW,
    optionalValue: OPTIONAL_VALUE_LOW,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const DIVIDEND_STOCK_DATA_ENTRY = {
    value: VALUE_DIVIDEND,
    optionalValue: OPTIONAL_VALUE_DIVIDEND,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const MARKET_CAP_STOCK_DATA_ENTRY = {
    value: VALUE_MARKET_CAP,
    optionalValue: OPTIONAL_VALUE_MARKET_CAP,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const VOLUME_STOCK_DATA_ENTRY = {
    value: VALUE_VOLUME,
    optionalValue: OPTIONAL_VALUE_VOLUME,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const PE_RATIO_STOCK_DATA_ENTRY = {
    value: VALUE_PE_RATIO,
    optionalValue: OPTIONAL_VALUE_PE_RATIO,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const ROE_STOCK_DATA_ENTRY = {
    value: VALUE_ROE,
    optionalValue: OPTIONAL_VALUE_ROE,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  const FCFY_STOCK_DATA_ENTRY = {
    value: VALUE_FCFY,
    optionalValue: OPTIONAL_VALUE_FCFY,
    valueFormat: NUMBER_FORMAT_DEFAULT,
    optionalValueFormat: NUMBER_FORMAT_DEFAULT
  };

  let createStockDataEntryStub;
  let calculateFcfyStub;
  beforeEach(function() {
    calculateFcfyStub = sinon.stub(calculations, 'calculateFcfy');
    calculateFcfyStub.returns(0);
    createStockDataEntryStub = sinon.stub(
      dataEntryCreation,
      'createStockDataEntry'
    );
    createStockDataEntryStub.onCall(0).returns(
      PREVIOUS_CLOSE_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(1).returns(
      CURRENT_PRICE_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(2).returns(
      OPEN_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(3).returns(
      HIGH_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(4).returns(
      LOW_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(5).returns(
      DIVIDEND_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(6).returns(
      MARKET_CAP_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(7).returns(
      VOLUME_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(8).returns(
      PE_RATIO_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(9).returns(
      ROE_STOCK_DATA_ENTRY
    );
    createStockDataEntryStub.onCall(10).returns(
      FCFY_STOCK_DATA_ENTRY
    );
  });
  afterEach(function() {
    createStockDataEntryStub.restore();
    calculateFcfyStub.restore();
  });
  it('processes stock data', function() {
    // parameters don't matter, every parameter given to processStockData
    // is passed to a function that is stubbed in this test
    expect(processStockData(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5))
      .to
      .deep
      .equal({
        [LABEL_PREVIOUS_CLOSE]: PREVIOUS_CLOSE_STOCK_DATA_ENTRY,
        [LABEL_CURRENT_PRICE]: CURRENT_PRICE_STOCK_DATA_ENTRY,
        [LABEL_OPEN]: OPEN_STOCK_DATA_ENTRY,
        [LABEL_HIGH]: HIGH_STOCK_DATA_ENTRY,
        [LABEL_LOW]: LOW_STOCK_DATA_ENTRY,
        [LABEL_DIVIDEND]: DIVIDEND_STOCK_DATA_ENTRY,
        [LABEL_MARKET_CAP]: MARKET_CAP_STOCK_DATA_ENTRY,
        [LABEL_VOLUME]: VOLUME_STOCK_DATA_ENTRY,
        [LABEL_PE_RATIO]: PE_RATIO_STOCK_DATA_ENTRY,
        [LABEL_ROE]: ROE_STOCK_DATA_ENTRY,
        [LABEL_FCFY]: FCFY_STOCK_DATA_ENTRY
      });
  });
});

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
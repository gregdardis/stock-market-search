import { expect } from 'chai';
import sinon from 'sinon';



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

import * as typeChecking from '../typeChecking';
import {
  calculateFcfy,
  createStock,
  createStockDataEntry,
  getDatesAndPrices,
  processStockData,
  __RewireAPI__ as chartDataModuleRewireAPI
} from './chartData';

import {
  NUMBER_FORMAT_DEFAULT
} from '../../constants/formatting';

/* eslint-disable no-undefined */

describe('calculateFcfy', () => {
  it('calculates fcfy given positive integer inputs', () => {
    expect(calculateFcfy(10256000, 164600000))
      .to
      .be
      .closeTo(0.0623, 0.0001);
  });
  it('calculates fcfy given positive decimal inputs', () => {
    expect(calculateFcfy(150000.51, 1600000.84))
      .to
      .be
      .closeTo(0.0937, 0.0001);
  });
  it('calculates fcfy given positive integer string inputs', () => {
    expect(calculateFcfy('10256000', '164600000'))
      .to
      .be
      .closeTo(0.0623, 0.0001);
  });
  it('calculates fcfy given negative freeCashFlow', () => {
    expect(calculateFcfy(-10256000, 164600000))
      .to
      .be
      .closeTo(-0.0623, 0.0001);
  });
  it('returns 0 given marketCap of 0', () => {
    expect(calculateFcfy(10256000, 0))
      .to
      .equal(0);
  });
  it('returns 0 given negative marketCap', () => {
    expect(calculateFcfy(10256000, -164600000))
      .to
      .equal(0);
  });
  it('throws an error if freeCashFlow is numbers followed by letters', () => {
    expect(() => {
      calculateFcfy('12hello', 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is letters followed by numbers', () => {
    expect(() => {
      calculateFcfy('hello12', 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a non-numeric string', () => {
    expect(() => {
      calculateFcfy('hello', 164600000);
    }).to
      .throw();
  });
  it('throws an error if marketCap is numbers followed by letters', () => {
    expect(() => {
      calculateFcfy(10256000, '12hello');
    }).to
      .throw();
  });
  it('throws an error if marketCap is letters followed by numbers', () => {
    expect(() => {
      calculateFcfy(10256000, 'hello12');
    }).to
      .throw();
  });
  it('throws an error if marketCap is a non-numeric string', () => {
    expect(() => {
      calculateFcfy(10256000, 'hello');
    }).to
      .throw();
  });
  it('throws an error if marketCap is the empty string', () => {
    expect(() => {
      calculateFcfy(10256000, '');
    }).to
      .throw();
  });
  it('throws an error if marketCap is an object', () => {
    expect(() => {
      calculateFcfy(10256000, {});
    }).to
      .throw();
  });
  it('throws an error if marketCap is an array', () => {
    expect(() => {
      calculateFcfy(10256000, []);
    }).to
      .throw();
  });
  it('throws an error if marketCap is a boolean', () => {
    expect(() => {
      calculateFcfy(10256000, true);
    }).to
      .throw();
  });
  it('throws an error if marketCap is null', () => {
    expect(() => {
      calculateFcfy(10256000, null);
    }).to
      .throw();
  });
  it('throws an error if marketCap is a function', () => {
    expect(() => {
      calculateFcfy(10256000, () => console.log('a function'));
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is the empty string', () => {
    expect(() => {
      calculateFcfy('', 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is an object', () => {
    expect(() => {
      calculateFcfy({}, 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is an array', () => {
    expect(() => {
      calculateFcfy([], 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a boolean', () => {
    expect(() => {
      calculateFcfy(true, 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is null', () => {
    expect(() => {
      calculateFcfy(null, 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a function', () => {
    expect(() => {
      calculateFcfy(() => console.log('a function'), 164600000);
    }).to
      .throw();
  });
});

describe('createStockDataEntry', () => {
  let isStringStub;

  beforeEach(function () {
    isStringStub = sinon.stub(
      typeChecking, 'isString'
    );
    isStringStub.returns(true);
  });

  afterEach(function () {
    isStringStub.restore();
  });

  it('creates a data entry given only value', () => {
    expect(createStockDataEntry(15))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry if value is a numeric string', () => {
    expect(createStockDataEntry('15'))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry given value and optionalValue', () => {
    expect(createStockDataEntry(15, { optionalValue: 5 }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: 5,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry if optionalValue is a numeric string', () => {
    expect(createStockDataEntry(15, { optionalValue: '5' }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: 5,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry given value and valueFormat', () => {
    expect(createStockDataEntry(15, { valueFormat: '0.00%' }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: '0.00%',
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry given value and optionalValueFormat', () => {
    expect(createStockDataEntry(15, { optionalValueFormat: '0.00%' }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: '0.00%'
      });
  });
  it('creates correct data entry given value ' +
     'and an option that doesn\'t exist', () => {
    expect(createStockDataEntry(15, { badOption: 'hello' }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('throws an error if value is letters followed by numbers', () => {
    expect(() => {
      createStockDataEntry('hello15');
    }).to
      .throw();
  });
  it('throws an error if value is numbers followed by letters', () => {
    expect(() => {
      createStockDataEntry('15hello');
    }).to
      .throw();
  });
  it('throws an error if value is a non-numeric string', () => {
    expect(() => {
      createStockDataEntry('hello');
    }).to
      .throw();
  });
  it('throws an error if value is an object', () => {
    expect(() => {
      createStockDataEntry({});
    }).to
      .throw();
  });
  it('throws an error if value is an array', () => {
    expect(() => {
      createStockDataEntry([]);
    }).to
      .throw();
  });
  it('throws an error if value is a boolean', () => {
    expect(() => {
      createStockDataEntry(true);
    }).to
      .throw();
  });
  it('throws an error if value is null', () => {
    expect(() => {
      createStockDataEntry(null);
    }).to
      .throw();
  });
  it('throws an error if value is a function', () => {
    expect(() => {
      createStockDataEntry(() => console.log('a function'));
    }).to
      .throw();
  });
  it('throws an error if optionalValue is letters followed by numbers', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: 'hello12' });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is numbers followed by letters', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: '12hello' });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is a non-numeric string', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: 'hello' });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is an object', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: {} });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is an array', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: [] });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is a boolean', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: true });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is a function', () => {
    expect(() => {
      createStockDataEntry(
        15,
        { optionalValue: () => console.log('a function') }
      );
    }).to
      .throw();
  });
  it('throws an error if valueFormat is an object', () => {
    expect(() => {
      isStringStub.returns(false);
      createStockDataEntry(15, { valueFormat: {} });
    }).to
      .throw();
  });
  it('throws an error if valueFormat is an array', () => {
    expect(() => {
      isStringStub.returns(false);
      createStockDataEntry(15, { valueFormat: [] });
    }).to
      .throw();
  });
  it('throws an error if valueFormat is a boolean', () => {
    expect(() => {
      isStringStub.returns(false);
      createStockDataEntry(15, { valueFormat: true });
    }).to
      .throw();
  });
  it('throws an error if valueFormat is a function', () => {
    expect(() => {
      isStringStub.returns(false);
      createStockDataEntry(
        15,
        { valueFormat: () => console.log('a function') }
      );
    }).to
      .throw();
  });
  it('throws an error if optionalValueFormat is an object', () => {
    expect(() => {
      isStringStub.returns(false);
      createStockDataEntry(15, { optionalValueFormat: {} });
    }).to
      .throw();
  });
  it('throws an error if optionalValueFormat is an array', () => {
    expect(() => {
      isStringStub.returns(false);
      createStockDataEntry(15, { optionalValueFormat: [] });
    }).to
      .throw();
  });
  it('throws an error if optionalValueFormat is a boolean', () => {
    expect(() => {
      isStringStub.returns(false);
      createStockDataEntry(15, { optionalValueFormat: true });
    }).to
      .throw();
  });
  it('throws an error if optionalValueFormat is a function', () => {
    expect(() => {
      isStringStub.returns(false);
      createStockDataEntry(
        15,
        { optionalValueFormat: () => console.log('a function') }
      );
    }).to
      .throw();
  });
});

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

  it('processes stock data', function() {
    // must do this for some reason even though calculateFcfy
    // shouldn't be called because createStockDataEntry is stubbed...
    chartDataModuleRewireAPI.__Rewire__('calculateFcfy', function() {
      return 0;
    });
    let createStockDataEntryStub = sinon.stub();
    chartDataModuleRewireAPI.__Rewire__(
      'createStockDataEntry',
      createStockDataEntryStub
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
    chartDataModuleRewireAPI.__ResetDependency__('createStockDataEntry');
    chartDataModuleRewireAPI.__ResetDependency__('calculateFcfy');
  });
});

describe('createStock', function() {
  const STOCK_QUOTE = {
    price: {
      shortName: 'stockName',
      symbol: 'SN',
      exchangeName: 'NYSE'
    },
    summaryDetail: {},
    financialData: {},
    defaultKeyStatistics: {}
  };
  it('creates a stock given expected inputs', function() {
    chartDataModuleRewireAPI.__Rewire__('processStockData', function() {
      return {};
    });
    expect(createStock(STOCK_QUOTE))
      .to
      .deep
      .equal({
        companyName: 'stockName',
        symbol: 'SN',
        exchange: 'NYSE',
        stockOverviewData: {}
      });
    chartDataModuleRewireAPI.__ResetDependency__('processStockData');
  });
});

describe('getDatesAndPrices', function() {
  const DAILY_DATA_1 = [
    {
      date: 'date1',
      close: 'price1'
    },
    {
      date: 'date2',
      close: 'price2'
    }
  ];
  it('properly gets dates and prices for dailyData with 2 entries', function() {
    chartDataModuleRewireAPI.__Rewire__(
      'formatDateForMaxStockData',
      function() {
        return 'date!!';
      }
    );
    expect(getDatesAndPrices(DAILY_DATA_1))
      .to
      .deep
      .equal([
        {
          date: 'date!!',
          price: 'price2'
        },
        {
          date: 'date!!',
          price: 'price1'
        }
      ]);
  });
  it('returns an empty array if dailyData is null', function() {
    expect(getDatesAndPrices(null))
      .to
      .deep
      .equal([]);
  });
  chartDataModuleRewireAPI.__ResetDependency__('formatDateForMaxStockData');
});
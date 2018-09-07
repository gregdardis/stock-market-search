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
import {
  NUMBER_FORMAT_DEFAULT
} from '../../constants/formatting';
import * as calculations from './calculations';
import * as dataEntryCreation from './dataEntryCreation';
import { processStockData } from './dataProcessing';

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
    expect(processStockData({}))
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
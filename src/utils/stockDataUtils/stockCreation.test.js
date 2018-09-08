import { expect } from 'chai';
import sinon from 'sinon';

import * as processStockData from './processStockData';
import { createStock } from './stockCreation';

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

  let processStockDataStub;

  beforeEach(function() {
    processStockDataStub = sinon.stub(processStockData, 'processStockData');
    processStockDataStub.returns({});
  });

  afterEach(function() {
    processStockDataStub.restore();
  });

  it('creates a stock given expected inputs', function() {
    expect(createStock(STOCK_QUOTE))
      .to
      .deep
      .equal({
        companyName: 'stockName',
        symbol: 'SN',
        exchange: 'NYSE',
        stockOverviewData: {}
      });
  });
});
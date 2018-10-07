import { expect } from 'chai';
import sinon from 'sinon';

import * as dateFormatting from '../../../utils/dateUtils/dateFormatting';
import { parseDailyData } from './responseParsing';

describe('parseDailyData', function() {
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

  let formatDateForMaxStockDataStub;

  beforeEach(function() {
    formatDateForMaxStockDataStub = sinon.stub(
      dateFormatting,
      'formatDateForMaxStockData'
    ).returns('date!!');
  });

  afterEach(function() {
    formatDateForMaxStockDataStub.restore();
  });

  it('properly gets dates and prices for dailyData with 2 entries', function() {
    expect(parseDailyData(DAILY_DATA_1))
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
    expect(parseDailyData(null))
      .to
      .deep
      .equal([]);
  });
});
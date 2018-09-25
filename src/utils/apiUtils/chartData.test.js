import { expect } from 'chai';

import { getQueryForIntradayData } from './chartData';
import { 
  QUERY_INTERVAL_ONE_DAY,
  QUERY_RANGE_ONE_DAY
} from '../../constants/numeric';

/* eslint-disable no-undefined */

describe('getQueryForIntradayData', () => {
  it('properly returns query for intraday data', () => {
    const mockSymbol = 'MSFT';
    const mockRange = QUERY_RANGE_ONE_DAY;
    const mockInterval = QUERY_INTERVAL_ONE_DAY;

    expect(getQueryForIntradayData(mockSymbol, mockRange, mockInterval))
      .to.equal(
        `https://query1.finance.yahoo.com/v8/finance/chart/${mockSymbol}` +
        `?range=${mockRange}&includePrePost=true&interval=${mockInterval}` +
        '&corsDomain=finance.yahoo.com&.tsrc=finance'
      );
  });
});
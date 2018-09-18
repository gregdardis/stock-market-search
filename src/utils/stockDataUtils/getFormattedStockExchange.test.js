import {
  getFormattedStockExchange
} from './getFormattedStockExchange';
import * as selectors from '../../client/selectors';

describe('getFormattedStockExchange', () => {
  beforeAll(() => {
    selectors.exchangeSelector = jest.fn();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('returns TSX if state.exchange is Toronto', () => {
    selectors.exchangeSelector.mockReturnValue('Toronto');
    expect(getFormattedStockExchange({ exchange: 'Toronto' }))
      .toEqual('TSX');
  });
  it('returns NASDAQ if state.exchange is NasdaqGS', () => {
    selectors.exchangeSelector.mockReturnValue('NasdaqGS');
    expect(getFormattedStockExchange({ exchange: 'NasdaqGS' }))
      .toEqual('NASDAQ');
  });
  it('returns the exchange if state.exchange is anything else', () => {
    selectors.exchangeSelector.mockReturnValue('NYSE');
    expect(getFormattedStockExchange({ exchange: 'Anything else' }))
      .toEqual('NYSE');
  });
});
import {
  getFormattedStockExchange
} from './getFormattedStockExchange';
import * as selectors from '../../client/selectors';

describe('getFormattedStockExchange', () => {
  beforeAll(() => {
    selectors.selectedStockValueForKeySelector = jest.fn();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('returns TSX if state.exchange is Toronto', () => {
    selectors.selectedStockValueForKeySelector.mockReturnValue('Toronto');
    expect(getFormattedStockExchange({ exchange: 'Toronto' }))
      .toEqual('TSX');
  });
  it('returns NASDAQ if state.exchange is NasdaqGS', () => {
    selectors.selectedStockValueForKeySelector.mockReturnValue('NasdaqGS');
    expect(getFormattedStockExchange({ exchange: 'NasdaqGS' }))
      .toEqual('NASDAQ');
  });
  it('returns the exchange if state.exchange is anything else', () => {
    selectors.selectedStockValueForKeySelector.mockReturnValue('NYSE');
    expect(getFormattedStockExchange({ exchange: 'Anything else' }))
      .toEqual('NYSE');
  });
});
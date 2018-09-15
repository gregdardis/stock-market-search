import * as stateGetters from '.';
import {
  getFormattedStockExchange
} from './getFormattedStockExchange';

describe('getFormattedStockExchange', () => {
  const getSelectedStockValueForKeyStub = jest.spyOn(
    stateGetters,
    'getSelectedStockValueForKey'
  );
  it('returns TSX if given Toronto', () => {
    getSelectedStockValueForKeyStub.mockReturnValue('Toronto');
    expect(getFormattedStockExchange({})).toEqual('TSX');
  });
  it('returns NASDAQ if given NasdaqGS', () => {
    getSelectedStockValueForKeyStub.mockReturnValue('NasdaqGS');
    expect(getFormattedStockExchange({})).toEqual('NASDAQ');
  });
  it('returns the exchange given if anything else', () => {
    getSelectedStockValueForKeyStub.mockReturnValue('NYSE');
    expect(getFormattedStockExchange({})).toEqual('NYSE');
  });
});
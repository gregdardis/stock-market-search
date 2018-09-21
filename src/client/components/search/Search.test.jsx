import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';

import Search from './Search';

const mockFunction = () => {};

const baseProps = {
  clearSearchError: mockFunction,
  clearSearchText: mockFunction,
  fetchStock: mockFunction,
  hasError: false,
  setStockFromMemCache: mockFunction,
  stocks: {
    MSFT: {}
  },
  /* eslint-disable-next-line no-undefined */
  text: undefined,
  updateSearchText: mockFunction
};

describe('<Search />', () => {
  it('true equals true', () => {
    expect(true).toBe(true);
  });
});

describe('handleSearch', () => {
  it('should call none of it\'s functions if text is undefined', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const propsHandleSearchFunction = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache
    };

    const wrapper = shallow(
      <Search { ...propsHandleSearchFunction }/>
    );

    wrapper.instance().handleSearch();

    expect(propsHandleSearchFunction.clearSearchError)
      .toHaveBeenCalledTimes(0);
    expect(propsHandleSearchFunction.fetchStock)
      .toHaveBeenCalledTimes(0);
    expect(propsHandleSearchFunction.setStockFromMemCache)
      .toHaveBeenCalledTimes(0);
  });
  it('should call correct functions if text is in stocks in state', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const propsHandleSearchFunction = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache,
      text: 'MSFT'
    };

    const wrapper = shallow(
      <Search { ...propsHandleSearchFunction }/>
    );

    wrapper.instance().handleSearch();

    expect(propsHandleSearchFunction.clearSearchError)
      .toHaveBeenCalledTimes(1);
    expect(propsHandleSearchFunction.fetchStock)
      .toHaveBeenCalledTimes(1);
    expect(propsHandleSearchFunction.setStockFromMemCache)
      .toHaveBeenCalledTimes(1);
  });
  it('should call correct functions if text is not undefined, ' +
     'but is not a stock in the state', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const propsHandleSearchFunction = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache,
      text: 'ABCD'
    };

    const wrapper = shallow(
      <Search { ...propsHandleSearchFunction }/>
    );

    wrapper.instance().handleSearch();

    expect(propsHandleSearchFunction.clearSearchError)
      .toHaveBeenCalledTimes(1);
    expect(propsHandleSearchFunction.fetchStock)
      .toHaveBeenCalledTimes(1);
    expect(propsHandleSearchFunction.setStockFromMemCache)
      .toHaveBeenCalledTimes(0);
  });
});
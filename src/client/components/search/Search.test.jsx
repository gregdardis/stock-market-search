import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

const mockFunction = () => {};

const mockState = {
  clearSearchError: mockFunction,
  clearSearchText: mockFunction,
  fetchStock: mockFunction,
  hasError: false,
  setStockFromMemCache: mockFunction,
  stocks: {
    MSFT: {}
  },
  text: 'A',
  updateSearchText: mockFunction
};

describe('<Search />', () => {
  it('true equals true', () => {
    expect(true).toBe(true);
  });
});

describe('handleSearch', () => {
  // it('should call none of it\'s functions if text is undefined', () => {
  //   const setStockFromMemCache = jest.fn();
  //   const fetchStock = jest.fn();
  //   const clearSearchError = jest.fn();

  //   const mockStateHandleSearchFunctions = {
  //     ...mockState,
  //     clearSearchError,
  //     fetchStock,
  //     setStockFromMemCache
  //   };

  //   const wrapper = shallow(
  //     <Search { ...mockStateHandleSearchFunctions }/>
  //   );

  //   wrapper.instance().handleSearch();

  //   expect(setStockFromMemCache).toHaveBeenCalledTimes(0);
  //   expect(fetchStock).toHaveBeenCalledTimes(0);
  //   expect(clearSearchError).toHaveBeenCalledTimes(0);
  // });
});
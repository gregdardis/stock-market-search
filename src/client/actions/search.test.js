import { expect } from 'chai';

import * as search from './search';
import { mockStockData } from './testData';
import { ERROR_MESSAGE_UNEXPECTED } from '../../constants/userFacingStrings';

describe('search actions', () => {
  it('should create an action to clear a search error', () => {
    const expectedAction = {
      type: search.CLEAR_SEARCH_ERROR
    };

    expect(search.clearSearchError())
      .to
      .deep
      .equal(expectedAction);
  });
  it('should create an action to clear the search text', () => {
    const expectedAction = {
      type: search.CLEAR_SEARCH_TEXT
    };

    expect(search.clearSearchText())
      .to
      .deep
      .equal(expectedAction);
  });
  it('should create an action to perform a search', () => {
    const searchText = mockStockData.symbol;
    const expectedAction = {
      type: search.PERFORM_SEARCH,
      searchText
    };

    expect(search.performSearch(searchText))
      .to
      .deep
      .equal(expectedAction);
  });
  it('should create an action to receive a search error', () => {
    const errorMessage = ERROR_MESSAGE_UNEXPECTED;
    const expectedAction = {
      type: search.RECEIVE_SEARCH_ERROR,
      errorMessage
    };

    expect(search.receiveSearchError(errorMessage))
      .to
      .deep
      .equal(expectedAction);
  });
  it('should create an action to update the search text', () => {
    const searchText = 'M';
    const expectedAction = {
      type: search.UPDATE_SEARCH_TEXT,
      searchText
    };

    expect(search.updateSearchText(searchText))
      .to
      .deep
      .equal(expectedAction);
  });
});
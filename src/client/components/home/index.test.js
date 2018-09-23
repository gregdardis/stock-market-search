import { expect } from 'chai';

import * as selectors from '../../selectors';
import { mapStateToProps } from '.';

const mockStateFetching = {
  fetching: 'MSFT',
  search: {
    currentText: 'MSFT',
    error: null
  }
};

const mockStateNotFetching = {
  fetching: null,
  search: {
    currentText: 'MSFT',
    error: null
  }
};

const mockSearchError = 'No stock with symbol "MSFTT" was found.';

const mockStateWithSearchError = {
  fetching: null,
  search: {
    currentText: 'MSFTT',
    error: mockSearchError
  }
};

describe('mapStateToProps', () => {
  it('properly maps state to props while fetching', () => {
    selectors.fetchingSelector = jest.fn()
      .mockReturnValue(mockStateFetching.fetching);

    selectors.searchErrorSelector = jest.fn()
      .mockReturnValue(mockStateFetching.search.error);

    expect(mapStateToProps(mockStateFetching))
      .to.deep.equal({
        loading: true,
        searchError: mockStateFetching.search.error
      });
  });
  it('properly maps state to props while not fetching', () => {
    selectors.fetchingSelector = jest.fn()
      .mockReturnValue(null);

    selectors.searchErrorSelector = jest.fn()
      .mockReturnValue(mockStateNotFetching.search.error);

    expect(mapStateToProps(mockStateNotFetching))
      .to.deep.equal({
        loading: false,
        searchError: mockStateNotFetching.search.error
      });
  });
  it('properly maps state to props with a search error', () => {
    selectors.fetchingSelector = jest.fn()
      .mockReturnValue(null);

    selectors.searchErrorSelector = jest.fn()
      .mockReturnValue(mockSearchError);

    expect(mapStateToProps(mockStateWithSearchError))
      .to.deep.equal({
        loading: false,
        searchError: mockSearchError
      });
  });
});
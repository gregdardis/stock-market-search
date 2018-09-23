import { expect } from 'chai';

import { mapStateToProps } from './index';
import * as selectors from '../../selectors';

describe('mapStateToProps', () => {
  it('maps given state to props when fetching', () => {
    const mockStock = 'MSFT';
    const mockState = {
      fetching: mockStock,
      search: {
        error: null
      }
    };

    selectors.fetchingSelector = jest.fn(() => mockStock);
    selectors.searchErrorSelector = jest.fn(() => null);

    expect(mapStateToProps(mockState)).to.deep.equal({
      loading: true,
      searchError: null
    });
  });
  it('maps given state to props when there was an error', () => {
    const mockError = 'No stock with symbol "SDFADF" was found.';
    const mockState = {
      fetching: null,
      search: {
        error: mockError
      }
    };

    selectors.fetchingSelector = jest.fn(() => null);
    selectors.searchErrorSelector = jest.fn(() => mockError);

    expect(mapStateToProps(mockState)).to.deep.equal({
      loading: false,
      searchError: mockError
    });
  });
});
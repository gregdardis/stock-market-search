import { expect } from 'chai';

import { mapStateToProps } from './index';

describe('mapStateToProps', () => {
  it('maps given state to props when fetching', () => {
    const mockState = {
      fetching: 'MSFT',
      search: {
        error: null
      }
    };

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

    expect(mapStateToProps(mockState)).to.deep.equal({
      loading: false,
      searchError: mockError
    });
  });
});
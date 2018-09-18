import { expect } from 'chai';

import * as selectors from '../../selectors';
import { mapStateToProps } from '.';

const mockStateFetching = {
  loading: true,
  search: {
    currentText: 'MSFT',
    error: null
  }
};

const mockStateNotFetching = {
  search: {
    currentText: 'MSFTT',
    error: 'No stock with symbol "MSFTT" was found.'
  }
};

describe('mapStateToProps', () => {
  it('properly maps state to props while fetching', () => {
    selectors.fetchingSelector = jest.fn()
      .mockReturnValue('MSFT');

    selectors.searchErrorSelector = jest.fn()
      .mockReturnValue(mockStateFetching.search.error);

    expect(mapStateToProps(mockStateFetching))
      .to.deep.equal({
        loading: true,
        searchError: null
      });
  });
});
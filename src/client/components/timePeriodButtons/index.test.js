import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as selectors from '../../selectors';

describe('mapStateToProps', () => {
  const mockState = {
    chartTimePeriodIndex: 2
  };

  it('properly maps state to props', () => {
    selectors.chartTimePeriodIndexSelector = jest.fn()
      .mockReturnValue(mockState.chartTimePeriodIndex);

    expect(mapStateToProps(mockState))
      .to.deep.equal({
        chartTimePeriodIndex: mockState.chartTimePeriodIndex
      });
  });
});
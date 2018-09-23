import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as selectors from '../../selectors';

describe('mapStateToProps', () => {
  const mockChartTimePeriodIndex = 2;
  const mockState = {
    chartTimePeriodIndex: mockChartTimePeriodIndex
  };

  it('properly maps state to props', () => {
    selectors.chartTimePeriodIndexSelector = jest.fn()
      .mockReturnValue(mockChartTimePeriodIndex);

    expect(mapStateToProps(mockState))
      .to.deep.equal({
        chartTimePeriodIndex: mockChartTimePeriodIndex
      });
  });
});
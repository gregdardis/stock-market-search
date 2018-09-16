import { expect } from 'chai';

import { mapStateToProps } from '.';
import * as getStockDataForSelectedTimePeriod
  from '../../../utils/stockDataUtils/getStockDataForSelectedTimePeriod';
import * as selectors from '../../selectors';

describe('mapStateToProps', () => {
  it('maps state to props as expected', () => {
    const mockChartTimePeriodIndex = 5;

    getStockDataForSelectedTimePeriod.getStockDataForSelectedTimePeriod =
      jest.fn().mockReturnValue({});

    selectors.chartTimePeriodIndexSelector = jest.fn()
      .mockReturnValue(mockChartTimePeriodIndex);

    const mockInputState = {
      chartTimePeriodIndex: mockChartTimePeriodIndex
    };

    expect(mapStateToProps(mockInputState))
      .to.deep.equal({
        chartTimePeriodIndex: mockChartTimePeriodIndex,
        data: {}
      });

    jest.resetAllMocks();
  });
});
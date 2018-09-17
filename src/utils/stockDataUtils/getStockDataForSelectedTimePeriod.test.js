import {
  getStockDataForSelectedTimePeriod
} from './getStockDataForSelectedTimePeriod';
import * as chartUtils from '../chartUtils';
import * as selectors from '../../client/selectors';

describe('getStockDataForSelectedTimePeriod', () => {
  it('properly gets stock data for a time period', () => {
    const mockOneDayStockData = [{
      dateAndTime: '9:30 AM',
      price: 54.83000183105469
    }, {
      dateAndTime: '9:35 AM',
      price: 54.630001068115234
    }];

    const mockChartTimePeriodIndex = 0;

    const mockState = {
      chartTimePeriodIndex: mockChartTimePeriodIndex
    };

    chartUtils.getStockDataKey = jest.fn()
      .mockReturnValue('oneDayStockData');

    selectors.selectedStockValueForKeySelector = jest.fn()
      .mockReturnValue(mockOneDayStockData);
    // stateGetters.getSelectedStockValueForKey = jest.fn()
    //   .mockReturnValue(mockOneDayStockData);

    selectors.chartTimePeriodIndexSelector = jest.fn()
      .mockReturnValue(mockChartTimePeriodIndex);

    expect(getStockDataForSelectedTimePeriod(mockState))
      .toEqual(mockOneDayStockData);

    jest.resetAllMocks();
  });
});
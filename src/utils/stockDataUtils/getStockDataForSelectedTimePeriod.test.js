import {
  getStockDataForSelectedTimePeriod
} from './getStockDataForSelectedTimePeriod';
import * as chartUtils from '../chartUtils';
import * as stateGetters from '../stateGetters';

describe('getStockDataForSelectedTimePeriod', () => {
  it('properly gets stock data for a time period', () => {
    const mockOneDayStockData = [{
      dateAndTime: '9:30 AM',
      price: 54.83000183105469
    }, {
      dateAndTime: '9:35 AM',
      price: 54.630001068115234
    }];

    const getStockDataKeyStub = jest.spyOn(
      chartUtils,
      'getStockDataKey'
    ).mockReturnValue('oneDayStockData');

    const getSelectedStockValueForKeyStub = jest.spyOn(
      stateGetters,
      'getSelectedStockValueForKey'
    ).mockReturnValue(mockOneDayStockData);

    const mockState = {
      chartTimePeriodIndex: 0
    };

    expect(getStockDataForSelectedTimePeriod(mockState))
      .toEqual(mockOneDayStockData);

    getStockDataKeyStub.mockReset();
    getSelectedStockValueForKeyStub.mockReset();
  });
});
import { mapStateToProps } from '.';
import * as getStockDataForSelectedTimePeriod
  from '../../../utils/stockDataUtils/getStockDataForSelectedTimePeriod';

describe('mapStateToProps', () => {
  it('maps state to props as expected', () => {
    const getStockDataForSelectedTimePeriodStub = jest.spyOn(
      getStockDataForSelectedTimePeriod,
      'getStockDataForSelectedTimePeriod'
    ).mockReturnValue({});

    const mockInputState = {
      chartTimePeriodIndex: 5
    };

    expect(mapStateToProps(mockInputState))
      .toEqual({
        chartTimePeriodIndex: 5,
        data: {}
      });

    getStockDataForSelectedTimePeriodStub.mockReset();
  });
});
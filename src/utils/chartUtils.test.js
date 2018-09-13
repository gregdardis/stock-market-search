import {
  getTooltipLabelFormatter,
  getXAxisDataKey
} from './chartUtils';
import * as dateFormatting from './dateUtils/dateFormatting';

describe('getTooltipLabelFormatter', () => {
  it('gets tooltip label formatter and ensures tryFormatDate' +
     'was called', () => {
    const mockTryFormatDate = jest.spyOn(
      dateFormatting,
      'tryFormatDate'
    );
    const fn = getTooltipLabelFormatter(1);

    fn('09-14-18');

    expect(mockTryFormatDate).toHaveBeenCalledTimes(1);

    mockTryFormatDate.mockReset();
  });
  it('returns null if chartTimePeriodIndex is negative', () => {
    expect(getTooltipLabelFormatter(-1)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is too high', () => {
    expect(getTooltipLabelFormatter(7)).toBeNull();
  });
});

// todo: test if index is out of range? throw exception?
describe('getXAxisDataKey', () => {
  it('works', () => {
    expect(getXAxisDataKey(0)).toBe('dateAndTime');
  });
});
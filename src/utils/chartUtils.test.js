import {
  getTooltipLabelFormatter,
  getXAxisDataKey
} from './chartUtils';
import * as dateFormatting from './dateUtils/dateFormatting';
import { CHART_META_DATA } from '../constants/formatting';

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
    expect(getTooltipLabelFormatter(CHART_META_DATA.length)).toBeNull();
  });
});

describe('getXAxisDataKey', () => {
  it('gets xAxisDataKey from CHART_META_DATA', () => {
    expect(getXAxisDataKey(0)).toBe('dateAndTime');
  });
  it('returns null if chartTimePeriodIndex is negative', () => {
    expect(getXAxisDataKey(-1)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is too high', () => {
    expect(getXAxisDataKey(CHART_META_DATA.length)).toBeNull();
  });
});
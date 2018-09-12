import {
  getTooltipLabelFormatter
} from './chartUtils';
import * as dateFormatting from './dateUtils/dateFormatting';

describe('getTooltipLabelFormatter', () => {
  it('gets the tooltip label formatter for index 1', () => {
    const mockTryFormatDate = jest.spyOn(
      dateFormatting,
      'tryFormatDate'
    );
    const fn = getTooltipLabelFormatter(1);

    fn('09-14-18');

    expect(mockTryFormatDate).toHaveBeenCalledTimes(1);

    mockTryFormatDate.mockReset();
  });
});
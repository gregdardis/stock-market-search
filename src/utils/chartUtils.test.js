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
  it('returns null if chartTimePeriodIndex is a string', () => {
    expect(getTooltipLabelFormatter('hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a numeric string', () => {
    expect(getTooltipLabelFormatter('5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a' +
     'number followed by letters', () => {
    expect(getTooltipLabelFormatter('5hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is' +
     'letters followed by a number', () => {
    expect(getTooltipLabelFormatter('hello5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an object', () => {
    expect(getTooltipLabelFormatter({})).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an array', () => {
    expect(getTooltipLabelFormatter([])).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a boolean', () => {
    expect(getTooltipLabelFormatter(true)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is null', () => {
    expect(getTooltipLabelFormatter(null)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is undefined', () => {
    /* eslint-disable no-undefined*/
    expect(getTooltipLabelFormatter(undefined)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a function', () => {
    expect(getTooltipLabelFormatter(() => {})).toBeNull();
  });
});

// TODO: check if !number
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
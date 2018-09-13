import {
  formatAsPrice,
  getStockDataKey,
  getTooltipLabelFormatter,
  getXAxisDataKey,
  getXAxisMinTickGap,
  getXAxisTickFormatter
} from './chartUtils';
import * as dateFormatting from './dateUtils/dateFormatting';
import { CHART_META_DATA } from '../constants/formatting';

describe('getStockDataKey', () => {
  it('gets xAxisDataKey from CHART_META_DATA', () => {
    expect(getStockDataKey(0)).toBe('oneDayStockData');
  });
  it('returns null if chartTimePeriodIndex is negative', () => {
    expect(getStockDataKey(-1)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is too high', () => {
    expect(getStockDataKey(CHART_META_DATA.length)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a string', () => {
    expect(getStockDataKey('hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a numeric string', () => {
    expect(getStockDataKey('5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a' +
     'number followed by letters', () => {
    expect(getStockDataKey('5hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is' +
     'letters followed by a number', () => {
    expect(getStockDataKey('hello5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an object', () => {
    expect(getStockDataKey({})).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an array', () => {
    expect(getStockDataKey([])).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a boolean', () => {
    expect(getStockDataKey(true)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is null', () => {
    expect(getStockDataKey(null)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is undefined', () => {
    /* eslint-disable-next-line no-undefined*/
    expect(getStockDataKey(undefined)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a function', () => {
    expect(getStockDataKey(() => {})).toBeNull();
  });
});

describe('getTooltipLabelFormatter', () => {
  it('gets tooltip label formatter and calls it, ensuring tryFormatDate' +
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
    /* eslint-disable-next-line no-undefined*/
    expect(getTooltipLabelFormatter(undefined)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a function', () => {
    expect(getTooltipLabelFormatter(() => {})).toBeNull();
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
  it('returns null if chartTimePeriodIndex is a string', () => {
    expect(getXAxisDataKey('hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a numeric string', () => {
    expect(getXAxisDataKey('5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a' +
     'number followed by letters', () => {
    expect(getXAxisDataKey('5hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is' +
     'letters followed by a number', () => {
    expect(getXAxisDataKey('hello5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an object', () => {
    expect(getXAxisDataKey({})).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an array', () => {
    expect(getXAxisDataKey([])).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a boolean', () => {
    expect(getXAxisDataKey(true)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is null', () => {
    expect(getXAxisDataKey(null)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is undefined', () => {
    /* eslint-disable-next-line no-undefined*/
    expect(getXAxisDataKey(undefined)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a function', () => {
    expect(getXAxisDataKey(() => {})).toBeNull();
  });
});

describe('getXAxisMinTickGap', () => {
  it('gets xAxisDataKey from CHART_META_DATA', () => {
    expect(getXAxisMinTickGap(0)).toBe(100);
  });
  it('returns null if chartTimePeriodIndex is negative', () => {
    expect(getXAxisMinTickGap(-1)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is too high', () => {
    expect(getXAxisMinTickGap(CHART_META_DATA.length)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a string', () => {
    expect(getXAxisMinTickGap('hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a numeric string', () => {
    expect(getXAxisMinTickGap('5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a' +
     'number followed by letters', () => {
    expect(getXAxisMinTickGap('5hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is' +
     'letters followed by a number', () => {
    expect(getXAxisMinTickGap('hello5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an object', () => {
    expect(getXAxisMinTickGap({})).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an array', () => {
    expect(getXAxisMinTickGap([])).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a boolean', () => {
    expect(getXAxisMinTickGap(true)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is null', () => {
    expect(getXAxisMinTickGap(null)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is undefined', () => {
    /* eslint-disable-next-line no-undefined*/
    expect(getXAxisMinTickGap(undefined)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a function', () => {
    expect(getXAxisMinTickGap(() => {})).toBeNull();
  });
});

describe('getXAxisTickFormatter', () => {
  it('gets X axis tick formatter and calls it, ensuring tryFormatDate' +
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
    expect(getXAxisTickFormatter(-1)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is too high', () => {
    expect(getXAxisTickFormatter(CHART_META_DATA.length)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a string', () => {
    expect(getXAxisTickFormatter('hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a numeric string', () => {
    expect(getXAxisTickFormatter('5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a' +
     'number followed by letters', () => {
    expect(getXAxisTickFormatter('5hello')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is' +
     'letters followed by a number', () => {
    expect(getXAxisTickFormatter('hello5')).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an object', () => {
    expect(getXAxisTickFormatter({})).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is an array', () => {
    expect(getXAxisTickFormatter([])).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a boolean', () => {
    expect(getXAxisTickFormatter(true)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is null', () => {
    expect(getXAxisTickFormatter(null)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is undefined', () => {
    /* eslint-disable-next-line no-undefined*/
    expect(getXAxisTickFormatter(undefined)).toBeNull();
  });
  it('returns null if chartTimePeriodIndex is a function', () => {
    expect(getXAxisTickFormatter(() => {})).toBeNull();
  });
});

describe('formatAsPrice', () => {
  it('formats a number as price', () => {
    expect(formatAsPrice(1000)).toBe('$1,000.00');
  });
  it('formats a number with decimal as price', () => {
    expect(formatAsPrice(1000.513)).toBe('$1,000.51');
  });
});
import { expect } from 'chai';
import dateFormat from 'dateformat';

import {
  getAdjustedDateForTimestamp,
  formatAndAdjustDateForTimestamp,
  getEndOfDayTimestampIndex,
  getStartOfDayTimestampIndex
} from './chartData';

/* eslint-disable no-undefined */

describe('getAdjustedDateForTimestamp', function() {
  it('returns correct date for a timestamp and gmt offset', function() {
    const gmtoffset = 1000;
    const timestamp = 2000;
    const adjustedDateForTimestamp = new Date(3000000);

    expect(getAdjustedDateForTimestamp(gmtoffset, timestamp))
      .to
      .deep
      .equal(adjustedDateForTimestamp);
  });
});

describe('formatAndAdjustDateForTimestamp', function() {
  const gmtoffset = 1000;
  const timestamp = 2000;
  const dateAndTimeFormat = 'h:MM TT';
  const adjustedDateForTimestamp = new Date(3000000);
  it('gets date and time given proper inputs', function() {
    expect(formatAndAdjustDateForTimestamp(gmtoffset, timestamp, dateAndTimeFormat))
      .to
      .equal(dateFormat(adjustedDateForTimestamp, dateAndTimeFormat, true));
  });
});

describe('getStartOfDayTimestampIndex', function() {
  it('gets start of day timestamp index', function() {
    expect(getStartOfDayTimestampIndex(5, 24))
      .to
      .equal(120);
  });
});

describe('getEndOfDayTimestampIndex', function() {
  it('gets end of day timestamp index', function() {
    expect(getEndOfDayTimestampIndex(5, 24))
      .to
      .equal(144);
  });
});
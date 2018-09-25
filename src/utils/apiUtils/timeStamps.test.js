import dateFormat from 'dateformat';
import { expect } from 'chai';

import {
  formatAndAdjustDateForTimestamp,
  getAdjustedDateForTimestamp,
  getEndOfDayTimestampIndex,
  getStartOfDayTimestampIndex
} from './timestamps';

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
    expect(formatAndAdjustDateForTimestamp(
      gmtoffset,
      timestamp,
      dateAndTimeFormat
    )).to
      .equal(dateFormat(adjustedDateForTimestamp, dateAndTimeFormat, true));
  });
});

describe('getStartOfDayTimestampIndex', function() {
  const dayIndex = 5;
  const timestampsPerDay = 24;
  const startOfDayTimestampIndex = 120;

  it('gets start of day timestamp index', function() {
    expect(getStartOfDayTimestampIndex(dayIndex, timestampsPerDay))
      .to
      .equal(startOfDayTimestampIndex);
  });
});

describe('getEndOfDayTimestampIndex', function() {
  const dayIndex = 5;
  const timestampsPerDay = 24;
  const endOfDayTimestampIndex = 144;

  it('gets end of day timestamp index', function() {
    expect(getEndOfDayTimestampIndex(dayIndex, timestampsPerDay))
      .to
      .equal(endOfDayTimestampIndex);
  });
});
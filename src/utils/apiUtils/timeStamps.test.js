import dateFormat from 'dateformat';
import { expect } from 'chai';

import {
  formatAndAdjustDateForTimestamp,
  getAdjustedDateForTimestamp
} from './timeStamps';

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
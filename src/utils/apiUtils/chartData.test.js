import { expect } from 'chai';
import sinon from 'sinon';
import dateFormat from 'dateformat';

import * as typeChecking from '../typeChecking';
import {
  getAdjustedDateForTimestamp,
  getDatesAndPrices,
  getDateAndTime,
  getEndOfDayTimestampIndex,
  getStartOfDayTimestampIndex
} from './chartData';

/* eslint-disable no-undefined */

describe('getAdjustedDateForTimestamp', function() {
  it('returns correct date for a timestamp and gmt offset', function() {
    expect(getAdjustedDateForTimestamp(1000, 2000))
      .to
      .deep
      .equal(new Date(3000000));
  });
});

describe('getDateAndTime', function() {
  it('gets date and time given proper inputs', function() {
    expect(getDateAndTime(1000, 2000, 'h:MM TT'))
      .to
      .equal(dateFormat(new Date(3000000), 'h:MM TT', true));
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
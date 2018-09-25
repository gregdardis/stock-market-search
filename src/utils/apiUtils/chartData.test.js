import { expect } from 'chai';

import {
  getEndOfDayTimestampIndex,
  getStartOfDayTimestampIndex
} from './chartData';

/* eslint-disable no-undefined */

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
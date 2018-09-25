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
  it('throws an error if dayIndex is negative', () => {
    expect(() => {
      getStartOfDayTimestampIndex(-1, timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is negative', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, -1);
    }).to.throw();
  });
  it('throws an error if dayIndex is an array', () => {
    expect(() => {
      getStartOfDayTimestampIndex([], timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is an object', () => {
    expect(() => {
      getStartOfDayTimestampIndex({}, timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is a boolean', () => {
    expect(() => {
      getStartOfDayTimestampIndex(true, timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is an empty string', () => {
    expect(() => {
      getStartOfDayTimestampIndex('', timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is a numeric string', () => {
    expect(() => {
      getStartOfDayTimestampIndex('5', timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is numbers followed by letters', () => {
    expect(() => {
      getStartOfDayTimestampIndex('5hello', timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is letters followed by numbers', () => {
    expect(() => {
      getStartOfDayTimestampIndex('hello5', timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is a function', () => {
    expect(() => {
      getStartOfDayTimestampIndex(() => {}, timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is an array', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, []);
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is an object', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, {});
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is a boolean', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, true);
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is an empty string', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, '');
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is a numeric string', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, '5');
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is numbers ' +
     'followed by letters', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, '5hello');
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is letters ' +
     'followed by numbers', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, 'hello5');
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is a function', () => {
    expect(() => {
      getStartOfDayTimestampIndex(dayIndex, () => {});
    }).to.throw();
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
  it('throws an error if dayIndex is negative', () => {
    expect(() => {
      getEndOfDayTimestampIndex(-1, timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is negative', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, -1);
    }).to.throw();
  });
  it('throws an error if dayIndex is an array', () => {
    expect(() => {
      getEndOfDayTimestampIndex([], timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is an object', () => {
    expect(() => {
      getEndOfDayTimestampIndex({}, timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is a boolean', () => {
    expect(() => {
      getEndOfDayTimestampIndex(true, timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is an empty string', () => {
    expect(() => {
      getEndOfDayTimestampIndex('', timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is a numeric string', () => {
    expect(() => {
      getEndOfDayTimestampIndex('5', timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is numbers followed by letters', () => {
    expect(() => {
      getEndOfDayTimestampIndex('5hello', timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is letters followed by numbers', () => {
    expect(() => {
      getEndOfDayTimestampIndex('hello5', timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if dayIndex is a function', () => {
    expect(() => {
      getEndOfDayTimestampIndex(() => {}, timestampsPerDay);
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is an array', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, []);
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is an object', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, {});
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is a boolean', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, true);
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is an empty string', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, '');
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is a numeric string', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, '5');
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is numbers ' +
     'followed by letters', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, '5hello');
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is letters ' +
     'followed by numbers', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, 'hello5');
    }).to.throw();
  });
  it('throws an error if timestampsPerDay is a function', () => {
    expect(() => {
      getEndOfDayTimestampIndex(dayIndex, () => {});
    }).to.throw();
  });
});
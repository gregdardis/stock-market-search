import { expect } from 'chai';

import {
  formatDateForMaxStockData,
  tryFormatDateWithoutTime,
  tryFormatDateWithTime
} from './dateFormatting';

const daysInMonth = {
  february: 28,
  april: 30,
  december: 31
};
const YEAR = 2018;

describe('formatDateForMaxStockData', () => {
  it('should properly format Jan date on first day of month', () => {
    const TEST_DATE_JANUARY = new Date(YEAR, 0, 1);
    expect(formatDateForMaxStockData(TEST_DATE_JANUARY))
      .to
      .equal(`${YEAR}-01-01`);
  });
  it('should properly format February date on last day of month', () => {
    const TEST_DATE_FEBRUARY = new Date(YEAR, 1, daysInMonth.february);
    expect(formatDateForMaxStockData(TEST_DATE_FEBRUARY))
      .to
      .equal(`${YEAR}-02-${daysInMonth.february}`);
  });
  it('should properly format April date on last day of month', () => {
    const TEST_DATE_APRIL = new Date(YEAR, 3, daysInMonth.april);
    expect(formatDateForMaxStockData(TEST_DATE_APRIL))
      .to
      .equal(`${YEAR}-04-${daysInMonth.april}`);
  });
  it('should properly format December date on last day of month', () => {
    const TEST_DATE_DECEMBER = new Date(YEAR, 11, daysInMonth.december);
    expect(formatDateForMaxStockData(TEST_DATE_DECEMBER))
      .to
      .equal(`${YEAR}-12-${daysInMonth.december}`);
  });
  it('should properly format a date in the middle of March', () => {
    const TEST_DATE_MARCH = new Date(YEAR, 2, 14);
    expect(formatDateForMaxStockData(TEST_DATE_MARCH))
      .to
      .equal(`${YEAR}-03-14`);
  });
  it('should throw an error when given the empty string', () => {
    expect(() => {
      formatDateForMaxStockData('');
    }).to
      .throw();
  });
  it('should throw an error when given a number', () => {
    expect(() => {
      formatDateForMaxStockData(4);
    }).to
      .throw();
  });
  it('should throw an error when given an object', () => {
    expect(() => {
      formatDateForMaxStockData({});
    }).to
      .throw();
  });
  it('should throw an error when given an array', () => {
    expect(() => {
      formatDateForMaxStockData([]);
    }).to
      .throw();
  });
  it('should throw an error when given a boolean', () => {
    expect(() => {
      formatDateForMaxStockData(true);
    }).to
      .throw();
  });
  it('should throw an error when given null', () => {
    expect(() => {
      formatDateForMaxStockData(null);
    }).to
      .throw();
  });
  it('should throw an error if given a function', () => {
    expect(() => {
      formatDateForMaxStockData(() => console.log('function'));
    }).to
      .throw();
  });
});

describe('tryFormatDateWithoutTime', () => {
  it('formats date as expected', () => {
    expect(tryFormatDateWithoutTime('2018-07-31', 'mmm d, yyyy'))
      .to.equal('Jul 31, 2018');
  });
  it('formats date with no year, only month and day as expected', () => {
    expect(tryFormatDateWithoutTime('2018-07-31', 'mmm d'))
      .to.equal('Jul 31');
  });
  it('formats date with no day, only month and year as expected', () => {
    expect(tryFormatDateWithoutTime('2018-07-31', 'mmm yyyy'))
      .to.equal('Jul 2018');
  });
});

describe('tryFormatDateWithTime', () => {
  it('formats date with time as expected', () => {
    expect(tryFormatDateWithTime(
      'Tuesday, September 18 2:15 PM', 'mmm d, h:MM TT')
    ).to.equal('Sep 18, 2:15 PM');
  });
});
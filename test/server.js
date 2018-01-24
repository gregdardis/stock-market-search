import { expect } from 'chai';

import {
  padSingleDigitWithZero,
  formatDate
} from '../src/server';

export const padSingleDigitWithZeroTest = () => {
  describe('padSingleDigitWithZero', () => {
    it('should pad 0 with a 0', () => {
      expect(padSingleDigitWithZero(0))
        .to
        .equal('00');
    });
    it('should pad 1 with a 0', () => {
      expect(padSingleDigitWithZero(1))
        .to
        .equal('01');
    });
    it('should pad 2 with a 0', () => {
      expect(padSingleDigitWithZero(2))
        .to
        .equal('02');
    });
    it('should pad 3 with a 0', () => {
      expect(padSingleDigitWithZero(3))
        .to
        .equal('03');
    });
    it('should pad 4 with a 0', () => {
      expect(padSingleDigitWithZero(4))
        .to
        .equal('04');
    });
    it('should pad 5 with a 0', () => {
      expect(padSingleDigitWithZero(5))
        .to
        .equal('05');
    });
    it('should pad 6 with a 0', () => {
      expect(padSingleDigitWithZero(6))
        .to
        .equal('06');
    });
    it('should pad 7 with a 0', () => {
      expect(padSingleDigitWithZero(7))
        .to
        .equal('07');
    });
    it('should pad 8 with a 0', () => {
      expect(padSingleDigitWithZero(8))
        .to
        .equal('08');
    });
    it('should pad 9 with a 0', () => {
      expect(padSingleDigitWithZero(9))
        .to
        .equal('09');
    });
    it('should not change 10', () => {
      expect(padSingleDigitWithZero(10))
        .to
        .equal('10');
    });
    it('should not change 11', () => {
      expect(padSingleDigitWithZero(11))
        .to
        .equal('11');
    });
    it('should not change 31', () => {
      expect(padSingleDigitWithZero(31))
        .to
        .equal('31');
    });
    it('should return null if given a string', () => {
      expect(padSingleDigitWithZero('hello'))
        .to
        .equal(null);
    });
    it('should return null if given an object', () => {
      expect(padSingleDigitWithZero({}))
        .to
        .equal(null);
    });
    it('should return null if given an array', () => {
      expect(padSingleDigitWithZero([]))
        .to
        .equal(null);
    });
    it('should return null if given a boolean', () => {
      expect(padSingleDigitWithZero(true))
        .to
        .equal(null);
    });
    it('should return null if given null', () => {
      expect(padSingleDigitWithZero(null))
        .to
        .equal(null);
    });
  });
};

export const formatDateTest = () => {
  const daysInMonth = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
  };
  const YEAR = 2018;
  describe('formatDate', () => {
    it('should properly format January date on last day of month', () => {
      const TEST_DATE_JANUARY = new Date(YEAR, 0, daysInMonth.january);
      expect(formatDate(TEST_DATE_JANUARY))
        .to
        .equal(`${YEAR}-01-${daysInMonth.january}`);
    });
    it('should properly format February date on last day of month', () => {
      const TEST_DATE_FEBRUARY = new Date(YEAR, 1, daysInMonth.february);
      expect(formatDate(TEST_DATE_FEBRUARY))
        .to
        .equal(`${YEAR}-02-${daysInMonth.february}`);
    });
    it('should properly format March date on last day of month', () => {
      const TEST_DATE_MARCH = new Date(YEAR, 2, daysInMonth.march);
      expect(formatDate(TEST_DATE_MARCH))
        .to
        .equal(`${YEAR}-03-${daysInMonth.march}`);
    });
    it('should properly format April date on last day of month', () => {
      const TEST_DATE_APRIL = new Date(YEAR, 3, daysInMonth.april);
      expect(formatDate(TEST_DATE_APRIL))
        .to
        .equal(`${YEAR}-04-${daysInMonth.april}`);
    });
    it('should properly format May date on last day of month', () => {
      const TEST_DATE_MAY = new Date(YEAR, 4, daysInMonth.may);
      expect(formatDate(TEST_DATE_MAY))
        .to
        .equal(`${YEAR}-05-${daysInMonth.may}`);
    });
    it('should properly format June date on last day of month', () => {
      const TEST_DATE_JUNE = new Date(YEAR, 5, daysInMonth.june);
      expect(formatDate(TEST_DATE_JUNE))
        .to
        .equal(`${YEAR}-06-${daysInMonth.june}`);
    });
    it('should properly format July date on last day of month', () => {
      const TEST_DATE_JULY = new Date(YEAR, 6, daysInMonth.july);
      expect(formatDate(TEST_DATE_JULY))
        .to
        .equal(`${YEAR}-07-${daysInMonth.july}`);
    });
    it('should properly format August date on last day of month', () => {
      const TEST_DATE_AUGUST = new Date(YEAR, 7, daysInMonth.august);
      expect(formatDate(TEST_DATE_AUGUST))
        .to
        .equal(`${YEAR}-08-${daysInMonth.august}`);
    });
    it('should properly format September date on last day of month', () => {
      const TEST_DATE_SEPTEMBER = new Date(YEAR, 8, daysInMonth.september);
      expect(formatDate(TEST_DATE_SEPTEMBER))
        .to
        .equal(`${YEAR}-09-${daysInMonth.september}`);
    });
    it('should properly format October date on last day of month', () => {
      const TEST_DATE_OCTOBER = new Date(YEAR, 9, daysInMonth.october);
      expect(formatDate(TEST_DATE_OCTOBER))
        .to
        .equal(`${YEAR}-10-${daysInMonth.october}`);
    });
    it('should properly format November date on last day of month', () => {
      const TEST_DATE_NOVEMBER = new Date(YEAR, 10, daysInMonth.november);
      expect(formatDate(TEST_DATE_NOVEMBER))
        .to
        .equal(`${YEAR}-11-${daysInMonth.november}`);
    });
    it('should properly format December date on last day of month', () => {
      const TEST_DATE_DECEMBER = new Date(YEAR, 11, daysInMonth.december);
      expect(formatDate(TEST_DATE_DECEMBER))
        .to
        .equal(`${YEAR}-12-${daysInMonth.december}`);
    });
    it('should throw an error when given the empty string', () => {
      expect(() => {
        formatDate('');
      }).to.throw();
    });
    it('should throw an error when given a number', () => {
      expect(() => {
        formatDate(4);
      }).to.throw();
    });
    it('should throw an error when given an object', () => {
      expect(() => {
        formatDate({});
      }).to.throw();
    });
    it('should throw an error when given an array', () => {
      expect(() => {
        formatDate([]);
      }).to.throw();
    });
    it('should throw an error when given a boolean', () => {
      expect(() => {
        formatDate(true);
      }).to.throw();
    });
    it('should throw an error when given null', () => {
      expect(() => {
        formatDate(null);
      }).to.throw();
    });
  });
};
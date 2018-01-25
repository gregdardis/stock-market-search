import { expect } from 'chai';

import {
  padSingleDigitWithZero,
  formatDate
} from '../../src/server';

export const padSingleDigitWithZeroTest = () => {
  describe('padSingleDigitWithZero', () => {
    it('should pad 0 with a 0 and stringify', () => {
      expect(padSingleDigitWithZero(0))
        .to
        .equal('00');
    });
    it('should pad \'0\' with a 0', () => {
      expect(padSingleDigitWithZero('0'))
        .to
        .equal('00');
    });
    it('should pad \'1\' with a 0', () => {
      expect(padSingleDigitWithZero('1'))
        .to
        .equal('01');
    });
    it('should pad 1 with a 0 and stringify', () => {
      expect(padSingleDigitWithZero(1))
        .to
        .equal('01');
    });
    it('should not change 10 but stringify', () => {
      expect(padSingleDigitWithZero(10))
        .to
        .equal('10');
    });
    it('should not change \'10\'', () => {
      expect(padSingleDigitWithZero('10'))
        .to
        .equal('10');
    });
    it('should throw an error if given an object', () => {
      expect(() => {
        padSingleDigitWithZero({});
      }).to
        .throw();
    });
    it('should throw an error if given an array', () => {
      expect(() => {
        padSingleDigitWithZero([]);
      }).to
        .throw();
    });
    it('should throw an error if given a boolean', () => {
      expect(() => {
        padSingleDigitWithZero(true);
      }).to
        .throw();
    });
    it('should throw an error if given null', () => {
      expect(() => {
        padSingleDigitWithZero(null);
      }).to
        .throw();
    });
    it('should throw an error if given numbers followed by letters (in a string)', () => {
      expect(() => {
        padSingleDigitWithZero('12hello');
      }).to
        .throw();
    });
    it('should throw an error if given letters followed by numbers (in a string)', () => {
      expect(() => {
        padSingleDigitWithZero('hello12');
      }).to
        .throw();
    });
    it('should throw an error if given letters (in a string)', () => {
      expect(() => {
        padSingleDigitWithZero('hello');
      }).to
        .throw();
    });
  });
};

export const formatDateTest = () => {
  const daysInMonth = {
    february: 28,
    april: 30,
    december: 31
  };
  const YEAR = 2018;
  describe('formatDate', () => {
    it('should properly format Jan date on first day of month', () => {
      const TEST_DATE_JANUARY = new Date(YEAR, 0, 1);
      expect(formatDate(TEST_DATE_JANUARY))
        .to
        .equal(`${YEAR}-01-01`);
    });
    it('should properly format February date on last day of month', () => {
      const TEST_DATE_FEBRUARY = new Date(YEAR, 1, daysInMonth.february);
      expect(formatDate(TEST_DATE_FEBRUARY))
        .to
        .equal(`${YEAR}-02-${daysInMonth.february}`);
    });
    it('should properly format April date on last day of month', () => {
      const TEST_DATE_APRIL = new Date(YEAR, 3, daysInMonth.april);
      expect(formatDate(TEST_DATE_APRIL))
        .to
        .equal(`${YEAR}-04-${daysInMonth.april}`);
    });
    it('should properly format December date on last day of month', () => {
      const TEST_DATE_DECEMBER = new Date(YEAR, 11, daysInMonth.december);
      expect(formatDate(TEST_DATE_DECEMBER))
        .to
        .equal(`${YEAR}-12-${daysInMonth.december}`);
    });
    it('should properly format a date in the middle of March', () => {
      const TEST_DATE_MARCH = new Date(YEAR, 2, 14);
      expect(formatDate(TEST_DATE_MARCH))
        .to
        .equal(`${YEAR}-03-14`);
    });
    it('should throw an error when given the empty string', () => {
      expect(() => {
        formatDate('');
      }).to
        .throw();
    });
    it('should throw an error when given a number', () => {
      expect(() => {
        formatDate(4);
      }).to
        .throw();
    });
    it('should throw an error when given an object', () => {
      expect(() => {
        formatDate({});
      }).to
        .throw();
    });
    it('should throw an error when given an array', () => {
      expect(() => {
        formatDate([]);
      }).to
        .throw();
    });
    it('should throw an error when given a boolean', () => {
      expect(() => {
        formatDate(true);
      }).to
        .throw();
    });
    it('should throw an error when given null', () => {
      expect(() => {
        formatDate(null);
      }).to
        .throw();
    });
  });
};
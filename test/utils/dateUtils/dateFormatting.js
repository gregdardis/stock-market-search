import { expect } from 'chai';

import {
  formatDateForMaxStockData
} from '../../../src/utils/dateUtils/dateFormatting';

export const formatDateForMaxStockDataTest = () => {
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
};
import expect from 'expect.js';

import { padSingleDigitWithZero } from '../src/server';

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
  });
};
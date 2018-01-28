import { expect } from 'chai';

import { addCommas } from '../../../src/utils/formatting/numberFormatting';

export const addCommasTest = () => {
  describe('addCommas', () => {
    it('should not add commas to a 3 digit number', () => {
      expect(addCommas(355))
        .to
        .equal('355');
    });
    it('should not add commas to a 3 digit number as a string', () => {
      expect(addCommas('355'))
        .to
        .equal('355');
    });
    it('should not add commas to a 3 digit number with 3 decimals', () => {
      expect(addCommas(355.553))
        .to
        .equal('355.553');
    });
    it('should not add commas to a 3 digit number with 3 decimals as a string', () => {
      expect(addCommas('355.553'))
        .to
        .equal('355.553');
    });
    it('should add a comma to a 4 digit number', () => {
      expect(addCommas(3553))
        .to
        .equal('3,553');
    });
    it('should add a comma to a 4 digit number as a string', () => {
      expect(addCommas('3553'))
        .to
        .equal('3,553');
    });
    it('should add commas to a 7 digit number', () => {
      expect(addCommas(3535353))
        .to
        .equal('3,535,353');
    });
    it('should add commas to a 7 digit number as a string', () => {
      expect(addCommas('3535353'))
        .to
        .equal('3,535,353');
    });
  });
};
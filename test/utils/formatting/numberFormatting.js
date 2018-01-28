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
    it('should throw an error if given an object', () => {
      expect(() => {
        addCommas({});
      }).to
        .throw();
    });
    it('should throw an error if given an array', () => {
      expect(() => {
        addCommas([]);
      }).to
        .throw();
    });
    it('should throw an error if given a boolean', () => {
      expect(() => {
        addCommas(true);
      }).to
        .throw();
    });
    it('should throw an error if given null', () => {
      expect(() => {
        addCommas(null);
      }).to
        .throw();
    });
    it('should throw an error if given numbers followed by letters (in a string)', () => {
      expect(() => {
        addCommas('12hello');
      }).to
        .throw();
    });
    it('should throw an error if given letters followed by numbers (in a string)', () => {
      expect(() => {
        addCommas('hello12');
      }).to
        .throw();
    });
    it('should throw an error if given letters (in a string)', () => {
      expect(() => {
        addCommas('hello');
      }).to
        .throw();
    });
  });
};
import { expect } from 'chai';

import {
  addCommas,
  calculateFormattedPriceChangePercentage,
  formatAsPrice,
  padSingleDigitWithZero
} from './numberFormatting';

describe('addCommas', () => {
  it('should not add commas if given 0', () => {
    expect(addCommas(0))
      .to
      .equal('0');
  });
  it('should not add commas if given a negative 3 digit number', () => {
    expect(addCommas(-355))
      .to
      .equal('-355');
  });
  it('should not add commas to a 3 digit number', () => {
    expect(addCommas(355))
      .to
      .equal('355');
  });
  it('should not add commas to a 3 digit number with 4 decimals', () => {
    expect(addCommas(355.5533))
      .to
      .equal('355.5533');
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
  it('should add a comma to a negative 4 digit number', () => {
    expect(addCommas(-3553))
      .to
      .equal('-3,553');
  });
  it('should add commas to a 7 digit number', () => {
    expect(addCommas(3535353))
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
  it('should throw an error if given numbers followed by letters ' +
     '(in a string)', () => {
    expect(() => {
      addCommas('12hello');
    }).to
      .throw();
  });
  it('should throw an error if given letters followed by numbers ' +
     '(in a string)', () => {
    expect(() => {
      addCommas('hello12');
    }).to
      .throw();
  });
  it('should throw an error if given a non-numeric string', () => {
    expect(() => {
      addCommas('hello');
    }).to
      .throw();
  });
  it('should throw an error if given a function', () => {
    expect(() => {
      addCommas(() => console.log('function'));
    }).to
      .throw();
  });
});

describe('calculateFormattedPriceChangePercentage', () => {
  it('properly calculates price change percent and formats it', () => {
    expect(calculateFormattedPriceChangePercentage(5.14, 1004.27))
      .to.equal('0.51%');
  });
});

describe('formatAsPrice', () => {
  it('formats a number as price', () => {
    expect(formatAsPrice(1000)).to.equal('$1,000.00');
  });
  it('formats a number with decimal as price', () => {
    expect(formatAsPrice(1000.513)).to.equal('$1,000.51');
  });
});

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
  it('should throw an error if given numbers followed by letters ' +
     '(in a string)', () => {
    expect(() => {
      padSingleDigitWithZero('12hello');
    }).to
      .throw();
  });
  it('should throw an error if given letters followed by numbers ' +
     '(in a string)', () => {
    expect(() => {
      padSingleDigitWithZero('hello12');
    }).to
      .throw();
  });
  it('should throw an error if given a non-numeric string', () => {
    expect(() => {
      padSingleDigitWithZero('hello');
    }).to
      .throw();
  });
  it('should throw an error if given a function', () => {
    expect(() => {
      padSingleDigitWithZero(() => console.log('function'));
    }).to
      .throw();
  });
});
import { expect } from 'chai';

import { calculateFcfy } from './calculations';

/* eslint-disable no-undefined */

// TODO: stub out parseIntExact
describe('calculateFcfy', () => {
  it('calculates fcfy given positive integer inputs', () => {
    expect(calculateFcfy(10256000, 164600000))
      .to
      .be
      .closeTo(0.0623, 0.0001);
  });
  it('calculates fcfy given positive decimal inputs', () => {
    expect(calculateFcfy(150000.51, 1600000.84))
      .to
      .be
      .closeTo(0.0937, 0.0001);
  });
  it('calculates fcfy given positive integer string inputs', () => {
    expect(calculateFcfy('10256000', '164600000'))
      .to
      .be
      .closeTo(0.0623, 0.0001);
  });
  it('calculates fcfy given negative freeCashFlow', () => {
    expect(calculateFcfy(-10256000, 164600000))
      .to
      .be
      .closeTo(-0.0623, 0.0001);
  });
  it('returns 0 given marketCap of 0', () => {
    expect(calculateFcfy(10256000, 0))
      .to
      .equal(0);
  });
  it('returns 0 given negative marketCap', () => {
    expect(calculateFcfy(10256000, -164600000))
      .to
      .equal(0);
  });
  it('throws an error if freeCashFlow is numbers followed by letters', () => {
    expect(() => {
      calculateFcfy('12hello', 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is letters followed by numbers', () => {
    expect(() => {
      calculateFcfy('hello12', 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a non-numeric string', () => {
    expect(() => {
      calculateFcfy('hello', 164600000);
    }).to
      .throw();
  });
  it('throws an error if marketCap is numbers followed by letters', () => {
    expect(() => {
      calculateFcfy(10256000, '12hello');
    }).to
      .throw();
  });
  it('throws an error if marketCap is letters followed by numbers', () => {
    expect(() => {
      calculateFcfy(10256000, 'hello12');
    }).to
      .throw();
  });
  it('throws an error if marketCap is a non-numeric string', () => {
    expect(() => {
      calculateFcfy(10256000, 'hello');
    }).to
      .throw();
  });
  it('throws an error if marketCap is the empty string', () => {
    expect(() => {
      calculateFcfy(10256000, '');
    }).to
      .throw();
  });
  it('throws an error if marketCap is an object', () => {
    expect(() => {
      calculateFcfy(10256000, {});
    }).to
      .throw();
  });
  it('throws an error if marketCap is an array', () => {
    expect(() => {
      calculateFcfy(10256000, []);
    }).to
      .throw();
  });
  it('throws an error if marketCap is a boolean', () => {
    expect(() => {
      calculateFcfy(10256000, true);
    }).to
      .throw();
  });
  it('throws an error if marketCap is null', () => {
    expect(() => {
      calculateFcfy(10256000, null);
    }).to
      .throw();
  });
  it('throws an error if marketCap is undefined', () => {
    expect(() => {
      calculateFcfy(10256000, undefined);
    }).to
      .throw();
  });
  it('throws an error if marketCap is a function', () => {
    expect(() => {
      calculateFcfy(10256000, () => console.log('a function'));
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is the empty string', () => {
    expect(() => {
      calculateFcfy('', 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is an object', () => {
    expect(() => {
      calculateFcfy({}, 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is an array', () => {
    expect(() => {
      calculateFcfy([], 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a boolean', () => {
    expect(() => {
      calculateFcfy(true, 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is null', () => {
    expect(() => {
      calculateFcfy(null, 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is undefined', () => {
    expect(() => {
      calculateFcfy(undefined, 164600000);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a function', () => {
    expect(() => {
      calculateFcfy(() => console.log('a function'), 164600000);
    }).to
      .throw();
  });
});
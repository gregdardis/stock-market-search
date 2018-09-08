import { expect } from 'chai';

import { calculateFcfy } from './calculations';

/* eslint-disable no-undefined */

const ROUNDING_ERROR_THRESHOLD = 0.0001;

describe('calculateFcfy', () => {
  const freeCashFlow = 10256000;
  const marketCap = 164600000;
  const fcfy = 0.0623;
  it('calculates fcfy given positive integer inputs', () => {
    expect(calculateFcfy(freeCashFlow, marketCap))
      .to
      .be
      .closeTo(fcfy, ROUNDING_ERROR_THRESHOLD);
  });
  it('calculates fcfy given positive decimal inputs', () => {
    expect(calculateFcfy(150000.51, 1600000.84))
      .to
      .be
      .closeTo(0.0937, ROUNDING_ERROR_THRESHOLD);
  });
  it('calculates fcfy given positive integer string inputs', () => {
    expect(calculateFcfy('10256000', '164600000'))
      .to
      .be
      .closeTo(fcfy, ROUNDING_ERROR_THRESHOLD);
  });
  it('calculates fcfy given negative freeCashFlow', () => {
    expect(calculateFcfy(-freeCashFlow, marketCap))
      .to
      .be
      .closeTo(-fcfy, ROUNDING_ERROR_THRESHOLD);
  });
  it('returns 0 given marketCap of 0', () => {
    expect(calculateFcfy(freeCashFlow, 0))
      .to
      .equal(0);
  });
  it('returns 0 given negative marketCap', () => {
    expect(calculateFcfy(freeCashFlow, -marketCap))
      .to
      .equal(0);
  });
  it('throws an error if freeCashFlow is numbers followed by letters', () => {
    expect(() => {
      calculateFcfy('12hello', marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is letters followed by numbers', () => {
    expect(() => {
      calculateFcfy('hello12', marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a non-numeric string', () => {
    expect(() => {
      calculateFcfy('hello', marketCap);
    }).to
      .throw();
  });
  it('throws an error if marketCap is numbers followed by letters', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, '12hello');
    }).to
      .throw();
  });
  it('throws an error if marketCap is letters followed by numbers', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, 'hello12');
    }).to
      .throw();
  });
  it('throws an error if marketCap is a non-numeric string', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, 'hello');
    }).to
      .throw();
  });
  it('throws an error if marketCap is the empty string', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, '');
    }).to
      .throw();
  });
  it('throws an error if marketCap is an object', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, {});
    }).to
      .throw();
  });
  it('throws an error if marketCap is an array', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, []);
    }).to
      .throw();
  });
  it('throws an error if marketCap is a boolean', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, true);
    }).to
      .throw();
  });
  it('throws an error if marketCap is null', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, null);
    }).to
      .throw();
  });
  it('throws an error if marketCap is undefined', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, undefined);
    }).to
      .throw();
  });
  it('throws an error if marketCap is a function', () => {
    expect(() => {
      calculateFcfy(freeCashFlow, () => {});
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is the empty string', () => {
    expect(() => {
      calculateFcfy('', marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is an object', () => {
    expect(() => {
      calculateFcfy({}, marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is an array', () => {
    expect(() => {
      calculateFcfy([], marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a boolean', () => {
    expect(() => {
      calculateFcfy(true, marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is null', () => {
    expect(() => {
      calculateFcfy(null, marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is undefined', () => {
    expect(() => {
      calculateFcfy(undefined, marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a function', () => {
    expect(() => {
      calculateFcfy(() => {}, marketCap);
    }).to
      .throw();
  });
});
import { expect } from 'chai';
import sinon from 'sinon';

import * as parseIntExact from '../parseIntExact';
import { calculateFcfy } from './calculations';

/* eslint-disable no-undefined */

const ROUNDING_ERROR_THRESHOLD = 0.0001;

describe('calculateFcfy', () => {
  let parseIntExactStub;

  const freeCashFlow = 10256000;
  const marketCap = 164600000;
  const fcfy = 0.0623;

  beforeEach(() => {
    parseIntExactStub = sinon.stub(
      parseIntExact, 'parseIntExact'
    );
    parseIntExactStub.onCall(0).returns(freeCashFlow);
    parseIntExactStub.onCall(1).returns(marketCap);
  });

  afterEach(() => {
    parseIntExactStub.restore();
  });

  it('calculates fcfy given positive integer inputs', () => {
    expect(calculateFcfy(freeCashFlow, marketCap))
      .to
      .be
      .closeTo(fcfy, ROUNDING_ERROR_THRESHOLD);
  });
  it('calculates fcfy given positive decimal inputs', () => {
    parseIntExactStub.onCall(0).returns(150000.51);
    parseIntExactStub.onCall(1).returns(1600000.84);
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
    parseIntExactStub.onCall(0).returns(-freeCashFlow);
    expect(calculateFcfy(-freeCashFlow, marketCap))
      .to
      .be
      .closeTo(-fcfy, ROUNDING_ERROR_THRESHOLD);
  });
  it('returns 0 given marketCap of 0', () => {
    parseIntExactStub.onCall(1).returns(0);
    expect(calculateFcfy(freeCashFlow, 0))
      .to
      .equal(0);
  });
  it('returns 0 given negative marketCap', () => {
    parseIntExactStub.onCall(1).returns(-marketCap);
    expect(calculateFcfy(freeCashFlow, -marketCap))
      .to
      .equal(0);
  });
  it('throws an error if freeCashFlow is numbers followed by letters', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy('12hello', marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is letters followed by numbers', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy('hello12', marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a non-numeric string', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy('hello', marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is the empty string', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy('', marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is an object', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy({}, marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is an array', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy([], marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a boolean', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy(true, marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is null', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy(null, marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is undefined', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy(undefined, marketCap);
    }).to
      .throw();
  });
  it('throws an error if freeCashFlow is a function', () => {
    parseIntExactStub.onCall(0).returns(null);
    expect(() => {
      calculateFcfy(() => {}, marketCap);
    }).to
      .throw();
  });
  it('throws an error if marketCap is numbers followed by letters', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, '12hello');
    }).to
      .throw();
  });
  it('throws an error if marketCap is letters followed by numbers', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, 'hello12');
    }).to
      .throw();
  });
  it('throws an error if marketCap is a non-numeric string', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, 'hello');
    }).to
      .throw();
  });
  it('throws an error if marketCap is the empty string', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, '');
    }).to
      .throw();
  });
  it('throws an error if marketCap is an object', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, {});
    }).to
      .throw();
  });
  it('throws an error if marketCap is an array', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, []);
    }).to
      .throw();
  });
  it('throws an error if marketCap is a boolean', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, true);
    }).to
      .throw();
  });
  it('throws an error if marketCap is null', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, null);
    }).to
      .throw();
  });
  it('throws an error if marketCap is undefined', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, undefined);
    }).to
      .throw();
  });
  it('throws an error if marketCap is a function', () => {
    parseIntExactStub.onCall(1).returns(null);
    expect(() => {
      calculateFcfy(freeCashFlow, () => {});
    }).to
      .throw();
  });
});
import { expect } from 'chai';
import sinon from 'sinon';

import {
  calculateDateDaysInPast,
  calculateDateDaysInPastFromToday
} from './dateCalculations';

import * as dateCalculations from './dateCalculations';

const YEAR = 2018;
const PREVIOUS_YEAR = 2017;

const JANUARY = 0;
const FEBRUARY = 1;
const DECEMBER = 11;

describe('calculateDateDaysInPast', () => {
  it('should properly calculate days in past', () => {
    expect(calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), 5))
      .to
      .deep
      .equal(new Date(YEAR, JANUARY, 10));
  });
  it('should properly calculate given a string for days', () => {
    expect(calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), '5'))
      .to
      .deep
      .equal(new Date(YEAR, JANUARY, 10));
  });
  it('should throw an error if days is an object', () => {
    expect(() => {
      calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), {});
    }).to
      .throw();
  });
  it('should throw an error if days is a function', () => {
    expect(() => {
      calculateDateDaysInPast(
        new Date(YEAR, JANUARY, 15),
        () => console.log('a function')
      );
    }).to
      .throw();
  });
  it('should throw an error if days is null', () => {
    expect(() => {
      calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), null);
    }).to
      .throw();
  });
  it('should throw an error if days is an array', () => {
    expect(() => {
      calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), []);
    }).to
      .throw();
  });
  it('should throw an error if days is a boolean', () => {
    expect(() => {
      calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), true);
    }).to
      .throw();
  });
  it('should throw an error if days is a non-numeric string', () => {
    expect(() => {
      calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), 'hello');
    }).to
      .throw();
  });
  it('should throw an error if days is letters followed by numbers', () => {
    expect(() => {
      calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), 'h15');
    }).to
      .throw();
  });
  it('should throw an error if days is numbers followed by letters', () => {
    expect(() => {
      calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), '15h');
    }).to
      .throw();
  });
  it('should throw an error if date is an object', () => {
    expect(() => {
      calculateDateDaysInPast({}, 5);
    }).to
      .throw();
  });
  it('should throw an error if date is a function', () => {
    expect(() => {
      calculateDateDaysInPast(() => console.log('a function'), 5);
    }).to
      .throw();
  });
  it('should throw an error if date is null', () => {
    expect(() => {
      calculateDateDaysInPast(null, 5);
    }).to
      .throw();
  });
  it('should throw an error if date is an array', () => {
    expect(() => {
      calculateDateDaysInPast([], 5);
    }).to
      .throw();
  });
  it('should throw an error if date is a boolean', () => {
    expect(() => {
      calculateDateDaysInPast(true, 5);
    }).to
      .throw();
  });
  it('should throw an error if date is a non-numeric string', () => {
    expect(() => {
      calculateDateDaysInPast('hello', 5);
    }).to
      .throw();
  });
  it('should throw an error if date is letters followed by numbers', () => {
    expect(() => {
      calculateDateDaysInPast('h15', 5);
    }).to
      .throw();
  });
  it('should throw an error if date is numbers followed by letters', () => {
    expect(() => {
      calculateDateDaysInPast('15h', 5);
    }).to
      .throw();
  });
  it('should properly calculate days before first of month', () => {
    expect(calculateDateDaysInPast(new Date(YEAR, FEBRUARY, 1), 2))
      .to
      .deep
      .equal(new Date(YEAR, JANUARY, 30));
  });
  it('should properly calculate days before first of year', () => {
    expect(calculateDateDaysInPast(new Date(YEAR, JANUARY, 1), 2))
      .to
      .deep
      .equal(new Date(PREVIOUS_YEAR, DECEMBER, 30));
  });
  it('should properly calculate into the future for a ' +
  'negative number of days in the past', () => {
    expect(calculateDateDaysInPast(new Date(YEAR, JANUARY, 1), -2))
      .to
      .deep
      .equal(new Date(YEAR, JANUARY, 3));
  });
});

describe('calculateDateDaysInPastFromToday', () => {
  let clock;
  let calculateDateDaysInPastStub;

  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date());
    calculateDateDaysInPastStub = sinon.stub(
      dateCalculations, 'calculateDateDaysInPast'
    );
  });

  afterEach(function () {
    clock.restore();
    calculateDateDaysInPastStub.restore();
  });

  it('should properly calculate 1 day before today', () => {
    const now = new Date();

    const yesterday = new Date(now.getTime());
    yesterday.setDate(yesterday.getDate() - 1);

    calculateDateDaysInPastStub.returns(yesterday);

    expect(calculateDateDaysInPastFromToday(1))
      .to
      .deep
      .equal(yesterday);
  });
  it('should properly calculate 0 days before today', () => {
    const now = new Date();

    calculateDateDaysInPastStub.returns(now);

    expect(calculateDateDaysInPastFromToday(0))
      .to
      .deep
      .equal(now);
  });
});
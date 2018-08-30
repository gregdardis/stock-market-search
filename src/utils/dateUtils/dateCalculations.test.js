import { expect } from 'chai';
import sinon from 'sinon';

import {
  calculateDateDaysInPast,
  calculateDateDaysInPastFromToday
} from './dateCalculations';

import * as dateCalculations from './dateCalculations';

const YEAR = 2018;

const JANUARY = 0;
const FEBRUARY = 1;

// negative number, string, previous year, normal case
describe('calculateDateDaysInPast', () => {
  it('should properly calculate days before first of month', () => {
    expect(calculateDateDaysInPast(new Date(YEAR, FEBRUARY, 1), 2))
      .to
      .deep
      .equal(new Date(2018, JANUARY, 30));
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
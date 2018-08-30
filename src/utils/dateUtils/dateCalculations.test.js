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

describe('calculateDateDaysInPast', () => {
  it('should properly calculate days before first of month', () => {
    expect(calculateDateDaysInPast(new Date(YEAR, FEBRUARY, 1), 2))
      .to
      .deep
      .equal(new Date(2018, JANUARY, 30));
  });
});

describe('calculateDateDaysInPastFromToday', () => {
  it('should properly calculate 1 day before today', () => {
    const clock = sinon.useFakeTimers(new Date());
    const now = new Date();
    const yesterday = new Date(now.getTime());
    yesterday.setDate(yesterday.getDate() - 1);

    const calculateDateDaysInPastStub = sinon.stub(
      dateCalculations, 'calculateDateDaysInPast'
    );
    calculateDateDaysInPastStub.returns(yesterday);

    expect(calculateDateDaysInPastFromToday(1))
      .to
      .deep
      .equal(yesterday);

    calculateDateDaysInPastStub.restore();
    clock.restore();
  });
  it('should properly calculate 0 days before today', () => {
    const clock = sinon.useFakeTimers(new Date());
    const now = new Date();

    const calculateDateDaysInPastStub = sinon.stub(
      dateCalculations, 'calculateDateDaysInPast'
    );
    calculateDateDaysInPastStub.returns(now);

    expect(calculateDateDaysInPastFromToday(0))
      .to
      .deep
      .equal(now);

    calculateDateDaysInPastStub.restore();
    clock.restore();
  });
});
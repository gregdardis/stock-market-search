import { expect } from 'chai';
import sinon from 'sinon';

import {
  calculateDateDaysInPast,
  calculateDateDaysInPastFromToday,
  calculateDateMonthsInPast,
  __RewireAPI__ as dateCalculationsModuleRewireAPI
} from './dateCalculations';

import * as typeChecking from '../typeChecking';

const YEAR = 2018;
const PREVIOUS_YEAR = 2017;

const JANUARY = 0;
const FEBRUARY = 1;
const APRIL = 3;
const DECEMBER = 11;

// TODO: fix parseIntExactStub.
// it is not stubbing properly!
describe('calculateDateDaysInPast', () => {
  // TODO: FIX THIS
  // it('should properly be stubbed', () => {
  //   const parseIntExactStub = sinon.stub(
  //     typeChecking,
  //     'parseIntExact'
  //   );
  //   parseIntExactStub.returns(1);
  //   expect(
  //     calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), 5).getDate()
  //   ).to
  //     .equal(14);
  //   parseIntExactStub.restore();
  // });

  // NOT HERE AND BELOW
  // beforeEach(function() {
  //   // parseIntExactStub = sinon.stub(
  //   //   typeChecking,
  //   //   'parseIntExact'
  //   // );
  //   parseIntExactStub.returns(-1);
  // });

  // afterEach(function() {
  //   parseIntExactStub.restore();
  // });
  // after(function() {
  //   parseIntExactStub.restore();
  // });

  // it('should properly calculate days in past', () => {
  //   parseIntExactStub.returns(4);
  //   expect(calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), 5))
  //     .to
  //     .deep
  //     .equal(new Date(YEAR, JANUARY, 10));
  // });
  // it('should properly calculate given a string for days', () => {
  //   parseIntExactStub.returns(5);
  //   expect(calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), '5'))
  //     .to
  //     .deep
  //     .equal(new Date(YEAR, JANUARY, 10));
  // });
  // it('should throw an error if days is an object', () => {
  //   parseIntExactStub.returns(null);
  //   expect(() => {
  //     calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), {});
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if days is a function', () => {
  //   parseIntExactStub.returns(null);
  //   expect(() => {
  //     calculateDateDaysInPast(
  //       new Date(YEAR, JANUARY, 15),
  //       () => console.log('a function')
  //     );
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if days is null', () => {
  //   parseIntExactStub.returns(null);
  //   expect(() => {
  //     calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), null);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if days is an array', () => {
  //   parseIntExactStub.returns(null);
  //   expect(() => {
  //     calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), []);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if days is a boolean', () => {
  //   parseIntExactStub.returns(null);
  //   expect(() => {
  //     calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), true);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if days is a non-numeric string', () => {
  //   parseIntExactStub.returns(null);
  //   expect(() => {
  //     calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), 'hello');
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if days is letters followed by numbers', () => {
  //   parseIntExactStub.returns(null);
  //   expect(() => {
  //     calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), 'h15');
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if days is numbers followed by letters', () => {
  //   parseIntExactStub.returns(null);
  //   expect(() => {
  //     calculateDateDaysInPast(new Date(YEAR, JANUARY, 15), '15h');
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if date is an object', () => {
  //   parseIntExactStub.returns(5);
  //   expect(() => {
  //     calculateDateDaysInPast({}, 5);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if date is a function', () => {
  //   parseIntExactStub.returns(5);
  //   expect(() => {
  //     calculateDateDaysInPast(() => console.log('a function'), 5);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if date is null', () => {
  //   parseIntExactStub.returns(5);
  //   expect(() => {
  //     calculateDateDaysInPast(null, 5);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if date is an array', () => {
  //   parseIntExactStub.returns(5);
  //   expect(() => {
  //     calculateDateDaysInPast([], 5);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if date is a boolean', () => {
  //   parseIntExactStub.returns(5);
  //   expect(() => {
  //     calculateDateDaysInPast(true, 5);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if date is a non-numeric string', () => {
  //   parseIntExactStub.returns(5);
  //   expect(() => {
  //     calculateDateDaysInPast('hello', 5);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if date is letters followed by numbers', () => {
  //   parseIntExactStub.returns(5);
  //   expect(() => {
  //     calculateDateDaysInPast('h15', 5);
  //   }).to
  //     .throw();
  // });
  // it('should throw an error if date is numbers followed by letters', () => {
  //   parseIntExactStub.returns(5);
  //   expect(() => {
  //     calculateDateDaysInPast('15h', 5);
  //   }).to
  //     .throw();
  // });
  // it('should properly calculate days before first of month', () => {
  //   parseIntExactStub.returns(2);
  //   expect(calculateDateDaysInPast(new Date(YEAR, FEBRUARY, 1), 2))
  //     .to
  //     .deep
  //     .equal(new Date(YEAR, JANUARY, 30));
  // });
  // it('should properly calculate days before first of year', () => {
  //   parseIntExactStub.returns(2);
  //   expect(calculateDateDaysInPast(new Date(YEAR, JANUARY, 1), 2))
  //     .to
  //     .deep
  //     .equal(new Date(PREVIOUS_YEAR, DECEMBER, 30));
  // });
  // it('should properly calculate into the future for a ' +
  // 'negative number of days in the past', () => {
  //   parseIntExactStub.returns(2);
  //   expect(calculateDateDaysInPast(new Date(YEAR, JANUARY, 1), -2))
  //     .to
  //     .deep
  //     .equal(new Date(YEAR, JANUARY, 3));
  // });
});

describe('calculateDateDaysInPastFromToday', () => {
  let clock;
  let calculateDateDaysInPastStub;

  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date());
    calculateDateDaysInPastStub = sinon.stub();
    dateCalculationsModuleRewireAPI.__Rewire__(
      'calculateDateDaysInPast',
      calculateDateDaysInPastStub
    );
  });

  afterEach(function () {
    clock.restore();
    dateCalculationsModuleRewireAPI
      .__ResetDependency__('calculateDateDaysInPast');
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

describe('calculateDateMonthsInPast', () => {
  it('should properly calculate months in past', () => {
    expect(calculateDateMonthsInPast(new Date(YEAR, APRIL, 15), 3))
      .to
      .deep
      .equal(new Date(YEAR, JANUARY, 15));
  });
  it('should properly calculate given a string for months', () => {
    expect(calculateDateMonthsInPast(new Date(YEAR, APRIL, 15), '3'))
      .to
      .deep
      .equal(new Date(YEAR, JANUARY, 15));
  });
  it('should throw an error if months is an object', () => {
    expect(() => {
      calculateDateMonthsInPast(new Date(YEAR, JANUARY, 15), {});
    }).to
      .throw();
  });
  it('should throw an error if months is a function', () => {
    expect(() => {
      calculateDateMonthsInPast(
        new Date(YEAR, JANUARY, 15),
        () => console.log('a function')
      );
    }).to
      .throw();
  });
  it('should throw an error if months is null', () => {
    expect(() => {
      calculateDateMonthsInPast(new Date(YEAR, JANUARY, 15), null);
    }).to
      .throw();
  });
  it('should throw an error if months is an array', () => {
    expect(() => {
      calculateDateMonthsInPast(new Date(YEAR, JANUARY, 15), []);
    }).to
      .throw();
  });
  it('should throw an error if months is a boolean', () => {
    expect(() => {
      calculateDateMonthsInPast(new Date(YEAR, JANUARY, 15), true);
    }).to
      .throw();
  });
  it('should throw an error if months is a non-numeric string', () => {
    expect(() => {
      calculateDateMonthsInPast(new Date(YEAR, JANUARY, 15), 'hello');
    }).to
      .throw();
  });
  it('should throw an error if months is letters followed by numbers', () => {
    expect(() => {
      calculateDateMonthsInPast(new Date(YEAR, JANUARY, 15), 'h15');
    }).to
      .throw();
  });
  it('should throw an error if months is numbers followed by letters', () => {
    expect(() => {
      calculateDateMonthsInPast(new Date(YEAR, JANUARY, 15), '15h');
    }).to
      .throw();
  });
  it('should throw an error if date is an object', () => {
    expect(() => {
      calculateDateMonthsInPast({}, 5);
    }).to
      .throw();
  });
  it('should throw an error if date is a function', () => {
    expect(() => {
      calculateDateMonthsInPast(() => console.log('a function'), 5);
    }).to
      .throw();
  });
  it('should throw an error if date is null', () => {
    expect(() => {
      calculateDateMonthsInPast(null, 5);
    }).to
      .throw();
  });
  it('should throw an error if date is an array', () => {
    expect(() => {
      calculateDateMonthsInPast([], 5);
    }).to
      .throw();
  });
  it('should throw an error if date is a boolean', () => {
    expect(() => {
      calculateDateMonthsInPast(true, 5);
    }).to
      .throw();
  });
  it('should throw an error if date is a non-numeric string', () => {
    expect(() => {
      calculateDateMonthsInPast('hello', 5);
    }).to
      .throw();
  });
  it('should throw an error if date is letters followed by numbers', () => {
    expect(() => {
      calculateDateMonthsInPast('h15', 5);
    }).to
      .throw();
  });
  it('should throw an error if date is numbers followed by letters', () => {
    expect(() => {
      calculateDateMonthsInPast('15h', 5);
    }).to
      .throw();
  });
  it('should properly calculate months before first month of year', () => {
    expect(calculateDateMonthsInPast(new Date(YEAR, JANUARY, 5), 1))
      .to
      .deep
      .equal(new Date(PREVIOUS_YEAR, DECEMBER, 5));
  });
  it('should properly calculate into the future for a ' +
  'negative number of months in the past', () => {
    expect(calculateDateMonthsInPast(new Date(YEAR, JANUARY, 10), -3))
      .to
      .deep
      .equal(new Date(YEAR, APRIL, 10));
  });
});
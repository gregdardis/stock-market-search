import { expect } from 'chai';

import { isString } from './typeChecking';

describe('isString', () => {
  it('returns true if given a string', () => {
    expect(isString('hello'))
      .to
      .equal(true);
  });
  it('returns true if given the empty string', () => {
    expect(isString(''))
      .to
      .equal(true);
  });
  it('returns false if given null', () => {
    expect(isString(null))
      .to
      .equal(false);
  });
  it('returns false if given a number', () => {
    expect(isString(3))
      .to
      .equal(false);
  });
  it('returns false if given an object', () => {
    expect(isString({}))
      .to
      .equal(false);
  });
  it('returns false if given an array', () => {
    expect(isString([]))
      .to
      .equal(false);
  });
  it('returns false if given a boolean', () => {
    expect(isString(true))
      .to
      .equal(false);
  });
  it('returns false if given a function', () => {
    expect(isString(() => {}))
      .to
      .equal(false);
  });
});
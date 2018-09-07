import { expect } from 'chai';

import { parseIntExact } from './typeChecking';

describe('parseIntExact', function() {
  it('returns a number if given a number', function() {
    expect(parseIntExact(4))
      .to
      .equal(4);
  });
  it('returns a number if given a negative number', function() {
    expect(parseIntExact(-4))
      .to
      .equal(-4);
  });
  it('returns a number if given 0', function() {
    expect(parseIntExact(0))
      .to
      .equal(0);
  });
  it('returns a number if given a numeric string', function() {
    expect(parseIntExact('4'))
      .to
      .equal(4);
  });
  it('returns null if given letters followed by numbers', function() {
    expect(parseIntExact('hello12'))
      .to
      .equal(null);
  });
  it('returns null if given numbers followed by letters', function() {
    expect(parseIntExact('12hello'))
      .to
      .equal(null);
  });
  it('returns null if given an object', function() {
    expect(parseIntExact({}))
      .to
      .equal(null);
  });
  it('returns null if given an array', function() {
    expect(parseIntExact([]))
      .to
      .equal(null);
  });
  it('returns null if given a boolean', function() {
    expect(parseIntExact(true))
      .to
      .equal(null);
  });
  it('returns null if given a function', function() {
    expect(parseIntExact(() => console.log('a function')))
      .to
      .equal(null);
  });
  it('returns null if given a non-numeric string', function() {
    expect(parseIntExact('hello'))
      .to
      .equal(null);
  });
  it('returns null if given the empty string', function() {
    expect(parseIntExact(''))
      .to
      .equal(null);
  });
});
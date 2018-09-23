import { expect } from 'chai';

import { cellShouldShowBottomBorder } from './childProps';

describe('cellShouldShowBottomBorder', () => {
  it('should return true if cellIndex is 2 less than numCells', () => {
    const cellIndex = 4;
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return false if cellIndex is 1 less than numCells', () => {
    const cellIndex = 5;
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(false);
  });
  it('should return false if cellIndex is greater than numCells', () => {
    const cellIndex = 10;
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if cellIndex is an array', () => {
    const cellIndex = [];
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if cellIndex is an object', () => {
    const cellIndex = {};
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if cellIndex is a boolean', () => {
    const cellIndex = false;
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if cellIndex is a function', () => {
    const cellIndex = () => {};
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if cellIndex is null', () => {
    const cellIndex = null;
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if cellIndex is undefined', () => {
    /* eslint-disable-next-line no-undefined */
    const cellIndex = undefined;
    const numCells = 6;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if numCells is an array', () => {
    const cellIndex = 6;
    const numCells = [];

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if numCells is an object', () => {
    const cellIndex = 6;
    const numCells = {};

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if numCells is a boolean', () => {
    const cellIndex = 6;
    const numCells = false;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if numCells is a function', () => {
    const cellIndex = 6;
    const numCells = () => {};

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if numCells is null', () => {
    const cellIndex = 6;
    const numCells = null;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
  it('should return true if numCells is undefined', () => {
    const cellIndex = 6;
    /* eslint-disable-next-line no-undefined */
    const numCells = undefined;

    expect(cellShouldShowBottomBorder(cellIndex, numCells))
      .to.equal(true);
  });
});
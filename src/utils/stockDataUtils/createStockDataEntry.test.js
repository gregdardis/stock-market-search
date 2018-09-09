import { expect } from 'chai';
import sinon from 'sinon';

import * as typeChecking from '../typeChecking';
import { createStockDataEntry } from './createStockDataEntry';
import { NUMBER_FORMAT_DEFAULT } from '../../constants/formatting';

/* eslint-disable no-undefined */

describe('createStockDataEntry', () => {
  let isStringStub;
  let parseIntExactStub;

  beforeEach(function () {
    isStringStub = sinon.stub(
      typeChecking, 'isString'
    );
    isStringStub.returns(true);
    parseIntExactStub = sinon.stub(
      typeChecking, 'parseIntExact'
    );
    parseIntExactStub.returns(15);
  });

  afterEach(function () {
    isStringStub.restore();
    parseIntExactStub.restore();
  });

  it('creates a data entry given only value', () => {
    expect(createStockDataEntry(15))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry if value is a numeric string', () => {
    expect(createStockDataEntry('15'))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry given value and optionalValue', () => {
    expect(createStockDataEntry(15, { optionalValue: 5 }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: 5,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry if optionalValue is a numeric string', () => {
    expect(createStockDataEntry(15, { optionalValue: '5' }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: 5,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry given value and valueFormat', () => {
    expect(createStockDataEntry(15, { valueFormat: '0.00%' }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: '0.00%',
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('creates a data entry given value and optionalValueFormat', () => {
    expect(createStockDataEntry(15, { optionalValueFormat: '0.00%' }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: '0.00%'
      });
  });
  it('creates correct data entry given value ' +
     'and an option that doesn\'t exist', () => {
    expect(createStockDataEntry(15, { badOption: 'hello' }))
      .to
      .deep
      .equal({
        value: 15,
        optionalValue: undefined,
        valueFormat: NUMBER_FORMAT_DEFAULT,
        optionalValueFormat: NUMBER_FORMAT_DEFAULT
      });
  });
  it('throws an error if value is letters followed by numbers', () => {
    parseIntExactStub.returns(null);
    expect(() => {
      createStockDataEntry('hello15');
    }).to
      .throw();
  });
  it('throws an error if value is numbers followed by letters', () => {
    parseIntExactStub.returns(null);
    expect(() => {
      createStockDataEntry('15hello');
    }).to
      .throw();
  });
  it('throws an error if value is a non-numeric string', () => {
    parseIntExactStub.returns(null);
    expect(() => {
      createStockDataEntry('hello');
    }).to
      .throw();
  });
  it('throws an error if value is an object', () => {
    parseIntExactStub.returns(null);
    expect(() => {
      createStockDataEntry({});
    }).to
      .throw();
  });
  it('throws an error if value is an array', () => {
    parseIntExactStub.returns(null);
    expect(() => {
      createStockDataEntry([]);
    }).to
      .throw();
  });
  it('throws an error if value is a boolean', () => {
    parseIntExactStub.returns(null);
    expect(() => {
      createStockDataEntry(true);
    }).to
      .throw();
  });
  it('throws an error if value is null', () => {
    parseIntExactStub.returns(null);
    expect(() => {
      createStockDataEntry(null);
    }).to
      .throw();
  });
  it('throws an error if value is a function', () => {
    parseIntExactStub.returns(null);
    expect(() => {
      createStockDataEntry(() => {});
    }).to
      .throw();
  });
  it('throws an error if optionalValue is letters followed by numbers', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: 'hello12' });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is numbers followed by letters', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: '12hello' });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is a non-numeric string', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: 'hello' });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is an object', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: {} });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is an array', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: [] });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is a boolean', () => {
    expect(() => {
      createStockDataEntry(15, { optionalValue: true });
    }).to
      .throw();
  });
  it('throws an error if optionalValue is a function', () => {
    expect(() => {
      createStockDataEntry(
        15,
        { optionalValue: () => {} }
      );
    }).to
      .throw();
  });
  it('throws an error if valueFormat is an object', () => {
    isStringStub.returns(false);
    expect(() => {
      createStockDataEntry(15, { valueFormat: {} });
    }).to
      .throw();
  });
  it('throws an error if valueFormat is an array', () => {
    isStringStub.returns(false);
    expect(() => {
      createStockDataEntry(15, { valueFormat: [] });
    }).to
      .throw();
  });
  it('throws an error if valueFormat is a boolean', () => {
    isStringStub.returns(false);
    expect(() => {
      createStockDataEntry(15, { valueFormat: true });
    }).to
      .throw();
  });
  it('throws an error if valueFormat is a function', () => {
    isStringStub.returns(false);
    expect(() => {
      createStockDataEntry(
        15,
        { valueFormat: () => {} }
      );
    }).to
      .throw();
  });
  it('throws an error if optionalValueFormat is an object', () => {
    isStringStub.onCall(1).returns(false);
    expect(() => {
      createStockDataEntry(15, { optionalValueFormat: {} });
    }).to
      .throw();
  });
  it('throws an error if optionalValueFormat is an array', () => {
    isStringStub.onCall(1).returns(false);
    expect(() => {
      createStockDataEntry(15, { optionalValueFormat: [] });
    }).to
      .throw();
  });
  it('throws an error if optionalValueFormat is a boolean', () => {
    isStringStub.onCall(1).returns(false);
    expect(() => {
      createStockDataEntry(15, { optionalValueFormat: true });
    }).to
      .throw();
  });
  it('throws an error if optionalValueFormat is a function', () => {
    isStringStub.onCall(1).returns(false);
    expect(() => {
      createStockDataEntry(
        15,
        { optionalValueFormat: () => {} }
      );
    }).to
      .throw();
  });
});
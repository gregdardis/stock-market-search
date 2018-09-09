import { expect } from 'chai';

import { reducer } from './stock';
import { RECEIVE_STOCK } from '../actions';


/* eslint-disable no-undefined */

describe('stock reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      companyName: '',
      symbol: '',
      exchange: '',
      stockOverviewData: {}
    };
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });
  it('should handle RECEIVE_STOCK', () => {
    // TODO
  });
});
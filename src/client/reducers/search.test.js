import { expect } from 'chai';

import { reducer } from './search';
import {
  CLEAR_SEARCH_ERROR,
  CLEAR_SEARCH_TEXT,
  RECEIVE_SEARCH_ERROR,
  UPDATE_SEARCH_TEXT
} from '../actions';
import { ERROR_MESSAGE_UNEXPECTED } from '../../constants/userFacingStrings';

/* eslint-disable no-undefined */

describe('search reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      currentText: '',
      error: null
    };

    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });
  it('should handle CLEAR_SEARCH_ERROR', () => {
    const currentText = 'ASDF';
    const initialState = {
      currentText,
      error: ERROR_MESSAGE_UNEXPECTED
    };

    expect(
      reducer(
        initialState,
        {
          type: CLEAR_SEARCH_ERROR
        }
      )
    ).to.deep.equal({
      currentText,
      error: null
    });
  });
  it('should handle CLEAR_SEARCH_TEXT', () => {
    const currentText = 'ASDF';
    const initialState = {
      currentText,
      error: null
    };

    expect(
      reducer(
        initialState,
        {
          type: CLEAR_SEARCH_TEXT
        }
      )
    ).to.deep.equal({
      currentText: '',
      error: null
    });
  });
  it('should handle RECEIVE_SEARCH_ERROR', () => {
    const currentText = 'ASDF';
    const initialState = {
      currentText,
      error: null
    };

    expect(
      reducer(
        initialState,
        {
          type: RECEIVE_SEARCH_ERROR,
          errorMessage: ERROR_MESSAGE_UNEXPECTED
        }
      )
    ).to.deep.equal({
      currentText,
      error: ERROR_MESSAGE_UNEXPECTED
    });
  });
  it('should handle UPDATE_SEARCH_TEXT', () => {
    const previousText = 'JW';
    const searchText = 'JWN';
    const currentText = 'JWN';

    const initialState = {
      currentText: previousText,
      error: null
    };

    expect(
      reducer(
        initialState,
        {
          type: UPDATE_SEARCH_TEXT,
          searchText
        }
      )
    ).to.deep.equal({
      currentText,
      error: null
    });
  });
  it('should handle UPDATE_SEARCH_TEXT with lowercase input', () => {
    const previousText = 'JW';
    const searchText = 'JWn';
    const currentText = 'JWN';

    const initialState = {
      currentText: previousText,
      error: null
    };

    expect(
      reducer(
        initialState,
        {
          type: UPDATE_SEARCH_TEXT,
          searchText
        }
      )
    ).to.deep.equal({
      currentText,
      error: null
    });
  });
});